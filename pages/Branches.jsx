import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BranchCard from '../components/BranchCard';
import { getBranches } from '../services/api';
import SEOHead from '../components/SEOHead';
import { buildBreadcrumbSchema } from '../components/schema/BreadcrumbSchema';

const Branches = () => {
    const [branches, setBranches] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const filter = searchParams.get('type')?.toLowerCase() || 'all';

    const slugify = (text) => (text || '').toLowerCase().trim().replace(/\s+/g, '-');

    const [categories, setCategories] = useState(['All']);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBranches();
            setBranches(data);

            // Dynamic categories from data
            const uniqueTypes = ['All', ...new Set(data.map(b => b.type).filter(Boolean))];
            setCategories(uniqueTypes);

            setLoading(false);
        };
        fetchData();
    }, []);

    const filteredBranches = useMemo(() => {
        if (filter === 'all') return branches;
        return branches.filter(b => slugify(b.type) === filter);
    }, [filter, branches]);

    const handleFilterChange = (cat) => {
        const newParams = new URLSearchParams(searchParams);
        const slugifiedCat = slugify(cat);
        if (slugifiedCat === 'all') {
            newParams.delete('type');
        } else {
            newParams.set('type', slugifiedCat);
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
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="pb-20 bg-slate-50 min-h-screen">
            <SEOHead
                title="Our Branches | Abacus Centers in Haveri, Ranebennur & Savanur"
                description="Find Aryabhata Abacus centers near you. We have branches in Haveri, Ranebennur, Savanur, Byadgi, Shirhatti and across Haveri district, Karnataka."
                canonical="/branches"
                jsonLd={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Branches', url: '/branches' },
                    ]),
                ]}
            />
            {/* Full-screen Immersive Hero Section */}
            <div className="relative min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80 z-10" />
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                        src="branches.jpg"
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
                            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-sky-500/90 border border-sky-500/30 text-slate-100 font-semibold tracking-wider text-sm uppercase"
                        >
                            City-wide Excellence
                        </motion.span>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                        >
                            Our <span className="text-orange-500">Learning</span> Hubs
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-slate-100 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
                        >
                            Find the campus nearest to you. Each of our locations is designed to provide a cohesive, modern, and inspiring environment for every student.
                        </motion.p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest text-slate-400">Scroll to Explore</span>
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-orange-500 to-transparent animate-pulse" />
                </motion.div>
            </div>

            {/* Quick Stats Overlay */}
            <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-30">
                <div className="bg-white rounded-3xl p-10 shadow-2xl shadow-slate-200/50 border border-white flex flex-wrap justify-around items-center gap-10">
                    {[
                        { label: 'Total Branches', value: '5+', color: 'text-orange-500' },
                        { label: 'Expert Faculty', value: '10+', color: 'text-sky-500' },
                        { label: 'Enrolled Students', value: '500+', color: 'text-lime-500' },
                        { label: 'Success Stories', value: '1k+', color: 'text-orange-500' }
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
                    <div className="max-w-xl text-left">
                        <h2 className="text-4xl font-black text-slate-900 mb-4 border-l-8 rounded border-sky-500 pl-6">Campus Network</h2>
                        <p className="text-slate-500 text-lg">Filter our specialized learning centers by campus category.</p>
                    </div>
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
                                className={`px-8 py-3 rounded-2xl text-sm font-black transition-all border shrink-0 ${slugify(cat) === filter
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/30'
                                    : 'bg-white text-slate-400 border-slate-100 hover:border-orange-200 hover:text-orange-600'
                                    } ${index === 0 ? 'sticky left-0 z-10' : ''}`}
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
                        key={filter}
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
                                <button onClick={() => handleFilterChange('All')} className="mt-4 text-orange-500 font-black hover:underline">View All Branches</button>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Branches;
