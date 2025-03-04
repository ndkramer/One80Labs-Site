/*
  # Add Slack webhook configuration table

  1. Changes
    - Create table for storing webhook configurations
    - Insert Slack webhook URL
    - Add RLS policies for security

  2. Security
    - Only authenticated users can read webhook configs
    - No direct modification of webhook URLs through RLS
*/

-- Create webhook_configs table
CREATE TABLE IF NOT EXISTS webhook_configs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_name text NOT NULL UNIQUE,
  webhook_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE webhook_configs ENABLE ROW LEVEL SECURITY;

-- Create policy for reading webhook configs
CREATE POLICY "Authenticated users can read webhook configs"
  ON webhook_configs
  FOR SELECT
  TO authenticated
  USING (true);

-- Insert Slack webhook URL
INSERT INTO webhook_configs (service_name, webhook_url)
VALUES (
  'slack',
  'https://hooks.slack.com/services/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'
) ON CONFLICT (service_name) DO UPDATE
SET webhook_url = EXCLUDED.webhook_url,
    updated_at = now();