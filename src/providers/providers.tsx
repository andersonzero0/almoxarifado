"use client";
import { AuthProvider } from "@/contexts/AuthContext";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};
