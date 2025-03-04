import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const SLACK_WEBHOOK_URL = Deno.env.get('SLACK_WEBHOOK_URL')

serve(async (req) => {
  try {
    const payload = await req.json()
    
    if (!SLACK_WEBHOOK_URL) {
      console.error('SLACK_WEBHOOK_URL is not set')
      return new Response('Webhook URL not configured', { status: 500 })
    }

    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`Failed to send Slack notification: ${response.statusText}`)
    }

    return new Response('Notification sent', { status: 200 })
  } catch (error) {
    console.error('Error sending Slack notification:', error)
    return new Response(error.message, { status: 500 })
  }
})