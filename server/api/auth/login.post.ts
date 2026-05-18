import bcrypt from 'bcryptjs'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email and password are required',
    })
  }

  const client = await serverSupabaseClient(event)

  console.log('[LOGIN DEBUG] Intentando login para:', email)

  // Fetch user with roles and profile - Removed .single() to debug duplicates
  const { data: users, error } = await client
    .from('users')
    .select(`
      id,
      email,
      password,
      is_active,
      created_at,
      user_roles (
        roles (
          name
        )
      ),
      profiles (
        full_name,
        avatar_url,
        phone,
        bio
      )
    `)
    .eq('email', email)

  if (error) {
    console.error('[LOGIN DEBUG] Error en DB:', error.message)
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' })
  }

  if (!users || users.length === 0) {
    console.error('[LOGIN DEBUG] Usuario no encontrado en DB')
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials',
    })
  }

  if (users.length > 1) {
    console.warn('[LOGIN DEBUG] ¡ALERTA! Se encontraron múltiples usuarios con el mismo email:', users.map(u => u.id))
  }

  const user = users[0]
  console.log('[LOGIN DEBUG] Usuario encontrado (ID:', user.id, '). Verificando contraseña...')

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    console.error('[LOGIN DEBUG] Contraseña INCORRECTA para:', email)
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials',
    })
  }

  console.log('[LOGIN DEBUG] Login EXITOSO para:', email)

  if (!user.is_active) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Account is disabled',
    })
  }

  // Extract roles into a flat array
  const roles = user.user_roles?.map((ur: any) => ur.roles?.name) || []

  // Create JWT token including roles
  const token = await signToken({
    id: user.id,
    email: user.email,
    roles,
  })

  // Set cookie for automatic authentication
  setCookie(event, 'auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 2, // 2 hours
    path: '/',
  })

  // Format response to match frontend interfaces
  const userResponse = {
    id: user.id,
    email: user.email,
    roles,
    isActive: user.is_active,
    createdAt: user.created_at,
    profile: user.profiles ? {
      id: user.id,
      fullName: user.profiles.full_name,
      avatarUrl: user.profiles.avatar_url,
      phone: user.profiles.phone,
      bio: user.profiles.bio,
    } : null
  }

  return {
    user: userResponse,
    token,
  }
})
