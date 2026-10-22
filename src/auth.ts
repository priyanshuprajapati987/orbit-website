import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Admin credentials - SIRF environment se (.env.local / Netlify env).
// Source me kabhi hardcoded mat rakho - client bundle me leak ho jata hai.
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        // env missing = fail closed (koi login nahi kar payega)
        if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
          return null;
        }

        if (
          credentials.email === ADMIN_EMAIL &&
          credentials.password === ADMIN_PASSWORD
        ) {
          return {
            id: "1",
            email: ADMIN_EMAIL,
            name: "Priyanshu Prajapati",
            role: "admin",
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { id: string; role?: string }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        (session.user as { id?: string; role?: string }).role =
          token.role as string | undefined;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // After login, redirect to dashboard
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      return `${baseUrl}/dashboard`;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  // NEXTAUTH_SECRET .env.local (local) + Netlify env (prod) me set hona chahiye
  secret: process.env.NEXTAUTH_SECRET,
});
