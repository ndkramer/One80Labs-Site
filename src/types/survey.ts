export type QuestionType = 'multiple_choice' | 'yes_no' | 'contact_form' | 'short_answer' | 'text_only';
export type DisplayMode = 'form' | 'slide';

export interface Survey {
  id: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  is_active: boolean;
}

export interface Question {
  id: string;
  survey_id: string;
  question_text: string;
  question_type: QuestionType;
  order_number: number;
  is_required: boolean;
  created_at: string;
  updated_at: string;
}

export interface Choice {
  id: string;
  question_id: string;
  choice_text: string;
  order_number: number;
}

export interface Response {
  id: string;
  survey_id: string;
  question_id: string;
  respondent_id: string;
  choice_id?: string;
  text_response?: string;
  created_at: string;
  view_mode?: DisplayMode;
}