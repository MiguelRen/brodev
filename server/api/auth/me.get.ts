import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'auth_token')

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  const payload = await verifyToken(token)

  if (!payload || !payload.id) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid or expired token',
    })
  }

  const client = await serverSupabaseClient(event)

  const { data: user, error } = await client
    .from('users')
    .select(`
      id,
      email,
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
    .eq('id', payload.id as string)
    .single()

  if (error || !user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'User not found',
    })
  }

  const roles = user.user_roles?.map((ur: any) => ur.roles?.name) || []

  return {
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
})
