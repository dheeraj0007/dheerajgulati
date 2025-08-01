import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Dheeraj Gulati",
  description: "Dheeraj Gulati's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
