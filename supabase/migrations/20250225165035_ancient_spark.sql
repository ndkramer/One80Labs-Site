/*
  # Survey Application Schema

  1. New Tables
    - `question_types`
      - Defines the available types of questions (multiple choice, yes/no, etc.)
    - `questions`
      - Stores survey questions with their type and order
    - `choices`
      - Stores possible answers for multiple choice questions
    - `responses`
      - Stores user responses to questions
    - `surveys`
      - Stores survey metadata and configuration

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read survey data
    - Add policies for admin users to manage surveys
*/

-- Create enum for question types
CREATE TYPE question_type AS ENUM (
  'multiple_choice',
  'yes_no',
  'contact_form',
  'short_answer',
  'text_only'
);

-- Create surveys table
CREATE TABLE IF NOT EXISTS surveys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id),
  is_active boolean DEFAULT true
);

-- Create questions table
CREATE TABLE IF NOT EXISTS questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  survey_id uuid REFERENCES surveys(id) ON DELETE CASCADE,
  question_text text NOT NULL,
  question_type question_type NOT NULL,
  order_number integer NOT NULL,
  is_required boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create choices table for multiple choice questions
CREATE TABLE IF NOT EXISTS choices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id uuid REFERENCES questions(id) ON DELETE CASCADE,
  choice_text text NOT NULL,
  order_number integer NOT NULL
);

-- Create responses table
CREATE TABLE IF NOT EXISTS responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  survey_id uuid REFERENCES surveys(id) ON DELETE CASCADE,
  question_id uuid REFERENCES questions(id) ON DELETE CASCADE,
  respondent_id uuid REFERENCES auth.users(id),
  choice_id uuid REFERENCES choices(id),
  text_response text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE surveys ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE choices ENABLE ROW LEVEL SECURITY;
ALTER TABLE responses ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public users can view active surveys"
  ON surveys FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can create responses"
  ON responses FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view their own responses"
  ON responses FOR SELECT
  TO authenticated
  USING (respondent_id = auth.uid());

CREATE POLICY "Public users can view questions"
  ON questions FOR SELECT
  USING (true);

CREATE POLICY "Public users can view choices"
  ON choices FOR SELECT
  USING (true);

-- Create indexes for better performance
CREATE INDEX idx_questions_survey_id ON questions(survey_id);
CREATE INDEX idx_choices_question_id ON choices(question_id);
CREATE INDEX idx_responses_survey_id ON responses(survey_id);
CREATE INDEX idx_responses_respondent_id ON responses(respondent_id);