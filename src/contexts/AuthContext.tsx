"use client";
import { api } from "@/services/api";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { useCookies } from "react-cookie";

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
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);
  const [cookies, setCookie] = useCookies(["user_data"]);

  async function login(loginData: LoginProps) {
    try {
      setLoading(true);

      const { data } = await api.post("/auth", {
        username: loginData.username,
        password: loginData.password,
      });

      setCookie("user_data", data);
      setUser(data);
    } catch (error) {
      // toast
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (cookies.user_data) {
      setUser(cookies.user_data)
    }
    
    setLoadingAuth(false)
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
