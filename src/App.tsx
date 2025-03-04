import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ClipboardList, Home } from 'lucide-react';
import SurveyList from './components/SurveyList';
import SurveyForm from './components/SurveyForm';
import ThankYou from './components/ThankYou';
import WebhookTest from './components/WebhookTest';
import LandingPage from './components/LandingPage';
import CourseOutline from './components/CourseOutline';
import FractionalPMPage from './components/FractionalPMPage';
import AIWorkshopPage from './components/AIWorkshopPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/course-outline" element={<CourseOutline />} />
          <Route path="/ai-workshop" element={<AIWorkshopPage />} />
          <Route path="/fractional-pm" element={<FractionalPMPage />} />
          <Route path="/survey" element={
            <>
              <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                    <div className="flex">
                      <div className="flex-shrink-0 flex items-center">
                        <ClipboardList className="h-8 w-8 text-[#F98B3D]" />
                        <span className="ml-2 text-xl font-semibold text-gray-900">
                          One80Labs Survey App
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
                        <Home className="h-5 w-5 mr-1" />
                        <span>Lab</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
              <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <SurveyList />
              </main>
            </>
          } />
          <Route path="/survey/:id" element={
            <>
              <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                    <div className="flex">
                      <div className="flex-shrink-0 flex items-center">
                        <ClipboardList className="h-8 w-8 text-[#F98B3D]" />
                        <span className="ml-2 text-xl font-semibold text-gray-900">
                          One80Labs Survey App
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
                        <Home className="h-5 w-5 mr-1" />
                        <span>Lab</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
              <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <SurveyForm />
              </main>
            </>
          } />
          <Route path="/thank-you" element={
            <>
              <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                    <div className="flex">
                      <div className="flex-shrink-0 flex items-center">
                        <ClipboardList className="h-8 w-8 text-[#F98B3D]" />
                        <span className="ml-2 text-xl font-semibold text-gray-900">
                          One80Labs Survey App
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
                        <Home className="h-5 w-5 mr-1" />
                        <span>Lab</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
              <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <ThankYou />
              </main>
            </>
          } />
          <Route path="/webhook-test" element={
            <>
              <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                    <div className="flex">
                      <div className="flex-shrink-0 flex items-center">
                        <ClipboardList className="h-8 w-8 text-[#F98B3D]" />
                        <span className="ml-2 text-xl font-semibold text-gray-900">
                          One80Labs Survey App
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
                        <Home className="h-5 w-5 mr-1" />
                        <span>Lab</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
              <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <WebhookTest />
              </main>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;