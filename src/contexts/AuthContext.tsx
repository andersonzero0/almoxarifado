import { api } from "@/services/api";
import { createContext, useState, useEffect, ReactNode } from "react";

export const AuthContext = createContext({} as any);

export type User = {
  name: String;
  username: String;
  role: String;
  access_token: String;
};

type LoginProps = {
  username: String;
  password: String;
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
