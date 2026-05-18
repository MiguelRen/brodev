import bcrypt from 'bcryptjs'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password, name } = body

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email and password are required',
    })
  }

  const client = await serverSupabaseClient(event)

  // Check if user already exists
  const { data: existingUser } = await client
    .from('users')
    .select('*')
    .eq('email', email)
    .single()

  if (existingUser) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User already exists',
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const { data: user, error } = await client
    .from('users')
    .insert({
      email,
      password: hashedPassword,
      name,
      role: 'USER'
    })
    .select()
    .single()

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }

  // Exclude password from response
  const { password: _, ...userWithoutPassword } = user as any
  return userWithoutPassword
})
