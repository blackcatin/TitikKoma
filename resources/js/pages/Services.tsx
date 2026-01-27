import React, { useState, useMemo } from 'react';
import { usePage } from '@inertiajs/react';
import { ArrowRight, Search } from 'lucide-react';

import PillNav from '@/components/PillNav';
import Particles from '@/components/Animation/Particles';
import AnimatedContent from '@/components/Animation/AnimatedContent';
import ServiceHero from '@/components/services/Hero';
import ServiceModal from '@/pages/Modal';
import SpotlightCard from '@/components/services/SpotlightCard';
import Footer from '@/components/Footer';

import { technicalSpecialties } from '../data/ServicesData';
import logo from '../../assets/icons/Logo.png';
import karakter from '../../assets/img/cartoo.png';

export default function Services() {
    const { url } = usePage();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedService, setSelectedService] = useState<any | null>(null);

    const filters = ['All', 'Frontend', 'Backend','Mobile', 'AI & Data', 'UI/UX'];

    const filteredSpecialties = useMemo(() => {
        return technicalSpecialties.filter(item => {
            const matchesSearch =
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter =
                activeFilter === 'All' || item.category === activeFilter;
            return matchesSearch && matchesFilter;
        });
    }, [searchQuery, activeFilter]);

    return (
        <div className="relative min-h-screen bg-brand-darkbrown text-white overflow-x-hidden selection:bg-brand-red font-sans">
            <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
                <Particles particleCount={150} speed={0.15} particleColors={['#ba3c3d', '#ffffff']} moveParticlesOnHover particleHoverFactor={0.5} particleBaseSize={80} />
            </div>

            <header className="fixed top-0 left-0 w-full z-50 py-6">
                <PillNav logo={logo} items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Portfolio', href: '/portfolio' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }]} activeHref={url} baseColor="#ba3c3d" />
            </header>
            <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-8">
                <ServiceHero />
                <section className="py-16">
                    <div className="flex flex-col items-center mb-12 space-y-8">
                        <AnimatedContent direction="vertical">
                            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-center leading-none">
                                Technical <span className="text-brand-yellow">Specialties</span>
                            </h2>
                        </AnimatedContent>

                        <div className="relative w-full max-w-xl group">
                            <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-yellow transition-colors" />
                            <input
                                type="text"
                                placeholder="Cari keahlian teknis..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 outline-none focus:border-brand-yellow/50 focus:bg-white/8 transition-all text-base"
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer ${activeFilter === filter ? 'bg-brand-yellow text-brand-darkbrown' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {filteredSpecialties.map((item, i) => (
                            <AnimatedContent key={i} delay={i * 0.05} distance={20} direction="vertical">
                                <div onClick={() => setSelectedService(item)} className="w-full h-full text-left cursor-pointer active:scale-95 transition-transform group">
                                    <SpotlightCard className="h-full p-8 border border-white/5 bg-white/2 hover:border-brand-yellow/30 relative overflow-hidden">
                                        <div className="text-[9px] text-brand-yellow font-black uppercase tracking-[0.2em] mb-4 opacity-60 group-hover:opacity-100">
                                            {item.category}
                                        </div>
                                        <h4 className="text-xl font-bold italic mb-3 text-white group-hover:text-brand-yellow transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 group-hover:text-gray-200">
                                            {item.desc}
                                        </p>
                                        <div className="mt-6 pt-5 border-t border-white/5 flex justify-between items-center text-brand-yellow">
                                            <span
                                                onClick={(e) => { e.stopPropagation(); setSelectedService(item); }}
                                                className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0"
                                            >
                                                View Details
                                            </span>
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                </section>
                <section className="relative py-16 overflow-hidden border border-white/5 rounded-[3rem] bg-brand-darkbrown/40 mt-2 mb-12">
                    <div className="absolute inset-0 bg-brand-yellow/2 blur-[100px] pointer-events-none" />
                    <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-8">
                        <AnimatedContent direction="horizontal" className="shrink-0">
                            <img src={karakter} alt="Mascot" className="w-40 md:w-56 lg:w-64 h-auto animate-float drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)]" />
                        </AnimatedContent>

                        <div className="text-center md:text-left">
                            <AnimatedContent direction="vertical">
                                <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white leading-[0.9] tracking-tighter">
                                    Let's build <br /> <span className="text-brand-yellow">Something Big</span>
                                </h2>
                                <p className="text-gray-400 text-sm md:text-base max-w-sm mt-5 leading-relaxed">
                                    Siap mentransformasi ide Anda menjadi produk digital unggulan hari ini?
                                </p>
                                <button
                                    onClick={() => (window.location.href = '/contact')}
                                    className="group mt-8 flex items-center gap-4 bg-brand-yellow text-brand-darkbrown px-8 py-3.5 rounded-xl font-black transition-all hover:bg-white active:scale-95 text-sm shadow-xl shadow-brand-yellow/5"
                                >
                                    GET STARTED NOW <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </AnimatedContent>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <ServiceModal isOpen={!!selectedService} data={selectedService} onClose={() => setSelectedService(null)} />
        </div>
    );
}