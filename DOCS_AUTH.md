# Sistema de Autenticación y Autorización (JWT + Supabase)

Se ha implementado un sistema de autenticación personalizado utilizando JSON Web Tokens (JWT) y el cliente oficial de Supabase.

## Requisitos Previos

Asegúrate de tener las siguientes variables en tu archivo `.env`:

```env
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_KEY="your-anon-key"
JWT_SECRET="una-clave-secreta-muy-larga-y-segura-de-al-menos-32-caracteres"
```

## Configuración de la Base de Datos

El sistema utiliza la tabla `User` en Supabase (esquema `public`). Asegúrate de que la tabla tenga la siguiente estructura:

- `id`: uuid (primary key)
- `email`: text (unique)
- `password`: text (hashed)
- `name`: text (optional)
- `role`: text (default: 'USER')
- `created_at`: timestamptz (default: now())
- `updated_at`: timestamptz (default: now())

## Cómo usar el Sistema

### 1. Registro de Usuario
Puedes registrar un nuevo usuario enviando un POST a `/api/auth/register` con:
```json
{
  "email": "admin@plusbienes.com",
  "password": "tu-password",
  "name": "Administrador"
}
```

### 2. Protección de Rutas

#### En el Servidor (API):
Las rutas que comienzan con `/api/admin/` están protegidas automáticamente por el middleware `server/middleware/auth.ts`.
Si necesitas proteger otras rutas, edita ese archivo.

#### En el Cliente (Frontend):
Para proteger una página, usa `definePageMeta` en el componente `.vue`:

```vue
<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>
```
El middleware `app/middleware/auth.ts` se encargará de verificar la sesión y el rol.

### 3. Roles de Usuario
Por defecto, los usuarios se crean con el rol `USER`. Puedes cambiar el rol a `ADMIN` directamente en la base de datos para tener acceso a las áreas administrativas.

## Despliegue

Al desplegar:
1. Configura las variables de entorno (`SUPABASE_URL`, `SUPABASE_KEY`, `JWT_SECRET`).
2. El módulo `@nuxtjs/supabase` se encargará de la conexión.
