import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGalleryItems } from '../services/api';
import SEOHead from '../components/SEOHead';
import { buildBreadcrumbSchema } from '../components/schema/BreadcrumbSchema';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getGalleryItems();
            setItems(data);
            setFilteredItems(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredItems(items);
        } else {
            setFilteredItems(items.filter(item => item.category === filter));
        }
    }, [filter, items]);

    const categories = ['All', ...new Set(items.map(item => item.category))];

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
            if (e.key === 'ArrowRight' && selectedImage) {
                const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id);
                if (currentIndex < filteredItems.length - 1) {
                    setSelectedImage(filteredItems[currentIndex + 1]);
                }
            }
            if (e.key === 'ArrowLeft' && selectedImage) {
                const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id);
                if (currentIndex > 0) {
                    setSelectedImage(filteredItems[currentIndex - 1]);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, filteredItems]);

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="pb-20 bg-slate-50 min-h-screen text-center">
            <SEOHead
                title="Gallery | Student Life at Aryabhata Abacus Academy"
                description="Photos and videos of abacus competitions, fashion shows, student achievements, and campus life at Aryabhata Abacus Academy, Haveri, Karnataka."
                canonical="/gallery"
                jsonLd={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Gallery', url: '/gallery' },
                    ]),
                ]}
            />
            <div className="relative bg-slate-900 text-white min-h-screen flex flex-col justify-center py-16 text-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src="/gallery.avif"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 ">Our <span className="text-orange-500">Gallery</span></motion.h1>
                        <motion.p variants={fadeInUp} className="text-slate-300 text-lg md:text-xl">Glimpses of life at the Academy</motion.p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest text-slate-400">Scroll to Explore</span>
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-orange-400 to-transparent animate-pulse" />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-left">
                    <h2 className="text-3xl font-black text-slate-900 border-l-4 rounded border-orange-500 pl-4">Explore Our Moments</h2>
                    <div className="flex-1 w-full md:w-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex overflow-x-auto scrollbar-hide gap-3 w-full pb-4 px-2"
                        >
                            {categories.map((cat, index) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all shrink-0 ${filter === cat
                                        ? 'bg-orange-500 text-white shadow-lg'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                        } ${index === 0 ? 'sticky left-0 z-10' : ''}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center">
                        <div className="animate-spin h-8 w-8 border-2 border-orange-500 rounded-full border-t-transparent"></div>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence>
                            {filteredItems.map(item => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    key={item.id}
                                    className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-square"
                                >
                                    <img
                                        src={item.imageUrl}
                                        alt={item.caption}
                                        onClick={() => setSelectedImage(item)}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className="text-white font-medium">{item.caption}</p>
                                    </div> */}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            className="absolute top-6 right-6 text-white/70 hover:text-white z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl max-h-screen flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.imageUrl}
                                alt={selectedImage.caption}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />
                            {/* {selectedImage.caption && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-white mt-6 text-xl font-medium"
                                >
                                    {selectedImage.caption}
                                </motion.p>
                            )} */}
                            
                            <p className="text-orange-500 mt-2 text-sm uppercase tracking-widest px-4 py-1 bg-orange-500/10 rounded-full border border-orange-500/20">
                                {selectedImage.category}
                            </p>
                        </motion.div>

                        {/* Navigation Arrows */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 pointer-events-none">
                            <button
                                className={`p-3 rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-all pointer-events-auto ${filteredItems.findIndex(i => i.id === selectedImage.id) === 0 ? 'invisible' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const idx = filteredItems.findIndex(i => i.id === selectedImage.id);
                                    setSelectedImage(filteredItems[idx - 1]);
                                }}
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                className={`p-3 rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-all pointer-events-auto ${filteredItems.findIndex(i => i.id === selectedImage.id) === filteredItems.length - 1 ? 'invisible' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const idx = filteredItems.findIndex(i => i.id === selectedImage.id);
                                    setSelectedImage(filteredItems[idx + 1]);
                                }}
                            >
                                <ChevronRight size={32} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
