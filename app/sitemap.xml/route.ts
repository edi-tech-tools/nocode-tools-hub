import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "junipernode-low-code-platforms-porto",
  "hubspot-saas-growth-signals-2026",
  "google-io-2026-gemini-enterprise-ai",
  "saas-pricing-models-comparison",
  "best-data-warehousing-tools-2026",
  "best-customer-success-software-2026",
  "best-ecommerce-platforms-business-2026",
  "enterprise-ai-agent-orchestration-2026",
  "marketing-automation-platforms-comparison-2026",
  "customer-success-software-reduce-churn",
  "best-remote-work-tools-2026",
  "top-project-management-tools-2026",
  "best-data-analytics-tools-business-2026",
  "slack-vs-microsoft-teams-2026-comparison",
  "top-10-crm-software-2026",
  "saas-pricing-strategies",
  "ai-tools-productivity-2026",
  "remote-team-collaboration-tools",
  "cybersecurity-best-practices",
  "email-marketing-automation-guide",
  "project-management-methodologies",
  "devops-tools-comparison",
  "hr-software-digital-transformation",
  "saas-gtm-strategy-2026",
  "customer-support-automation",
  "ipaas-integration-platforms-comparison-2026",
  "mixpanel-vs-amplitude-vs-hotjar-2026",
  "outreach-vs-salesloft-vs-gong-business-sales-engagement-2026",
  "shopify-vs-woocommerce-vs-bigcommerce-ecommerce-platforms-2026",
  "build-customer-dashboard-no-code-airtable-notion-softr-2026",
  "no-code-ai-automation-trends-2026",
  "bubble-vs-webflow-vs-flutterflow-2026",
  "nocode-saas-platforms-2026",
  "5-nocode-automations-save-20-hours-weekly",
  "vertical-nocode-platforms-winning-2026",
  "bubble-saas-mvp-guide",
  "nocodb-vs-airtable-vs-baserow-practical-diary",
  "nocode-2026-non-developers-building-production-apps",
  "nocode-api-integration-tools-comparison-2026",
  "nocode-internal-tools-builder-comparison-2026",
  "zapier-vs-make-vs-n8n-2026-comparison",
  "nocode-vs-traditional-development-2026",
  "nocode-ai-tools-2026-build-apps-without-coding",
  "ai-powered-no-code-workflows-automating-complex-business-processes",
  "nocode-mobile-app-builders-glide-adalo-draftbit-flutterflow-2026",
  "building-saas-mvp-with-no-code-tools-2026",
  "no-code-form-builders-2026-typeform-jotform-tally-fillout",
  "building-nocode-customer-feedback-loop-2026",
  "nocode-database-migration-airtable-to-supabase",
  "no-code-seo-tools-guide",
  "best-no-code-form-builders-2026-comparison",
  "best-no-code-database-tools-2026",
  "no-code-observability-monitoring-production-apps-2026",
  "building-internal-tools-without-code-2026-retool-budibase-appsmith-tooljet",
  "no-code-automation-workflow-best-practices-2026",
  "building-a-no-code-saas-mvp-step-by-step-guide-2026",
  "data-analytics-without-code-snowflake-vs-databricks",
  "building-production-ready-apps-with-no-code-real-world-success-stories",
  "no-code-devops-deployment-pipelines-2026",
  "nocode-automation-tools-comparison-make-vs-n8n-vs-zapier-vs-activepieces-2026",
  "best-no-code-crm-tools-small-business-2026"
];

const TOOL_SLUGS = [
  "salesforce-crm",
  "hubspot-marketing",
  "slack-enterprise",
  "zoom-workplace",
  "asana-business",
  "stripe-payments",
  "docusign-clm",
  "monday-work",
  "zendesk-suite",
  "workday-hcm",
  "datadog-observability",
  "notion-enterprise",
  "okta-identity",
  "mixpanel-analytics",
  "amplitude-analytics",
  "hotjar-analytics",
  "tableau-bi",
  "canva-pro",
  "adobe-creative-cloud",
  "outreach-sales",
  "gong-revenue",
  "zoominfo-intent",
  "linkedin-sales",
  "snowflake-data",
  "databricks-lakehouse",
  "fivetran-integrations",
  "looker-studio",
  "docker-platform",
  "terraform-iac",
  "github-enterprise",
  "circleci-cd",
  "bamboohr-hr",
  "rippling-unified",
  "lattice-people",
  "freshdesk-support",
  "helpscout-cx",
  "marketo-engage",
  "braze-engagement",
  "klaviyo-growth",
  "microsoft-teams",
  "twilio-apis",
  "quickbooks-enterprise",
  "expensify-receipts",
  "jira-software",
  "clickup-tasks",
  "pipedrive-crm",
  "sketch-design",
  "shopify-ecommerce",
  "bigcommerce-platform",
  "woocommerce-plugin",
  "aws-cloud",
  "google-cloud-platform",
  "cloudflare-network",
  "dropbox-sign",
  "optimizely-experimentation",
  "vwo-optimization",
  "crowdstrike-security",
  "snyk-security",
  "1password-enterprise",
  "google-workspace",
  "microsoft-365",
  "evernote-business",
  "zoho-crm",
  "freshsales-crm",
  "ironclad-contracts",
  "legalzoom-business",
  "xero-accounting",
  "plaid-financial",
  "gusto-payroll",
  "culture-amp",
  "intercom-support",
  "figma-design",
  "gitlab-devops",
  "dbt-transformation",
  "mailchimp-marketing",
  "freshchat-messaging",
];

export async function GET() {
  const baseUrl = "https://nocode-tools.net";
  
  const urls: string[] = [];
  
  // Static pages
  urls.push(`<url><loc>${baseUrl}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/blog</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/contact</loc><changefreq>monthly</changefreq><priority>0.4</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/disclosure</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  
  // Blog pages
  for (const slug of BLOG_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/blog/${slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
  }
  
  // Tool pages
  for (const slug of TOOL_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/tools/${slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
  }
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
  
  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}