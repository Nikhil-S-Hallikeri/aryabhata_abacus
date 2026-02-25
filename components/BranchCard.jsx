import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowUpRight, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const BranchCard = ({ branch }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-200/40 h-full flex flex-col"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={branch.imageUrl}
                    alt={branch.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                {/* Branch Type Badge */}
                <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 bg-white/20 backdrop-blur-xl border border-white/30 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl">
                        {branch.type}
                    </span>
                </div>

                {/* Main Campus Indicator */}
                {branch.type === 'Main Campus' && (
                    <div className="absolute top-6 right-6">
                        <div className="bg-orange-500 text-white p-2.5 rounded-2xl shadow-xl flex items-center justify-center">
                            <GraduationCap size={18} />
                        </div>
                    </div>
                )}

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6">
                    <p className="flex items-center gap-2 text-sky-400 text-xs font-black uppercase tracking-widest mb-1">
                        <MapPin size={12} /> {branch.address.split(',').pop().trim()}
                    </p>
                    <h3 className="text-2xl font-black text-white leading-tight">
                        {branch.name}
                    </h3>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow">
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                    {branch.description}
                </p>

                <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-600 transition-colors">
                        <Phone size={16} className="text-orange-400" />
                        <span className="text-sm font-bold">{branch.phone}</span>
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
                    <Link
                        to={`/branches/${branch.slug}`}
                        className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center transition-all hover:bg-orange-500 hover:scale-110 shadow-lg shadow-slate-900/20 group-hover:rotate-12"
                    >
                        <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default BranchCard;
