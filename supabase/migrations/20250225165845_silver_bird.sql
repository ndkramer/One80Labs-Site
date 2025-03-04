/*
  # Insert Fractional PM Survey Data

  1. New Data
    - Creates a new survey for Fractional PM assessment
    - Adds 10 questions with various types
    - Adds multiple choice options where applicable
*/

-- Insert the main survey
INSERT INTO surveys (title, description, is_active) VALUES (
  'Fractional Project Management Fit Assessment',
  'This assessment will help determine if your organization could benefit from Fractional Project Management services. Fractional PMs provide experienced project leadership on a part-time or flexible basis, offering a cost-effective solution for growing businesses.',
  true
);

-- Store the survey ID for reference
DO $$
DECLARE
  v_survey_id uuid;
BEGIN
  SELECT id INTO v_survey_id FROM surveys WHERE title = 'Fractional Project Management Fit Assessment' LIMIT 1;

  -- Introduction text
  INSERT INTO questions (survey_id, question_text, question_type, order_number, is_required)
  VALUES (
    v_survey_id,
    '<h2>Welcome to the Fractional Project Management Assessment</h2><p>Fractional Project Management offers flexible, experienced project leadership that scales with your needs. This assessment will help determine if this solution is right for your organization.</p><p>Please answer the following questions honestly to receive the most accurate assessment.</p>',
    'text_only',
    1,
    false
  );

  -- Question 2: Company Size
  INSERT INTO questions (survey_id, question_text, question_type, order_number, is_required)
  VALUES (
    v_survey_id,
    'How many employees are currently in your organization?',
    'multiple_choice',
    2,
    true
  );
  
  WITH q2 AS (
    SELECT id FROM questions 
    WHERE survey_id = v_survey_id AND order_number = 2
  )
  INSERT INTO choices (question_id, choice_text, order_number)
  SELECT id, choice_text, order_number
  FROM q2 CROSS JOIN (
    VALUES 
      ('1-10 employees', 1),
      ('11-50 employees', 2),
      ('51-200 employees', 3),
      ('201-500 employees', 4),
      ('500+ employees', 5)
  ) AS choices(choice_text, order_number);

  -- Question 3: Current PM Situation
  INSERT INTO questions (survey_id, question_text, question_type, order_number, is_required)
  VALUES (
    v_survey_id,
    'How do you currently manage your projects?',
    'multiple_choice',
    3,
    true
  );

  WITH q3 AS (
    SELECT id FROM questions 
    WHERE survey_id = v_survey_id AND order_number = 3
  )
  INSERT INTO choices (question_id, choice_text, order_number)
  SELECT id, choice_text, order_number
  FROM q3 CROSS JOIN (
    VALUES 
      ('No formal project management', 1),
      ('Team members manage their own projects', 2),
      ('Part-time project manager', 3),
      ('Full-time project manager', 4),
      ('Multiple project managers', 5)
  ) AS choices(choice_text, order_number);

  -- Question 4: Project Complexity
  INSERT INTO questions (survey_id, question_text, question_type, order_number, is_required)
  VALUES (
    v_survey_id,
    'How would you rate the complexity of your typical projects?',
    'multiple_choice',
    4,
    true
  );

  WITH q4 AS (
    SELECT id FROM questions 
    WHERE survey_id = v_survey_id AND order_number = 4
  )
  INSERT INTO choices (question_id, choice_text, order_number)
  SELECT id, choice_text, order_number
  FROM q4 CROSS JOIN (
    VALUES 
      ('Simple, straightforward projects', 1),
      ('Moderate complexity with few dependencies', 2),
      ('Complex with multiple stakeholders', 3),
      ('Highly complex with many dependencies', 4),
      ('Enterprise-level complexity', 5)
  ) AS choices(choice_text, order_number);

  -- Question 5: Project Volume
  INSERT INTO questions (survey_id, question_text, question_type, order_number, is_required)
  VALUES (
    v_survey_id,
    'How many significant projects does your organization typically handle simultaneously?',
    'multiple_choice',
    5,
    true
  );

  WITH q5 AS (
    SELECT id FROM questions 
    WHERE survey_id = v_survey_id AND order_number = 5
  )
  INSERT INTO choices (question_id, choice_text, order_number)
  SELECT id, choice_text, order_number
  FROM q5 CROSS JOIN (
    VALUES 
      ('1-2 projects', 1),
      ('3-5 projects', 2),
      ('6-10 projects', 3),
      ('11-20 projects', 4),
      ('20+ projects', 5)
  ) AS choices(choice_text, order_number);

  -- Question 6: Budget Constraints
  INSERT INTO questions (survey_id, question_text, question_type, order_number, is_required)
  VALUES (
    v_survey_id,
    'Would hiring a full-time project manager be challenging for your current budget?',
    'yes_no',
    6,
    true
  );

  -- Question 7: Project Success Rate
  INSERT INTO questions (survey_id, question_text, question_type, order_number, is_required)
  VALUES (
    v_survey_id,
    'What percentage of your projects are currently completed on time and within budget?',
    'multiple_choice',
    7,
    true
  );

  WITH q7 AS (
    SELECT id FROM questions 
    WHERE survey_id = v_survey_id AND order_number = 7
  )
  INSERT INTO choices (question_id, choice_text, order_number)
  SELECT id, choice_text, order_number
  FROM q7 CROSS JOIN (
    VALUES 
      ('Less than 25%', 1),
      ('25-50%', 2),
      ('51-75%', 3),
      ('76-90%', 4),
      ('More than 90%', 5)
  ) AS choices(choice_text, order_number);

  -- Question 8: Growth Plans
  INSERT INTO questions (survey_id, question_text, question_type, order_number, is_required)
  VALUES (
    v_survey_id,
    'Please describe your organization''s growth plans for the next 12-24 months:',
    'short_answer',
    8,
    true
  );

  -- Question 9: Current Challenges
  INSERT INTO questions (survey_id, question_text, question_type, order_number, is_required)
  VALUES (
    v_survey_id,
    'What are your biggest project management challenges? (This helps us understand how a Fractional PM could best assist your organization)',
    'short_answer',
    9,
    true
  );

  -- Question 10: Contact Information
  INSERT INTO questions (survey_id, question_text, question_type, order_number, is_required)
  VALUES (
    v_survey_id,
    'Please provide your contact information to receive a detailed assessment of how Fractional Project Management could benefit your organization:',
    'contact_form',
    10,
    true
  );

END $$;