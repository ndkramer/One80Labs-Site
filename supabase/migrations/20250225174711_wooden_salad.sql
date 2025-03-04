/*
  # Remove foreign key constraint from responses table
  
  1. Changes
    - Remove the foreign key constraint on respondent_id in the responses table
    - This allows any UUID to be used as respondent_id without requiring auth
  
  2. Security
    - Maintains existing RLS policies
    - Keeps anonymous response submission enabled
*/

-- Drop the foreign key constraint if it exists
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.table_constraints
    WHERE constraint_name = 'responses_respondent_id_fkey'
    AND table_name = 'responses'
  ) THEN
    ALTER TABLE responses DROP CONSTRAINT responses_respondent_id_fkey;
  END IF;
END $$;