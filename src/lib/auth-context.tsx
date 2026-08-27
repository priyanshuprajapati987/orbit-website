"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => ({}),
  logout: async () => {},
  isLoading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check session on mount
  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      // Try to get preorders - if success, we're authenticated
      const res = await fetch("/api/preorders");
      if (res.ok) {
        // Get user from cookie
        const cookie = document.cookie.split(";").find((c) => c.trim().startsWith("orbit_token="));
        if (cookie) {
          // Decode token to get user info
          const token = cookie.split("=")[1];
          const payload = JSON.parse(atob(token.split(".")[1]));
          setUser({ id: payload.userId, name: payload.name, email: payload.email });
        }
      }
    } catch {
      // Not authenticated
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        return { error: data.error };
      }

      setUser(data.user);
      return {};
    } catch {
      return { error: "Failed to connect to server" };
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
