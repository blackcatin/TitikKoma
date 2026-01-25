import Cards from '../components/cards';
import Statistics from '../components/statistics';
import PillNav from '../components/PillNav';
import RippleGrid from '../components/RippleGrid';
import SplitText from '../components/SplitText';
import { usePage } from '@inertiajs/react';
import myLogo from '../../assets/icons/Logo.png';
import ScrollFloat from '@/components/ScrollFloat';
import CardSwap, { Card } from '@/components/CarsSwap';

export default function Home() {
    const { url } = usePage();

    return (
        <div className="relative min-h-screen bg-[#060010] text-white overflow-x-hidden selection:bg-brand-red">
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

            <header className="fixed top-0 left-0 w-full z-50 py-4">
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

                <section className="flex flex-col items-center justify-center text-center min-h-screen pt-20">
                    <div className="max-w-5xl mb-10">
                        <SplitText
                            text="We Turn Ideas Into Digital Products"
                            className="text-6xl md:text-[6rem] font-extrabold italic tracking-tighter leading-[1.1] uppercase"
                            delay={80}
                            from={{ opacity: 0, y: 100, rotateX: -90 }}
                            to={{ opacity: 1, y: 0, rotateX: 0 }}
                            ease="expo.out"
                            tag="h1"
                        />
                    </div>

                    <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed mb-16 px-4">
                        Welcome to <span className="text-brand-red font-bold">Titik Koma</span>.
                        Where complex ideas meet structured digital solutions. We bridge the gap between innovation and implementation.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="w-full sm:w-auto bg-brand-red hover:bg-[#a13233] px-12 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-brand-red/40 active:scale-95 text-base">
                            GET STARTED
                        </button>
                    </div>

                    <div className="animate-bounce mt-20 text-brand-white opacity-60">
                        <span className="text-xs tracking-widest uppercase">Scroll Explore</span>
                        <div className="mt-2">↓</div>
                    </div>
                </section>

                <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between py-24 gap-12 md:gap-20">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 z-20">
                        <div className="inline-block px-4 py-1 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-xs font-bold tracking-widest uppercase self-start">
                            Recent Work
                        </div>

                        <h2 className="text-brand-orange font-black text-5xl md:text-7xl italic uppercase tracking-tighter leading-[0.9]">
                            Our Recent <br /> <span className="text-white">Innovations</span>
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md">
                            Lihat bagaimana kami mentransformasi ide menjadi produk digital nyata,
                            mulai dari sistem manajemen koperasi <strong className="text-white">Asta</strong> hingga
                            otomasi transaksi toko buah dengan <strong className="text-white">Computer Vision</strong>.
                        </p>

                        <div className="pt-4">
                            <button className="group flex items-center gap-3 bg-white/5 border border-white/10 hover:border-brand-red/50 px-8 py-4 rounded-2xl font-bold transition-all backdrop-blur-md active:scale-95">
                                <span>VIEW ALL PORTFOLIO</span>
                                <span className="text-brand-red group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center min-h-112.5 relative">
                        <div className="relative w-[320px] h-95 md:w-112.5 md:h-80">
                            <div className="absolute inset-0 bg-brand-red/10 blur-[100px] rounded-full"></div>

                            <CardSwap
                                width="100%"
                                height="100%"
                                delay={3500}
                                cardDistance={40}
                                verticalDistance={50}
                            >
                                <Card className="p-8 bg-[#150a0c] border-white/10 shadow-2xl overflow-hidden">
                                    <div className="text-4xl mb-4">🏠</div>
                                    <h4 className="text-brand-red font-bold text-xl mb-2">Asta System</h4>
                                    <p className="text-sm text-gray-400">Integrated Cooperative Management System.</p>
                                </Card>
                                <Card className="p-8 bg-[#150a0c] border-white/10 shadow-2xl overflow-hidden">
                                    <div className="text-4xl mb-4">📦</div>
                                    <h4 className="text-brand-red font-bold text-xl mb-2">E-Packet</h4>
                                    <p className="text-sm text-gray-400">Modern Logistics Solution for Small Business.</p>
                                </Card>
                                <Card className="p-8 bg-[#150a0c] border-white/10 shadow-2xl overflow-hidden">
                                    <div className="text-4xl mb-4">🍎</div>
                                    <h4 className="text-brand-red font-bold text-xl mb-2">Smart POS</h4>
                                    <p className="text-sm text-gray-400">YOLO-based Fruit Store Automation.</p>
                                </Card>
                            </CardSwap>
                        </div>
                    </div>
                </section>

                <section className="py-40 flex justify-center">
                    <ScrollFloat
                        containerClassName="text-center"
                        textClassName="font-black text-brand-orange uppercase italic leading-none"
                        scrollStart="top 90%"
                        scrollEnd="top 20%"
                        stagger={0.05}
                    >
                        OUR CORE SPECIALTIES
                    </ScrollFloat>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-40">
                    <div className="reveal-on-scroll">
                        <Cards title="Enterprise Web Solution" category="Development" />
                    </div>
                    <div className="reveal-on-scroll">
                        <Cards title="Modern UI/UX Experience" category="Design" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <Statistics label="Project Done" value="24+" />
                        <Statistics label="Success Rate" value="98%" />
                    </div>
                </section>
            </main>
        </div>
    );
}