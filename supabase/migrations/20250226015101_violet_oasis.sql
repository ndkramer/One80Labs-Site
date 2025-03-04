/*
  # Update webhook notification system
  
  1. Changes
    - Create a simpler webhook notification system
    - Update trigger function to use direct HTTP call
*/

-- Create a function to send webhook notifications
CREATE OR REPLACE FUNCTION send_webhook_notification(payload jsonb)
RETURNS bool
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  webhook_url text;
BEGIN
  -- Get webhook URL from configs
  SELECT wc.webhook_url INTO webhook_url
  FROM webhook_configs wc
  WHERE service_name = 'slack'
  LIMIT 1;

  -- Send notification
  PERFORM pg_notify('webhook_notification', json_build_object(
    'url', webhook_url,
    'payload', payload
  )::text);
  
  RETURN true;
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
  PERFORM send_webhook_notification(slack_payload);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;