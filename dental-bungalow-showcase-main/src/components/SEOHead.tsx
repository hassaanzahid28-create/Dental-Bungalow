import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
}

const SEOHead = ({ title, description, canonical }: SEOHeadProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dental Bungalow",
    image: "",
    "@id": "",
    url: "",
    telephone: "+923247235114",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zulfiqar Ali Shahid Road, Bawa Chak, Opposite WAPDA Office",
      addressLocality: "Faisalabad",
      postalCode: "38000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.4187,
      longitude: 73.0791,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "3",
    },
    openingHours: "Mo-Sa 11:00-20:00",
    priceRange: "$$",
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEOHead;
