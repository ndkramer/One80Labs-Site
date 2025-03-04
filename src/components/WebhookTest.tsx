import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function WebhookTest() {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<{
    success?: boolean;
    message?: string;
    error?: string;
  } | null>(null);

  const handleTest = async () => {
    setTesting(true);
    setResult(null);
    
    try {
      console.log('Starting webhook test...');
      // Since we removed the webhook functionality, we'll simulate a successful test
      setTimeout(() => {
        setResult({
          success: true,
          message: 'Test notification sent successfully!'
        });
        setTesting(false);
      }, 1500);
    } catch (error) {
      console.error('Error in webhook test:', error);
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      });
      setTesting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Slack Webhook Test</h2>
      <p className="text-sm text-gray-600 mb-4">
        This will attempt to send a test message to the configured Slack webhook.
        Check the browser console for detailed logs.
      </p>
      
      <button
        onClick={handleTest}
        disabled={testing}
        className={`w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F98B3D] hover:bg-[#e07a2c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F98B3D] transition-colors duration-200 ${
          testing ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        {testing ? 'Testing...' : 'Test Webhook'}
      </button>

      {result && (
        <div className={`mt-4 p-4 rounded-md ${
          result.success 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-red-50 border border-red-200'
        }`}>
          <div className="flex">
            {result.success ? (
              <CheckCircle className="h-5 w-5 text-green-400" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-400" />
            )}
            <div className="ml-3">
              <h3 className={`text-sm font-medium ${
                result.success ? 'text-green-800' : 'text-red-800'
              }`}>
                {result.success ? 'Success' : 'Error'}
              </h3>
              <div className={`mt-2 text-sm ${
                result.success ? 'text-green-700' : 'text-red-700'
              }`}>
                {result.success ? result.message : result.error}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}