"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are no-code tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No-code tools are visual development platforms that allow users to build software applications, websites, automations, and databases without writing any code. They use drag-and-drop interfaces, pre-built templates, and visual logic editors instead of traditional programming languages. Popular examples include Bubble (web apps), Webflow (websites), Airtable (databases), Zapier (automations), and Adalo (mobile apps). These tools democratize software creation, enabling entrepreneurs, designers, and business professionals to bring ideas to life without engineering resources.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need coding skills to use no-code platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, that's the entire premise of no-code tools. They are specifically designed for people without programming experience. You interact with visual interfaces — dragging components onto a canvas, connecting workflows with logic blocks, configuring options through dropdowns and forms, and managing data through spreadsheet-like views. That said, having some familiarity with logical thinking, data structures, and basic technical concepts will help you learn faster. Many successful no-code builders come from design, marketing, operations, and sales backgrounds with zero coding experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can no-code tools build professional applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. No-code platforms are used to build production-grade applications that serve real customers and generate revenue. Companies have built fully functional marketplaces, SaaS products, CRMs, booking systems, internal dashboards, and e-commerce stores using tools like Bubble, Webflow, and FlutterFlow. Notable examples include a startup that built and sold a $4M SaaS product on Bubble, and enterprises using Retool for internal admin panels. Modern no-code platforms handle authentication, payment processing, API integrations, responsive design, and scalable hosting out of the box.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between no-code and low-code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No-code platforms target non-technical users with purely visual interfaces and zero coding required. Low-code platforms, while still significantly faster than traditional development, expect some coding for advanced functionality — custom logic, complex integrations, or performance optimization. Low-code tools like OutSystems, Mendix, and Appian are often used by professional developers to accelerate enterprise application delivery. No-code prioritizes accessibility and speed of iteration, while low-code prioritizes flexibility and control. The lines blur as some no-code tools add code-level customization options.",
      },
    },
    {
      "@type": "Question",
      name: "Are no-code tools secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Security in no-code platforms depends on both the platform provider and how you configure your application. Reputable no-code platforms invest heavily in infrastructure security — they handle encryption at rest and in transit, SOC 2 compliance, GDPR data processing, regular penetration testing, and DDoS protection. However, security vulnerabilities can arise from misconfigured user permissions, exposed API keys, weak authentication flows, or poor data validation in your app logic. Treat no-code security the same as traditional development: follow best practices, limit data exposure, use proper authentication, and audit your app regularly.",
      },
    },
    {
      "@type": "Question",
      name: "How much do no-code tools cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No-code tool pricing varies widely by platform and use case. Most offer free tiers with limitations — Webflow is free for basic sites, Airtable free for 1,000 records/workspace, Bubble free with branding. Paid plans typically range from $15–$100/month for individual or small team plans, and $100–$500+/month for professional or business tiers with advanced features, higher usage limits, and custom domains. Enterprise plans with dedicated infrastructure, SSO, and premium support can reach several thousand dollars per year. Always factor in third-party service costs for payments, email, and external APIs.",
      },
    },
    {
      "@type": "Question",
      name: "Which no-code platform is best for building a SaaS product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bubble is the most popular choice for full-stack no-code SaaS development because it handles databases, user authentication, workflows, responsive design, and API integrations in one platform. For data-heavy SaaS tools, Airtable combined with Softr or Glide works well for internal tools and simple external apps. If you need a polished frontend with custom logic, FlutterFlow produces high-quality mobile and web apps with native performance. For AI-powered SaaS products, tools like Dify or the Bubble + OpenAI API combination are excellent. Consider your specific requirements for scalability, data modeling, and user interface complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Can no-code tools scale with my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but with caveats. No-code platforms have different scaling ceilings. Bubble can handle hundreds of thousands of users with proper optimization, dedicated hosting, and workload management. Webflow scales well for content-heavy sites with CDN caching. Airtable works great for teams of dozens but struggles with million-row datasets. The key is choosing the right platform for your scaling trajectory — start with no-code to validate your product and acquire early users, then migrate critical components to custom code if you hit platform limits. Many successful businesses operate exclusively on no-code at $1M–$10M+ revenue.",
      },
    },
    {
      "@type": "Question",
      name: "What are the limitations of no-code development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No-code has honest limitations worth knowing. Performance ceilings exist — complex database queries, real-time processing, and high-traffic scenarios may require optimization workarounds. Customization is constrained by what the platform exposes; unique UI interactions or niche algorithms may be impossible without code. Vendor lock-in is a real concern — migrating off a no-code platform means rebuilding from scratch in most cases. Debugging can be harder because you're working within black-box components. Interoperability with specialized systems sometimes requires middleware. For most applications these aren't dealbreakers, but evaluate them honestly against your long-term product vision.",
      },
    },
    {
      "@type": "Question",
      name: "How do no-code tools integrate with other software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No-code tools integrate primarily through three mechanisms: native integrations, REST APIs, and automation platforms like Zapier or Make. Native integrations connect directly to popular services like Stripe (payments), OpenAI (AI), Google Sheets (data), and Slack (notifications). REST API connectors allow you to fetch, send, and manipulate data from any service with an API — giving you access to thousands of potential integrations. Webhook triggers enable real-time data flow between platforms. Automation platforms act as the glue, connecting your no-code app to hundreds of other tools without any coding. Always check a platform's integration marketplace before committing.",
      },
    },
    {
      "@type": "Question",
      name: "Is no-code a good career path?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No-code is an excellent and rapidly growing career path. Roles include No-Code Developer, Automation Specialist, Product Builder, and No-Code Consultant. Professionals build MVPs for startups, automate workflows for enterprises, create internal tools, and develop client projects — all without writing code. The global no-code market is projected to reach $187 billion by 2030, driving high demand for skilled builders. Salaries for experienced no-code professionals range from $60K–$150K+, comparable to junior-to-mid-level software engineers. The barrier to entry is low, but the best no-code practitioners combine technical problem-solving skills with product thinking and business acumen.",
      },
    },
    {
      "@type": "Question",
      name: "What's the future of no-code development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The future of no-code is being transformed by AI. Generative AI copilots will let users describe applications in natural language and have them assembled automatically. We're already seeing AI-powered features that generate workflows, suggest UI layouts, and write automation logic. No-code and traditional development will converge — professional developers will use no-code for rapid prototyping and frontend work while still writing custom backend services. Enterprise adoption is accelerating, with Gartner predicting that 70% of new applications will be built with no-code or low-code by 2028. No-code isn't replacing developers; it's expanding who can create software.",
      },
    },
  ],
};

const FAQ_ITEMS = [
  {
    question: "What are no-code tools?",
    answer:
      "No-code tools are visual development platforms that allow users to build software applications, websites, automations, and databases without writing any code. They use drag-and-drop interfaces, pre-built templates, and visual logic editors instead of traditional programming languages. Popular examples include Bubble (web apps), Webflow (websites), Airtable (databases), Zapier (automations), and Adalo (mobile apps). These tools democratize software creation, enabling entrepreneurs, designers, and business professionals to bring ideas to life without engineering resources.",
  },
  {
    question: "Do I need coding skills to use no-code platforms?",
    answer:
      "No, that's the entire premise of no-code tools. They are specifically designed for people without programming experience. You interact with visual interfaces — dragging components onto a canvas, connecting workflows with logic blocks, configuring options through dropdowns and forms, and managing data through spreadsheet-like views. That said, having some familiarity with logical thinking, data structures, and basic technical concepts will help you learn faster. Many successful no-code builders come from design, marketing, operations, and sales backgrounds with zero coding experience.",
  },
  {
    question: "Can no-code tools build professional applications?",
    answer:
      "Absolutely. No-code platforms are used to build production-grade applications that serve real customers and generate revenue. Companies have built fully functional marketplaces, SaaS products, CRMs, booking systems, internal dashboards, and e-commerce stores using tools like Bubble, Webflow, and FlutterFlow. Notable examples include a startup that built and sold a $4M SaaS product on Bubble, and enterprises using Retool for internal admin panels. Modern no-code platforms handle authentication, payment processing, API integrations, responsive design, and scalable hosting out of the box.",
  },
  {
    question: "What's the difference between no-code and low-code?",
    answer:
      "No-code platforms target non-technical users with purely visual interfaces and zero coding required. Low-code platforms, while still significantly faster than traditional development, expect some coding for advanced functionality — custom logic, complex integrations, or performance optimization. Low-code tools like OutSystems, Mendix, and Appian are often used by professional developers to accelerate enterprise application delivery. No-code prioritizes accessibility and speed of iteration, while low-code prioritizes flexibility and control. The lines blur as some no-code tools add code-level customization options.",
  },
  {
    question: "Are no-code tools secure?",
    answer:
      "Security in no-code platforms depends on both the platform provider and how you configure your application. Reputable no-code platforms invest heavily in infrastructure security — they handle encryption at rest and in transit, SOC 2 compliance, GDPR data processing, regular penetration testing, and DDoS protection. However, security vulnerabilities can arise from misconfigured user permissions, exposed API keys, weak authentication flows, or poor data validation in your app logic. Treat no-code security the same as traditional development: follow best practices, limit data exposure, use proper authentication, and audit your app regularly.",
  },
  {
    question: "How much do no-code tools cost?",
    answer:
      "No-code tool pricing varies widely by platform and use case. Most offer free tiers with limitations — Webflow is free for basic sites, Airtable free for 1,000 records/workspace, Bubble free with branding. Paid plans typically range from $15–$100/month for individual or small team plans, and $100–$500+/month for professional or business tiers with advanced features, higher usage limits, and custom domains. Enterprise plans with dedicated infrastructure, SSO, and premium support can reach several thousand dollars per year. Always factor in third-party service costs for payments, email, and external APIs.",
  },
  {
    question: "Which no-code platform is best for building a SaaS product?",
    answer:
      "Bubble is the most popular choice for full-stack no-code SaaS development because it handles databases, user authentication, workflows, responsive design, and API integrations in one platform. For data-heavy SaaS tools, Airtable combined with Softr or Glide works well for internal tools and simple external apps. If you need a polished frontend with custom logic, FlutterFlow produces high-quality mobile and web apps with native performance. For AI-powered SaaS products, tools like Dify or the Bubble + OpenAI API combination are excellent. Consider your specific requirements for scalability, data modeling, and user interface complexity.",
  },
  {
    question: "Can no-code tools scale with my business?",
    answer:
      "Yes, but with caveats. No-code platforms have different scaling ceilings. Bubble can handle hundreds of thousands of users with proper optimization, dedicated hosting, and workload management. Webflow scales well for content-heavy sites with CDN caching. Airtable works great for teams of dozens but struggles with million-row datasets. The key is choosing the right platform for your scaling trajectory — start with no-code to validate your product and acquire early users, then migrate critical components to custom code if you hit platform limits. Many successful businesses operate exclusively on no-code at $1M–$10M+ revenue.",
  },
  {
    question: "What are the limitations of no-code development?",
    answer:
      "No-code has honest limitations worth knowing. Performance ceilings exist — complex database queries, real-time processing, and high-traffic scenarios may require optimization workarounds. Customization is constrained by what the platform exposes; unique UI interactions or niche algorithms may be impossible without code. Vendor lock-in is a real concern — migrating off a no-code platform means rebuilding from scratch in most cases. Debugging can be harder because you're working within black-box components. Interoperability with specialized systems sometimes requires middleware. For most applications these aren't dealbreakers, but evaluate them honestly against your long-term product vision.",
  },
  {
    question: "How do no-code tools integrate with other software?",
    answer:
      "No-code tools integrate primarily through three mechanisms: native integrations, REST APIs, and automation platforms like Zapier or Make. Native integrations connect directly to popular services like Stripe (payments), OpenAI (AI), Google Sheets (data), and Slack (notifications). REST API connectors allow you to fetch, send, and manipulate data from any service with an API — giving you access to thousands of potential integrations. Webhook triggers enable real-time data flow between platforms. Automation platforms act as the glue, connecting your no-code app to hundreds of other tools without any coding. Always check a platform's integration marketplace before committing.",
  },
  {
    question: "Is no-code a good career path?",
    answer:
      "No-code is an excellent and rapidly growing career path. Roles include No-Code Developer, Automation Specialist, Product Builder, and No-Code Consultant. Professionals build MVPs for startups, automate workflows for enterprises, create internal tools, and develop client projects — all without writing code. The global no-code market is projected to reach $187 billion by 2030, driving high demand for skilled builders. Salaries for experienced no-code professionals range from $60K–$150K+, comparable to junior-to-mid-level software engineers. The barrier to entry is low, but the best no-code practitioners combine technical problem-solving skills with product thinking and business acumen.",
  },
  {
    question: "What's the future of no-code development?",
    answer:
      "The future of no-code is being transformed by AI. Generative AI copilots will let users describe applications in natural language and have them assembled automatically. We're already seeing AI-powered features that generate workflows, suggest UI layouts, and write automation logic. No-code and traditional development will converge — professional developers will use no-code for rapid prototyping and frontend work while still writing custom backend services. Enterprise adoption is accelerating, with Gartner predicting that 70% of new applications will be built with no-code or low-code by 2028. No-code isn't replacing developers; it's expanding who can create software.",
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
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#3B82F6] bg-[#162440] px-3 py-1.5 rounded-md mb-4">
              FAQ
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#F0F4F8] tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#8BA3BE] max-w-xl mx-auto leading-relaxed">
              Everything you need to know about no-code tools — from choosing
              the right platform to understanding pricing, security, and the
              future of development.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-[#0F1D32] border border-[#1E3A5F] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#162440] transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[#F0F4F8] font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3B82F6] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-[#8BA3BE] leading-relaxed text-sm border-t border-[#1E3A5F] pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-[#8BA3BE] text-sm">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-[#3B82F6] hover:underline font-medium"
              >
                Contact our team
              </a>{" "}
              and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
