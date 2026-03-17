import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const StickyContactButtons = () => {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
            <a
                href="https://wa.me/917013280528"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center p-2 rounded-full overflow-hidden"
                aria-label="Chat on WhatsApp"
            >
                {/* Premium Multi-Layer Wave Effect */}
                {[0, 1, 2].map((index) => (
                    <motion.span
                        key={index}
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{
                            scale: [1, 2.5],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 1,
                            ease: [0.4, 0, 0.6, 1],
                        }}
                        className="absolute w-12 h-12 bg-green-500 rounded-full"
                    />
                ))}


                {/* Main Button with Floating Effect */}
                <motion.div
                    animate={{
                        y: [0, -4, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="relative bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center z-10 border-2 border-white/20"
                >
                    <MessageCircle size={32} />
                </motion.div>

                {/* Tooltip */}
                <span className="absolute right-full mr-6 px-4 py-2 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-x-2 pointer-events-none shadow-xl border border-white/10">
                    Chat with us
                </span>
            </a>
            {/* <a
                href="tel:+1234567890"
                className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
                aria-label="Call Us"
            >
                <Phone size={28} />
            </a> */}
        </div>
    );
};

export default StickyContactButtons;
