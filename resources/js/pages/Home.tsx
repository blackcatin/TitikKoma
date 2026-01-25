import PillNav from '../components/PillNav';
import RippleGrid from '../components/RippleGrid';
import SplitText from '../components/SplitText';
import { usePage } from '@inertiajs/react';
import myLogo from '../../assets/icons/Logo.png';
import CardSwap, { Card } from '@/components/CarsSwap';
import mockup1 from '../../assets/img/mockup.jpg';
import mockup2 from '../../assets/img/mockup1.jpg';
import mockup3 from '../../assets/img/mockup2.jpg';
import { LogoLoop } from '@/components/LogoLoop';
import AnimatedContent from '@/components/AnimatedContent';

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

export default function Home() {
    const { url } = usePage();

    return (
        <div className="relative min-h-screen bg-brand-darkbrown text-white overflow-x-hidden selection:bg-brand-red">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RippleGrid
                    gridColor="#ba3c3d"
                    rippleIntensity={0.05}
                    gridSize={10}
                    gridThickness={15}
                    glowIntensity={0.5}
                    opacity={0.4}
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
                        { label: 'Methodology', href: '/methodology' },
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

                <AnimatedContent distance={80} direction="vertical" duration={1} delay={0.2}>
                    <section className="flex flex-col items-center justify-center text-center min-h-screen pt-24 pb-12">
                        <div className="max-w-5xl mb-10">
                            <SplitText
                                text="We Turn Ideas Into Digital Products"
                                className="text-6xl md:text-[6.5rem] font-extrabold italic tracking-tighter leading-none uppercase"
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

                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
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
                                <div className="absolute inset-0 bg-brand-red/10 blur-[120px] rounded-full -z-10"></div>
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
                                            <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-black via-black/80 to-transparent">
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

                <AnimatedContent distance={60} threshold={0.2}>
                    <section className="py-32 border-y border-white/5 bg-brand-darkbrown/30 rounded-[4rem]">
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
                    </section>
                </AnimatedContent>

                {/* SECTION 4: FAQ */}
                <section className="py-40 flex flex-col lg:flex-row gap-20 px-4 md:px-0">
                    <AnimatedContent distance={100} direction="vertical" className="lg:w-5/12">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-black text-white leading-none mb-8 uppercase italic tracking-tighter">
                                Punya Pertanyaan <br />
                                <span className="text-brand-yellow text-4xl md:text-6xl">Teknis? Tanya Kami.</span>
                            </h2>
                            <p className="text-brand-yellow/80 text-lg leading-relaxed max-w-md">
                                Konsultasikan kebutuhan digitalmu secara gratis. Kami siap membantu dari fase perancangan hingga peluncuran sistem yang stabil.
                            </p>
                        </div>
                    </AnimatedContent>

                    <div className="lg:w-7/12 space-y-6">
                        {[
                            { q: "Berapa lama estimasi waktu pengerjaan proyek?", a: "Durasi pengembangan sangat bergantung pada ruang lingkup dan kompleksitas fitur. Untuk sistem standar atau MVP (Minimum Viable Product), biasanya memerlukan waktu 2 hingga 4 minggu agar mencapai standar kualitas yang optimal." },
                            { q: "Bagaimana prosedur revisi selama masa pengembangan?", a: "Kami menerapkan sistem iterasi yang transparan. Anda akan mendapatkan kuota revisi sesuai kesepakatan untuk memastikan hasil akhir selaras dengan spesifikasi teknis dan kebutuhan bisnis Anda." },
                            { q: "Bagaimana kebijakan jika terjadi pembatalan proyek?", a: "Proses pengerjaan dilakukan berdasarkan tonggak capaian (milestones). Jika terjadi pembatalan, penyesuaian biaya akan dilakukan secara profesional berdasarkan progres pengerjaan yang telah diselesaikan hingga tahap tersebut." }
                        ].map((faq, i) => (
                            <AnimatedContent key={i} delay={i * 0.1} distance={30} direction="vertical">
                                <div className="group border-b border-white/5 hover:border-brand-yellow/30 transition-colors">
                                    <details className="cursor-pointer py-8">
                                        <summary className="flex justify-between items-center list-none outline-none">
                                            <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-brand-yellow transition-colors italic tracking-tight">
                                                {faq.q}
                                            </h4>
                                            <span className="text-brand-yellow text-3xl group-open:rotate-45 transition-transform duration-300">+</span>
                                        </summary>
                                        <p className="text-gray-500 mt-6 leading-relaxed text-lg max-w-2xl">
                                            {faq.a}
                                        </p>
                                    </details>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}