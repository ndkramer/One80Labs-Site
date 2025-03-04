import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <CheckCircle className="w-16 h-16 text-[#F98B3D] mb-6" />
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Response!</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Your feedback is valuable to us. We appreciate you taking the time to complete this survey.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/survey"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#F98B3D] hover:bg-[#e07a2c] transition-colors duration-200"
        >
          Return to Surveys
        </Link>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
        >
          <Home className="h-5 w-5 mr-2" />
          Back to Lab
        </Link>
      </div>
    </div>
  );
}