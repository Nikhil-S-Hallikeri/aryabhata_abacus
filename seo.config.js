/**
 * ============================================================
 *  CENTRALIZED SEO & BUSINESS CONFIGURATION
 *  ✅ Edit this ONE file to update all pages, schemas &
 *     structured data across the entire website.
 * ============================================================
 */

export const SITE_CONFIG = {
    // ── Business Identity ──────────────────────────────────────
    name: "Aryabhata Abacus & Vedic Maths Academy",
    shortName: "Aryabhata Abacus",
    tagline: "Unlock Your Child's Mental Math Potential",
    foundedYear: "2010",
    description:
        "Aryabhata Abacus & Vedic Maths Academy — Haveri's most trusted abacus and mental arithmetic training institute since 2010. Enroll your child today for certified abacus, vedic maths, and fashion design courses.",

    // ── Contact & Address ──────────────────────────────────────
    // 🔑 Change here → updates ALL pages & structured data
    phone: "+91-9876543210",          // ← replace with real phone
    whatsapp: "919876543210",         // ← replace (no + or spaces)
    email: "info@aryabhataabacus.com",// ← replace with real email

    address: {
        street: "Main Road, Haveri",    // ← replace with real street
        city: "Haveri",
        district: "Haveri",
        state: "Karnataka",
        country: "India",
        countryCode: "IN",
        stateCode: "KA",
        pincode: "581110",              // ← replace with real pincode
    },

    // ── Geo Coordinates (for LocalBusiness schema) ─────────────
    geo: {
        latitude: "14.7954",            // ← replace with exact coords
        longitude: "75.3997",
    },

    // ── Service Area (cities you serve) ────────────────────────
    // Appears in schema areaServed + local SEO content
    serviceAreas: [
        "Haveri",
        "Ranebennur",
        "Savanur",
        "Byadgi",
        "Shirhatti",
        "Hangal",
        "Haveri District",
    ],

    // ── Site URLs ──────────────────────────────────────────────
    siteUrl: "https://aryabhata-abacus.vercel.app",
    ogImage: "https://aryabhata-abacus.vercel.app/og-image.png",

    // ── Social / Maps ──────────────────────────────────────────
    googleMapsUrl: "https://maps.google.com/?q=Aryabhata+Abacus+Haveri+Karnataka",
    googleBusinessUrl: "", // ← add once Google Business Profile is created

    // ── Business Hours ─────────────────────────────────────────
    openingHours: "Mo-Sa 09:00-18:00",

    // ── Stats (used in schema & content) ──────────────────────
    stats: {
        students: "5000+",
        branches: "8+",
        years: "14+",
    },

    // ── Default SEO fallbacks ──────────────────────────────────
    defaultTitle: "Aryabhata Abacus & Vedic Maths | Haveri, Karnataka",
    defaultDescription:
        "Best abacus classes in Haveri, Karnataka. Aryabhata Academy offers certified abacus, vedic maths & fashion design courses for children across Haveri district.",
    defaultKeywords:
        "abacus in haveri, abacus class haveri, vedic maths haveri, abacus training karnataka, mental arithmetic class haveri, abacus for kids haveri, best abacus institute haveri, aryabhata abacus, abacus ranebennur, abacus savanur, abacus haveri district",
};
