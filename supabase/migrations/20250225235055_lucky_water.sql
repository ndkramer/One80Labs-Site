/*
  # Fix RLS policies for survey completions

  1. Changes
    - Update RLS policies to allow trigger function to insert completions
    - Add policy for public access to survey completions
  
  2. Security
    - Enable RLS on survey_completions table
    - Allow trigger function to insert completions
    - Allow public read access to completions
*/

-- Drop existing policies
DROP POLICY IF EXISTS "System can insert survey completions" ON survey_completions;

-- Update RLS policies for survey_completions
CREATE POLICY "Enable insert for trigger function"
  ON survey_completions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable read access for survey completions"
  ON survey_completions
  FOR SELECT
  USING (true);

-- Ensure RLS is enabled
ALTER TABLE survey_completions ENABLE ROW LEVEL SECURITY;