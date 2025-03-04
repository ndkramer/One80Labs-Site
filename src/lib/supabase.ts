import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const slackWebhookUrl = import.meta.env.VITE_SLACK_WEBHOOK_URL;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to validate and format webhook URL
const getValidWebhookUrl = (url: string | undefined): string | null => {
  if (!url || url.trim() === '') {
    console.warn('Slack webhook URL is empty or not configured');
    return null;
  }

  try {
    // If URL already has http/https, use it directly
    if (url.startsWith('http://') || url.startsWith('https://')) {
      new URL(url); // Validate it's a proper URL
      return url;
    }
    
    // Try with https prefix
    const httpsUrl = `https://${url}`;
    new URL(httpsUrl);
    return httpsUrl;
  } catch (error) {
    console.error('Invalid webhook URL format:', error);
    return null;
  }
};

export const sendSlackNotification = async (surveyId: string, respondentId: string, contactInfo?: any) => {
  try {
    // Get survey details
    const { data: survey, error: surveyError } = await supabase
      .from('surveys')
      .select('title')
      .eq('id', surveyId)
      .single();

    if (surveyError) {
      console.warn('Error fetching survey:', surveyError);
      return true; // Return true to avoid showing errors to users
    }

    if (!survey) {
      console.warn('Survey not found:', surveyId);
      return true; // Return true to avoid showing errors to users
    }

    // Get view mode information
    const { data: viewModeData } = await supabase
      .from('responses')
      .select('view_mode')
      .eq('respondent_id', respondentId)
      .eq('survey_id', surveyId)
      .limit(1);

    const viewMode = viewModeData && viewModeData.length > 0 ? viewModeData[0].view_mode : 'unknown';

    console.log('Survey completed notification:', { 
      surveyId, 
      surveyTitle: survey.title, 
      respondentId, 
      viewMode,
      contactInfo: contactInfo ? 'Available' : 'Not provided' 
    });

    // Since we've removed the webhook functionality, we'll just log the information
    console.log('Contact Information:', contactInfo);
    
    return true;
  } catch (error) {
    // Log the error but don't propagate it to the user
    console.warn('Error in sendSlackNotification (non-critical):', error);
    return true; // Return true to avoid showing errors to users
  }
};

// Function to get the first active survey (for direct linking)
export const getFirstActiveSurvey = async () => {
  try {
    const { data, error } = await supabase
      .from('surveys')
      .select('id')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1);
    
    if (error) {
      console.error('Error fetching active survey:', error);
      return null;
    }
    
    return data && data.length > 0 ? data[0].id : null;
  } catch (error) {
    console.error('Error in getFirstActiveSurvey:', error);
    return null;
  }
};