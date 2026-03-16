import { SITE_CONFIG } from '../../seo.config';

/**
 * buildBlogPostSchema — Returns a JSON-LD BlogPosting object.
 * Makes Google eligible to show rich results (author, date, image)
 * under blog post listings.
 *
 * Usage (in BlogDetail.jsx):
 *   import { buildBlogPostSchema } from '../components/schema/BlogPostSchema';
 *   <SEOHead jsonLd={[buildBlogPostSchema(blog)]} ... />
 *
 * `blog` object should have: title, description/excerpt, imageUrl,
 *  createdAt (ISO date string), author (optional)
 */
export const buildBlogPostSchema = (blog) => {
    if (!blog) return null;
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.excerpt || blog.description || '',
        "image": blog.imageUrl || SITE_CONFIG.ogImage,
        "url": `${SITE_CONFIG.siteUrl}/blogs/${blog.slug}`,
        "datePublished": blog.createdAt || blog.created_at || new Date().toISOString(),
        "dateModified": blog.updatedAt || blog.updated_at || blog.createdAt || new Date().toISOString(),
        "author": {
            "@type": "Organization",
            "name": SITE_CONFIG.name,
            "url": SITE_CONFIG.siteUrl,
        },
        "publisher": {
            "@type": "Organization",
            "name": SITE_CONFIG.name,
            "logo": {
                "@type": "ImageObject",
                "url": `${SITE_CONFIG.siteUrl}/logo.avif`,
            },
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${SITE_CONFIG.siteUrl}/blogs/${blog.slug}`,
        },
        "inLanguage": "en-IN",
    };
};

export default buildBlogPostSchema;
