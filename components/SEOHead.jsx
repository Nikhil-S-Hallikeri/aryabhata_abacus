import { useEffect } from 'react';
import { SITE_CONFIG } from '../seo.config';

/**
 * SEOHead — Zero-dependency meta tag manager.
 * Uses React useEffect to directly update document.title and
 * <meta>/<script> tags in the real DOM. No npm packages needed.
 *
 * Works perfectly alongside this project's CDN + Vite hybrid setup.
 *
 * Usage:
 *   <SEOHead
 *     title="Abacus Classes in Haveri | Aryabhata"
 *     description="Join the best abacus training in Haveri..."
 *     canonical="/branches/haveri"
 *     image="/og-image.png"
 *     type="website"        ← optional
 *     noIndex={false}       ← optional, set true for admin pages
 *   />
 *   
 *   // For structured data, pass JSON-LD objects directly:
 *   <SEOHead title="..." jsonLd={[localBusinessSchema, breadcrumbSchema]} />
 */
const SEOHead = ({
    title,
    description,
    canonical,
    image,
    noIndex = false,
    type = 'website',
    jsonLd = [],   // Array of JSON-LD schema objects
}) => {
    const resolvedTitle = title
        ? `${title} | ${SITE_CONFIG.shortName}`
        : SITE_CONFIG.defaultTitle;

    const resolvedDescription = description || SITE_CONFIG.defaultDescription;

    const resolvedImage = image
        ? (image.startsWith('http') ? image : `${SITE_CONFIG.siteUrl}${image}`)
        : SITE_CONFIG.ogImage;

    const resolvedCanonical = canonical
        ? `${SITE_CONFIG.siteUrl}${canonical}`
        : SITE_CONFIG.siteUrl;

    useEffect(() => {
        // ── Title ────────────────────────────────────────────
        document.title = resolvedTitle;

        // ── Helper: set or create a <meta> tag ───────────────
        const setMeta = (selector, attrName, attrValue, content) => {
            let el = document.querySelector(selector);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attrName, attrValue);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
            return el;
        };

        // ── Helper: set or create a <link> tag ───────────────
        const setLink = (rel, href) => {
            let el = document.querySelector(`link[rel="${rel}"]`);
            if (!el) {
                el = document.createElement('link');
                el.setAttribute('rel', rel);
                document.head.appendChild(el);
            }
            el.setAttribute('href', href);
            return el;
        };

        // ── Primary Meta Tags ────────────────────────────────
        setMeta('meta[name="description"]', 'name', 'description', resolvedDescription);
        setMeta('meta[name="robots"]', 'name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');
        setLink('canonical', resolvedCanonical);

        // ── Open Graph ───────────────────────────────────────
        setMeta('meta[property="og:type"]', 'property', 'og:type', type);
        setMeta('meta[property="og:title"]', 'property', 'og:title', resolvedTitle);
        setMeta('meta[property="og:description"]', 'property', 'og:description', resolvedDescription);
        setMeta('meta[property="og:image"]', 'property', 'og:image', resolvedImage);
        setMeta('meta[property="og:url"]', 'property', 'og:url', resolvedCanonical);

        // ── Twitter Card ─────────────────────────────────────
        setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
        setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', resolvedTitle);
        setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', resolvedDescription);
        setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', resolvedImage);

        // ── JSON-LD Structured Data ────────────────────────
        // Remove any previously injected page-level schemas
        document.querySelectorAll('script[data-seo-schema]').forEach(el => el.remove());

        // Inject each schema object
        jsonLd.forEach((schema, i) => {
            if (!schema) return;
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-seo-schema', `schema-${i}`);
            script.textContent = JSON.stringify(schema, null, 2);
            document.head.appendChild(script);
        });

        // Cleanup: on unmount, reset to defaults
        return () => {
            document.title = SITE_CONFIG.defaultTitle;
        };
    }, [resolvedTitle, resolvedDescription, resolvedImage, resolvedCanonical, type, noIndex]);

    // This component renders nothing into the DOM (it only modifies the <head>)
    return null;
};

export default SEOHead;
