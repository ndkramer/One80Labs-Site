/*
  # Add Database Function for Slack Notifications

  1. Changes
    - Create function to call Edge Function
    - Update notification trigger
*/

-- Create a function to call the Edge Function
CREATE OR REPLACE FUNCTION send_slack_notification(payload jsonb)
RETURNS bool
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  result bool;
BEGIN
  SELECT status = 200 INTO result
  FROM http.post(
    url := current_setting('app.settings.edge_function_url') || '/slack-notification',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := payload
  );
  
  RETURN result;
EXCEPTION
  WHEN OTHERS THEN
    RAISE WARNING 'Failed to send Slack notification: %', SQLERRM;
    RETURN false;
END;
$$;

-- Update the survey completion notification function
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

  -- Send the notification
  PERFORM send_slack_notification(slack_payload);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;