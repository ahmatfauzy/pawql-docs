import { Host_Grotesk, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "@workspace/ui/globals.css";
import "@ariadocs/react/styles/minimal.css";

export const metadata: Metadata = {
  title: "PawQL — Runtime-first ORM for TypeScript",
  description:
    "Build type-safe database queries with PawQL, a runtime-first TypeScript ORM for PostgreSQL, MySQL, and SQLite. No code generation or build step.",
};

const sans = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} font-sans antialiased mx-auto max-w-4xl px-4 py-10`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
