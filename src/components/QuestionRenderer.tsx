import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useSurveyStore } from '../store/surveyStore';
import type { Question } from '../types/survey';

interface QuestionRendererProps {
  question: Question;
}

export default function QuestionRenderer({ question }: QuestionRendererProps) {
  const { choices, submitResponse, responses } = useSurveyStore();
  const questionChoices = choices.filter((c) => c.question_id === question.id);
  const submitTimeoutRef = useRef<NodeJS.Timeout>();
  
  // Find existing response for this question
  const existingResponse = responses.find(r => r.question_id === question.id);
  const [response, setResponse] = useState<string>(
    existingResponse?.choice_id || 
    existingResponse?.text_response || 
    ''
  );
  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [websiteError, setWebsiteError] = useState<string>('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasPhoneInteracted, setHasPhoneInteracted] = useState(false);
  const [hasWebsiteInteracted, setHasWebsiteInteracted] = useState(false);

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
      }
    };
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 10;
  };

  const validateWebsite = (website: string): boolean => {
    if (!website) return true; // Optional field
    const urlPattern = /^(?:(?:https?:\/\/)?(?:www\.)?)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?$/;
    return urlPattern.test(website);
  };

  // Debounced submit handler for text inputs
  const debouncedSubmit = useCallback((value: string) => {
    if (submitTimeoutRef.current) {
      clearTimeout(submitTimeoutRef.current);
    }
    
    submitTimeoutRef.current = setTimeout(() => {
      submitResponse({
        survey_id: question.survey_id,
        question_id: question.id,
        text_response: question.question_type === 'multiple_choice' ? undefined : value,
        choice_id: question.question_type === 'multiple_choice' ? value : undefined,
      });
    }, 500);
  }, [question, submitResponse]);

  // Immediate submit handler for radio buttons
  const handleResponseChange = useCallback((value: string) => {
    setResponse(value);
    if (value) {
      if (question.question_type === 'multiple_choice') {
        submitResponse({
          survey_id: question.survey_id,
          question_id: question.id,
          text_response: undefined,
          choice_id: value,
        });
      } else if (question.question_type === 'yes_no') {
        submitResponse({
          survey_id: question.survey_id,
          question_id: question.id,
          text_response: value,
          choice_id: undefined,
        });
      } else {
        debouncedSubmit(value);
      }
    }
  }, [question, submitResponse, debouncedSubmit]);

  if (question.question_type === 'text_only') {
    return (
      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: question.question_text }} />
      </div>
    );
  }

  const handleContactFormChange = (field: string, value: string) => {
    const currentData = response ? JSON.parse(response) : {};
    const newData = { ...currentData, [field]: value };

    // Only validate name and email as required fields
    if (field === 'name' && !value.trim()) {
      newData.nameError = 'Name is required';
    } else {
      delete newData.nameError;
    }

    if (field === 'email' && hasInteracted) {
      if (!value.trim()) {
        setEmailError('Email is required');
      } else if (!validateEmail(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }

    // Optional field validation
    if (field === 'phone' && hasPhoneInteracted && value) {
      if (!validatePhone(value)) {
        setPhoneError('Please enter a valid phone number');
      } else {
        setPhoneError('');
      }
    }

    if (field === 'website' && hasWebsiteInteracted && value) {
      if (!validateWebsite(value)) {
        setWebsiteError('Please enter a valid website address');
      } else {
        setWebsiteError('');
      }
    }

    const newDataString = JSON.stringify(newData);
    setResponse(newDataString);
    debouncedSubmit(newDataString);
  };

  const handleEmailBlur = (value: string) => {
    setHasInteracted(true);
    if (!value.trim()) {
      setEmailError('Email is required');
    } else if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneBlur = (value: string) => {
    setHasPhoneInteracted(true);
    if (value && !validatePhone(value)) {
      setPhoneError('Please enter a valid phone number');
    } else {
      setPhoneError('');
    }
  };

  const handleWebsiteBlur = (value: string) => {
    setHasWebsiteInteracted(true);
    if (value && !validateWebsite(value)) {
      setWebsiteError('Please enter a valid website address');
    } else {
      setWebsiteError('');
    }
  };

  switch (question.question_type) {
    case 'multiple_choice':
      return (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            {question.question_text}
            {!question.is_required && <span className="text-gray-500 ml-1">(Optional)</span>}
          </label>
          <div className="space-y-2">
            {questionChoices.map((choice) => (
              <div key={choice.id} className="flex items-center">
                <input
                  type="radio"
                  name={question.id}
                  value={choice.id}
                  checked={response === choice.id}
                  onChange={(e) => handleResponseChange(e.target.value)}
                  className="h-4 w-4 text-[#F98B3D] focus:ring-[#F98B3D] cursor-pointer"
                />
                <label className={`ml-3 text-sm ${response === choice.id ? 'text-[#F98B3D] font-medium' : 'text-gray-700'} cursor-pointer`}>
                  {choice.choice_text}
                </label>
              </div>
            ))}
          </div>
        </div>
      );

    case 'yes_no':
      return (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            {question.question_text}
            {!question.is_required && <span className="text-gray-500 ml-1">(Optional)</span>}
          </label>
          <div className="space-x-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name={question.id}
                value="yes"
                checked={response === 'yes'}
                onChange={(e) => handleResponseChange(e.target.value)}
                className="h-4 w-4 text-[#F98B3D] focus:ring-[#F98B3D]"
              />
              <span className={`ml-2 ${response === 'yes' ? 'text-[#F98B3D] font-medium' : 'text-gray-700'}`}>Yes</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name={question.id}
                value="no"
                checked={response === 'no'}
                onChange={(e) => handleResponseChange(e.target.value)}
                className="h-4 w-4 text-[#F98B3D] focus:ring-[#F98B3D]"
              />
              <span className={`ml-2 ${response === 'no' ? 'text-[#F98B3D] font-medium' : 'text-gray-700'}`}>No</span>
            </label>
          </div>
        </div>
      );

    case 'short_answer':
      return (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            {question.question_text}
            {!question.is_required && <span className="text-gray-500 ml-1">(Optional)</span>}
          </label>
          <textarea
            rows={3}
            className="shadow-sm block w-full rounded-md border-2 border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-[#F98B3D] focus:ring-[#F98B3D] focus:ring-2 focus:ring-offset-2 focus:outline-none transition duration-200"
            value={response}
            onChange={(e) => {
              setResponse(e.target.value);
              debouncedSubmit(e.target.value);
            }}
            placeholder="Type your answer here..."
          />
        </div>
      );

    case 'contact_form':
      const contactData = response ? JSON.parse(response) : { name: '', email: '', phone: '', website: '' };
      return (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            {question.question_text}
          </label>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <input
                type="text"
                placeholder="Name *"
                value={contactData.name || ''}
                onChange={(e) => handleContactFormChange('name', e.target.value)}
                className={`shadow-sm block w-full rounded-md border-2 ${contactData.nameError ? 'border-red-300' : 'border-gray-300'} bg-gray-50 px-4 py-3 text-gray-900 focus:border-[#F98B3D] focus:ring-[#F98B3D] focus:ring-2 focus:ring-offset-2 focus:outline-none transition duration-200`}
                required
              />
              {contactData.nameError && (
                <p className="mt-1 text-sm text-red-600">{contactData.nameError}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email *"
                value={contactData.email || ''}
                onChange={(e) => handleContactFormChange('email', e.target.value)}
                onBlur={(e) => handleEmailBlur(e.target.value)}
                className={`shadow-sm block w-full rounded-md border-2 ${emailError && hasInteracted ? 'border-red-300' : 'border-gray-300'} bg-gray-50 px-4 py-3 text-gray-900 focus:border-[#F98B3D] focus:ring-[#F98B3D] focus:ring-2 focus:ring-offset-2 focus:outline-none transition duration-200`}
                required
              />
              {emailError && hasInteracted && (
                <p className="mt-1 text-sm text-red-600">{emailError}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={contactData.phone || ''}
                onChange={(e) => handleContactFormChange('phone', e.target.value)}
                onBlur={(e) => handlePhoneBlur(e.target.value)}
                className={`shadow-sm block w-full rounded-md border-2 ${phoneError && hasPhoneInteracted ? 'border-red-300' : 'border-gray-300'} bg-gray-50 px-4 py-3 text-gray-900 focus:border-[#F98B3D] focus:ring-[#F98B3D] focus:ring-2 focus:ring-offset-2 focus:outline-none transition duration-200`}
              />
              {phoneError && hasPhoneInteracted && (
                <p className="mt-1 text-sm text-red-600">{phoneError}</p>
              )}
            </div>
            <div>
              <input
                type="url"
                placeholder="Website (optional)"
                value={contactData.website || ''}
                onChange={(e) => handleContactFormChange('website', e.target.value)}
                onBlur={(e) => handleWebsiteBlur(e.target.value)}
                className={`shadow-sm block w-full rounded-md border-2 ${websiteError && hasWebsiteInteracted ? 'border-red-300' : 'border-gray-300'} bg-gray-50 px-4 py-3 text-gray-900 focus:border-[#F98B3D] focus:ring-[#F98B3D] focus:ring-2 focus:ring-offset-2 focus:outline-none transition duration-200`}
              />
              {websiteError && hasWebsiteInteracted && (
                <p className="mt-1 text-sm text-red-600">{websiteError}</p>
              )}
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}