"use client";
import { AuthProvider } from "@/contexts/AuthContext";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AuthProvider>{children}</AuthProvider>
      <ToastContainer/>
    </div>
  );
};
