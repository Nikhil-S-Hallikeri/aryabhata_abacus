import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { getServices } from '../services/api';

const Services = () => {
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    const categories = ['All', 'Abacus', 'Fashion Design', 'Drawing', 'Spoken English'];

    useEffect(() => {
        const fetchData = async () => {
            const data = await getServices();
            setServices(data);
            setFilteredServices(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredServices(services);
        } else {
            setFilteredServices(services.filter(s => s.category === filter));
        }
    }, [filter, services]);

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
            {/* Premium Hero Section */}
            <div className="relative min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900 z-10" />
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                        src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1600"
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
                {/* Modern Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
                    <h2 className="text-2xl font-bold text-slate-900">Explore Categories</h2>
                    <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all border ${filter === cat
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/20'
                                    : 'bg-white text-slate-500 border-slate-100 hover:border-orange-200 hover:text-orange-500'
                                    }`}
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
                        <button onClick={() => setFilter('All')} className="mt-4 text-orange-500 font-bold underline">Clear filters</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
