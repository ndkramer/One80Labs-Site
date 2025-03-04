import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import type { Survey, Question, Choice, Response, DisplayMode } from '../types/survey';

interface SurveyState {
  currentSurvey: Survey | null;
  questions: Question[];
  choices: Choice[];
  responses: Response[];
  respondentId: string;
  viewMode: DisplayMode;
  loading: boolean;
  error: string | null;
  fetchSurvey: (surveyId: string) => Promise<void>;
  submitResponse: (response: Omit<Response, 'id' | 'created_at' | 'respondent_id' | 'view_mode'>) => Promise<void>;
  setViewMode: (mode: DisplayMode) => void;
}

export const useSurveyStore = create<SurveyState>((set, get) => ({
  currentSurvey: null,
  questions: [],
  choices: [],
  responses: [],
  respondentId: crypto.randomUUID(), // Generate a unique ID when store is created
  viewMode: 'form', // Default view mode
  loading: false,
  error: null,

  fetchSurvey: async (surveyId: string) => {
    set({ loading: true, error: null });
    try {
      const { data: survey, error: surveyError } = await supabase
        .from('surveys')
        .select('*')
        .eq('id', surveyId)
        .single();

      if (surveyError) throw surveyError;

      const { data: questions, error: questionsError } = await supabase
        .from('questions')
        .select('*')
        .eq('survey_id', surveyId)
        .order('order_number');

      if (questionsError) throw questionsError;

      const questionIds = questions?.map(q => q.id) || [];

      const { data: choices, error: choicesError } = await supabase
        .from('choices')
        .select('*')
        .in('question_id', questionIds)
        .order('order_number');

      if (choicesError) throw choicesError;

      set({
        currentSurvey: survey,
        questions: questions || [],
        choices: choices || [],
        loading: false,
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  submitResponse: async (response) => {
    try {
      const state = get();
      const respondentId = state.respondentId;
      const viewMode = state.viewMode;
      
      // Create the complete response object
      const completeResponse = {
        ...response,
        respondent_id: respondentId,
        view_mode: viewMode,
        id: crypto.randomUUID(),
        created_at: new Date().toISOString()
      };

      // Insert into Supabase
      const { error } = await supabase.from('responses').insert([{
        survey_id: response.survey_id,
        question_id: response.question_id,
        respondent_id: respondentId,
        choice_id: response.choice_id,
        text_response: response.text_response,
        view_mode: viewMode
      }]);
      
      if (error) throw error;
      
      // Update local state
      set((state) => ({
        responses: [
          ...state.responses.filter(r => r.question_id !== response.question_id),
          completeResponse as Response
        ]
      }));
    } catch (error) {
      console.error('Error submitting response:', error);
      throw error;
    }
  },

  setViewMode: (mode: DisplayMode) => {
    set({ viewMode: mode });
  }
}));