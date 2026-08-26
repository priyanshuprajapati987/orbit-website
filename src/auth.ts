import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Admin credentials
const ADMIN_EMAIL = "priyanshuprajapati2693@gmail.com";
const ADMIN_PASSWORD = "ORBIT@Admin2026";

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
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        (session.user as any).role = token.role;
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
  secret: process.env.NEXTAUTH_SECRET || "orbit-secret-key-2026-production",
});
