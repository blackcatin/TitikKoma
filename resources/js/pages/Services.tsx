import React, { useState, useMemo } from 'react';
import { usePage } from '@inertiajs/react';
import { Search } from 'lucide-react'; 
import PillNav from '@/components/PillNav';
import Particles from '@/components/Animation/Particles';
import AnimatedContent from '@/components/Animation/AnimatedContent';
import ServiceHero from '@/components/services/Hero';
import ServiceModal from '@/components/services/Modal';
import SpotlightCard from '@/components/services/SpotlightCard';
import { technicalSpecialties } from '../data/ServicesData';
import logo from '../../assets/icons/Logo.png';

export default function Services() {
    const { url } = usePage();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedService, setSelectedService] = useState<any>(null);

    const filters = ["All", "Frontend", "Backend", "AI & Data", "UI/UX"];
    const filteredSpecialties = useMemo(() => {
        return technicalSpecialties.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = activeFilter === "All" || item.category === activeFilter;
            return matchesSearch && matchesFilter;
        });
    }, [searchQuery, activeFilter]);

    return (
        <div className="relative min-h-screen bg-brand-darkbrown text-white overflow-x-hidden selection:bg-brand-red font-sans">
            <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
                <Particles
                    particleCount={150}
                    speed={0.15}
                    particleColors={['#ba3c3d', '#ffffff']}
                    moveParticlesOnHover={true}
                    particleHoverFactor={0.5}
                    particleBaseSize={80}
                />
            </div>

            <header className="fixed top-0 left-0 w-full z-50 py-6">
                <PillNav
                    logo={logo}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Services', href: '/services' },
                        { label: 'Portfolio', href: '/portfolio' },
                        { label: 'About', href: '/about' },
                        { label: 'Contact', href: '/contact' },
                    ]}
                    activeHref={url}
                    baseColor="#ba3c3d"
                />
            </header>

            <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col">

                <ServiceHero />
                <section className="py-24">
                    <div className="flex flex-col items-center mb-16 space-y-10">
                        <AnimatedContent direction="vertical">
                            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-center">
                                Technical <span className="text-brand-yellow">Specialties</span>
                            </h2>
                        </AnimatedContent>

                        <div className="relative w-full max-w-xl group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-yellow transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Cari keahlian teknis (ex: React, Laravel...)"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-yellow/50 focus:bg-white/[0.07] transition-all"
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeFilter === filter
                                            ? 'bg-brand-yellow text-brand-darkbrown'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredSpecialties.length > 0 ? (
                            filteredSpecialties.map((item, i) => (
                                <AnimatedContent
                                    key={i} 
                                    delay={i * 0.05}
                                    distance={20}
                                    direction="vertical"
                                >
                                    <button
                                        onClick={() => setSelectedService(item)}
                                        className="w-full h-full text-left outline-none transition-transform active:scale-95"
                                    >
                                        <SpotlightCard className="h-full border-white/5 bg-white/2 p-8 hover:border-brand-yellow/30 transition-all group flex flex-col">
                                            <div className="text-[10px] text-brand-yellow font-black uppercase tracking-[0.2em] mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                                                {item.category}
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-3 italic tracking-tight group-hover:text-brand-yellow transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors line-clamp-3">
                                                {item.desc}
                                            </p>

                                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-brand-yellow">
                                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
                                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                            </div>
                                        </SpotlightCard>
                                    </button>
                                </AnimatedContent>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 text-gray-500 italic">
                                Tidak menemukan keahlian yang sesuai dengan pencarian Anda.
                            </div>
                        )}
                    </div>
                </section>

                <section className="py-40 flex flex-col items-center text-center">
                    <AnimatedContent distance={40} direction="vertical">
                        <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-8">Siap Memulai Proyek Anda?</h2>
                        <button
                            onClick={() => window.location.href = '/contact'}
                            className="bg-brand-yellow text-brand-darkbrown font-black px-12 py-5 rounded-2xl hover:bg-white hover:scale-105 transition-all text-lg shadow-2xl shadow-brand-yellow/20"
                        >
                            KONSULTASI GRATIS SEKARANG
                        </button>
                    </AnimatedContent>
                </section>
            </main>

            <ServiceModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                data={selectedService}
            />
        </div>
    );
}