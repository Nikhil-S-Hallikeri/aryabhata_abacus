import React from 'react';
import { Award, Users, Target, Sparkles, GraduationCap, Quote, CheckCircle2, Heart, Feather, History, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { SITE_CONFIG } from '../seo.config';
import { buildBreadcrumbSchema } from '../components/schema/BreadcrumbSchema';

const About = () => {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
        <div className="pb-20 min-h-screen">
            <SEOHead
                title="About Us | 14 Years of Abacus Excellence in Haveri"
                description="Learn about Aryabhata Abacus & Vedic Maths Academy — founded in 2010 by Jayalakshmi, serving 5000+ students across 8+ branches in Haveri, Karnataka."
                canonical="/about"
                jsonLd={[
                    buildBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'About Us', url: '/about' },
                    ]),
                ]}
            />
            {/* Immersive Hero Section */}
            <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900 z-10" />
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                        src="/about-us.avif"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-semibold tracking-wider text-sm uppercase"
                        >
                            Our Journey Since 2010
                        </motion.span>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-7xl font-black mb-8 leading-tight drop-shadow-2xl"
                        >
                            Empowering <span className="text-orange-500">Minds</span>,<br />
                            Nurturing <span className="text-sky-400">Creativity</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
                        >
                            A premier institution where analytical logic meets artistic expression. We don't just teach skills; we build foundations for a lifetime.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="mt-12">
                            <div className="flex justify-center gap-12">
                                <div className="text-center">
                                    <h4 className="text-4xl font-bold text-white">14+</h4>
                                    <p className="text-slate-400 text-sm">Years of Excellence</p>
                                </div>
                                <div className="h-12 w-px bg-white/20" />
                                <div className="text-center">
                                    <h4 className="text-4xl font-bold text-white">5K+</h4>
                                    <p className="text-slate-400 text-sm">Graduates</p>
                                </div>
                                <div className="h-12 w-px bg-white/20" />
                                <div className="text-center">
                                    <h4 className="text-4xl font-bold text-white">8+</h4>
                                    <p className="text-slate-400 text-sm">Branches</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest text-slate-400">Scroll to Explore</span>
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-orange-500 to-transparent animate-pulse" />
                </motion.div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 space-y-40">
                {/* Section 2: The Story of Synergy */}
                <section className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
                            <h2 className="text-sm uppercase tracking-widest text-orange-500 font-bold mb-4">The Aryabhata Legacy</h2>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                                Where Logic Meets <br />
                                <span className="text-sky-500 italic">Pure Imagination</span>
                            </h3>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Founded with a vision by Shilpa Kotresh Gadad, the academy serves as a unique bridge between two seemingly different worlds: the precise, analytical world of <strong>Mental Arithmetic</strong> and the fluid, expressive world of <strong>Fashion Design</strong>.
                                </p>
                                <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-orange-500 italic">
                                    "We believe that a well-rounded mind is one that can calculate like a machine and create like a poet. This duality is the secret to true intellectual freedom."
                                </p>
                                <p>
                                    Over the last decade, we have perfected a methodology that strengthens the left brain through Abacus while liberating the right brain through professional design training.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative z-10 grid grid-cols-2 gap-6 items-stretch">
                                <div className="space-y-6 flex flex-col">
                                    <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 aspect-[4/5] shrink-0">
                                        <img src="/iso-cert.avif" alt="Learning" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="bg-orange-500 p-8 rounded-3xl text-white shadow-xl flex-grow flex flex-col justify-center">
                                        <GraduationCap size={40} className="mb-4" />
                                        <p className="text-2xl font-bold">200+</p>
                                        <p className="text-sm opacity-80 uppercase tracking-wider">Certified Students</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 h-full aspect-[4/5]">
                                        <img src="/aryabhataa.avif" alt="Certification" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl z-0" />
                        </motion.div>
                    </div>
                </section>

                {/* Section 3: The Growth Timeline */}
                <section className="py-10 bg-slate-50/50 rounded-[3rem] border border-white/50">
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase tracking-widest text-orange-500 font-bold mb-4 flex items-center justify-center gap-2">
                            <History size={16} /> Our Milestones
                        </h2>
                        <h3 className="text-4xl font-black text-slate-900">The Journey of Growth</h3>
                    </div>

                    <div className="max-w-4xl mx-auto relative px-4">
                        {/* Central Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

                        {[
                            { year: "2010", title: "The Beginning", desc: "First branch opened with a vision to revolutionize skill development." },
                            { year: "2015", title: "Expansion Phase", desc: "Expanded to 4 branches across the city, introducing specialized Fashion Design modules." },
                            { year: "2018", title: "Digital Excellence", desc: "Launched modern learning materials and certified student assessments." },
                            { year: "2024", title: "Modern Legacy", desc: "Serving 5000+ graduates across 8+ branches with state-of-the-art facilities." }
                        ].map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 text-center md:text-right w-full">
                                    <div className={`${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <span className="text-5xl font-black text-slate-200 block mb-2">{m.year}</span>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{m.title}</h4>
                                        <p className="text-slate-600 leading-relaxed">{m.desc}</p>
                                    </div>
                                </div>

                                <div className="z-10 bg-orange-500 w-10 h-10 rounded-full border-4 border-white shadow-lg shrink-0 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Section 4: The Visionary (Founder Profile - Premium Redesign) */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative py-10 group"
                >
                    {/* Artistic Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -z-10 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[100px] -z-10" />

                    <div className="max-w-6xl mx-auto px-4">
                        <div className="relative bg-white/40 backdrop-blur-xl rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-white/50 overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

                                {/* Founder Image with Elegant Framing */}
                                <div className="lg:col-span-5 relative overflow-hidden group/image min-h-[500px]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                                    <img
                                        src="shilpa.avif"
                                        alt="Founder Shilpa Kotresh Gadad"
                                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover/image:scale-110"
                                    />

                                    {/* Glassmorphism Badge Overlays */}
                                    <div className="absolute bottom-12 left-10 z-20 space-y-4">
                                        <motion.div
                                            initial={{ x: -30, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-3 rounded-2xl text-white shadow-2xl flex items-center gap-3"
                                        >
                                            <div className="bg-orange-500 p-2 rounded-lg">
                                                <Award size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest opacity-70 font-bold">Experience</p>
                                                <p className="text-lg font-bold">15+ Successful Years</p>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ x: -30, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                            className="backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-3 rounded-2xl text-white shadow-2xl flex items-center gap-3"
                                        >
                                            <div className="bg-sky-500 p-2 rounded-lg">
                                                <CheckCircle2 size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest opacity-70 font-bold">Status</p>
                                                <p className="text-lg font-bold">Master Certified Mentor</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Content Section with Advanced Layout */}
                                <div className="lg:col-span-7 p-10 md:p-12 flex flex-col justify-center relative bg-gradient-to-br from-white/80 to-slate-50/50">
                                    <Quote className="absolute top-6 right-8 text-orange-500/5 rotate-12" size={140} />

                                    <div className="relative z-10">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-3 mb-6"
                                        >
                                            <span className="w-10 h-[2px] bg-orange-500" />
                                            <span className="text-orange-600 font-black uppercase text-[10px] tracking-[0.3em]">The Visionary Leadership</span>
                                        </motion.div>

                                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight leading-none">
                                            Shilpa <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">Kotresh Gadad</span>
                                        </h2>

                                        <div className="flex flex-wrap items-center gap-3 text-slate-500 mb-8">
                                            <p className="text-lg font-medium tracking-tight">Dip.C.Sc, (PGDCA), MA, Eco. So.</p>
                                            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-200" />
                                            <p className="text-lg font-bold text-slate-800">Founding Director</p>
                                        </div>

                                        <div className="relative mb-10 p-6 bg-white/50 rounded-2xl border border-slate-100 shadow-sm">
                                            <Quote className="text-orange-500/10 absolute -top-3 -left-3" size={40} />
                                            <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed italic">
                                                "My vision is to create a generation that fears no number and hesitates at no canvas. True education should be the wind beneath a student's wings."
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 border-t border-slate-200/60">
                                            <div className="space-y-1">
                                                <p className="font-serif text-3xl text-slate-900 tracking-tighter">Shilpa Kotresh Gadad</p>
                                                <p className="text-[9px] uppercase tracking-[0.3em] font-black text-slate-400">Pioneering the Synergy of Art & Logic</p>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                {SITE_CONFIG.social.instagram && (
                                                    <a
                                                        href={SITE_CONFIG.social.instagram}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:-translate-y-1 transition-all duration-300 border border-slate-50"
                                                    >
                                                        <Instagram size={24} />
                                                    </a>
                                                )}
                                                {SITE_CONFIG.social.facebook && (
                                                    <a
                                                        href={SITE_CONFIG.social.facebook}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:-translate-y-1 transition-all duration-300 border border-slate-50"
                                                    >
                                                        <Facebook size={24} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Section 5: Our Mission Pillars (Premium Modern-Traditional Redesign) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="py-0 relative"
                >
                    {/* Cultural Decorative Header */}
                    <div className="text-center mb-16 relative">
                        <motion.div variants={fadeInUp} className="inline-block mb-4">
                            <span className="text-orange-600 font-black uppercase text-xs tracking-[0.4em] bg-orange-50 px-6 py-2 rounded-full border border-orange-100/50">
                                Guided by Purpose
                            </span>
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                            Our Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-serif italic">Pillars</span>
                        </motion.h2>
                        <motion.div variants={fadeInUp} className="flex justify-center items-center gap-4">
                            <div className="h-px w-12 bg-slate-200" />
                            <Sparkles className="text-amber-400" size={20} />
                            <div className="h-px w-12 bg-slate-200" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {[
                            {
                                icon: Target,
                                title: "Global Mission",
                                color: "from-orange-500 to-amber-600",
                                text: "To provide accessible, world-class skill development programs that empower individuals to excel in a competitive world."
                            },
                            {
                                icon: Heart,
                                title: "Empathetic Learning",
                                color: "from-sky-500 to-indigo-600",
                                text: "We treat every student's growth personally, nurturing their confidence as much as their technical skills."
                            },
                            {
                                icon: Sparkles,
                                title: "Unmatched Quality",
                                color: "from-slate-800 to-slate-950",
                                text: "Committed to maintaining the highest benchmarks in teaching methodology and experimental student outcomes."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                {/* Decorative Card Frame */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white rounded-[2.5rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500 border border-slate-200/50 -z-10" />

                                <div className="p-10 rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200/40 border border-slate-100 h-full flex flex-col items-center text-center relative overflow-hidden">
                                    {/* Subtle Cultural Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <item.icon size={36} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg font-medium italic">"{item.text}"</p>

                                    {/* Bottom Accent */}
                                    <div className="mt-auto pt-8">
                                        <div className="w-12 h-1 bg-slate-100 rounded-full mx-auto group-hover:w-24 group-hover:bg-orange-500/30 transition-all duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default About;
