"use client";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { User, useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loadingAuth }: { user: User; loadingAuth: boolean } =
    useAuthContext();
  const router = useRouter();

  if (loadingAuth) return <p>Autenticando...</p>;
  if (!user) router.push("/login");

  return (
    <html lang="pt-br">
      <body>
        <Header username={user.username} name={user.name} role={user.role} />

        <div className="container">
          <Navbar role={user.role}/>
          {children}
        </div>
      </body>
    </html>
  );
}
