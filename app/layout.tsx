import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Aptech Statmuse",
  description: "Stats Tracker For Aptech Football - 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
