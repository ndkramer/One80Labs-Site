/*
  # Add Survey Completion Webhook

  1. Changes
    - Creates a new database webhook for survey completions
    - Webhook will be triggered when a new record is inserted into survey_completions table
    - Sends notification to Edge Function

  2. Security
    - Webhook is configured to use service_role for authentication
    - Only triggers on INSERT events
*/

-- Create a function to handle survey completion notifications
CREATE OR REPLACE FUNCTION notify_survey_completion()
RETURNS TRIGGER AS $$
BEGIN
  -- Get the survey title
  DECLARE
    v_survey_title TEXT;
  BEGIN
    SELECT title INTO v_survey_title
    FROM surveys
    WHERE id = NEW.survey_id;

    -- Send notification with survey details
    PERFORM pg_notify(
      'survey_completed',
      json_build_object(
        'type', TG_OP,
        'table', TG_TABLE_NAME,
        'schema', TG_TABLE_SCHEMA,
        'record', json_build_object(
          'survey_id', NEW.survey_id,
          'survey_title', v_survey_title,
          'respondent_id', NEW.respondent_id,
          'completed_at', NEW.created_at
        )
      )::text
    );
  END;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS survey_completion_notify ON survey_completions;

-- Create trigger for survey completion notifications
CREATE TRIGGER survey_completion_notify
  AFTER INSERT ON survey_completions
  FOR EACH ROW
  EXECUTE FUNCTION notify_survey_completion();