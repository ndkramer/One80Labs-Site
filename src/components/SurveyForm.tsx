import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Layout, Layers } from 'lucide-react';
import { useSurveyStore } from '../store/surveyStore';
import QuestionRenderer from './QuestionRenderer';
import { sendSlackNotification } from '../lib/supabase';
import type { DisplayMode } from '../types/survey';

export default function SurveyForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { 
    currentSurvey, 
    questions, 
    loading, 
    error, 
    fetchSurvey, 
    responses, 
    respondentId, 
    viewMode, 
    setViewMode 
  } = useSurveyStore();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchSurvey(id);
    }
  }, [id, fetchSurvey]);

  const handleSubmit = async () => {
    if (!id || !currentSurvey || isSubmitting) return;

    try {
      setIsSubmitting(true);
      setSubmitError(null);

      // Find the contact form question
      const contactFormQuestion = questions.find(q => q.question_type === 'contact_form');
      if (!contactFormQuestion) {
        setSubmitError('Contact form not found');
        return;
      }

      // Get the contact form response
      const contactResponse = responses.find(r => r.question_id === contactFormQuestion.id);
      if (!contactResponse?.text_response) {
        setSubmitError('Please fill out the contact form');
        return;
      }

      // Parse the contact form data
      const contactData = JSON.parse(contactResponse.text_response);
      
      // Check required fields
      if (!contactData.name || !contactData.name.trim()) {
        setSubmitError('Name is required');
        return;
      }

      if (!contactData.email || !contactData.email.trim()) {
        setSubmitError('Email is required');
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactData.email)) {
        setSubmitError('Please enter a valid email address');
        return;
      }

      // Log contact information for reference
      console.log('Survey submitted with contact info:', contactData);
      console.log('Survey view mode used:', viewMode);

      // Send notification - errors are handled internally
      sendSlackNotification(id, respondentId, contactData);

      // Navigate to thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting survey:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F98B3D]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!currentSurvey) {
    return (
      <div className="bg-yellow-50 p-4 rounded-md">
        <p className="text-yellow-700">Survey not found</p>
      </div>
    );
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(questions.length - 1, prev + 1));
  };

  const handleViewModeChange = (mode: DisplayMode) => {
    setViewMode(mode);
    console.log(`View mode changed to: ${mode}`);
  };

  // Override the is_required flag for questions
  const modifiedQuestions = questions.map(question => ({
    ...question,
    is_required: question.question_type === 'contact_form'
  }));

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">{currentSurvey.title}</h1>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleViewModeChange('form')}
            className={`inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium ${
              viewMode === 'form'
                ? 'bg-[#F98B3D] text-white border-[#F98B3D]'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Layers className="h-4 w-4 mr-2" />
            Form View
          </button>
          <button
            onClick={() => handleViewModeChange('slide')}
            className={`inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium ${
              viewMode === 'slide'
                ? 'bg-[#F98B3D] text-white border-[#F98B3D]'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Layout className="h-4 w-4 mr-2" />
            Slide View
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        {submitError && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
            <p className="text-red-700">{submitError}</p>
          </div>
        )}
        
        {viewMode === 'form' ? (
          <div className="px-4 py-5 sm:p-6">
            <p className="text-gray-600 mb-8">{currentSurvey.description}</p>
            <div className="space-y-8">
              {modifiedQuestions.map((question) => (
                <QuestionRenderer key={question.id} question={question} />
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#F98B3D] hover:bg-[#e07a2c] transition-colors duration-200 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Survey'}
              </button>
            </div>
          </div>
        ) : (
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-500">
                Question {currentSlide + 1} of {modifiedQuestions.length}
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevSlide}
                  disabled={currentSlide === 0}
                  className={`inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium ${
                    currentSlide === 0
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </button>
                <button
                  onClick={handleNextSlide}
                  disabled={currentSlide === modifiedQuestions.length - 1}
                  className={`inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium ${
                    currentSlide === modifiedQuestions.length - 1
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
            <div className="min-h-[400px] flex flex-col">
              {modifiedQuestions[currentSlide] && (
                <QuestionRenderer question={modifiedQuestions[currentSlide]} />
              )}
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-[#F98B3D] h-1 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentSlide + 1) / modifiedQuestions.length) * 100}%`,
                }}
              ></div>
            </div>
            {currentSlide === modifiedQuestions.length - 1 && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#F98B3D] hover:bg-[#e07a2c] transition-colors duration-200 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Survey'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}