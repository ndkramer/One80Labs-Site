import React, { useEffect } from 'react';
import CourseTemplate from './CourseTemplate';

export default function AIWorkshopPage() {
  // Effect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const courseModules = [
    {
      number: 1,
      title: "Introduction to AI Tools for Business",
      description: "Understand the landscape of AI tools available today and how they can transform your workflow.",
      duration: "1 hour",
      topics: [
        "Overview of AI tools landscape (ChatGPT, Gemini, Microsoft 365 Co-Pilot)",
        "How AI is transforming business operations",
        "Identifying opportunities for AI in your workflow",
        "Ethical considerations and best practices"
      ]
    },
    {
      number: 2,
      title: "Mastering ChatGPT for Business Applications",
      description: "Learn how to effectively use ChatGPT to enhance your productivity and streamline communication.",
      duration: "1.5 hours",
      topics: [
        "Crafting effective prompts for better results",
        "Using ChatGPT for content creation and editing",
        "Automating routine communications",
        "Research and information synthesis techniques",
        "Hands-on exercises with real business scenarios"
      ]
    },
    {
      number: 3,
      title: "Google Gemini: Advanced Features for Professionals",
      description: "Explore Google's Gemini and its unique capabilities for business applications.",
      duration: "1.5 hours",
      topics: [
        "Gemini's multimodal capabilities (text, images, code)",
        "Integrating Gemini with Google Workspace",
        "Data analysis and visualization with Gemini",
        "Comparing Gemini and ChatGPT: When to use each tool",
        "Practical applications across different business functions"
      ]
    },
    {
      number: 4,
      title: "Microsoft 365 Co-Pilot: Transforming Your Office Workflow",
      description: "Discover how Microsoft's AI assistant can revolutionize your daily tasks in Office applications.",
      duration: "1.5 hours",
      topics: [
        "Co-Pilot in Word: Advanced document creation and editing",
        "Co-Pilot in Excel: Data analysis and formula generation",
        "Co-Pilot in PowerPoint: Creating compelling presentations",
        "Co-Pilot in Outlook: Email management and response generation",
        "Co-Pilot in Teams: Meeting summaries and action items"
      ]
    },
    {
      number: 5,
      title: "Building an AI-Enhanced Workflow",
      description: "Create a personalized strategy for integrating AI tools into your daily work routine.",
      duration: "2 hours",
      topics: [
        "Identifying repetitive tasks for AI automation",
        "Creating custom workflows combining multiple AI tools",
        "Measuring productivity improvements",
        "Addressing challenges and limitations",
        "Future-proofing your skills in an AI-enhanced workplace",
        "Action planning workshop: Your 30-day AI implementation plan"
      ]
    }
  ];

  return (
    <CourseTemplate
      title="Work Smarter with AI: Automate, Optimize & Stay Ahead"
      subtitle="A hands-on workshop to transform your daily workflow with AI tools"
      description="Discover how AI tools like ChatGPT, Gemini, and Microsoft 365 Co-Pilot can transform your daily workflow. In this hands-on workshop, you'll learn to automate tasks, enhance decision-making, and boost productivity using cutting-edge AI solutions. Walk away with practical skills to work smarter, not harder—no tech background required!"
      imageUrl="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      duration="1-Day Intensive Workshop (8 hours)"
      level="Beginner to Intermediate"
      students="Limited to 20 participants"
      modules={courseModules}
    />
  );
}