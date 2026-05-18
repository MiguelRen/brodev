export default defineEventHandler(async (event) => {
  const { path } = event
  
  // Only protect routes that start with /api/admin
  if (!path.startsWith('/api/admin')) {
    return
  }

  const token = getCookie(event, 'auth_token')

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  const payload = await verifyToken(token)

  if (!payload) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid or expired token',
    })
  }

  // Attach user info to context for use in downstream event handlers
  event.context.user = payload
})
