-- Drop existing policy
DROP POLICY IF EXISTS "Allow inserts for testing" ON webhook_tests;

-- Create new policy allowing anonymous access
CREATE POLICY "Allow anonymous inserts for testing"
  ON webhook_tests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy for reading test results
CREATE POLICY "Allow anonymous reads for testing"
  ON webhook_tests
  FOR SELECT
  TO anon
  USING (true);