import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BranchCard from '../components/BranchCard';
import { getBranches } from '../services/api';

const Branches = () => {
    const [branches, setBranches] = useState([]);
    const [filteredBranches, setFilteredBranches] = useState([]);
    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    const categories = ['All', 'Main Campus', 'Franchise'];

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBranches();
            setBranches(data);
            setFilteredBranches(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredBranches(branches);
        } else {
            setFilteredBranches(branches.filter(b => b.type === filter));
        }
    }, [filter, branches]);

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
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="pb-20 bg-slate-50 min-h-screen">
            {/* Full-screen Immersive Hero Section */}
            <div className="relative min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900 z-10" />
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                        src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=1600"
                        alt="Academy Branches"
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
                            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-400 font-semibold tracking-wider text-sm uppercase"
                        >
                            City-wide Excellence
                        </motion.span>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-8xl font-black mb-6 leading-tight"
                        >
                            Our <span className="text-orange-500">Learning</span> Hubs
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
                        >
                            Find the campus nearest to you. Each of our locations is designed to provide a cohesive, modern, and inspiring environment for every student.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Quick Stats Overlay */}
            <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-30">
                <div className="bg-white rounded-3xl p-10 shadow-2xl shadow-slate-200/50 border border-white flex flex-wrap justify-around items-center gap-10">
                    {[
                        { label: 'Total Branches', value: '15+', color: 'text-orange-500' },
                        { label: 'Expert Faculty', value: '100+', color: 'text-sky-500' },
                        { label: 'Enrolled Students', value: '5000+', color: 'text-lime-500' },
                        { label: 'Success Stories', value: '10k+', color: 'text-orange-500' }
                    ].map((item, i) => (
                        <div key={i} className="text-center md:text-left">
                            <p className="text-xs uppercase tracking-widest text-slate-400 font-black mb-2">{item.label}</p>
                            <p className={`text-3xl font-black ${item.color}`}>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Modern Filter Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">Explore Our Campus Network</h2>
                        <p className="text-slate-500 text-lg">Select a category to filter our specialized learning centers and find your perfect fit.</p>
                    </div>
                    <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-2xl text-sm font-black transition-all border ${filter === cat
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/30'
                                    : 'bg-white text-slate-400 border-slate-100 hover:border-orange-200 hover:text-orange-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-96 bg-slate-200 animate-pulse rounded-[2.5rem]"></div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {filteredBranches.length > 0 ? (
                            filteredBranches.map(branch => (
                                <motion.div key={branch.id} variants={fadeInUp}>
                                    <BranchCard branch={branch} />
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 text-slate-400">
                                <p className="text-xl font-medium">No branches found in this category.</p>
                                <button onClick={() => setFilter('All')} className="mt-4 text-orange-500 font-black hover:underline">View All Branches</button>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Branches;
