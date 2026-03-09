# Configuración de Supabase para PlusBienes

Para que el sistema de captación de leads funcione correctamente, sigue estos pasos en tu panel de Supabase:

## 1. Crear la Tabla `leads`
Ejecuta este SQL en el Editor SQL de Supabase:

```sql
CREATE TABLE leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  property_address TEXT NOT NULL,
  property_type TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'resolved')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS (Seguridad a nivel de fila)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Permitir inserciones públicas (para el formulario)
CREATE POLICY "Public leads can be created" ON leads
  FOR INSERT WITH CHECK (true);
```

## 2. Desplegar la Edge Function
Desde tu terminal local (donde tengas instalado Supabase CLI):

1. Logueate: `supabase login`
2. Enlaza el proyecto: `supabase link --project-ref TU_REF_DE_PROYECTO`
3. Configura las variables de entorno:
   - `supabase secrets set RESEND_API_KEY=tu_api_key_de_resend`
4. Despliega la función:
   - `supabase functions deploy notify-lead`

## 3. Configurar el Webhook
1. Ve a **Database** -> **Webhooks** en el dashboard de Supabase.
2. Crea un nuevo Webhook:
   - **Name:** `on-lead-insert`
   - **Table:** `leads`
   - **Events:** `INSERT`
   - **Type:** `Supabase Edge Function`
   - **Function:** Selecciona `notify-lead`.
3. Guarda los cambios.

¡Listo! Cada vez que alguien llene el formulario, se guardará en la base de datos y recibirás un correo electrónico automáticamente.
