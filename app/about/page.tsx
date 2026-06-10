import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Code2, Users, Target, Award, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About — JuniperNode",
  description:
    "JuniperNode is a low-code platform review team based in Porto, Portugal. We help teams choose the right low-code tools through expert analysis and real-world testing.",
};

const TEAM = [
  {
    name: "Miguel Oliveira",
    role: "Lead Platform Analyst",
    bio: "Former OutSystems consultant with 8 years in low-code. Miguel leads our platform evaluation methodology and has personally tested 60+ low-code tools.",
  },
  {
    name: "Sofia Nunes",
    role: "Technical Writer & Researcher",
    bio: "Sofia brings deep expertise in no-code automation and workflow platforms. She writes our in-depth comparison guides and manages the tool database.",
  },
  {
    name: "João Pereira",
    role: "Full-Stack Developer & Reviewer",
    bio: "João builds internal demo apps on every platform we review. His hands-on testing ensures our recommendations are grounded in real development experience.",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Hands-On Evaluation",
    desc: "We don't just read documentation — we build real projects on every platform we review. Every rating is backed by actual development experience.",
  },
  {
    icon: Code2,
    title: "Low-Code Focus",
    desc: "Our team specializes in low-code platforms specifically. We understand the unique challenges developers face when choosing between no-code speed and low-code flexibility.",
  },
  {
    icon: MapPin,
    title: "Rooted in Porto",
    desc: "Based in Porto's growing tech hub, we bring a European perspective to platform evaluation. Our location in one of Europe's fastest-growing tech ecosystems informs our analysis.",
  },
  {
    icon: Award,
    title: "Transparent Methodology",
    desc: "Every review clearly separates hands-on testing from aggregated user data. We disclose our evaluation criteria and update reviews as platforms evolve.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#a78bfa] bg-[#7c3aed]/10 px-3 py-1.5 rounded-md mb-4">
            About JuniperNode
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Your Guide to the{" "}
            <span className="text-gradient">Low-Code Landscape</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            JuniperNode helps development teams and technical leaders navigate the
            growing low-code platform ecosystem. We test, compare, and review platforms
            so you can make informed decisions.
          </p>
        </div>

        {/* The Story */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#a78bfa]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Story</h2>
          </div>
          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              JuniperNode was born in Porto, Portugal — a city that has quietly become
              one of Europe&apos;s most vibrant tech hubs. Our founders, Miguel and Sofia,
              met at a low-code conference in Lisbon in 2023 and discovered a shared
              frustration: finding honest, detailed, and up-to-date low-code platform
              comparisons was nearly impossible.
            </p>
            <p>
              Review sites were sponsored. Pricing was hidden behind sales calls. Feature
              comparisons were outdated the moment they were published. And almost no one
              was doing the kind of rigorous, hands-on testing that developers need to
              make platform decisions.
            </p>
            <p>
              So we built JuniperNode. Our mission is simple: provide the most thorough,
              transparent, and practical low-code platform reviews on the web. Every
              platform we review is tested by our team — we build real apps, measure
              actual performance, and document the developer experience honestly.
            </p>
            <p>
              Based in Porto&apos;s Bonfim district, we&apos;re a small team of developers,
              writers, and analysts who believe that the right platform can transform
              how teams build software. We&apos;re independent, opinionated, and committed
              to being your most trusted source for low-code platform intelligence.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#a78bfa]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="card-liquid rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] flex items-center justify-center text-white font-bold text-lg mb-4">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-[#a78bfa] mb-3">{member.role}</p>
                <p className="text-sm text-white/60 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center">
              <Target className="w-5 h-5 text-[#a78bfa]" />
            </div>
            <h2 className="text-2xl font-bold text-white">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="card-liquid rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#7c3aed]/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#a78bfa]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Porto Section */}
        <div className="mb-16">
          <div className="card-liquid rounded-xl p-8 border border-[#7c3aed]/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#a78bfa]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Based in Porto, Portugal</h2>
                <p className="text-sm text-white/60 leading-relaxed">
                  Porto has emerged as one of Europe&apos;s most exciting tech destinations, home to
                  a thriving community of developers, startups, and global tech companies. From our
                  workspace in the Bonfim district, we&apos;re surrounded by the energy of a city
                  that blends centuries of tradition with cutting-edge innovation. It&apos;s the
                  perfect place to think deeply about how low-code platforms are shaping the future
                  of software development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center card-liquid rounded-xl p-10 border border-[#7c3aed]/10">
          <h2 className="text-2xl font-bold text-white mb-4">
            Have a platform suggestion?
          </h2>
          <p className="text-white/60 mb-6 max-w-lg mx-auto">
            We&apos;re always evaluating new low-code platforms. If there&apos;s a tool you think
            we should review, let us know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="mailto:hello@junipernode.com"
              className="px-6 py-3 border border-[#7c3aed]/20 hover:border-[#a78bfa]/40 text-white/60 hover:text-white font-medium rounded-lg transition-all"
            >
              hello@junipernode.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
