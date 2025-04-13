import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
});

export const metadata: Metadata = {
  title: "Blinkit Dashboard",
  description: "Blinkit Dashboard Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mulish.variable}`}>
      <body className="font-mulish">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-[10px] p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
