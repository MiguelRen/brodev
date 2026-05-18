import * as jose from 'jose'

const JWT_SECRET = process.env.JWT_SECRET || 'your-fallback-secret-key-at-least-32-chars'
const key = new TextEncoder().encode(JWT_SECRET)

export const signToken = async (payload: any) => {
  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(key)
}

export const verifyToken = async (token: string) => {
  try {
    const { payload } = await jose.jwtVerify(token, key)
    return payload
  } catch (err) {
    return null
  }
}
