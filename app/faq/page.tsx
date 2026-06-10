"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is low-code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Low-code is a software development approach that requires minimal hand-coding. It provides visual development environments with drag-and-drop components, pre-built templates, and connectors. Unlike no-code (which requires zero programming knowledge), low-code platforms allow developers to extend functionality with custom scripts and code when needed. Examples include OutSystems, Mendix, and Retool.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between no-code and low-code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No-code platforms require zero programming knowledge — users build entirely through visual interfaces. Low-code platforms reduce but don't eliminate the need for coding, allowing developers to extend functionality with custom scripts. No-code is best for business users and non-technical teams, while low-code suits IT departments and professional developers who need flexibility.",
      },
    },
    {
      "@type": "Question",
      name: "How do you choose the right low-code platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choosing the right low-code platform involves defining your requirements, evaluating visual development capabilities, checking integration options, assessing scalability, reviewing pricing models, testing with free trials, and considering vendor support. At JuniperNode, we recommend starting with your specific use case — internal tools, customer-facing apps, or workflow automation — and matching platforms to that need.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular low-code categories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular low-code categories include Internal Tools (Retool, Budibase, Appsmith), Web Application Development (OutSystems, Mendix, Appian), Workflow Automation (Ninox, Kintone), Mobile App Development (FlutterFlow, Draftbit), and Database & Backend (Supabase, Xano, NocoDB). Many of these platforms connect via APIs to create powerful integrated systems.",
      },
    },
    {
      "@type": "Question",
      name: "How much should a business spend on low-code platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Low-code platform pricing varies widely. Individual developer plans range from $20-$150/month. Team plans can cost $500-$5,000/month. Enterprise deployments often run $20,000-$100,000+/year including support and governance features. At JuniperNode, we recommend starting with team-level plans and scaling up as your development velocity and governance needs grow.",
      },
    },
    {
      "@type": "Question",
      name: "What is vendor lock-in in low-code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vendor lock-in is a key concern with low-code platforms. Some platforms only host your applications on their infrastructure, making it difficult to migrate. Others, like Budibase and NocoDB, are open-source and self-hostable. Before committing to a platform, evaluate its export capabilities, API access, and whether you retain ownership of your application code and data.",
      },
    },
    {
      "@type": "Question",
      name: "How do low-code platforms handle security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enterprise low-code platforms implement encryption at rest and in transit, SOC 2 Type II audits, ISO 27001 certification, GDPR compliance, regular penetration testing, multi-factor authentication (MFA), and role-based access controls (RBAC). Always verify a platform's security posture against your organization's requirements before adoption.",
      },
    },
    {
      "@type": "Question",
      name: "Can low-code replace traditional development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Low-code complements rather than replaces traditional development. It excels at accelerating common business applications — internal tools, CRUD apps, dashboards, and workflow automation. Complex, high-performance, or highly differentiated software still benefits from custom development. The most successful organizations use low-code strategically for the 80% of applications that follow standard patterns.",
      },
    },
    {
      "@type": "Question",
      name: "What skills does a low-code developer need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Low-code developers benefit from understanding data modeling, logic design, API concepts, and user experience principles. While platforms abstract away syntax, knowing how databases, APIs, and authentication work is crucial for building production-quality applications. Many organizations find that the best low-code developers come from both business analyst and traditional developer backgrounds.",
      },
    },
    {
      "@type": "Question",
      name: "What is the future of low-code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The low-code market is projected to exceed $65 billion by 2030. Key trends include AI-assisted development (co-pilots that generate logic from natural language), enterprise-grade governance and security features, increased interoperability through open APIs, vertical-specific solutions, and hybrid platforms that let teams switch between visual and code modes seamlessly.",
      },
    },
  ],
};

const FAQ_ITEMS = [
  {
    question: "What is low-code?",
    answer:
      "Low-code is a software development approach that requires minimal hand-coding. It provides visual development environments with drag-and-drop components, pre-built templates, and connectors. Unlike no-code (which requires zero programming knowledge), low-code platforms allow developers to extend functionality with custom scripts and code when needed. Examples include OutSystems, Mendix, and Retool.",
  },
  {
    question: "What's the difference between no-code and low-code?",
    answer:
      "No-code platforms require zero programming knowledge — users build entirely through visual interfaces. Low-code platforms reduce but don't eliminate the need for coding, allowing developers to extend functionality with custom scripts. No-code is best for business users and non-technical teams, while low-code suits IT departments and professional developers who need flexibility.",
  },
  {
    question: "How do you choose the right low-code platform?",
    answer:
      "Choosing the right low-code platform involves defining your requirements, evaluating visual development capabilities, checking integration options, assessing scalability, reviewing pricing models, testing with free trials, and considering vendor support. At JuniperNode, we recommend starting with your specific use case — internal tools, customer-facing apps, or workflow automation — and matching platforms to that need.",
  },
  {
    question: "What are the most popular low-code categories?",
    answer:
      "Popular low-code categories include Internal Tools (Retool, Budibase, Appsmith), Web Application Development (OutSystems, Mendix, Appian), Workflow Automation (Ninox, Kintone), Mobile App Development (FlutterFlow, Draftbit), and Database & Backend (Supabase, Xano, NocoDB). Many of these platforms connect via APIs to create powerful integrated systems.",
  },
  {
    question: "How much should a business spend on low-code platforms?",
    answer:
      "Low-code platform pricing varies widely. Individual developer plans range from $20-$150/month. Team plans can cost $500-$5,000/month. Enterprise deployments often run $20,000-$100,000+/year including support and governance features. At JuniperNode, we recommend starting with team-level plans and scaling up as your development velocity and governance needs grow.",
  },
  {
    question: "What is vendor lock-in in low-code?",
    answer:
      "Vendor lock-in is a key concern with low-code platforms. Some platforms only host your applications on their infrastructure, making it difficult to migrate. Others, like Budibase and NocoDB, are open-source and self-hostable. Before committing to a platform, evaluate its export capabilities, API access, and whether you retain ownership of your application code and data.",
  },
  {
    question: "How do low-code platforms handle security?",
    answer:
      "Enterprise low-code platforms implement encryption at rest and in transit, SOC 2 Type II audits, ISO 27001 certification, GDPR compliance, regular penetration testing, multi-factor authentication (MFA), and role-based access controls (RBAC). Always verify a platform's security posture against your organization's requirements before adoption.",
  },
  {
    question: "Can low-code replace traditional development?",
    answer:
      "Low-code complements rather than replaces traditional development. It excels at accelerating common business applications — internal tools, CRUD apps, dashboards, and workflow automation. Complex, high-performance, or highly differentiated software still benefits from custom development. The most successful organizations use low-code strategically for the 80% of applications that follow standard patterns.",
  },
  {
    question: "What skills does a low-code developer need?",
    answer:
      "Low-code developers benefit from understanding data modeling, logic design, API concepts, and user experience principles. While platforms abstract away syntax, knowing how databases, APIs, and authentication work is crucial for building production-quality applications. Many organizations find that the best low-code developers come from both business analyst and traditional developer backgrounds.",
  },
  {
    question: "What is the future of low-code?",
    answer:
      "The low-code market is projected to exceed $65 billion by 2030. Key trends include AI-assisted development (co-pilots that generate logic from natural language), enterprise-grade governance and security features, increased interoperability through open APIs, vertical-specific solutions, and hybrid platforms that let teams switch between visual and code modes seamlessly.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#a78bfa] bg-[#7c3aed]/10 px-3 py-1.5 rounded-md mb-4">
              FAQ
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
              Everything you need to know about low-code platforms — from choosing the right
              platform to understanding pricing, security, and industry trends.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="card-liquid rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-white font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#a78bfa] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-white/60 leading-relaxed text-sm border-t border-[#7c3aed]/10 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-[#a78bfa] hover:underline font-medium"
              >
                Contact the JuniperNode team
              </a>{" "}
              and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
