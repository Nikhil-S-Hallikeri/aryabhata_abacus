import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Clock, Bookmark, ChevronRight, MessageSquare } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { getBlogBySlug, getBlogs } from '../services/api';

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const fetchData = async () => {
            if (!slug) return;
            setLoading(true);
            const data = await getBlogBySlug(slug);
            setBlog(data || null);

            if (data) {
                const allBlogs = await getBlogs();
                setRelatedBlogs(allBlogs.filter(b => b.id !== data.id).slice(0, 2));
            }
            setLoading(false);
        };
        fetchData();
    }, [slug]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin h-12 w-12 border-4 border-orange-500 rounded-full border-t-transparent"></div>
        </div>
    );

    if (!blog) return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-10 bg-slate-50">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Article Not Found</h2>
            <Link to="/blogs" className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-black">Back to Insights</Link>
        </div>
    );

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pb-24 bg-white min-h-screen relative">
            {/* Sticky Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-orange-500 origin-left z-[100]"
                style={{ scaleX }}
            />

            {/* Premium Blog Hero */}
            <div className="relative min-h-screen bg-slate-900 flex flex-col justify-center items-center text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/60 z-10" />
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="relative z-20 max-w-5xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                            <span className="bg-orange-500 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-xl">
                                {blog.category}
                            </span>
                            <span className="flex items-center gap-2 text-white/60 text-xs font-black uppercase tracking-widest">
                                <Clock size={14} className="text-sky-400" /> {blog.readTime}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-tight drop-shadow-2xl">
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                    <User size={20} />
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-black text-sm">{blog.author}</p>
                                    <p className="text-white/50 text-[10px] uppercase font-black tracking-widest">{blog.authorRole}</p>
                                </div>
                            </div>
                            <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                                    <Calendar size={20} />
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-black text-sm">{blog.date}</p>
                                    <p className="text-white/50 text-[10px] uppercase font-black tracking-widest">Published On</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute bottom-10 z-20 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-white/40 rounded-full"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left: Floating Actions Sidebar (Desktop) */}
                    <aside className="hidden lg:block lg:col-span-1 py-10">
                        <div className="sticky top-24 space-y-8 flex flex-col items-center">
                            <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:bg-orange-50 transition-all border border-slate-100">
                                <Share2 size={20} />
                            </button>
                            <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-all border border-slate-100">
                                <Bookmark size={20} />
                            </button>
                            <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-lime-500 hover:bg-lime-50 transition-all border border-slate-100">
                                <MessageSquare size={20} />
                            </button>
                        </div>
                    </aside>

                    {/* Center: Main Content */}
                    <main className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-xl prose-slate max-w-none mb-20"
                        >
                            <Link to="/blogs" className="inline-flex items-center gap-2 text-slate-400 font-bold mb-12 hover:text-orange-500 transition-colors uppercase text-xs tracking-widest">
                                <ArrowLeft size={16} /> Back to all insights
                            </Link>

                            <div className="text-slate-700 leading-relaxed font-medium space-y-8">
                                {blog.content.split('\n\n').map((para, i) => (
                                    <p key={i} className="first-letter:text-5xl first-letter:font-black first-letter:text-orange-500 first-letter:mr-3 first-letter:float-left">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </motion.div>

                        {/* Author Bio Section */}
                        <section className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row gap-10 items-center mb-24">
                            <div className="w-24 h-24 rounded-[2rem] bg-white border-2 border-orange-100 flex items-center justify-center text-orange-500 shadow-xl shadow-orange-100/50">
                                <User size={40} strokeWidth={1.5} />
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-2">Written By</h4>
                                <h3 className="text-2xl font-black text-slate-900 mb-3">{blog.author}</h3>
                                <p className="text-slate-500 italic mb-4">{blog.authorRole}</p>
                                <p className="text-slate-600 font-medium">
                                    An expert in our faculty network with years of experience in specialized institutional learning and curriculum design.
                                </p>
                            </div>
                        </section>

                        {/* Related Articles Hook */}
                        <section>
                            <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4">
                                Keep Reading <ChevronRight className="text-orange-500" size={28} />
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {relatedBlogs.map(rb => (
                                    <Link to={`/blogs/${rb.slug}`} key={rb.id} className="group">
                                        <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-100/50 transition-all p-4">
                                            <div className="h-44 rounded-[1.5rem] overflow-hidden mb-6">
                                                <img src={rb.imageUrl} alt={rb.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase text-sky-500 bg-sky-50 px-3 py-1 rounded-full mb-3 inline-block">{rb.category}</span>
                                            <h4 className="text-xl font-black text-slate-900 line-clamp-2 leading-tight group-hover:text-orange-500 transition-colors">{rb.title}</h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </main>

                    {/* Right: Sidebar Metadata (Desktop) */}
                    <aside className="hidden lg:block lg:col-span-3 py-10 pt-24">
                        <div className="sticky top-24 space-y-12">
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Tags & Topics</h4>
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags?.map(tag => (
                                        <span key={tag} className="px-5 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-black border border-slate-100 hover:bg-orange-50 hover:text-orange-600 transition-all cursor-pointer">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
                                <h4 className="text-sm font-black mb-4">Want more insights?</h4>
                                <p className="text-slate-400 text-xs mb-8 leading-relaxed">Join 5,000+ parents and students who receive our monthly newsletter.</p>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:border-orange-500 outline-none transition-all"
                                    />
                                    <button className="w-full py-3 bg-orange-500 text-white rounded-xl font-black text-sm hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
