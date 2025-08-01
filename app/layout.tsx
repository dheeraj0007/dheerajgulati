import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/common/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Dheeraj Gulati",
  description: "Dheeraj Gulati's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="sticky top-3 z-50 w-full px-4 sm:px-0 flex justify-center items-center flex-col">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
