# One80Labs Survey Application

A modern, responsive survey application built with React and Supabase, designed to collect and manage survey responses with real-time Slack notifications.

![Survey App Screenshot](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)

## 🚀 Technologies Used

### Frontend
- **React 18**: Modern UI library for building component-based interfaces
- **TypeScript**: Strongly typed programming language that builds on JavaScript
- **Vite**: Next-generation frontend build tool for fast development and optimized production builds
- **React Router**: Declarative routing for React applications
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Beautiful, consistent icon set for the application

### Backend & Data
- **Supabase**: Open-source Firebase alternative providing:
  - PostgreSQL database
  - Authentication
  - Row-level security
  - Realtime subscriptions
  - Edge Functions
- **Zustand**: Lightweight state management solution

### Integrations
- **Slack Webhooks**: Real-time notifications when surveys are completed

## 📋 Application Features

- **Survey Management**: Create and manage multiple surveys
- **Question Types**: Support for multiple choice, yes/no, short answer, text-only, and contact form questions
- **Responsive Design**: Works on desktop and mobile devices
- **Form & Slide Views**: Two different ways to display survey questions with tracking of which view was used
- **Real-time Validation**: Client-side validation for form inputs
- **Slack Notifications**: Instant notifications when surveys are completed, including view mode information
- **Webhook Testing**: Built-in tool to test Slack webhook functionality

## 🏗️ Project Structure

```
survey-application/
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── QuestionRenderer.tsx  # Renders different question types
│   │   ├── SurveyForm.tsx    # Main survey form component
│   │   ├── SurveyList.tsx    # Lists available surveys
│   │   ├── ThankYou.tsx      # Thank you page after submission
│   │   └── WebhookTest.tsx   # Tool to test Slack webhook
│   ├── lib/                  # Utility libraries
│   │   └── supabase.ts       # Supabase client and helper functions
│   ├── store/                # State management
│   │   └── surveyStore.ts    # Zustand store for survey data
│   ├── types/                # TypeScript type definitions
│   │   └── survey.ts         # Survey-related type definitions
│   ├── App.tsx               # Main application component
│   └── main.tsx              # Application entry point
├── supabase/                 # Supabase configuration
│   ├── functions/            # Edge functions
│   │   └── slack-notification/  # Slack notification function
│   └── migrations/           # Database migrations
├── public/                   # Static assets
└── index.html                # HTML entry point
```

## 🔧 Environment Variables

The application requires the following environment variables:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_SLACK_WEBHOOK_URL=your-slack-webhook-url
```

## 📊 Database Schema

The application uses the following database tables:

- **surveys**: Stores survey metadata
- **questions**: Stores survey questions
- **choices**: Stores multiple choice options
- **responses**: Stores user responses with view mode tracking
- **survey_completions**: Tracks completed surveys
- **webhook_configs**: Stores webhook configuration

## 🔒 Security Features

- **Row Level Security (RLS)**: Database-level security policies
- **Anonymous Access**: Allows users to submit surveys without authentication
- **Data Validation**: Client and server-side validation for all inputs

## 🚀 Getting Started for Developers

### Prerequisites
- Node.js 18+ and npm
- Supabase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-org/survey-application.git
cd survey-application
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory with the required variables.

4. Start the development server
```bash
npm run dev
```

### Deployment

The application can be deployed to any static hosting service:

```bash
npm run build
```

This will generate optimized assets in the `dist` directory.

## 🧩 Extending the Application

### Adding New Question Types

1. Update the `QuestionType` type in `src/types/survey.ts`
2. Add rendering logic in `QuestionRenderer.tsx`
3. Update the database schema if necessary

### Customizing the UI

The application uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`.

### Adding New Integrations

The webhook system can be extended to support other services:

1. Add a new webhook URL to the environment variables
2. Create a new notification function in `src/lib/supabase.ts`
3. Update the form submission logic in `SurveyForm.tsx`

## 🐛 Troubleshooting

### Common Issues

- **Webhook Errors**: Ensure the Slack webhook URL is correctly formatted and active
- **Database Connection Issues**: Verify Supabase credentials and network connectivity
- **Form Validation Errors**: Check the validation logic in `QuestionRenderer.tsx`

### Debugging

The application includes comprehensive logging. Check the browser console for detailed error messages.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.