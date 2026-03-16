import { SITE_CONFIG } from '../../seo.config';

/**
 * buildLocalBusinessSchema — Returns a JSON-LD LocalBusiness object.
 * 
 * Pass `branch` prop for branch-detail pages (overrides defaults).
 * Used on: Home, Contact, and BranchDetail pages.
 *
 * ✅ All default values come from seo.config.js — change once, updates everywhere.
 *
 * Usage in a page:
 *   import { buildLocalBusinessSchema } from '../components/schema/LocalBusinessSchema';
 *   <SEOHead jsonLd={[buildLocalBusinessSchema()]} ... />
 *   OR for a specific branch:
 *   <SEOHead jsonLd={[buildLocalBusinessSchema(branchData)]} ... />
 */
export const buildLocalBusinessSchema = (branch = null) => ({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": branch?.name
        ? `${SITE_CONFIG.shortName} - ${branch.name}`
        : SITE_CONFIG.name,
    "alternateName": SITE_CONFIG.shortName,
    "url": SITE_CONFIG.siteUrl,
    "logo": `${SITE_CONFIG.siteUrl}/logo.avif`,
    "image": branch?.imageUrl || SITE_CONFIG.ogImage,
    "description": branch?.description || SITE_CONFIG.description,
    "foundingDate": SITE_CONFIG.foundedYear,
    "telephone": branch?.phone || SITE_CONFIG.phone,
    "email": SITE_CONFIG.email,
    "address": {
        "@type": "PostalAddress",
        "streetAddress": branch?.address || SITE_CONFIG.address.street,
        "addressLocality": SITE_CONFIG.address.city,
        "addressRegion": SITE_CONFIG.address.state,
        "postalCode": SITE_CONFIG.address.pincode,
        "addressCountry": SITE_CONFIG.address.countryCode,
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": SITE_CONFIG.geo.latitude,
        "longitude": SITE_CONFIG.geo.longitude,
    },
    "openingHours": branch?.hours || SITE_CONFIG.openingHours,
    "areaServed": SITE_CONFIG.serviceAreas.map((area) => ({
        "@type": "City",
        "name": area,
    })),
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Courses",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Abacus Training" } },
            { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Vedic Mathematics" } },
            { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Mental Arithmetic" } },
            { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Fashion Design" } },
        ],
    },
    "sameAs": [SITE_CONFIG.googleBusinessUrl].filter(Boolean),
});

export default buildLocalBusinessSchema;
