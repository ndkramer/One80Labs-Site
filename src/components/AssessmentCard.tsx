import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, ArrowRight, Loader } from 'lucide-react';
import { getFirstActiveSurvey } from '../lib/supabase';

export default function AssessmentCard() {
  const [surveyId, setSurveyId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurveyId = async () => {
      try {
        setLoading(true);
        const id = await getFirstActiveSurvey();
        setSurveyId(id);
      } catch (error) {
        console.error('Error fetching survey ID:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSurveyId();
  }, []);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center p-5">
        <div className="bg-black rounded-full p-3 mr-4 flex-shrink-0">
          <CheckSquare className="h-5 w-5 text-white" />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900">
            Is Your Business Ready for a Fractional PM?
          </h3>
          <p className="text-sm text-gray-600">
            Take our quick assessment to find out
          </p>
        </div>
        {loading ? (
          <div className="flex-shrink-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400">
            <Loader className="h-4 w-4 animate-spin" />
          </div>
        ) : surveyId ? (
          <a 
            href={`/survey/${surveyId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors duration-200"
          >
            Start
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        ) : (
          <a 
            href="/survey"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors duration-200"
          >
            Start
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}