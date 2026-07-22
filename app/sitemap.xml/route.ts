import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "5-nocode-automations-save-20-hours-weekly",
  "7-no-code-tools-transform-workflow-2026",
  "agentic-no-code-ai-automation-2026",
  "ai-powered-no-code-workflows-automating-complex-business-processes",
  "best-no-code-crm-tools-small-business-2026",
  "best-no-code-database-tools-2026",
  "best-no-code-form-builders-2026-comparison",
  "bubble-saas-mvp-guide",
  "bubble-vs-webflow-vs-flutterflow-2026",
  "build-customer-dashboard-no-code-airtable-notion-softr-2026",
  "building-a-no-code-saas-mvp-step-by-step-guide-2026",
  "building-internal-tools-without-code-2026-retool-budibase-appsmith-tooljet",
  "building-nocode-customer-feedback-loop-2026",
  "building-production-ready-apps-with-no-code-real-world-success-stories",
  "building-saas-mvp-with-no-code-tools-2026",
  "data-analytics-without-code-snowflake-vs-databricks",
  "google-io-2026-gemini-enterprise-ai",
  "hubspot-saas-growth-signals-2026",
  "junipernode-low-code-platforms-porto",
  "no-code-ai-automation-trends-2026",
  "no-code-automation-workflow-best-practices-2026",
  "no-code-development-best-practices-for-production-ready-applications",
  "no-code-devops-deployment-pipelines-2026",
  "no-code-form-builders-2026-typeform-jotform-tally-fillout",
  "no-code-observability-monitoring-production-apps-2026",
  "no-code-seo-tools-guide",
  "nocodb-vs-airtable-vs-baserow-practical-diary",
  "nocode-2026-non-developers-building-production-apps",
  "nocode-ai-tools-2026-build-apps-without-coding",
  "nocode-api-integration-tools-comparison-2026",
  "nocode-automation-tools-comparison-make-vs-n8n-vs-zapier-vs-activepieces-2026",
  "nocode-database-migration-airtable-to-supabase",
  "nocode-internal-tools-builder-comparison-2026",
  "nocode-mobile-app-builders-glide-adalo-draftbit-flutterflow-2026",
  "nocode-saas-platforms-2026",
  "nocode-vs-traditional-development-2026",
  "vertical-nocode-platforms-winning-2026",
  "zapier-vs-make-vs-n8n-2026-comparison",
  "building-custom-inventory-dashboard-retool-supabase-diary",
  "nocode-automation-ticket-system-make-airtable-diary",
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