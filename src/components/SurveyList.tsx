import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Survey } from '../types/survey';

export default function SurveyList() {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSurveys() {
      const { data, error } = await supabase
        .from('surveys')
        .select('*')
        .eq('is_active', true);

      if (error) {
        console.error('Error fetching surveys:', error);
      } else {
        setSurveys(data || []);
      }
      setLoading(false);
    }

    fetchSurveys();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Available Surveys</h2>
        <div className="space-y-4">
          {surveys.map((survey) => (
            <Link
              key={survey.id}
              to={`/survey/${survey.id}`}
              className="block p-4 border rounded-lg hover:border-indigo-500 transition-colors"
            >
              <h3 className="text-lg font-medium text-gray-900">{survey.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{survey.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}