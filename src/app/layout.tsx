import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stripe Integration Example | Growi",
  description:
    "An example app using Growi's Stripe integration to track affiliates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        async
        src="https://cdn.growi.io/growi.js"
        data-growi={process.env.NEXT_PUBLIC_GROWI_ID}
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
