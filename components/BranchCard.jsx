import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowUpRight, GraduationCap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const BranchCard = ({ branch, compact = false }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-200/40 h-full flex flex-col w-full`}
        >
            {/* Image Section */}
            <div className={`relative ${compact ? 'h-48' : 'h-64'} overflow-hidden`}>
                <img
                    src={branch.imageUrl}
                    alt={branch.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                {/* Branch Type Badge */}
                <div className={`absolute ${compact ? 'top-4 left-4' : 'top-6 left-6'}`}>
                    <span className="px-5 py-2 bg-white/20 backdrop-blur-xl border border-white/30 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl">
                        {branch.type}
                    </span>
                </div>

                {/* Main Campus Indicator */}
                {branch.type === 'Main Campus' && (
                    <div className={`absolute ${compact ? 'top-4 right-4' : 'top-6 right-6'}`}>
                        <div className="bg-orange-500 text-white p-2.5 rounded-2xl shadow-xl flex items-center justify-center">
                            <GraduationCap size={18} />
                        </div>
                    </div>
                )}

                {/* Bottom Overlay Info */}
                <div className={`absolute ${compact ? 'bottom-4 left-4 right-4' : 'bottom-6 left-6 right-6'}`}>
                    <p className="flex items-center gap-2 text-sky-400 text-[10px] font-black uppercase tracking-widest mb-0.5">
                        <MapPin size={10} /> {branch.address.split(',').pop().trim()}
                    </p>
                    <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-black text-white leading-tight`}>
                        {branch.name}
                    </h3>
                </div>
            </div>

            {/* Content Section */}
            <div className={`${compact ? 'p-6' : 'p-8'} flex flex-col flex-grow text-left`}>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2 font-medium">
                    {branch.description}
                </p>

                <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-600 transition-colors">
                        <Phone size={14} className="text-orange-400" />
                        <span className="text-xs font-bold">{branch.phone}</span>
                    </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex gap-4">
                        <div className="text-center">
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">Experts</p>
                            <p className="text-sm font-black text-slate-900">{branch.stats.faculty}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">Students</p>
                            <p className="text-sm font-black text-slate-900">{branch.stats.students}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {branch.websiteUrl && (
                            <a
                                href={branch.websiteUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center transition-all hover:bg-sky-500 hover:text-white shadow-lg shadow-sky-200/50"
                                title="Visit Website"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Globe size={18} />
                            </a>
                        )}
                        <Link
                            to={`/branches/${branch.slug}`}
                            className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center transition-all hover:bg-orange-500 hover:scale-110 shadow-lg shadow-slate-900/20 group-hover:rotate-12"
                        >
                            <ArrowUpRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BranchCard;
