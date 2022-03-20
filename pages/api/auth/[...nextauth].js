import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
// import TypeORMLegacyAdapter from "@next-auth/typeorm-legacy-adapter"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

// adapter: TypeORMLegacyAdapter({
  
//   synchronize: false
// })
