import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — JuniperNode",
  description:
    "Read the Terms of Service for JuniperNode. By using our low-code platform directory, you agree to these terms governing your use of the website and services.",
};

export default function TermsPage() {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#a78bfa] bg-[#7c3aed]/10 px-3 py-1.5 rounded-md mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm">
            Last updated: June 11, 2026
          </p>
        </div>

        <div className="space-y-8 text-white/60 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the JuniperNode website (the &quot;Site&quot;), you agree to be
              bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to all of these
              Terms, you are prohibited from using the Site. We reserve the right to modify these
              Terms at any time, and your continued use constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
            <p>
              JuniperNode is a curated directory and review platform that provides information,
              comparisons, and expert analysis of low-code and no-code software platforms.
              Our platform serves as a research and discovery resource. We do not
              sell, license, or distribute the software products listed on our Site unless
              explicitly stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. User Accounts and Registration</h2>
            <p className="mb-3">
              Certain features of the Site may require account registration. When creating an
              account, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete registration information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. User Conduct</h2>
            <p className="mb-3">You agree not to use the Site to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Submit false, misleading, or fraudulent information, including fake reviews</li>
              <li>Upload or transmit viruses, malware, or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems or user accounts</li>
              <li>Scrape, crawl, or data-mine the Site without our express written permission</li>
              <li>Send unsolicited communications (spam) through or about our platform</li>
              <li>Harass, abuse, or harm other users or our staff</li>
              <li>Interfere with the proper functioning of the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property</h2>
            <p className="mb-3">
              The Site and its original content, features, and functionality — including but not
              limited to the layout, design, logos, trademarks, database structure, and written
              content — are owned by JuniperNode and are protected by international
              copyright, trademark, and intellectual property laws.
            </p>
            <p>
              Product names, logos, and brand names listed on our directory are the property of
              their respective owners. Our use of these trademarks is for identification and
              informational purposes only and does not imply endorsement or affiliation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Platform Listings and Reviews</h2>
            <p className="mb-3">
              Information about platforms listed on our site is gathered from hands-on testing
              by our team, vendor-provided data, and aggregated user review sources. We strive
              for accuracy but make no guarantees regarding the completeness or accuracy of
              third-party information.
            </p>
            <p className="mb-3">
              Our reviews reflect the expert opinions of the JuniperNode team based on hands-on
              testing and publicly available data. We maintain editorial independence in our
              ratings and reviews. Sponsored content or affiliate relationships are clearly
              disclosed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Third-Party Links and Services</h2>
            <p>
              Our Site contains links to third-party websites and services that are not owned or
              controlled by JuniperNode. We have no control over, and assume no
              responsibility for, the content, privacy policies, or practices of any third-party
              sites. You acknowledge that we shall not be liable for any damages or losses caused
              by your use of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Pricing Information</h2>
            <p className="mb-3">
              Pricing information displayed on our platform is based on publicly available data
              and hands-on verification. Prices are subject to change by the respective
              vendors. We encourage users to verify pricing directly with the platform provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, JuniperNode, its officers, directors,
              employees, and affiliates shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or relating to your use of the
              Site. This includes, without limitation, loss of profits, data, use, or goodwill.
              Our total liability shall not exceed €100.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Disclaimer of Warranties</h2>
            <p>
              The Site and all content are provided on an &quot;as is&quot; and &quot;as available&quot; basis
              without warranties of any kind, either express or implied, including but not limited
              to merchantability, fitness for a particular purpose, or non-infringement. We do
              not warrant that the Site will be uninterrupted, error-free, secure, or free of
              viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless JuniperNode and its
              affiliates, officers, agents, and employees from any claims, damages, losses,
              liabilities, and expenses (including reasonable attorneys&apos; fees) arising out of
              your use of the Site, your violation of these Terms, or your violation of any
              third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Termination</h2>
            <p>
              We may terminate or suspend your access to the Site immediately, without prior
              notice or liability, for any reason, including breach of these Terms. Upon
              termination, your right to use the Site will cease immediately. Provisions of these
              Terms that by their nature should survive termination shall survive, including
              intellectual property provisions, disclaimers, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of
              Portugal, without regard to its conflict of law provisions. Any disputes
              arising under these Terms shall be resolved in the courts of Porto, Portugal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">14. Contact Information</h2>
            <div className="mt-4 p-5 card-liquid rounded-xl">
              <p className="mb-2"><strong className="text-white">Email:</strong> legal@junipernode.com</p>
              <p className="mb-2"><strong className="text-white">General:</strong> hello@junipernode.com</p>
              <p><strong className="text-white">Address:</strong> Rua do Bonfim, 123, 4300-071 Porto, Portugal</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
