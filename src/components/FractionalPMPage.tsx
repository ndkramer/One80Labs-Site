import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Calendar, CheckCircle, Clock, Users, TrendingUp, Briefcase, Target, Home, ArrowLeft, DollarSign, Zap, Award, Code, Cpu, FileSearch } from 'lucide-react';
import AssessmentCard from './AssessmentCard';

export default function FractionalPMPage() {
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
              <span className="ml-3 text-xl font-semibold text-gray-900">One80Labs</span>
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
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Fractional Project Management Services</h1>
              <p className="text-gray-600 mb-6">
                Our Fractional Project Management services provide the expertise you need, exactly when you need it. 
                We help organizations of all sizes deliver successful projects without the overhead of a full-time hire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors duration-200">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </button>
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
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What is Fractional Project Management?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
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
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">The Fractional Advantage</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-2 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Flexible Engagement</h4>
                    <p className="text-gray-600 text-sm">Scale hours up or down based on your project needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-200 p-2 rounded-full mr-4">
                    <TrendingUp className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Cost-Effective</h4>
                    <p className="text-gray-600 text-sm">Pay only for the time and expertise you need</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-200 p-2 rounded-full mr-4">
                    <Users className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Experienced Talent</h4>
                    <p className="text-gray-600 text-sm">Access to senior-level project managers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Assessment Card in What is Fractional PM section */}
          <AssessmentCard />
        </div>
        
        {/* Why Fractional Project Management */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Fractional Project Management?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-black rounded-full p-3 mr-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Cost Efficiency</h3>
              </div>
              <p className="text-gray-600">
                Save 40-60% compared to a full-time hire while still getting senior-level expertise. No benefits, overhead, or downtime costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-black rounded-full p-3 mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Immediate Impact</h3>
              </div>
              <p className="text-gray-600">
                Experienced professionals hit the ground running with proven methodologies and best practices, delivering value from day one.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-black rounded-full p-3 mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Specialized Skills</h3>
              </div>
              <p className="text-gray-600">
                Access to industry-specific expertise and specialized skills that might be difficult to find in a single full-time hire.
              </p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Hiring vs. Fractional PM</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-3 pb-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium text-left">Traditional Hiring</span>
                  <span className="text-gray-600 font-medium text-center">vs.</span>
                  <span className="text-gray-600 font-medium text-right">Fractional PM</span>
                </div>
                <div className="grid grid-cols-3 pb-2 border-b border-gray-100">
                  <span className="text-gray-500 text-left">3-6 months</span>
                  <span className="text-gray-600 font-medium text-center">Hiring Timeline</span>
                  <span className="text-gray-900 font-semibold text-right">1-2 weeks</span>
                </div>
                <div className="grid grid-cols-3 pb-2 border-b border-gray-100">
                  <span className="text-gray-500 text-left">$120-180k+</span>
                  <span className="text-gray-600 font-medium text-center">Annual Cost</span>
                  <span className="text-gray-900 font-semibold text-right">$$ variable</span>
                </div>
                <div className="grid grid-cols-3 pb-2 border-b border-gray-100">
                  <span className="text-gray-500 text-left">Long-term</span>
                  <span className="text-gray-600 font-medium text-center">Commitment</span>
                  <span className="text-gray-900 font-semibold text-right">Flexible</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="text-gray-500 text-left">Fixed</span>
                  <span className="text-gray-600 font-medium text-center">Scalability</span>
                  <span className="text-gray-900 font-semibold text-right">Adjustable</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ideal For</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Growing companies with fluctuating project demands</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Organizations undergoing digital transformation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Startups needing enterprise-level project expertise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Companies with seasonal or cyclical project needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Businesses looking to optimize project delivery without increasing headcount</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Assessment Card in Why Fractional PM section */}
          <AssessmentCard />
        </div>
        
        {/* Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Project Leadership</h3>
              <p className="text-gray-600">
                End-to-end management of critical projects, from planning to successful delivery.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">AI Agent Development</h3>
              <p className="text-gray-600">
                Custom AI solutions tailored to your business needs, from concept to deployment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Software Development</h3>
              <p className="text-gray-600">
                Full-stack development services with modern technologies and best practices.
              </p>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileSearch className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Vendor Selection</h3>
              <p className="text-gray-600">
                Expert guidance in selecting and managing technology vendors and partners.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Strategic Planning</h3>
              <p className="text-gray-600">
                Development of project roadmaps, resource plans, and risk management strategies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Process Improvement</h3>
              <p className="text-gray-600">
                Optimization of project management methodologies and implementation of best practices.
              </p>
            </div>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How It Works</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            {/* Steps */}
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">
                    We'll discuss your project needs, challenges, and goals to understand how we can best support your organization.
                  </p>
                </div>
                <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center z-10 my-4 md:my-0">
                  <span className="font-medium">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                    alt="Initial consultation" 
                    className="rounded-lg w-full h-40 object-cover"
                  />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Customized solution" 
                    className="rounded-lg w-full h-40 object-cover"
                  />
                </div>
                <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center z-10 my-4 md:my-0 order-1 md:order-2">
                  <span className="font-medium">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3 md:text-left">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Customized Solution</h3>
                  <p className="text-gray-600">
                    We'll design a tailored engagement model that aligns with your specific project requirements and budget.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Seamless Integration</h3>
                  <p className="text-gray-600">
                    Our experienced project managers integrate with your team, adapting to your culture and processes.
                  </p>
                </div>
                <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center z-10 my-4 md:my-0">
                  <span className="font-medium">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Team integration" 
                    className="rounded-lg w-full h-40 object-cover"
                  />
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Project delivery" 
                    className="rounded-lg w-full h-40 object-cover"
                  />
                </div>
                <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center z-10 my-4 md:my-0 order-1 md:order-2">
                  <span className="font-medium">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3 md:text-left">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Successful Delivery</h3>
                  <p className="text-gray-600">
                    We drive your projects to successful completion, ensuring all objectives are met and value is delivered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 italic mb-4">"The fractional PM approach gave us exactly what we needed - expert project leadership without the overhead of a full-time hire. Our projects are now completed on time and within budget."</p>
              <div>
                <p className="font-medium text-gray-900">Sarah Johnson</p>
                <p className="text-gray-500 text-sm">COO, TechStart Solutions</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 italic mb-4">"Working with One80's fractional PM team transformed our project delivery. They quickly integrated with our team and brought structure to our chaos."</p>
              <div>
                <p className="font-medium text-gray-900">Michael Chen</p>
                <p className="text-gray-500 text-sm">VP of Operations, GrowthWave</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Transform Your Project Delivery?</h2>
            <p className="text-gray-600 mb-6">
              Schedule a free consultation to discuss how our Fractional Project Management services can help your organization deliver successful projects.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors duration-200">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <Link to="/" className="flex items-center">
              <Bot className="h-6 w-6 text-gray-400" />
              <span className="ml-2 text-gray-500 font-medium">One80Labs</span>
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