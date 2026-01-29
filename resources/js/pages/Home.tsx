import { usePage } from '@inertiajs/react';
import React, { useState, useRef } from 'react';
import AnimatedContent from '@/components/Animation/AnimatedContent';
import CardSwap, { Card } from '@/components/Animation/CarsSwap';
import FallingText from '@/components/Animation/FallingText';
import { LogoLoop } from '@/components/Animation/LogoLoop';
import Footer from '@/components/Footer';
import myLogo from '../../assets/icons/Logo.png';
import mockup1 from '../../assets/img/card.jpg';
import mockup2 from '../../assets/img/card1.jpg';
import mockup3 from '../../assets/img/card2.jpg';
import RippleGrid from '@/components/Animation/RippleGrid';
import SplitText from '../components/Animation/SplitText';
import PillNav from '../components/PillNav';
import { testimonialData } from '../data/TestimonialData';

const FAQItem = ({ question, answer, icon }: { question: string, answer: string, icon?: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden 
            ${isOpen
                    ? 'bg-white/8 border-brand-yellow/40 shadow-2xl shadow-brand-yellow/5'
                    : 'bg-white/2 border-white/5 hover:border-white/10'}`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-7 md:p-9 text-left outline-none group/btn"
            >
                <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-500
                        ${isOpen ? 'bg-brand-yellow text-brand-darkbrown scale-110' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'}`}>
                        {icon}
                    </div>
                    <h4 className={`text-lg md:text-xl font-bold transition-colors duration-300 pr-4 
                        ${isOpen ? 'text-brand-yellow italic' : 'text-white'}`}>
                        {question}
                    </h4>
                </div>

                <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    <div className="absolute w-5 h-0.5 bg-brand-yellow rounded-full" />
                    <div className={`absolute w-5 h-0.5 bg-brand-yellow rounded-full transition-transform duration-500 ${isOpen ? 'rotate-0' : 'rotate-90'}`} />
                </div>
            </button>

            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="px-9 pb-9 pt-0 ml-18">
                        <div className="border-l-2 border-brand-yellow/20 pl-6 py-2">
                            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                                {answer}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    const { url } = usePage();
    const nextSectionRef = useRef<HTMLDivElement>(null);

    const faqData = [
        {
            q: "Berapa lama estimasi waktu pengerjaan proyek?",
            a: "Durasi proyek bergantung pada kompleksitas dan ruang lingkup. Rata-rata berkisar antara 2–12 minggu, dengan timeline yang transparan sejak awal.",
            icon: "⏳"
        },
        {
            q: "Bagaimana alur komunikasi selama proyek?",
            a: "Kami menggunakan sistem komunikasi terstruktur melalui weekly update, progress board, dan satu PIC teknis agar tetap efisien dan jelas.",
            icon: "💬"
        },
        {
            q: "Apakah bisa request revisi pengembangan?",
            a: "Ya. Setiap proyek memiliki kuota revisi terdefinisi, dan perubahan besar akan kami diskusikan secara terbuka sebelum dieksekusi.",
            icon: "🔄"
        }
    ];

    return (
        <div className="relative min-h-screen bg-brand-darkbrown text-white overflow-x-hidden selection:bg-brand-red font-sans">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RippleGrid
                    gridColor="#ba3c3d"
                    rippleIntensity={0.05}
                    gridSize={10}
                    gridThickness={15}
                    glowIntensity={0.5}
                    opacity={0.3}
                    mouseInteraction={true}
                />
            </div>

            <header className="fixed top-0 left-0 w-full z-50 py-6">
                <PillNav
                    logo={myLogo}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Services', href: '/services' },
                        { label: 'Portfolio', href: '/portfolio' },
                        { label: 'FaQ', href: '/FaQ' },
                        { label: 'About', href: '/about' },
                        { label: 'Contact', href: '/contact' },
                    ]}
                    activeHref={url}
                    baseColor="#ba3c3d"
                    pillColor="transparent"
                    pillTextColor="#9ca3af"
                    hoveredPillTextColor="#ffffff"
                />
            </header>

            <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
                <AnimatedContent distance={60} direction="vertical" duration={1.2} delay={0.2}>
                    <section className="flex flex-col items-center justify-center text-center min-h-screen pt-24 pb-12">
                        <div className="max-w-7xl mb-10 px-5 flex flex-col items-center">
                            <SplitText
                                text="We Turn Ideas Into"
                                className="text-5xl md:text-7xl lg:text-[5.5rem] font-black italic tracking-tighter leading-tight uppercase text-white"
                                delay={80}
                                from={{ opacity: 0, y: 40, rotateX: -90 }}
                                to={{ opacity: 1, y: 0, rotateX: 0 }}
                                ease="expo.out"
                                tag="h1"
                            />
                            <SplitText
                                text="Digital Products"
                                className="text-5xl md:text-7xl lg:text-[5.5rem] font-black italic tracking-tighter leading-tight uppercase text-brand-yellow"
                                delay={160}
                                from={{ opacity: 0, y: 40, rotateX: -90 }}
                                to={{ opacity: 1, y: 0, rotateX: 0 }}
                                ease="expo.out"
                                tag="h1"
                            />
                        </div>
                        <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed mb-16 px-4">
                            Welcome to <span className="text-brand-yellow font-bold">Titik Koma</span>.
                            Where complex ideas meet structured digital solutions. We bridge the gap between innovation and implementation.
                        </p>

                        <button
                            onClick={() => window.location.href = '/services'}
                            className="bg-brand-yellow hover:bg-[#d49d00] text-brand-darkbrown px-12 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-brand-yellow/20 active:scale-95 text-base uppercase">
                            Get Started
                        </button>

                        <div
                            className="animate-bounce mt-24 text-brand-white opacity-60 flex flex-col items-center cursor-pointer hover:opacity-100 transition-opacity"
                            onClick={() => nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span className="text-[10px] tracking-[0.3em] uppercase mb-2">Explore More</span>
                            <div className="text-xl">↓</div>
                        </div>
                    </section>
                </AnimatedContent>

                <section ref={nextSectionRef} className="min-h-screen flex flex-col lg:flex-row items-center justify-between py-32 gap-20">
                    <AnimatedContent distance={100} direction="horizontal" reverse={true} className="w-full lg:w-1/2">
                        <div className="flex flex-col justify-center space-y-8 z-20">
                            <div className="inline-block px-5 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/5 text-brand-yellow text-[10px] font-bold tracking-[0.2em] uppercase self-start">
                                Recent Work
                            </div>

                            <h2 className="text-brand-yellow font-black text-5xl md:text-7xl italic uppercase tracking-tighter leading-[0.9]">
                                Our Recent <br /> <span className="text-white">Innovations</span>
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed max-w-md border-l border-brand-yellow/20 pl-6">
                                Lihat bagaimana kami mentransformasi ide menjadi produk digital nyata.
                            </p>

                            <div className="pt-6">
                                <button
                                    className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-brand-yellow/50 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-md active:scale-95"
                                    onClick={() => window.location.href = '/portfolio'}
                                >
                                    <span className="text-sm tracking-widest">VIEW ALL PORTFOLIO</span>
                                    <span className="text-brand-yellow group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                            </div>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent scale={0.9} distance={100} direction="horizontal" className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:justify-end items-center relative">
                            <div className="relative w-85 h-100 md:w-120 md:h-87.5">
                                <div className="absolute inset-0 bg-brand-red/10 blur-[120px] rounded-full -z-10 opacity-50"></div>
                                <CardSwap width="100%" height="100%" delay={3500} cardDistance={40} verticalDistance={50}>
                                    {[mockup1, mockup2, mockup3].map((img, i) => (
                                        <Card key={i} className="bg-[#150a0c] border-white/10 shadow-2xl overflow-hidden group">
                                            <img src={img} alt={`Project ${i}`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-black via-black/90 to-transparent text-left">
                                                <h4 className="text-white font-bold text-2xl mb-1 truncate">
                                                    {i === 0 ? "E-Commerce" : i === 1 ? "Creative Portfolio" : "Brand Profile"}
                                                </h4>
                                                <p className="text-[10px] text-brand-red font-bold uppercase tracking-[0.2em]">Digital Solution</p>
                                            </div>
                                        </Card>
                                    ))}
                                </CardSwap>
                            </div>
                        </div>
                    </AnimatedContent>
                </section>

                <section className="py-24 flex flex-col items-center justify-center px-6">
                    <AnimatedContent distance={50} direction="vertical">
                        <div className="text-center mb-10">
                            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-none">
                                ALL YOUR <br />
                                <span className="text-brand-yellow">Digital Needs</span>
                            </h2>
                        </div>
                    </AnimatedContent>

                    <div className="w-full max-w-4xl h-87.5 border border-white/10 rounded-[2.5rem] bg-[#110809] relative overflow-hidden shadow-2xl group mb-12">
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-20">
                            <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">Titik Koma</h3>
                            <p className="text-xs text-brand-yellow tracking-[1em] uppercase mt-2">Solution Ecosystem</p>
                        </div>
                        <FallingText
                            text="Web-Development AI-Integration MLOps Automation UI/UX-Design Mobile-Apps Branding Data-Analytics IoT-Expert Cloud-System"
                            highlightWords={["Web-Development", "AI-Integration", "MLOps", "Automation"]}
                            trigger="click" 
                            gravity={1.2}
                            fontSize="1.1rem"
                            mouseConstraintStiffness={0.1}
                        />
                        <div className="absolute inset-0 rounded-[2.5rem] border border-brand-yellow/0 group-hover:border-brand-yellow/20 transition-colors pointer-events-none" />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] text-white/40 uppercase tracking-[0.4em] pointer-events-none flex items-center gap-2">
                            <span className="w-1 h-1 bg-brand-yellow rounded-full animate-pulse" />
                            Drag capsules to interact
                        </div>
                    </div>

                    <AnimatedContent distance={20} direction="vertical" delay={0.3}>
                        <button
                            onClick={() => window.location.href = '/services'}
                            className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-brand-yellow/50 rounded-full transition-all backdrop-blur-sm active:scale-95"
                        >
                            <span className="text-sm font-bold tracking-widest text-white uppercase">Eksplor Layanan Kami</span>
                            <span className="text-brand-yellow group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </AnimatedContent>
                </section>

                <AnimatedContent distance={60} threshold={0.2}>
                    <section className="py-32 border-y border-white/5 bg-brand-darkbrown/30 rounded-[4rem] mb-20 flex flex-col items-center">
                        <div className="text-center mb-20 px-6">
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-4 tracking-tighter text-center">
                                Apa kata mereka?
                            </h2>
                            <p className="text-brand-yellow tracking-[0.3em] text-[10px] font-bold uppercase text-center">
                                Kemitraan Strategis & Solusi Terukur
                            </p>
                        </div>

                        <LogoLoop
                            logos={testimonialData as any}
                            speed={40}
                            gap={40}
                            logoHeight={260}
                            pauseOnHover={true}
                            fadeOut={true}
                            fadeOutColor="#1e0b0e"
                            renderItem={(item: any) => (
                                <div className="group w-[320px] md:w-105 h-full flex flex-col justify-between rounded-[2.75rem] bg-linear-to-br from-white/8 to-white/2 border border-white/10 backdrop-blur-xl p-10 transition-all duration-500 hover:-translate-y-2 hover:border-brand-yellow/40 hover:shadow-[0_30px_80px_-20px_rgba(196,87,48,0.25)] text-left whitespace-normal">
                                    <div className="relative mb-6">
                                        <span className="absolute -top-6 -left-2 text-[6rem] leading-none font-serif text-brand-yellow/10 select-none">“</span>
                                        <p className="relative text-gray-200 italic text-base md:text-lg leading-relaxed">{item.text}</p>
                                    </div>
                                    <div className="flex items-center gap-4 pt-6 border-t border-white/10 text-left">
                                        <div className="relative w-11 h-11 rounded-full bg-linear-to-br from-brand-yellow to-orange-400 flex items-center justify-center font-black text-brand-darkbrown text-sm uppercase">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div className="min-w-0 text-left">
                                            <h4 className="font-bold text-white text-sm leading-none mb-1 truncate">{item.name}</h4>
                                            <p className="text-gray-400 text-[10px] uppercase tracking-[0.25em] truncate">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />

                        <div className="mt-16">
                            <button
                                onClick={() => window.location.href = '/about'}
                                className="group flex items-center gap-3 px-8 py-4 bg-brand-yellow text-brand-darkbrown font-black rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-xl shadow-brand-yellow/10"
                            >
                                <span className="text-sm tracking-tighter uppercase">Kenali Tim di Balik Layar</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </section>
                </AnimatedContent>

                <section className="relative py-28 md:py-32 border-t border-white/5 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none" />
                    <div className="relative flex flex-col lg:flex-row gap-14 lg:gap-20 px-6 md:px-12 max-w-7xl mx-auto">
                        <AnimatedContent distance={50} direction="vertical" className="lg:w-5/12">
                            <div className="sticky top-24 space-y-6">

                                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-yellow/20 bg-brand-yellow/5 text-brand-yellow text-[10px] font-black uppercase tracking-[0.3em]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
                                    Support Center
                                </div>

                                <h2 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[0.95] uppercase italic tracking-tighter">
                                    Punya<br />
                                    <span className="text-brand-yellow">Pertanyaan?</span>
                                </h2>

                                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-sm">
                                    Jawaban singkat untuk pertanyaan teknis yang paling sering
                                    ditanyakan oleh calon partner kami.
                                </p>

                                <div className="pt-2">
                                    <button
                                        onClick={() => window.location.href = '/contact'}
                                        className="group inline-flex items-center gap-5 px-8 py-4 rounded-xl bg-white text-brand-darkbrown font-black uppercase tracking-widest hover:bg-brand-yellow transition-all duration-300 shadow-xl"
                                    >
                                        <span>Mulai Konsultasi</span>
                                        <span className="w-7 h-7 rounded-full bg-brand-darkbrown text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                            →
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </AnimatedContent>

                        <div className="lg:w-7/12 flex flex-col gap-4">
                            {faqData.map((faq, i) => (
                                <AnimatedContent
                                    key={i}
                                    delay={i * 0.08}
                                    distance={30}
                                    direction="vertical"
                                >
                                    <FAQItem
                                        question={faq.q}
                                        answer={faq.a}
                                        icon={faq.icon}
                                    />
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}