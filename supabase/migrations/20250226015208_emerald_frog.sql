/*
  # Add webhook configuration
  
  1. Changes
    - Insert Slack webhook configuration
    - Update webhook configs policies
*/

-- Allow anonymous access to webhook configs
DROP POLICY IF EXISTS "Authenticated users can read webhook configs" ON webhook_configs;

CREATE POLICY "Anyone can read webhook configs"
  ON webhook_configs
  FOR SELECT
  TO anon
  USING (true);

-- Insert or update Slack webhook config
INSERT INTO webhook_configs (service_name, webhook_url)
VALUES (
  'slack',
  'https://hooks.slack.com/services/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'
)
ON CONFLICT (service_name) 
DO UPDATE SET 
  webhook_url = EXCLUDED.webhook_url,
  updated_at = now();