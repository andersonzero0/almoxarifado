import { Providers } from "@/providers";
import type { Metadata } from "next";
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
