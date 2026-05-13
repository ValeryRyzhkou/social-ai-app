import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        return {
          id: "1",
          email: credentials.email as string,
          name: "Test User"
        };
      }
    })
  ],
  pages: {
    signIn: "/login",
  }
});

export const GET = handlers.GET;
export const POST = handlers.POST;