import { servicesData, branchesData, blogsData, galleryData, videosData, testimonialsData, specialClassesData } from './mockData';
import { supabase } from './supabase';

// Utility to map snake_case to camelCase for frontend components
const mapFromSupabase = (data) => {
    if (!data) return null;
    if (Array.isArray(data)) return data.map(item => mapFromSupabase(item));

    return {
        ...data,
        shortDescription: data.short_description,
        fullDescription: data.full_description,
        isSeasonal: data.is_seasonal,
        imageUrl: data.image_url,
        serviceIds: data.service_ids,
        ageGroup: data.age_group,
        websiteUrl: data.website_url,
        // Add others as needed
    };
};

// Helper to fetch from Supabase with fallback
const fetchFromSupabase = async (table, mockData) => {
    try {
        const { data, error } = await supabase.from(table).select('*').order('created_at', { ascending: true });
        if (error || !data || data.length === 0) {
            console.warn(`Supabase ${table} fetch issues, using mock data`, error);
            return mockData;
        }
        return mapFromSupabase(data);
    } catch (err) {
        console.warn(`Supabase ${table} connection failed, using mock data`, err);
        return mockData;
    }
};

export const getServices = async () => {
    return await fetchFromSupabase('services', servicesData);
};

export const getServiceBySlug = async (slug) => {
    try {
        const { data, error } = await supabase.from('services').select('*').eq('slug', slug).single();
        if (error || !data) {
            return servicesData.find(s => s.slug === slug);
        }
        return mapFromSupabase(data);
    } catch (err) {
        return servicesData.find(s => s.slug === slug);
    }
};

export const getBranches = async () => {
    return await fetchFromSupabase('branches', branchesData);
};

export const getBranchBySlug = async (slug) => {
    try {
        const { data, error } = await supabase.from('branches').select('*').eq('slug', slug).single();
        if (error || !data) {
            return branchesData.find(b => b.slug === slug);
        }
        return mapFromSupabase(data);
    } catch (err) {
        return branchesData.find(b => b.slug === slug);
    }
};

export const getBlogs = async () => {
    return blogsData; // Kept static as per request
};

export const getBlogBySlug = async (slug) => {
    return blogsData.find(b => b.slug === slug); // Kept static
};

export const getGalleryItems = async () => {
    return galleryData; // Static
};

export const getVideos = async () => {
    return videosData; // Static
};

export const getTestimonials = async () => {
    return testimonialsData; // Static
};

export const getSpecialClasses = async () => {
    return specialClassesData; // Static for now, or move to Supabase?
};

// New function to submit enquiries
export const submitEnquiry = async (enquiryData) => {
    const { error } = await supabase.from('enquiries').insert(enquiryData);
    if (error) throw error;
    return true;
};

