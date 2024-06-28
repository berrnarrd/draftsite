import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Common Options - Consulting, Staffing, Mergers, Acquisitions, Brokerage, Business Management",
  description: "Our services include consulting, staffing, mergers, acquisitions, brokerage, and professional business management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Common Options - Consulting, Staffing, Mergers, Acquisitions, Brokerage, Business Management</title>
        <meta name="description" content="Our services include consulting, staffing, mergers, acquisitions, brokerage, and professional business management." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="consulting, staffing, mergers, acquisitions, brokerage, business management, professional services" />
        <meta name="author" content="Common Options" />
        <link rel="canonical" href="https://www.yoursite.com/" />
        <meta property="og:title" content="Common Options - Consulting, Staffing, Mergers, Acquisitions, Brokerage, Business Management" />
        <meta property="og:description" content="Our services include consulting, staffing, mergers, acquisitions, brokerage, and professional business management." />
        <meta property="og:url" content="https://www.yoursite.com/" />
        <meta property="og:image" content="https://www.yoursite.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Common Options - Consulting, Staffing, Mergers, Acquisitions, Brokerage, Business Management" />
        <meta name="twitter:description" content="Our services include consulting, staffing, mergers, acquisitions, brokerage, and professional business management." />
        <meta name="twitter:image" content="https://www.yoursite.com/twitter-image.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}