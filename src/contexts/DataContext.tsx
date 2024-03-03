"use client";

import { api } from "@/services/api";
import { ReactNode, createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";

const DataContext = createContext({} as any);

export function DataProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState([]);
  const { user } = useAuthContext();

  const [loadingUsers, setLoadingUsers] = useState(false);

  async function getUsers() {
    try {
      setLoadingUsers(true);

      console.log(user)
      
      const { data } = await api.get("/usuario", {
        headers: {
          "Authorization": `Bearer ${user.access_token}`,
        },
      });

      console.log(data)

      setUsers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingUsers(false);
    }
  }

  return (
    <DataContext.Provider value={{ users, loadingUsers, getUsers }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);