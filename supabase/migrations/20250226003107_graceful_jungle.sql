/*
  # Add test trigger for debugging

  1. Changes
    - Add function to test webhook trigger
    - Add trigger to test table
*/

-- Create a test table
CREATE TABLE IF NOT EXISTS webhook_tests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE webhook_tests ENABLE ROW LEVEL SECURITY;

-- Allow inserts
CREATE POLICY "Allow inserts for testing"
  ON webhook_tests
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create a function to send test notifications
CREATE OR REPLACE FUNCTION test_webhook_notification()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM pg_notify(
    'survey_completed',
    json_build_object(
      'type', 'INSERT',
      'table', 'survey_completions',
      'schema', 'public',
      'record', json_build_object(
        'survey_id', gen_random_uuid(),
        'survey_title', 'Test Survey',
        'respondent_id', gen_random_uuid(),
        'completed_at', now()
      )
    )::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for test notifications
CREATE TRIGGER webhook_test_notify
  AFTER INSERT ON webhook_tests
  FOR EACH ROW
  EXECUTE FUNCTION test_webhook_notification();