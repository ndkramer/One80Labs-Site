/*
  # Add view mode tracking to responses

  1. Changes
    - Add `view_mode` column to `responses` table to track which view mode was used
    - Update RLS policies to ensure the new column is accessible
  
  2. Security
    - Maintain existing RLS policies
*/

-- Add view_mode column to responses table
ALTER TABLE IF EXISTS responses 
ADD COLUMN IF NOT EXISTS view_mode text DEFAULT 'form';

-- Create an index for better query performance
CREATE INDEX IF NOT EXISTS idx_responses_view_mode ON responses(view_mode);

-- Ensure RLS policies are still in place
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'responses' AND policyname = 'Anyone can insert responses'
  ) THEN
    CREATE POLICY "Anyone can insert responses"
      ON responses FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;