import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Mock data as fallback (matching services/api.js logic)
const mockServices = [
    { slug: 'abacus' },
    { slug: 'vedic-maths' },
    { slug: 'spoken-english' },
    { slug: 'karate' },
    { slug: 'hand-writing' },
    { slug: 'drawing-and-craft' },
    { slug: 'fashion-designing' },
    { slug: 'aari-work' },
    { slug: 'navodaya' }
];

const mockBranches = [
    { slug: 'haveri-main-branch' },
    { slug: 'haveri-2' },
    { slug: 'agadi-branch' }
];

const mockBlogs = [
    { slug: 'benefits-of-abacus' },
    { slug: 'sustainable-fashion-trends' },
    { slug: 'vedic-maths-shortcuts' },
    { slug: 'karate-for-discipline' }
];

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const BASE_URL = 'https://aryabhata-abacus.vercel.app';

async function generateSitemap() {
    console.log('🚀 Starting Sitemap Generation...');

    let services = mockServices;
    let branches = mockBranches;
    let blogs = mockBlogs;

    if (supabaseUrl && supabaseAnonKey) {
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        
        try {
            console.log('📡 Fetching data from Supabase...');
            const [{ data: sData }, { data: brData }] = await Promise.all([
                supabase.from('services').select('slug'),
                supabase.from('branches').select('slug')
            ]);

            if (sData && sData.length > 0) services = sData;
            if (brData && brData.length > 0) branches = brData;
            
            console.log(`✅ Fetched ${services.length} services and ${branches.length} branches.`);
        } catch (error) {
            console.error('❌ Error fetching from Supabase, using mock data:', error.message);
        }
    } else {
        console.warn('⚠️ Supabase credentials missing, using mock data.');
    }

    const staticPages = [
        { url: '/', priority: '1.0', changefreq: 'weekly' },
        { url: '/about', priority: '0.8', changefreq: 'monthly' },
        { url: '/services', priority: '0.9', changefreq: 'weekly' },
        { url: '/branches', priority: '0.9', changefreq: 'weekly' },
        { url: '/gallery', priority: '0.6', changefreq: 'monthly' },
        { url: '/blogs', priority: '0.8', changefreq: 'weekly' },
        { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    ];

    const today = new Date().toISOString().split('T')[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Add Static Pages
    staticPages.forEach(page => {
        xml += `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
    });

    // Add Dynamic Services
    services.forEach(item => {
        xml += `  <url>
    <loc>${BASE_URL}/services/${item.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
    });

    // Add Dynamic Branches
    branches.forEach(item => {
        xml += `  <url>
    <loc>${BASE_URL}/branches/${item.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
    });

    // Add Dynamic Blogs
    blogs.forEach(item => {
        xml += `  <url>
    <loc>${BASE_URL}/blogs/${item.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
    });

    xml += `</urlset>`;

    const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, xml);

    console.log(`✨ Sitemap generated successfully at: ${outputPath}`);
}

generateSitemap().catch(err => {
    console.error('💥 Fatal error generating sitemap:', err);
    process.exit(1);
});
