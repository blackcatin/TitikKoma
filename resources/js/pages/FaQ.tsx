import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import PillNav from '@/components/PillNav';
import RippleGrid from '@/components/Animation/RippleGrid';
import { faqData } from '../data/faqData';
import myLogo from '../../assets/icons/Logo.png';
import { ChevronRight, MessageSquare, Terminal, Cpu, ShieldCheck, Box } from 'lucide-react';

export default function FaQPage() {
    const { url } = usePage();
    const [activeIndex, setActiveIndex] = useState(0);
    const getCategoryIcon = (category: string) => {
        const props = { size: 400, strokeWidth: 0.5, className: "transition-all duration-1000" };
        if (category === 'Technical') return <Cpu {...props} />;
        if (category === 'Service') return <Terminal {...props} />;
        return <ShieldCheck {...props} />;
    };

    return (
        <div className="relative h-screen w-screen bg-brand-darkbrown text-white font-sans overflow-hidden uppercase select-none">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <RippleGrid gridColor="#ba3c3d" opacity={0.2} />
            </div>
            <div className="fixed -right-20 top-1/2 -translate-y-1/2 opacity-[0.02] text-white pointer-events-none transition-all duration-1000 ease-in-out z-0">
                {getCategoryIcon(faqData[activeIndex].category)}
            </div>

            <header className="fixed top-0 left-0 w-full z-50 py-6">
                <PillNav logo={myLogo} items={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Portfolio', href: '/portfolio' },
                    { label: 'About', href: '/about' },
                    { label: 'FaQ', href: '/FaQ' },
                    { label: 'Contact', href: '/contact' },
                ]} activeHref={url} baseColor="#ba3c3d" />
            </header>
            <main className="relative z-10 h-full w-full max-w-7xl mx-auto px-8 pt-32 pb-12 flex flex-col lg:flex-row gap-8 items-stretch">

                <div className="w-full lg:w-[45%] flex flex-col justify-between py-4">
                    <div className="space-y-2 mb-8">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="flex items-center gap-3 text-brand-red font-black tracking-[0.6em] text-[9px]"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                            SYSTEM_INQUIRY_VAULT
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter text-white leading-[0.85]">
                            The <span className="text-brand-yellow">Protocol</span><br />Library
                        </h1>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-4 space-y-3 hide-scrollbar">
                        {faqData.map((faq, i) => (
                            <motion.div
                                key={i}
                                onMouseEnter={() => setActiveIndex(i)}
                                onClick={() => setActiveIndex(i)}
                                className={`relative group cursor-pointer p-5 rounded-2xl border transition-all duration-500 overflow-hidden ${activeIndex === i
                                        ? 'bg-brand-red border-brand-red shadow-xl'
                                        : 'bg-white/2 border-white/5 hover:border-white/20'
                                    }`}
                            >
                                <div className="flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-4">
                                        <span className={`font-mono text-[10px] ${activeIndex === i ? 'text-white' : 'text-white/20'}`}>
                                            [0{i + 1}]
                                        </span>
                                        <h3 className={`text-xs md:text-sm font-bold tracking-tight transition-colors ${activeIndex === i ? 'text-white' : 'text-white/60'}`}>
                                            {faq.q}
                                        </h3>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 transition-all duration-500 ${activeIndex === i ? 'translate-x-1 opacity-100' : 'opacity-0'}`} />
                                </div>
                                {activeIndex === i && (
                                    <motion.div layoutId="activeBg" className="absolute inset-0 bg-brand-red" />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                        <button
                            onClick={() => window.location.href = '/contact?type=inquiry'} // Tambahkan ?type=inquiry
                            className="group flex items-center gap-4 text-brand-yellow font-black tracking-widest text-[9px] hover:text-white transition-colors"
                        >
                            <div className="p-3 rounded-xl border border-brand-yellow/30 group-hover:bg-brand-yellow group-hover:text-brand-darkbrown transition-all">
                                <MessageSquare size={16} />
                            </div>
                            BYPASS FAQ & CONNECT TO ARCHITECTS
                        </button>
                        <div className="flex gap-2">
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            <div className="w-1 h-1 rounded-full bg-brand-yellow animate-bounce" />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[55%] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20, rotateX: 10 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            className="h-full w-full bg-zinc-900/60 border border-white/10 rounded-[3.5rem] p-10 md:p-16 backdrop-blur-3xl flex flex-col justify-between overflow-hidden shadow-3xl relative"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-5 font-mono text-[200px] leading-none select-none italic font-black">
                                0{activeIndex + 1}
                            </div>

                            <div className="relative z-10 space-y-10">
                                <div className="flex items-center gap-6">
                                    <div className="px-4 py-1.5 rounded-full bg-brand-yellow text-brand-darkbrown text-[9px] font-black tracking-widest flex items-center gap-2">
                                        <Box size={10} />
                                        {faqData[activeIndex].category}
                                    </div>
                                    <div className="h-px flex-1 bg-linear-to-r from-white/20 to-transparent" />
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black italic text-white leading-[0.9] tracking-tighter">
                                    {faqData[activeIndex].q}
                                </h2>

                                <div className="space-y-6">
                                    <p className="text-gray-400 text-lg md:text-2xl leading-relaxed italic border-l-4 border-brand-red pl-10 lowercase font-medium">
                                        {faqData[activeIndex].a}
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 pt-12 flex justify-between items-end border-t border-white/5">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-white/20 font-mono text-[8px] tracking-[0.4em]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                                        AUTH_TOKEN: TK_PROT_2026
                                    </div>
                                    <img src={myLogo} className="w-10 opacity-30 grayscale contrast-125" alt="logo" />
                                </div>
                                <div className="text-[120px] opacity-10 absolute -bottom-10 -right-5 transform rotate-12">
                                    {faqData[activeIndex].icon}
                                </div>
                            </div>

                            <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .shadow-3xl { shadow: 0 40px 100px -20px rgba(0,0,0,0.8); }
            `}</style>
        </div>
    );
}