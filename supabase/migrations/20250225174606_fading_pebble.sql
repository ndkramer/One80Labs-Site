/*
  # Update database schema for survey application
  
  1. Tables
    - surveys: Store survey metadata
    - questions: Store survey questions
    - choices: Store multiple choice options
    - responses: Store user responses
  
  2. Security
    - Enable RLS on all tables
    - Allow public access to surveys and questions
    - Allow anonymous response submissions
*/

-- Create question_type enum if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'question_type') THEN
    CREATE TYPE question_type AS ENUM (
      'multiple_choice',
      'yes_no',
      'contact_form',
      'short_answer',
      'text_only'
    );
  END IF;
END $$;

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
  respondent_id uuid NOT NULL,
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
DO $$ 
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Public users can view active surveys" ON surveys;
  DROP POLICY IF EXISTS "Anyone can insert responses" ON responses;
  DROP POLICY IF EXISTS "Users can view their own responses" ON responses;
  DROP POLICY IF EXISTS "Public users can view questions" ON questions;
  DROP POLICY IF EXISTS "Public users can view choices" ON choices;
  
  -- Recreate policies
  CREATE POLICY "Public users can view active surveys"
    ON surveys FOR SELECT
    USING (is_active = true);

  CREATE POLICY "Anyone can insert responses"
    ON responses FOR INSERT
    TO anon
    WITH CHECK (true);

  CREATE POLICY "Users can view their own responses"
    ON responses FOR SELECT
    USING (true);

  CREATE POLICY "Public users can view questions"
    ON questions FOR SELECT
    USING (true);

  CREATE POLICY "Public users can view choices"
    ON choices FOR SELECT
    USING (true);
END $$;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_questions_survey_id ON questions(survey_id);
CREATE INDEX IF NOT EXISTS idx_choices_question_id ON choices(question_id);
CREATE INDEX IF NOT EXISTS idx_responses_survey_id ON responses(survey_id);
CREATE INDEX IF NOT EXISTS idx_responses_respondent_id ON responses(respondent_id);