"use client"
import { User, useAuthContext } from "@/contexts/AuthContext";
import { redirect } from "next/navigation";
import { useCookies } from "react-cookie";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [cookies, setCookie] = useCookies(['user_data'])
  
  if (!cookies.user_data) {
    redirect("/login");
  }

  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
