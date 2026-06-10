// JSON-LD Schema for Organization (used on home/about pages)
export function organizationSchema(name: string, url: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    description,
  };
}

// JSON-LD Schema for SoftwareApplication (used on tool detail pages)
export function softwareSchema(
  name: string,
  category: string,
  ratingValue: number,
  reviewCount: number,
  price: string,
  priceCurrency: string = "USD"
) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toString(),
      ratingCount: reviewCount.toString(),
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency,
    },
  };
}

// JSON-LD Schema for BlogPosting (used on blog pages)
// Accept either individual params or a post object
export function blogPostSchema(
  headlineOrPost: any,
  author?: string,
  datePublished?: string,
  publisherName?: string,
  description?: string
) {
  // Support both object-style and individual param style
  const headline = typeof headlineOrPost === "object" ? headlineOrPost.title : headlineOrPost;
  const authorName = typeof headlineOrPost === "object" ? headlineOrPost.author : author;
  const publishedDate = typeof headlineOrPost === "object" ? headlineOrPost.date : datePublished;
  const desc = typeof headlineOrPost === "object" ? headlineOrPost.excerpt : description;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    author: {
      "@type": "Person",
      name: authorName,
    },
    datePublished: publishedDate,
    description: desc,
    publisher: {
      "@type": "Organization",
      name: "JuniperNode",
    },
  };
}

// JSON-LD Schema for WebPage (used on category/list pages)
export function webPageSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
  };
}
