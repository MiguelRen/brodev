// Follows BACKEND_GUIDE.md: Snake_case for database, camelCase for interfaces (transformed here)
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const WHATSAPP_API_KEY = Deno.env.get('WHATSAPP_API_KEY') // Example for a WA provider

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const payload = await req.json()
    const { record } = payload // This comes from Supabase Webhook (insert)

    console.log('New Lead received:', record.full_name)

    // 1. Send Email via Resend
    if (RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'PlusBienes <onboarding@resend.dev>',
          to: ['migueleduardorengel@gmail.com'], // Luis Rengel email
          subject: '🔔 Nuevo Lead: Valorar mi Propiedad',
          html: `
            <h1>Nuevo Lead Recibido</h1>
            <p><strong>Nombre:</strong> ${record.full_name}</p>
            <p><strong>Email:</strong> ${record.email}</p>
            <p><strong>Teléfono:</strong> ${record.phone}</p>
            <p><strong>Propiedad:</strong> ${record.property_address}</p>
            <p><strong>Tipo:</strong> ${record.property_type}</p>
            <p><strong>Mensaje:</strong> ${record.message || 'Sin mensaje'}</p>
          `,
        }),
      })
      const emailData = await res.json()
      console.log('Email sent status:', emailData)
    }

    // 2. WhatsApp Notification (Conceptual)
    // You could use Twilio or Meta WhatsApp Business API here.
    if (WHATSAPP_API_KEY) {
       console.log('WhatsApp notification would be sent here.')
    }

    return new Response(JSON.stringify({ message: "Notifications processed" }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
