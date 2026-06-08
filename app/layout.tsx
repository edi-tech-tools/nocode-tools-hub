import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NoCode Tools — Best No-Code Tools & Platform Reviews 2026",
    template: "%s — NoCode Tools",
  },
  description:
    "Compare no-code tools with verified reviews, pricing breakdowns, and expert comparisons. Find the perfect no-code platform for your business.",
  keywords: [
    "no-code tools",
    "low-code platforms",
    "no-code development",
    "website builders no code",
    "app builders no code",
    "no-code automation",
    "no-code database",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NoCode Tools",
    title: "NoCode Tools — Best No-Code Tools & Platform Reviews 2026",
    description:
      "Compare no-code tools with verified reviews, pricing, and expert comparisons.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
