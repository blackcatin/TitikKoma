import React, { useState } from 'react';
import PillNav from '../components/PillNav';
import RippleGrid from '../components/RippleGrid';
import SplitText from '../components/Animation/SplitText';
import { usePage } from '@inertiajs/react';
import myLogo from '../../assets/icons/Logo.png';
import CardSwap, { Card } from '@/components/Animation/CarsSwap';
import mockup1 from '../../assets/img/mockup.jpg';
import mockup2 from '../../assets/img/mockup1.jpg';
import mockup3 from '../../assets/img/mockup2.jpg';
import { LogoLoop } from '@/components/Animation/LogoLoop';
import AnimatedContent from '@/components/Animation/AnimatedContent';
import FallingText from '@/components/Animation/FallingText';

const testimonialData = [
    {
        name: "Aris Munandar",
        role: "Operations Manager",
        text: "Integrasi sistem manajemen gudang yang dibangun Titik Koma berhasil memangkas waktu input data hingga 40%. Arsitektur sistemnya sangat stabil dan mudah dioperasikan oleh tim lapangan kami."
    },
    {
        name: "Clarissa Utama",
        role: "Startup Founder",
        text: "Iterasi produk yang cepat dan komunikasi teknis yang transparan. Titik Koma berhasil mentransformasi MVP kami menjadi platform siap rilis dengan performa yang sangat impresif."
    },
    {
        name: "Bambang Sujatmiko",
        role: "SME Owner",
        text: "Solusi Point of Sale berbasis Computer Vision yang mereka kembangkan benar-benar inovatif. Akurasi deteksi produknya sangat tinggi, sangat membantu otomatisasi transaksi di toko kami."
    },
    {
        name: "Dian Sasmita",
        role: "Product Manager",
        text: "UI/UX yang dirancang tidak hanya estetis, tetapi juga sangat intuitif. Kami melihat peningkatan signifikan pada retensi pengguna sejak mengimplementasikan desain baru dari Titik Koma."
    },
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`group border-b border-white/5 transition-all duration-500 ${isOpen ? 'bg-white/2' : ''}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-8 text-left outline-none group"
            >
                <h4 className={`text-xl md:text-2xl font-bold transition-all duration-300 ${isOpen ? 'text-brand-yellow italic' : 'text-white group-hover:text-brand-yellow/70'}`}>
                    {question}
                </h4>
                <div className={`transition-transform duration-500 text-brand-yellow ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </button>

            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <p className="text-gray-400 leading-relaxed text-lg max-w-2xl border-l border-brand-yellow/30 pl-6">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    const { url } = usePage();

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
                        <div className="max-w-5xl mb-10">
                            <SplitText
                                text="We Turn Ideas Into Digital Products"
                                className="text-6xl md:text-[5rem] font-extrabold italic tracking-tighter leading-none uppercase"
                                delay={80}
                                from={{ opacity: 0, y: 100, rotateX: -90 }}
                                to={{ opacity: 1, y: 0, rotateX: 0 }}
                                ease="expo.out"
                                tag="h1"
                            />
                        </div>

                        <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed mb-16 px-4">
                            Welcome to <span className="text-brand-yellow font-bold">Titik Koma</span>.
                            Where complex ideas meet structured digital solutions. We bridge the gap between innovation and implementation.
                        </p>

                        <button className="bg-brand-yellow hover:bg-[#d49d00] text-brand-darkbrown px-12 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-brand-yellow/20 active:scale-95 text-base uppercase">
                            Get Started
                        </button>

                        <div className="animate-bounce mt-24 text-brand-white opacity-60 flex flex-col items-center">
                            <span className="text-[10px] tracking-[0.3em] uppercase mb-2">Explore More</span>
                            <div className="text-xl">↓</div>
                        </div>
                    </section>
                </AnimatedContent>

                <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between py-32 gap-20">
                    <AnimatedContent distance={100} direction="horizontal" reverse={true} className="w-full lg:w-1/2">
                        <div className="flex flex-col justify-center space-y-8 z-20">
                            <div className="inline-block px-5 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/5 text-brand-yellow text-[10px] font-bold tracking-[0.2em] uppercase self-start">
                                Recent Work
                            </div>

                            <h2 className="text-brand-yellow font-black text-5xl md:text-7xl italic uppercase tracking-tighter leading-[0.9]">
                                Our Recent <br /> <span className="text-white">Innovations</span>
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed max-w-md border-l border-brand-yellow/20 pl-6">
                                Lihat bagaimana kami mentransformasi ide menjadi produk digital nyata,
                                mulai dari sistem manajemen <strong className="text-white font-semibold">E-Commerce</strong> hingga
                                creative portfolio <strong className="text-white font-semibold">Valorant Character</strong>.
                            </p>

                            <div className="pt-6">
                                <button className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-brand-yellow/50 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-md active:scale-95">
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
                                <CardSwap
                                    width="100%"
                                    height="100%"
                                    delay={3500}
                                    cardDistance={40}
                                    verticalDistance={50}
                                >
                                    {[mockup1, mockup2, mockup3].map((img, i) => (
                                        <Card key={i} className="bg-[#150a0c] border-white/10 shadow-2xl overflow-hidden group">
                                            <img
                                                src={img}
                                                alt={`Project ${i}`}
                                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                            />
                                            <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-black via-black/90 to-transparent">
                                                <h4 className="text-white font-bold text-2xl mb-1">
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

                <section className="py-24 flex flex-col items-center justify-center bg-brand-darkbrown px-6">
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
                            trigger="scroll"
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
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-4 tracking-tighter">
                                Apa kata mereka?
                            </h2>
                            <p className="text-brand-yellow tracking-[0.3em] text-[10px] font-bold uppercase">
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
                                <div className="w-[320px] md:w-105 bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-md h-full flex flex-col justify-between whitespace-normal text-left">
                                    <div>
                                        <div className="text-brand-yellow text-4xl mb-4 opacity-30 font-serif">“</div>
                                        <p className="text-gray-200 italic text-base md:text-lg leading-relaxed mb-8">
                                            {item.text}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                        <div className="w-10 h-10 shrink-0 rounded-full bg-brand-yellow/20 flex items-center justify-center font-bold text-brand-yellow text-xs uppercase">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div className="overflow-hidden">
                                            <h4 className="font-bold text-white text-sm leading-none mb-1.5 truncate">
                                                {item.name}
                                            </h4>
                                            <p className="text-gray-500 text-[10px] uppercase tracking-widest truncate">
                                                {item.role}
                                            </p>
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

                <section className="py-40 flex flex-col lg:flex-row gap-20 px-4 md:px-0 border-t border-white/5">
                    <AnimatedContent distance={100} direction="vertical" className="lg:w-5/12">
                        <div className="sticky top-32">
                            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 uppercase italic tracking-tighter">
                                Punya Pertanyaan Teknis? <br />
                                <span className="text-brand-yellow">Tanya Kami.</span>
                            </h2>
                            <p className="text-brand-yellow/80 text-lg leading-relaxed max-w-md border-l-2 border-brand-yellow pl-6 mb-10">
                                Konsultasikan kebutuhan digitalmu secara gratis. Kami siap membantu dari fase perancangan hingga peluncuran sistem yang stabil.
                            </p>

                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="group inline-flex items-center gap-4 text-white hover:text-brand-yellow transition-colors"
                            >
                                <span className="text-xl font-bold italic uppercase tracking-widest underline decoration-brand-yellow/30 underline-offset-8 group-hover:decoration-brand-yellow">Mulai Konsultasi Gratis</span>
                                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                            </button>
                        </div>
                    </AnimatedContent>

                    <div className="lg:w-7/12 space-y-2">
                        {[
                            { q: "Berapa lama estimasi waktu pengerjaan proyek?", a: "..." },
                            { q: "Bagaimana prosedur revisi selama masa pengembangan?", a: "..." },
                            { q: "Bagaimana kebijakan jika terjadi pembatalan proyek?", a: "..." }
                        ].map((faq, i) => (
                            <AnimatedContent key={i} delay={i * 0.1} distance={20} direction="vertical">
                                <FAQItem question={faq.q} answer={faq.a} />
                            </AnimatedContent>
                        ))}
                    </div>
                </section>           </main>
        </div>
    );
}