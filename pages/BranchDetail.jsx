import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, ArrowLeft, CheckCircle, Clock, Sparkles, Building2, Users2, ShieldCheck, Star, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { getBranchBySlug, getServices } from '../services/api';
import SEOHead from '../components/SEOHead';
import { buildLocalBusinessSchema } from '../components/schema/LocalBusinessSchema';
import { buildBreadcrumbSchema } from '../components/schema/BreadcrumbSchema';
import FormattedText from '../components/FormattedText';

const BranchDetail = () => {
    const { slug } = useParams();
    const [branch, setBranch] = useState(null);
    const [offeredServices, setOfferedServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!slug) return;
            setLoading(true);
            const branchData = await getBranchBySlug(slug);
            setBranch(branchData || null);

            if (branchData) {
                const allServices = await getServices();
                const offering = allServices.filter(s =>
                    branchData.serviceIds?.includes(s.id) ||
                    branchData.serviceIds?.includes(s.slug)
                );
                setOfferedServices(offering);
            }
            setLoading(false);
        };
        fetchData();
    }, [slug]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-10 w-10 border-4 border-orange-500 rounded-full border-t-transparent"></div></div>;
    }

    if (!branch) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h2 className="text-3xl font-black text-slate-900 mb-4">Branch Not Found</h2>
                <Link to="/branches" className="text-orange-600 font-bold hover:underline py-2 px-6 border border-orange-200 rounded-full">Back to Network</Link>
            </div>
        );
    }

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pb-20 min-h-screen bg-slate-50">
            <SEOHead
                title={`${branch.name} | Abacus Center in ${branch.address?.split(',').pop()?.trim() || 'Haveri'}`}
                description={`Aryabhata Abacus center in ${branch.name}: ${branch.description?.substring(0, 130) || 'Certified abacus and vedic maths training. Expert faculty, modern facilities.'}`}
                canonical={`/branches/${branch.slug}`}
                image={branch.imageUrl}
                jsonLd={[
                    buildLocalBusinessSchema(branch),
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Branches', url: '/branches' },
                        { name: branch.name },
                    ]),
                ]}
            />
            {/* Premium Full-screen Hero Header */}
            <div className="relative min-h-screen bg-slate-900 flex flex-col justify-center items-center text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/60 z-10" />
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src={branch.imageUrl}
                        alt={branch.name}
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="relative z-20 p-8 max-w-5xl mx-auto flex flex-col items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                            <span className="bg-sky-500 text-white text-xs font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-xl">
                                {branch.type}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl leading-tight">
                            {branch.name}
                        </h1>
                        <div className="mb-10">
                            <FormattedText
                                content={branch.description}
                                className="text-white text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed text-center"
                            />
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/branches" className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-bold transition-all group">
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Explore Network
                            </Link>
                            <a href="#details" className="px-8 py-3 bg-orange-500 text-white rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30">
                                Campus Details
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div id="details" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Bento Grid Facilities */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Facilities Bento Grid */}
                        <section className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-white">
                            <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
                                <Building2 className="text-sky-500" size={32} /> Campus Amenities
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {branch.facilities?.map((facility, i) => (
                                    <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-sky-200 hover:bg-sky-50 transition-all">
                                        <div className="bg-white p-3 rounded-2xl shadow-sm text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <span className="font-bold text-slate-800">{facility}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Local Highlights & Programs */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-between">
                                <div className="mb-8">
                                    <Sparkles className="text-orange-400 mb-6" size={40} />
                                    <h3 className="text-2xl font-black mb-4">Branch Highlights</h3>
                                    <ul className="space-y-4 text-slate-400">
                                        <li className="flex items-center gap-3"><Users2 size={18} className="text-sky-400" /> {branch.stats.faculty} Dedicated Educators</li>
                                        <li className="flex items-center gap-3"><Clock size={18} className="text-lime-400" /> Open {branch.hours.split(':')[0]}</li>
                                        <li className="flex items-center gap-3"><Building2 size={18} className="text-orange-400" /> Modern Learning Spaces</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="w-full py-4 bg-white text-slate-900 text-center rounded-2xl font-black hover:bg-orange-500 hover:text-white transition-all">
                                    Book Campus Visit
                                </Link>
                            </div>

                            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-black text-slate-900 mb-6">Offered Programs</h3>
                                <div className="space-y-4">
                                    {offeredServices.map(service => (
                                        <Link
                                            to={`/services/${service.slug}`}
                                            key={service.id}
                                            className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-orange-50 group transition-all"
                                        >
                                            <span className="font-black text-sm text-slate-700 group-hover:text-orange-600">{service.title}</span>
                                            <ArrowLeft size={16} className="rotate-180 text-slate-300 group-hover:text-orange-400" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Sidebar Contact & Hours */}
                    <aside className="space-y-8">
                        {/* Address Card */}
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-white">
                            <div className="bg-orange-100 w-12 h-12 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-2">Location</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                {branch.address}
                            </p>
                            <a
                                href={`https://maps.google.com/?q=${branch.address}`}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full block py-3 bg-slate-900 text-white text-center rounded-xl font-black hover:bg-orange-500 transition-all mb-4"
                            >
                                Get Directions
                            </a>
                            {branch.websiteUrl && (
                                <a
                                    href={branch.websiteUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-sky-50 text-sky-600 rounded-xl font-black hover:bg-sky-600 hover:text-white transition-all shadow-sm shadow-sky-100"
                                >
                                    <Globe size={18} /> Visit Official Website
                                </a>
                            )}
                        </div>

                        {/* Hours & Phone */}
                        <div className="bg-sky-500 p-8 rounded-[2.5rem] text-white">
                            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                                <Clock size={24} /> Operating Hours
                            </h3>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 mb-8">
                                <p className="font-black text-lg mb-1">{branch.hours.split(':')[0]}</p>
                                <p className="text-sm opacity-80">{branch.hours.split(':')[1]?.trim() + ':' + branch.hours.split(':')[2]?.trim()}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-4 rounded-2xl">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-black tracking-widest opacity-70">Direct Line</p>
                                    <p className="font-black">{branch.phone}</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Review / Star Badge */}
                        <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] text-center">
                            <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-2">4.9/5 Rating</h3>
                            <p className="text-sm text-slate-500">Based on 200+ parent & student reviews at this location.</p>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default BranchDetail;
