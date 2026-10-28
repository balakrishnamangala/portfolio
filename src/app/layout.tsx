import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balakrishna Mangala — Supply Chain Analyst",
  description:
    "Supply Chain Analyst portfolio — AI forecasting, logistics intelligence, and data systems that save millions.",
  openGraph: {
    title: "Balakrishna Mangala — Supply Chain Analyst",
    description: "AI forecasting, logistics intelligence, and data systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
