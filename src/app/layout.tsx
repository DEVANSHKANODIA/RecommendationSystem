import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEURAL.OS",
  description: "Nova AI Recommendation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} dark antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container font-body-md text-body-md">
        <Sidebar />
        <TopBar />
        <div className="ml-64 mt-16 min-h-[calc(100vh-4rem)]">
          <main className="p-8 lg:p-12 w-full max-w-[1440px] mx-auto flex flex-col gap-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
