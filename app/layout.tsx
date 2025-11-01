import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EuroConform – Your Gateway to EU Product Compliance",
  description: "EU Authorised Representative (Article 4 Regulation (EU) 2019/1020) and Responsible Person (Article 16 Regulation (EU) 2023/988) services. Professional compliance partner ensuring smooth EU market access.",
  keywords: ["EU compliance", "Authorised Representative", "Responsible Person", "product safety", "EU market access", "Malta"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
