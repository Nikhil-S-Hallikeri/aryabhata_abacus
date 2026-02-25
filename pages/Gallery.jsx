import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGalleryItems } from '../services/api';

const Gallery = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(true);

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

    const categories = ['All', 'Abacus', 'Fashion Design', 'Events', 'Campus'];

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
            <div className="relative bg-slate-900 text-white min-h-screen flex flex-col justify-center py-16 text-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src="https://picsum.photos/1600/900?random=25"
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
                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</motion.h1>
                        <motion.p variants={fadeInUp} className="text-slate-300 text-lg md:text-xl">Glimpses of life at the Academy</motion.p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                ? 'bg-orange-500 text-white shadow-lg'
                                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

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
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className="text-white font-medium">{item.caption}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
