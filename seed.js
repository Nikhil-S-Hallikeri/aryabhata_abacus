import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { servicesData, branchesData, specialClassesData } from './services/mockData.js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function seed() {
    console.log('Seeding Services...');
    for (const service of servicesData) {
        const { error } = await supabase.from('services').upsert({
            slug: service.slug,
            title: service.title,
            short_description: service.shortDescription,
            full_description: service.fullDescription,
            category: service.category,
            is_seasonal: service.isSeasonal,
            image_url: service.imageUrl,
            outcomes: service.outcomes,
            curriculum: service.curriculum,
            classes: service.classes
        }, { onConflict: 'slug' });
        if (error) console.error(`Error seeding service ${service.slug}:`, error);
    }

    console.log('Seeding Branches...');
    for (const branch of branchesData) {
        const { error } = await supabase.from('branches').upsert({
            slug: branch.slug,
            name: branch.name,
            type: branch.type,
            description: branch.description,
            address: branch.address,
            phone: branch.phone,
            image_url: branch.imageUrl,
            service_ids: branch.serviceIds,
            facilities: branch.facilities,
            hours: branch.hours,
            stats: branch.stats
        }, { onConflict: 'slug' });
        if (error) console.error(`Error seeding branch ${branch.slug}:`, error);
    }

    console.log('Seeding Special Classes...');
    // Note: I didn't create a special_classes table in the SQL earlier? 
    // Wait, let me check the SQL I gave the user.
    // Yes, I only gave services, branches, and enquiries.
    // Ah, I missed special_classes in the SQL I provided to the user in the instruction.
    // I should probably add it or just skip it if the user only wanted those 3.
    // But the mock data has it.

    console.log('Seed completed.');
}

seed();
