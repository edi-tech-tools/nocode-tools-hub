import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Menu, X, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: {
    default: "JuniperNode — Low-Code & No-Code Platform Reviews 2026",
    template: "%s — JuniperNode",
  },
  description:
    "JuniperNode curates and compares low-code and no-code platforms with expert reviews, pricing breakdowns, and real G2 ratings. Based in Porto, Portugal.",
  keywords: [
    "low-code platforms",
    "no-code tools",
    "low-code development",
    "no-code reviews",
    "platform comparisons",
    "JuniperNode",
    "Porto Portugal",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JuniperNode",
    title: "JuniperNode — Low-Code & No-Code Platform Reviews 2026",
    description:
      "Expert-curated comparisons of low-code and no-code platforms with real ratings and pricing insights.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-[#0a0414]">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50">
          <div className="absolute inset-0 bg-[#0a0414]/80 backdrop-blur-xl border-b border-[#7c3aed]/10" />
          <div className="relative max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] flex items-center justify-center text-white font-bold text-sm group-hover:scale-105 transition-transform">
                JN
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Juniper<span className="text-[#a78bfa]">Node</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm text-white/70 hover:text-[#a78bfa] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-white/70 hover:text-[#a78bfa] transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-sm text-white/70 hover:text-[#a78bfa] transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="text-sm text-white/70 hover:text-[#a78bfa] transition-colors">
                FAQ
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="relative pb-10 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="border-t border-[#7c3aed]/10 pt-10 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] flex items-center justify-center text-white font-bold text-xs">
                      JN
                    </div>
                    <span className="text-base font-bold text-white">
                      Juniper<span className="text-[#a78bfa]">Node</span>
                    </span>
                  </div>
                  <p className="text-sm text-white/50 max-w-sm leading-relaxed">
                    Expert-curated low-code and no-code platform comparisons.
                    Based in Porto, Portugal. Helping teams build faster with the right tools.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Pages</h4>
                  <div className="flex flex-col gap-2">
                    <Link href="/" className="text-sm text-white/50 hover:text-[#a78bfa] transition-colors">Home</Link>
                    <Link href="/about" className="text-sm text-white/50 hover:text-[#a78bfa] transition-colors">About Us</Link>
                    <Link href="/blog" className="text-sm text-white/50 hover:text-[#a78bfa] transition-colors">Blog</Link>
                    <Link href="/faq" className="text-sm text-white/50 hover:text-[#a78bfa] transition-colors">FAQ</Link>
                    <Link href="/contact" className="text-sm text-white/50 hover:text-[#a78bfa] transition-colors">Contact</Link>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Legal</h4>
                  <div className="flex flex-col gap-2">
                    <Link href="/privacy" className="text-sm text-white/50 hover:text-[#a78bfa] transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="text-sm text-white/50 hover:text-[#a78bfa] transition-colors">Terms of Service</Link>
                    <Link href="/disclosure" className="text-sm text-white/50 hover:text-[#a78bfa] transition-colors">Affiliate Disclosure</Link>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#7c3aed]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-white/40">
                  &copy; {new Date().getFullYear()} JuniperNode. All rights reserved.
                </p>
                <p className="text-xs text-white/30">
                  Made with ❤️ in Porto, Portugal
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
