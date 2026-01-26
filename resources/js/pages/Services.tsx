import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import PillNav from '@/components/PillNav';
import Particles from '@/components/Animation/Particles';
import AnimatedContent from '@/components/Animation/AnimatedContent';
import ServiceHero from '@/components/services/Hero';
import ServiceModal from '@/components/services/Modal';
import { SpecialistSection } from '@/components/services/SpecializedList';
import { coreServices, technicalSpecialties } from '../data/ServicesData';
import logo from '../../assets/icons/Logo.png';

export default function Services() {
    const { url } = usePage();
    const [selectedService, setSelectedService] = useState<any>(null);

    return (
        <div className="relative min-h-screen bg-brand-darkbrown text-white overflow-x-hidden selection:bg-brand-red">
            
            {/* BACKGROUND LAYER: Particles untuk Tech Vibes */}
            <div className="fixed inset-0 z-0 pointer-events-none">
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
                
                {/* 1. HERO SECTION (Dengan Rotating Text) */}
                <ServiceHero />

                {/* 2. CORE SERVICES GRID */}
                <section className="py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreServices.map((service, i) => (
                        <AnimatedContent key={service.id} delay={i * 0.1} distance={30} direction="vertical">
                            <div className="group p-10 bg-white/3 border border-white/10 rounded-[3rem] backdrop-blur-md hover:bg-brand-yellow/5 hover:border-brand-yellow/30 transition-all duration-500 flex flex-col h-full">
                                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                                <h3 className="text-2xl font-black italic uppercase text-white mb-4 tracking-tighter">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-10 grow">{service.desc}</p>
                                <button 
                                    onClick={() => setSelectedService(service)}
                                    className="text-brand-yellow font-bold flex items-center gap-2 group/btn"
                                >
                                    LIHAT DETAIL <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                            </div>
                        </AnimatedContent>
                    ))}
                </section>

                {/* 3. TECHNICAL SPECIALIZATIONS (List Roles) */}
                <section className="py-32">
                    <AnimatedContent direction="vertical" distance={50}>
                        <h2 className="text-center text-4xl md:text-6xl font-black italic uppercase mb-20 tracking-tighter">
                            Technical <span className="text-brand-yellow">Specializations</span>
                        </h2>
                    </AnimatedContent>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technicalSpecialties.map((spec, i) => (
                            <AnimatedContent key={i} delay={i * 0.1} distance={20} direction="vertical">
                                <SpecialistSection title={spec.title} skills={spec.skills} />
                            </AnimatedContent>
                        ))}
                    </div>
                </section>

                {/* CTA AKHIR */}
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

            {/* MODAL DETAIL (Diletakkan di luar main agar tidak kena overflow hidden) */}
            <ServiceModal 
                isOpen={!!selectedService} 
                onClose={() => setSelectedService(null)} 
                data={selectedService} 
            />
        </div>
    );
}