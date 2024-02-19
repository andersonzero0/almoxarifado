"use client"
import { User, useAuthContext } from "@/contexts/AuthContext";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user }: { user: User } = useAuthContext()

  if (!user) {
    redirect("/login");
  }

  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
