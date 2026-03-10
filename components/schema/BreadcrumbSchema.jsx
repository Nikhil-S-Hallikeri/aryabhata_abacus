import { SITE_CONFIG } from '../../seo.config';

/**
 * buildBreadcrumbSchema — Returns a JSON-LD BreadcrumbList object.
 * Google uses this to show the path in search results:
 *   aryabhata-abacus.vercel.app › Branches › Haveri Branch
 *
 * Usage:
 *   import { buildBreadcrumbSchema } from '../components/schema/BreadcrumbSchema';
 *   <SEOHead jsonLd={[buildBreadcrumbSchema([
 *     { name: 'Home', url: '/' },
 *     { name: 'Branches', url: '/branches' },
 *     { name: 'Haveri Branch' },  ← last item has no url (current page)
 *   ])]} />
 */
export const buildBreadcrumbSchema = (items = []) => {
    if (!items.length) return null;
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            ...(item.url && { "item": `${SITE_CONFIG.siteUrl}${item.url}` }),
        })),
    };
};

export default buildBreadcrumbSchema;
