import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowLeft, Calendar, CheckCircle, Clock, Users, BookOpen, Award, Coffee, Zap, Brain, Lightbulb, MessageSquare } from 'lucide-react';

interface CourseModuleProps {
  number: number;
  title: string;
  description: string;
  duration: string;
  topics: string[];
}

const CourseModule: React.FC<CourseModuleProps> = ({ number, title, description, duration, topics }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-start mb-4">
      <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
        <span className="font-medium">{number}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center mt-1 text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>{duration}</span>
        </div>
      </div>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <h4 className="font-medium text-gray-800 mb-2">Topics covered:</h4>
    <ul className="space-y-2">
      {topics.map((topic, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="h-5 w-5 text-gray-700 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-600">{topic}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface CourseTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: string;
  students: string;
  modules: CourseModuleProps[];
}

export default function CourseTemplate({ 
  title, 
  subtitle, 
  description, 
  imageUrl, 
  duration, 
  level, 
  students,
  modules 
}: CourseTemplateProps) {
  // Effect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <div className="flex-shrink-0 bg-gray-100 rounded-md p-2">
                <Bot className="h-6 w-6 text-black" />
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">One80Labs - AI Training</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-12">
          <div className="relative h-64 md:h-80">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 md:p-8 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
                <p className="text-lg text-gray-100">{subtitle}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{duration}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{level}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{students}</span>
              </div>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p>{description}</p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors duration-200">
                <Calendar className="mr-2 h-5 w-5" />
                Register for this Course
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                Request More Information
              </button>
            </div>
          </div>
        </div>
        
        {/* What You'll Learn */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What You'll Learn</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 p-2 rounded-full mr-4">
                  <Brain className="h-5 w-5 text-gray-700" />
                </div>
                <h3 className="font-medium text-gray-900">AI Fundamentals</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Understand how AI tools work and the key concepts behind them without getting lost in technical jargon.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 p-2 rounded-full mr-4">
                  <Zap className="h-5 w-5 text-gray-700" />
                </div>
                <h3 className="font-medium text-gray-900">Practical Applications</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Discover real-world applications of AI tools that you can implement immediately in your daily workflow.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 p-2 rounded-full mr-4">
                  <Lightbulb className="h-5 w-5 text-gray-700" />
                </div>
                <h3 className="font-medium text-gray-900">Strategic Implementation</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Learn how to strategically implement AI tools in your organization to maximize productivity and ROI.
              </p>
            </div>
          </div>
        </div>
        
        {/* Course Outline */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Course Outline</h2>
          
          <div className="space-y-6">
            {modules.map((module) => (
              <CourseModule 
                key={module.number}
                number={module.number}
                title={module.title}
                description={module.description}
                duration={module.duration}
                topics={module.topics}
              />
            ))}
          </div>
        </div>
        
        {/* Instructor */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Instructor</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <img 
                  src="https://images.unsplash.com/photo-1677442135968-6d89485dd1d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                  alt="Instructor" 
                  className="w-full h-auto rounded-lg object-cover aspect-square"
                />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Alex Morgan</h3>
                <p className="text-gray-600 mb-4">AI Implementation Specialist & Technology Consultant</p>
                <p className="text-gray-600 mb-4">
                  Alex has over 10 years of experience helping businesses implement cutting-edge technology solutions. 
                  As an early adopter of AI tools, Alex has guided dozens of organizations through digital transformation 
                  journeys, focusing on practical applications that deliver real business value.
                </p>
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Do I need technical experience to take this course?</h3>
              <p className="text-gray-600">
                No technical background is required. This course is designed for professionals of all technical levels who want to leverage AI tools in their daily work.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Will I get hands-on practice with AI tools?</h3>
              <p className="text-gray-600">
                Absolutely! This is a hands-on workshop where you'll practice using tools like ChatGPT, Gemini, and Microsoft 365 Co-Pilot to solve real business challenges.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Can my entire team attend?</h3>
              <p className="text-gray-600">
                Yes, we offer group rates for teams. Contact us for more information about team pricing and custom workshops tailored to your organization's specific needs.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Will I receive a certificate upon completion?</h3>
              <p className="text-gray-600">
                Yes, all participants who complete the course will receive a certificate of completion that can be shared on LinkedIn and other professional platforms.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Transform Your Workflow with AI?</h2>
            <p className="text-gray-600 mb-6">
              Join our workshop and learn how to leverage AI tools to boost your productivity and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors duration-200">
                <Calendar className="mr-2 h-5 w-5" />
                Register Now
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <Link to="/" className="flex items-center">
              <Bot className="h-6 w-6 text-gray-400" />
              <span className="ml-2 text-gray-500 font-medium">One80Labs - AI Training</span>
            </Link>
            <div className="mt-8 md:mt-0">
              <p className="text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} One80Labs. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}