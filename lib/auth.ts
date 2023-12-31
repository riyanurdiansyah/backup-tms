import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const api_backend = process.env.NEXT_PUBLIC_APP_API_BACKEN;

export const authOptions: NextAuthOptions = {
  //   session: {
  //     strategy: "jwt",
  //   },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {},
      async authorize(credentials) {
        try {
          const { username, password } = credentials as {
            username: string;
            password: string;
          };

          const res = await fetch("http://157.230.255.204:3000/api/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          });

          const data = await res.json();

          if (data.code === 404) {
            throw new Error(data.message || "Username not found");
          }
          const user = data; // assuming the user data is in the response
          return user;
        } catch (error: any) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      return { ...token, ...user };
    },
    session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
};
