import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/github'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_KEY
    })
    // ...add more providers here
  ]
})
