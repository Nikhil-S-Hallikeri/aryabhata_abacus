import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogCard = ({ blog }) => {
    return (
        <motion.article
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200/40 h-full flex flex-col w-full"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 bg-white/20 backdrop-blur-xl border border-white/30 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl">
                        {blog.category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                    <span className="flex items-center gap-2"><Calendar size={12} className="text-orange-500" /> {blog.date}</span>
                    <span className="flex items-center gap-2"><Clock size={12} className="text-sky-500" /> {blog.readTime}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-orange-500 transition-colors leading-tight line-clamp-2">
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                    {blog.excerpt}
                </p>

                {/* Footer Section */}
                <div className="mt-auto pt-0 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-orange-100 group-hover:text-orange-500 transition-colors">
                            <User size={14} />
                        </div>
                        <span className="text-xs font-black text-slate-900">{blog.author}</span>
                    </div>
                    <Link
                        to={`/blogs/${blog.slug}`}
                        className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center transition-all hover:bg-orange-500 hover:scale-110 shadow-lg group-hover:rotate-12"
                    >
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;
