/**
 * Automatically loads all gallery images from assets/gallery-images
 * Categories are derived from folder names
 */

// We use eager import to have the URLs ready immediately
const images = import.meta.glob('../assets/gallery-images/**/*.{avif,png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default'
});

export const getDynamicGalleryItems = () => {
    return Object.entries(images).map(([path, url]) => {
        // Path format: ../assets/gallery-images/abacus/image1.avif
        const parts = path.split('/');
        const categoryFolderName = parts[parts.length - 2];
        const fileName = parts[parts.length - 1];

        // Format category name: abacus -> Abacus, Fashion_designing&aari_work -> Fashion Designing & Aari Work
        const formattedCategory = categoryFolderName
            .replace(/&/g, ' & ') // Add spaces around &
            .split(/[ _]+/) // Split by underscore or space
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        return {
            id: path, // Use path as unique ID
            category: formattedCategory,
            folder: categoryFolderName, // Internal reference if needed
            imageUrl: url,
            caption: fileName.split('.')[0].replace(/[-_]/g, ' ') // Simple caption from filename
        };
    });
};
