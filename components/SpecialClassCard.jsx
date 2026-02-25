import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpecialClassCard = ({ item }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-orange-500/20 flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative h-32 md:h-48 overflow-hidden shrink-0">
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="flex items-center gap-2 bg-orange-500 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                        <Sparkles size={10} className="animate-pulse" />
                        {item.badge}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 md:p-6 relative flex flex-col flex-grow text-left">
                <div className="flex-grow flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map(tag => (
                            <span key={tag} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 text-[9px] uppercase font-bold px-2 py-1 rounded-lg">
                                <Tag size={10} className="text-orange-400" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-white mb-1 leading-tight group-hover:text-orange-400 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-orange-400/80 text-[10px] font-bold uppercase tracking-widest mb-3">
                        {item.subtitle}
                    </p>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-2">
                        {item.description}
                    </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-medium">
                        <Calendar size={12} className="text-sky-400" />
                        <span>{item.dates}</span>
                    </div>

                    <Link
                        to={item.link}
                        className="flex items-center gap-2 text-white font-black text-xs hover:text-orange-500 transition-colors group/btn"
                    >
                        Learn More
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Background Glow */}
            <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[100px] opacity-20 transition-colors duration-500 ${item.status === 'active' ? 'bg-orange-500' : 'bg-sky-500'}`} />
        </motion.div>

    );
};

export default SpecialClassCard;
