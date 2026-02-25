import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200/40"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                        {service.category}
                    </span>
                </div>

                {service.isSeasonal && (
                    <div className="absolute top-4 right-4 animate-pulse">
                        <span className="p-2 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg">
                            <Sparkles size={14} />
                        </span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
                    {service.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                    <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-slate-900 font-black text-sm group/link"
                    >
                        Explore Program
                        <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center transition-all group-hover/link:bg-orange-500 group-hover/link:translate-x-1">
                            <ArrowRight size={14} />
                        </span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
