import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Users, CheckCircle, BookOpen, Award, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function CourseOutline() {
  // State to track which FAQ items are expanded
  const [expandedFaqs, setExpandedFaqs] = useState<Record<number, boolean>>({});

  // Effect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Toggle FAQ expansion
  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="flex-shrink-0 bg-gray-100 rounded-md p-2">
                  <BookOpen className="h-6 w-6 text-black" />
                </div>
                <span className="ml-3 text-xl font-semibold text-gray-900">One80Labs - AI Training</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/survey" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Surveys
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Course Hero */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to All Courses
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Work Smarter with AI: Automate, Optimize & Stay Ahead
              </h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-2 text-gray-500" />
                  <span>15 hours (3 days)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="h-5 w-5 mr-2 text-gray-500" />
                  <span>Max 20 participants</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 mr-2 text-gray-500" />
                  <span>Certificate of Completion</span>
                </div>
              </div>
              <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200">
                Register for This Course
              </button>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1677442135968-6d89485dd1d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                alt="AI Productivity Workshop" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Course Content */}
          <div className="lg:w-2/3">
            {/* Course Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Overview</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  The rise of AI-powered tools like <strong>ChatGPT, Gemini, and Microsoft 365 Co-Pilot</strong> has 
                  transformed the way professionals work. Whether you're managing projects, analyzing data, or 
                  leading teams, AI can help you <strong>save time, improve decision-making, and streamline your 
                  workflow</strong>.
                </p>
                <p>
                  This workshop provides <strong>hands-on experience</strong> with real-world AI applications. You'll learn how 
                  to <strong>automate tasks, generate reports, analyze trends, and optimize workflows</strong>—all without 
                  requiring technical expertise.
                </p>
              </div>
            </section>

            {/* What You'll Learn */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Will Learn</h2>
              <p className="text-gray-600 mb-4">By the end of this workshop, you will be able to:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-900 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Use ChatGPT, Gemini, and Microsoft 365 Co-Pilot</h3>
                      <p className="text-gray-600 text-sm">to enhance productivity</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-900 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Automate emails, reports, and documentation</h3>
                      <p className="text-gray-600 text-sm">with AI</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-900 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Create data-driven presentations & insights</h3>
                      <p className="text-gray-600 text-sm">in minutes</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-900 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Optimize Excel & spreadsheets</h3>
                      <p className="text-gray-600 text-sm">with AI-assisted formulas & automation</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-900 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Conduct AI-powered market research & competitor analysis</h3>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-900 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Streamline decision-making & strategy</h3>
                      <p className="text-gray-600 text-sm">with AI-driven recommendations</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-900 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Integrate AI into daily work</h3>
                      <p className="text-gray-600 text-sm">for long-term career success</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-900 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Create and Customize Your Own GPT Assistants</h3>
                      <p className="text-gray-600 text-sm">for specialized tasks and workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Course Curriculum */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Modules</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">Module 1: AI for Productivity & Automation</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Introduction to AI tools: ChatGPT, Gemini, Microsoft 365 Co-Pilot</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>How to craft effective prompts for better results</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>AI for writing, brainstorming, and idea generation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Hands-on workshop: Use ChatGPT to draft professional emails & reports</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">Module 2: Automating Workflows & Task Management</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Identifying repetitive tasks that can be automated</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Creating AI-powered workflows for common business processes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Using AI to prioritize and manage your workload</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Hands-on workshop: Build an AI-assisted task management system</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* New Module 3 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">Module 3: AI-Powered Presentations & Storytelling</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Using AI to create slide decks, speaker notes, and visuals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Enhancing storytelling with AI-generated images and graphics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Hands-on Activity: Build a presentation using AI-generated insights</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">Module 4: AI for Data Analysis & Decision Making</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Using AI to analyze and interpret data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Creating data visualizations and presentations with AI</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>AI-powered market research and competitive analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Hands-on workshop: Generate insights from business data</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">Module 5: AI for Collaboration & Communication</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Enhancing team collaboration with AI tools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Using AI to improve meeting productivity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>AI for creating engaging presentations and content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Hands-on workshop: Collaborative document creation with AI</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">Module 6: AI Ethics & Best Practices</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Understanding AI limitations and potential biases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Ethical considerations when using AI in the workplace</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Best practices for AI implementation in organizations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Hands-on workshop: Developing an AI usage policy</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">Module 7: Future-Proofing Your Career with AI</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Staying ahead of AI trends and developments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Building an AI-enhanced personal brand</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Continuous learning strategies for AI mastery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Hands-on workshop: Creating your AI implementation roadmap</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">Module 8: Building & Deploying Custom GPTs for Business</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>What is a Custom GPT, and how does it work?</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>How to create a Custom GPT for automating tasks and answering FAQs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Customizing your GPT's personality, knowledge base, and responses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Best practices for integrating a Custom GPT into daily workflows</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Hands-on Activity: Build and test your own Custom GPT for a business scenario</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="w-full bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center text-left"
                    onClick={() => toggleFaq(1)}
                  >
                    <h3 className="font-medium text-gray-900">Do I need technical skills to take this course?</h3>
                    {expandedFaqs[1] ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaqs[1] && (
                    <div className="p-4 text-gray-600">
                      <p>No technical background is required. This course is designed for professionals from all fields who want to enhance their productivity using AI tools. Basic computer skills and familiarity with office software are sufficient.</p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="w-full bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center text-left"
                    onClick={() => toggleFaq(2)}
                  >
                    <h3 className="font-medium text-gray-900">What tools will we be using during the workshop?</h3>
                    {expandedFaqs[2] ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaqs[2] && (
                    <div className="p-4 text-gray-600">
                      <p>We'll primarily work with ChatGPT, Gemini, and Microsoft 365 Co-Pilot. We'll also introduce other specialized AI tools depending on the specific needs of participants. All tools used either have free tiers or trial versions available.</p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 3 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="w-full bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center text-left"
                    onClick={() => toggleFaq(3)}
                  >
                    <h3 className="font-medium text-gray-900">Will I receive any materials or resources?</h3>
                    {expandedFaqs[3] ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaqs[3] && (
                    <div className="p-4 text-gray-600">
                      <p>Yes, all participants receive a comprehensive digital workbook, prompt templates, cheat sheets for different AI tools, and access to a private community for ongoing support and learning. You'll also receive a certificate of completion.</p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 4 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="w-full bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center text-left"
                    onClick={() => toggleFaq(4)}
                  >
                    <h3 className="font-medium text-gray-900">Can this course be customized for my organization?</h3>
                    {expandedFaqs[4] ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaqs[4] && (
                    <div className="p-4 text-gray-600">
                      <p>Absolutely! We offer customized versions of this workshop for teams and organizations, tailored to your specific industry, challenges, and goals. Contact us to discuss your needs and receive a custom proposal.</p>
                    </div>
                  )}
                </div>

                {/* FAQ Item 5 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="w-full bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center text-left"
                    onClick={() => toggleFaq(5)}
                  >
                    <h3 className="font-medium text-gray-900">What is the format of the workshop?</h3>
                    {expandedFaqs[5] ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaqs[5] && (
                    <div className="p-4 text-gray-600">
                      <p>This is a highly interactive workshop with a mix of presentations, demonstrations, hands-on exercises, group discussions, and individual practice. You'll spend approximately 60% of the time actively working with AI tools to solve real-world problems.</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Meet Your Instructor */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Instructor</h2>
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1677442135968-6d89485dd1d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                      alt="Nick Kramer" 
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nick Kramer</h3>
                    <p className="text-gray-600 italic mb-4">AI Productivity Specialist & Technology Educator</p>
                    <div className="prose max-w-none text-gray-600">
                      <p>
                        Nick is a technology educator and AI specialist with over 15 years of experience helping professionals and organizations leverage emerging technologies to enhance productivity and innovation.
                      </p>
                      <p>
                        As the founder of One80Labs and One80Training, Nick has worked with businesses across industries—ranging from finance and healthcare to manufacturing and tech—guiding teams in leveraging AI for automation, data analysis, and workflow optimization. He specializes in making AI accessible to non-technical professionals, ensuring they can harness its power for smarter decision-making and productivity gains.
                      </p>
                      <p>
                        Nick is a certified expert in AI-powered product thinking and human-centered design. He has developed innovative frameworks that enhance enterprise AI adoption and business intelligence. Passionate about the future of AI in professional settings, he continues to lead workshops, develop cutting-edge training programs, and help organizations stay ahead in the rapidly evolving AI landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Registration CTA */}
            <section>
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Productivity with AI?</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join us for this hands-on workshop and learn how to leverage AI tools to automate tasks, 
                  enhance decision-making, and boost your productivity. Limited spots available!
                </p>
                <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200">
                  Register Now
                </button>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              {/* Course Details Card */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Next Sessions</h4>
                        <p className="text-gray-600">June 15-16, 2025 (9am-1pm)</p>
                        <p className="text-gray-600">July 20, 2025 (9am-5pm)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Participants</h4>
                        <p className="text-gray-600">Limited to 20 per session</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MessageCircle className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Format</h4>
                        <p className="text-gray-600">In-person or virtual options</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Duration</h4>
                        <p className="text-gray-600">15 hours (3 days)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Audience</h4>
                        <p className="text-gray-600">Anyone looking to learn how AI can assist them</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What Participants Say</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                      <p className="mb-2">
                        "This workshop completely changed how I approach my daily tasks. I'm saving at least 10 hours a week using the AI techniques I learned."
                      </p>
                      <p className="text-sm font-medium text-gray-900">— Jennifer K., Marketing Director</p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                      <p className="mb-2">
                        "As someone with no technical background, I was worried this would be over my head. Instead, I found it incredibly accessible and immediately useful."
                      </p>
                      <p className="text-sm font-medium text-gray-900">— Marcus T., HR Manager</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Have Questions?</h3>
                  <p className="text-gray-600 mb-4">
                    Contact us for more information about this course or to discuss custom training options for your organization.
                  </p>
                  <button className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors duration-200">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-gray-400" />
              <span className="ml-2 text-gray-500 font-medium">One80Labs - AI Training</span>
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