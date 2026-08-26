"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface User {
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Admin credentials
const ADMIN_EMAIL = "priyanshuprajapati2693@gmail.com";
const ADMIN_PASSWORD = "ORBIT@Admin2026";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check localStorage on mount
    const storedUser = localStorage.getItem("orbit_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("orbit_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const newUser = {
        email: ADMIN_EMAIL,
        name: "Priyanshu Prajapati",
        role: "admin",
      };
      setUser(newUser);
      localStorage.setItem("orbit_user", JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("orbit_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
