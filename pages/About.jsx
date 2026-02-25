import React from 'react';
import { Award, Users, Target, Sparkles, GraduationCap, Quote, CheckCircle2, Heart, Feather, History } from 'lucide-react';
import { motion } from 'framer-motion';

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
            {/* Immersive Hero Section */}
            <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900 z-10" />
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600"
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
                            className="text-5xl md:text-8xl font-black mb-8 leading-tight drop-shadow-2xl"
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
                                    Founded with a vision by Jayalakshmi, the academy serves as a unique bridge between two seemingly different worlds: the precise, analytical world of <strong>Mental Arithmetic</strong> and the fluid, expressive world of <strong>Fashion Design</strong>.
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
                            <div className="relative z-10 grid grid-cols-2 gap-6 items-end">
                                <div className="space-y-6">
                                    <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                        <img src="https://images.unsplash.com/photo-1596495573105-31bc9d4979d8?auto=format&fit=crop&q=80&w=400&h=500" alt="Learning" className="w-full object-cover" />
                                    </div>
                                    <div className="bg-orange-500 p-8 rounded-3xl text-white shadow-xl">
                                        <GraduationCap size={40} className="mb-4" />
                                        <p className="text-2xl font-bold">1500+</p>
                                        <p className="text-sm opacity-80 uppercase tracking-wider">Certified Students</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                        <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=400&h=600" alt="Fashion" className="w-full object-cover" />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl z-0" />
                        </motion.div>
                    </div>
                </section>

                {/* Section 3: The Growth Timeline */}
                <section className="py-20 bg-slate-50/50 rounded-[3rem] border border-white/50">
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

                {/* Section 4: The Visionary (Founder Profile) */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative py-20"
                >
                    <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10" />
                    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-50">
                        <div className="grid grid-cols-1 lg:grid-cols-12">
                            <div className="lg:col-span-5 h-[500px] lg:h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center relative">
                                <Quote className="absolute top-10 right-10 text-orange-500/10" size={120} />
                                <div className="relative z-10">
                                    <h4 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Founder's Message</h4>
                                    <h2 className="text-5xl font-black text-slate-900 mb-2">Jayalakshmi</h2>
                                    <p className="text-xl text-slate-500 font-medium mb-8">MSc Mathematics | Education Visionary</p>

                                    <div className="space-y-6 text-xl text-slate-700 leading-relaxed italic border-l-4 border-slate-900 pl-8 mb-10">
                                        <p>
                                            "My vision is to create a generation that fears no number and hesitates at no canvas. True education should be the wind beneath a student's wings, allowing them to soar in both logic and art."
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl">
                                            <Award className="text-orange-500" size={20} />
                                            <span className="font-bold text-slate-800">15+ Yrs Exp</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl">
                                            <CheckCircle2 className="text-sky-500" size={20} />
                                            <span className="font-bold text-slate-800">Certified Master</span>
                                        </div>
                                    </div>

                                    <div className="mt-12 opacity-50">
                                        <p className="font-serif text-3xl text-slate-900">Jayalakshmi</p>
                                        <p className="text-xs uppercase tracking-tighter text-slate-500 mt-1">Founding Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Section 4: Our Mission Pillars */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                >
                    {[
                        { icon: Target, color: "orange", title: "Global Mission", text: "To provide accessible, world-class skill development programs that empower individuals to excel in a competitive world." },
                        { icon: Heart, color: "sky", title: "Empathetic Learning", text: "We treat every student's growth personally, nurturing their confidence as much as their technical skills." },
                        { icon: Sparkles, color: "slate-900", title: "Unmatched Quality", text: "Committed to maintaining the highest benchmarks in teaching methodology and experimental student outcomes." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-orange-500/10 transition-all duration-500 text-center"
                        >
                            <div className={`inline-flex items-center justify-center p-5 bg-${item.color === 'slate-900' ? 'slate-900' : item.color + '-500'} text-white rounded-[1.5rem] mb-8 shadow-lg group-hover:rotate-12 transition-transform`}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">{item.text}</p>
                        </motion.div>
                    ))}
                </motion.section>
            </div>
        </div>
    );
};

export default About;
