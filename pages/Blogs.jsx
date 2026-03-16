import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { getBlogs } from '../services/api';
import SEOHead from '../components/SEOHead';
import { buildBreadcrumbSchema } from '../components/schema/BreadcrumbSchema';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    const categories = ['All', 'Education', 'Fashion', 'Self-Defense', 'Career'];

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBlogs();
            setBlogs(data);
            setFilteredBlogs(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredBlogs(blogs);
        } else {
            setFilteredBlogs(blogs.filter(b => b.category === filter));
        }
    }, [filter, blogs]);

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

    const featuredBlog = blogs[0];
    const otherBlogs = filteredBlogs.filter(b => b.id !== featuredBlog?.id);

    return (
        <div className="pb-20 bg-slate-50 min-h-screen">
            <SEOHead
                title="Blog | Abacus Tips, Education & Learning Insights"
                description="Read expert articles on abacus benefits, vedic maths techniques, mental arithmetic tips, and education insights from Aryabhata Academy, Haveri."
                canonical="/blogs"
                jsonLd={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Blog', url: '/blogs' },
                    ]),
                ]}
            />
            {/* Full-screen Knowledge Hero */}
            <div className="relative min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900 z-10" />
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                        src="Blogs.avif"
                        alt="Knowledge Hub"
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
                            Academy Insights
                        </motion.span>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                        >
                            The <span className="text-orange-500">Knowledge</span> Hub
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
                        >
                            Explore articles, news, and expert tips from our educators to stay ahead in your learning journey.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Featured Post Spotlight */}
            {!loading && featuredBlog && filter === 'All' && (
                <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-30">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-white flex flex-col lg:flex-row"
                    >
                        <div className="lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
                            <img
                                src={featuredBlog.imageUrl}
                                alt={featuredBlog.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                            <span className="text-sky-500 font-black text-xs uppercase tracking-widest mb-4">Featured Article</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight line-clamp-2">
                                {featuredBlog.title}
                            </h2>
                            <p className="text-slate-500 text-lg mb-10 line-clamp-3 leading-relaxed">
                                {featuredBlog.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                                <Link
                                    to={`/blogs/${featuredBlog.slug}`}
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-orange-500 transition-all shadow-xl shadow-slate-900/20"
                                >
                                    Read Selection <ArrowRight size={20} />
                                </Link>
                                <div className="hidden sm:flex items-center gap-3 text-slate-400">
                                    <Clock size={16} />
                                    <span className="text-sm font-bold uppercase tracking-tighter">{featuredBlog.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Modern Filter Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">Latest Publications</h2>
                        <p className="text-slate-500 text-lg">Deep dives into education, design, and personal growth from our expert faculty.</p>
                    </div>
                    {/* <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
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
                    </motion.div> */}
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-[500px] bg-slate-200 animate-pulse rounded-[2.5rem]"></div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {(filter === 'All' ? otherBlogs : filteredBlogs).map(blog => (
                            <motion.div key={blog.id} variants={fadeInUp}>
                                <BlogCard blog={blog} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
