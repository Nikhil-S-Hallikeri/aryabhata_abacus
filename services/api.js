import { servicesData, branchesData, blogsData, galleryData, videosData, testimonialsData, specialClassesData } from './mockData';

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getServices = async () => {
    await delay(200);
    return servicesData;
};

export const getServiceBySlug = async (slug) => {
    await delay(200);
    return servicesData.find(s => s.slug === slug);
};

export const getBranches = async () => {
    await delay(200);
    return branchesData;
};

export const getBranchBySlug = async (slug) => {
    await delay(200);
    return branchesData.find(b => b.slug === slug);
};

export const getBlogs = async () => {
    await delay(200);
    return blogsData;
};

export const getBlogBySlug = async (slug) => {
    await delay(200);
    return blogsData.find(b => b.slug === slug);
};

export const getGalleryItems = async () => {
    await delay(200);
    return galleryData;
};

export const getVideos = async () => {
    await delay(200);
    return videosData;
};

export const getTestimonials = async () => {
    await delay(200);
    return testimonialsData;
};

export const getSpecialClasses = async () => {
    await delay(200);
    return specialClassesData;
};

