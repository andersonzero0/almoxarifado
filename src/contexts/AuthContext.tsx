"use client"
import { api } from "@/services/api";
import { createContext, useState, ReactNode, useContext } from "react";

const AuthContext = createContext({} as any);

export type User = {
  name: string;
  username: string;
  role: string;
  access_token: string;
};

type LoginProps = {
  username: string;
  password: string;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function login(loginData: LoginProps) {
    try {
      setLoading(true);

      const { data } = await api.post("/auth", {
        username: loginData.username,
        password: loginData.password,
      });

      setUser(data);
    } catch (error) {
      // toast
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext)