import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight, Calendar, ExternalLink, CheckCircle, Clock, Users, TrendingUp, Briefcase, Target } from 'lucide-react';
import AssessmentCard from './AssessmentCard';

interface AgentCardProps {
  title: string;
  description: string;
  link?: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ title, description, link }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <button className="text-gray-400 hover:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </button>
    </div>
    <div 
      className="text-gray-600 mb-6"
      dangerouslySetInnerHTML={{ __html: description }}
    />
    {link ? (
      <Link to={link} className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md flex items-center justify-center transition-colors duration-200">
        Try Agent
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    ) : (
      <Link to="/course-outline" className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md flex items-center justify-center transition-colors duration-200">
        Course Outline
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    )}
  </div>
);

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => (
  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <div>
      <p className="font-medium text-gray-900">{author}</p>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  </div>
);

export default function LandingPage() {
  const agentsRef = useRef<HTMLDivElement>(null);
  const trainingRef = useRef<HTMLDivElement>(null);
  const pmRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      // Get the header height to offset the scroll position
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      
      // Calculate the position to scroll to (element position - header height - extra padding)
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20; // 20px extra padding
      
      // Scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-gray-100 rounded-md p-2">
                <Bot className="h-6 w-6 text-black" />
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">One80Labs</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => scrollToSection(agentsRef)}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >
                  AI Agents
                </button>
                <button 
                  onClick={() => scrollToSection(trainingRef)}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >
                  Training
                </button>
                <button 
                  onClick={() => scrollToSection(pmRef)}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >
                  Fractional PM
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Midwest's Premier AI Agency
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            One80 AI: Innovate. Train. Transform
          </p>
          <div className="flex justify-center">
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200">
              Contact Us to build your Agent
            </button>
          </div>
        </div>
      </div>

      {/* Agents Section */}
      <div ref={agentsRef} className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AgentCard 
              title="SurveyBot" 
              description="<b>Fractional Project Management Fit Assessment</b>. <br><br>This assessment will help determine if your organization could benefit from Fractional Project Management services. Fractional PMs provide experienced project leadership on a part-time or flexible basis, offering a cost-effective solution for growing businesses."
              link="/survey"
            />
            <AgentCard 
              title="Venus AI" 
              description="An AI specializing in environmental monitoring and sustainability."
            />
            <AgentCard 
              title="NexusBot" 
              description="Intelligent data analysis and business insights for strategic decision-making."
            />
          </div>
        </div>
      </div>
        
      {/* AI Training Section */}
      <div ref={trainingRef} className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AgentCard 
              title="Work Smarter with AI: Automate, Optimize & Stay Ahead" 
              description="Discover how AI tools like ChatGPT, Gemini, and Microsoft 365 Co-Pilot can transform your daily workflow. In this hands-on workshop, you'll learn to automate tasks, enhance decision-making, and boost productivity using cutting-edge AI solutions. Walk away with practical skills to work smarter, not harder—no tech background required!"
            />
            <AgentCard 
              title="Cortex" 
              description="Natural language processing expert for content creation and analysis."
            />
            <AgentCard 
              title="Aurora" 
              description="Creative AI for design, art generation, and multimedia content creation."
            />
          </div>
        </div>
      </div>
        
      {/* Fractional PM Services Section */}
      <div ref={pmRef} className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fractional Project Management Services</h2>
          
          {/* Hero Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Project Leadership Without the Full-Time Commitment</h3>
                <p className="text-gray-600 mb-6">
                  Our Fractional Project Management services provide the expertise you need, exactly when you need it. 
                  We help organizations of all sizes deliver successful projects without the overhead of a full-time hire.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors duration-200">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Consultation
                  </button>
                  <Link to="/fractional-pm" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                    Learn More
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                  alt="Team collaborating on project" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* What is Fractional PM */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">What is Fractional Project Management?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-gray-600 mb-4">
                  Fractional Project Management provides your organization with experienced project leadership on a part-time, 
                  flexible basis. It's the perfect solution for businesses that:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Need project expertise but can't justify a full-time hire</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Have fluctuating project workloads throughout the year</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Want to improve project outcomes without increasing headcount</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Need specialized expertise for specific initiatives</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="text-lg font-medium text-gray-900 mb-4">The Fractional Advantage</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-200 p-2 rounded-full mr-4">
                      <Clock className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Flexible Engagement</h5>
                      <p className="text-gray-600 text-sm">Scale hours up or down based on your project needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-200 p-2 rounded-full mr-4">
                      <TrendingUp className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Cost-Effective</h5>
                      <p className="text-gray-600 text-sm">Pay only for the time and expertise you need</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-200 p-2 rounded-full mr-4">
                      <Users className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Experienced Talent</h5>
                      <p className="text-gray-600 text-sm">Access to senior-level project managers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Assessment Card */}
          <div className="mb-12">
            <AssessmentCard />
          </div>
          
          {/* CTA - Now with white background */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Transform Your Project Delivery?</h3>
              <p className="text-gray-600 mb-6">
                Schedule a free consultation to discuss how our Fractional Project Management services can help your organization deliver successful projects.
              </p>
              <Link to="/fractional-pm" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors duration-200">
                <Calendar className="mr-2 h-5 w-5" />
                Learn More About Fractional PM
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center">
              <Bot className="h-6 w-6 text-gray-400" />
              <span className="ml-2 text-gray-500 font-medium">One80Labs</span>
            </div>
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