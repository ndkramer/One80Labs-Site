/*
  # Add Slack webhook notification function

  1. Changes
    - Create function to send Slack notifications using pg_notify
    - Update notify_survey_completion to use the notification system

  2. Security
    - Function executes with security definer to ensure webhook access
*/

-- Create function to send Slack notifications via pg_notify
CREATE OR REPLACE FUNCTION send_slack_notification(payload jsonb)
RETURNS bool
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  -- Send notification through pg_notify
  PERFORM pg_notify(
    'slack_notification',
    payload::text
  );
  
  RETURN true;
END;
$$;

-- Update the notify_survey_completion function to use Slack
CREATE OR REPLACE FUNCTION notify_survey_completion()
RETURNS TRIGGER AS $$
DECLARE
  v_survey_title TEXT;
  slack_payload jsonb;
BEGIN
  -- Get the survey title
  SELECT title INTO v_survey_title
  FROM surveys
  WHERE id = NEW.survey_id;

  -- Construct Slack message payload
  slack_payload := jsonb_build_object(
    'blocks', jsonb_build_array(
      jsonb_build_object(
        'type', 'header',
        'text', jsonb_build_object(
          'type', 'plain_text',
          'text', '🎉 Survey Completed!',
          'emoji', true
        )
      ),
      jsonb_build_object(
        'type', 'section',
        'fields', jsonb_build_array(
          jsonb_build_object(
            'type', 'mrkdwn',
            'text', format('*Survey:*\n%s', v_survey_title)
          ),
          jsonb_build_object(
            'type', 'mrkdwn',
            'text', format('*Completed At:*\n%s', NEW.created_at)
          )
        )
      ),
      jsonb_build_object(
        'type', 'context',
        'elements', jsonb_build_array(
          jsonb_build_object(
            'type', 'mrkdwn',
            'text', format('Respondent ID: %s', NEW.respondent_id)
          )
        )
      )
    )
  );

  -- Send the Slack notification
  PERFORM send_slack_notification(slack_payload);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;