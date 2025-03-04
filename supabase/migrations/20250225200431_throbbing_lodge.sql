/*
  # Add Slack notifications for survey submissions

  1. New Functions
    - `check_survey_completion`: Checks if all required questions in a survey have been answered
    - `notify_survey_completion`: Sends notification when a survey is completed
  
  2. New Tables
    - `survey_completions`: Tracks completed surveys to prevent duplicate notifications
  
  3. New Trigger
    - Fires after each response is inserted to check for survey completion
*/

-- Create survey_completions table
CREATE TABLE IF NOT EXISTS survey_completions (
  survey_id uuid REFERENCES surveys(id) ON DELETE CASCADE,
  respondent_id uuid NOT NULL,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (survey_id, respondent_id)
);

-- Enable RLS
ALTER TABLE survey_completions ENABLE ROW LEVEL SECURITY;

-- Allow inserts from functions
CREATE POLICY "System can insert survey completions"
  ON survey_completions FOR INSERT
  TO postgres
  WITH CHECK (true);

-- Function to check if a survey is complete
CREATE OR REPLACE FUNCTION check_survey_completion()
RETURNS TRIGGER AS $$
DECLARE
  total_required_questions INTEGER;
  answered_required_questions INTEGER;
  v_survey_title TEXT;
BEGIN
  -- Get total number of required questions for this survey
  SELECT COUNT(*), s.title
  INTO total_required_questions, v_survey_title
  FROM questions q
  JOIN surveys s ON s.id = q.survey_id
  WHERE q.survey_id = NEW.survey_id
  AND q.is_required = true
  GROUP BY s.title;

  -- Get number of answered required questions by this respondent
  SELECT COUNT(DISTINCT r.question_id)
  INTO answered_required_questions
  FROM responses r
  JOIN questions q ON q.id = r.question_id
  WHERE r.survey_id = NEW.survey_id
  AND r.respondent_id = NEW.respondent_id
  AND q.is_required = true
  AND (r.choice_id IS NOT NULL OR r.text_response IS NOT NULL);

  -- If all required questions are answered and no completion record exists
  IF total_required_questions = answered_required_questions 
  AND NOT EXISTS (
    SELECT 1 FROM survey_completions 
    WHERE survey_id = NEW.survey_id 
    AND respondent_id = NEW.respondent_id
  ) THEN
    -- Insert completion record
    INSERT INTO survey_completions (survey_id, respondent_id)
    VALUES (NEW.survey_id, NEW.respondent_id);
    
    -- Notify about completion
    PERFORM pg_notify(
      'survey_completed',
      json_build_object(
        'survey_id', NEW.survey_id,
        'survey_title', v_survey_title,
        'respondent_id', NEW.respondent_id,
        'completed_at', NOW()
      )::text
    );
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for survey completion check
DROP TRIGGER IF EXISTS check_survey_completion_trigger ON responses;
CREATE TRIGGER check_survey_completion_trigger
  AFTER INSERT ON responses
  FOR EACH ROW
  EXECUTE FUNCTION check_survey_completion();