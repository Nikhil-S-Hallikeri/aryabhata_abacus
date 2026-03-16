import React, { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { getServices, getBranches } from '../services/api';
import SEOHead from '../components/SEOHead';
import { buildBreadcrumbSchema } from '../components/schema/BreadcrumbSchema';

const Services = () => {
    const [services, setServices] = useState([]);

    const [branches, setBranches] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const filter = searchParams.get('category')?.toLowerCase() || 'all';

    // Helper to generate slug from category name
    const slugify = (text) => (text || '').toLowerCase().trim().replace(/\s+/g, '-');

    // Helper to find category name from slug
    const findCategoryBySlug = (slug, categories) => {
        if (!slug || slug === 'all') return 'all';
        return categories.find(cat => slugify(cat) === slug) || 'all';
    };

    const [categories, setCategories] = useState(['All']);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getServices();
            setServices(data);


            // Dynamic categories from data
            const uniqueCategories = ['All', ...new Set(data.map(s => s.category).filter(Boolean))];
            setCategories(uniqueCategories);

            setLoading(false);

        };
        fetchData();
    }, []);

    const filteredServices = useMemo(() => {
        if (filter === 'all') return services;
        return services.filter(s => slugify(s.category) === filter);
    }, [filter, services]);

    const handleFilterChange = (cat) => {
        const newParams = new URLSearchParams(searchParams);
        const slugifiedCat = slugify(cat);
        if (slugifiedCat === 'all') {
            newParams.delete('category');
        } else {
            newParams.set('category', slugifiedCat);
        }
        setSearchParams(newParams);
    };

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
        <div className="pb-20 bg-slate-50 min-h-screen">
            <SEOHead
                title="Our Programs | Abacus, Vedic Maths & Fashion Design Courses"
                description="Explore certified abacus, vedic mathematics, mental arithmetic, and fashion design courses at Aryabhata Academy, Haveri. Programs for all ages and skill levels."
                canonical="/services"
                jsonLd={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Programs', url: '/services' },
                    ]),
                ]}
            />
            {/* Premium Hero Section */}
            <div className="relative min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/50 z-10" />
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                        src="services.avif"
                        alt="Academy"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-semibold tracking-wider text-sm uppercase"
                        >
                            Professional Training & Development
                        </motion.span>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                        >
                            Our <span className="text-orange-500">Curated</span> Programs
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light"
                        >
                            Expert-led courses designed to spark curiosity, build confidence, and master specialized skills for the modern world.
                        </motion.p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest text-slate-400">Scroll to Explore</span>
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-orange-500 to-transparent animate-pulse" />
                </motion.div>
            </div>

            {/* Learning Philosophy (Quick Info) */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-30">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-white flex flex-wrap justify-around gap-8">
                    {[
                        { label: 'Methodology', value: 'Hands-on Learning' },
                        { label: 'Certification', value: 'Global Standards' },
                        { label: 'Faculty', value: '10+ Years Exp' }
                    ].map((item, i) => (
                        <div key={i} className="text-center sm:text-left">
                            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">{item.label}</p>
                            <p className="text-lg font-bold text-slate-900">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <h2 className="text-3xl font-black text-slate-900 border-l-4 rounded border-orange-500 pl-4">Explore Our Programs</h2>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="flex overflow-x-auto scrollbar-hide gap-3 w-full md:w-auto pb-4 -mb-4 px-2"
                    >
                        {categories.map((cat, index) => (
                            <button
                                key={cat}
                                onClick={() => handleFilterChange(cat)}
                                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all border shrink-0 ${slugify(cat) === filter
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/20'
                                    : 'bg-white text-slate-500 border-slate-100 hover:border-orange-200 hover:text-orange-500'
                                    } ${index === 0 ? 'sticky left-0 z-10' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-96 bg-slate-200 animate-pulse rounded-3xl"></div>
                        ))}
                    </div>
                ) : filteredServices.length > 0 ? (
                    <motion.div
                        key={filter}
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredServices.map(service => (
                            <motion.div key={service.id} variants={fadeInUp} layout>
                                <ServiceCard service={service} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-20 text-slate-500">
                        <p className="text-xl">No services found in this category.</p>
                        <button onClick={() => handleFilterChange('All')} className="mt-4 text-orange-500 font-bold underline">Clear filters</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
