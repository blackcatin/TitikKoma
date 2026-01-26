import React from 'react';
import AnimatedContent from '@/components/Animation/AnimatedContent';
import { Code2, Palette, Cpu, Cloud, Zap, Globe } from 'lucide-react';
import { Card } from '@/components/services/FloatingCard';
import RotatingText from '../Animation/RotatingText';

export default function ServiceHero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden bg-brand-darkbrown">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-brand-yellow/5 blur-[140px] rounded-full -z-10"></div>

            <Card
                title="Web Development"
                sub="High Performance"
                variant="orange"
                shape="pill"
                pos="left-[8%] top-[22%] -rotate-6"
                icon={<Code2 size={18} />}
            />

            <Card
                title="UI/UX Design"
                sub="Human-Centric"
                variant="emerald"
                shape="leaf"
                pos="left-[12%] bottom-[28%] rotate-3"
                delay="1s"
                icon={<Palette size={18} />}
            />

            <Card
                title="AI Integration"
                sub="Smart Solutions"
                variant="blue"
                shape="rounded"
                pos="right-[10%] top-[28%] rotate-6"
                delay="0.5s"
                icon={<Cpu size={18} />}
            />

            <Card
                title="Cloud Infrastructure"
                sub="Scalable System"
                variant="yellow"
                shape="pill"
                pos="right-[5%] bottom-[40%] -rotate-3"
                delay="1.5s"
                icon={<Cloud size={18} />}
            />

            <Card
                title="Automation"
                sub="Efficiency First"
                variant="red"
                shape="leaf"
                pos="center-[12%] top-[15%] -rotate-6 scale-110"
                delay="1.8s"
                icon={<Zap size={18} />}
            />

            <div className="absolute right-[15%] bottom-[25%] -rotate-12 z-20 hidden lg:block animate-float-reverse">
                <div className="bg-brand-yellow px-4 py-2 rounded-full text-brand-darkbrown font-black text-xs uppercase tracking-tighter shadow-xl">
                    Live Support 24/7
                </div>
            </div>

            <main className="relative z-10 max-w-6xl mx-auto">
                <AnimatedContent distance={40} direction="vertical" duration={1}>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <h3 className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                            Mission: <span className="text-white">Build Better Systems</span>
                        </h3>
                    </div>

                    <h1 className="text-5xl md:text-[6rem] font-black tracking-tighter leading-[0.85] text-white uppercase italic mb-8 flex flex-col items-center">
                        <span className="block">We Build</span>
                            <div className="relative inline-block">
                                <RotatingText
                                    texts={[
                                        'Frontend',
                                        'Backend',
                                        'Fullstack',
                                        'Mobile',
                                        'UI/UX',
                                        'AI & Data',
                                        'DevOps',
                                        'Product'
                                    ]}
                                    mainClassName="px-4 bg-brand-yellow text-brand-darkbrown overflow-hidden py-1 md:py-2 justify-center rounded-xl md:rounded-2xl inline-flex"
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.02}
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2500}
                                />
                            </div>
                        <span className="block">Products</span>
                    </h1>

                    <p className="text-gray-400/80 max-w-xl text-lg mx-auto mb-12 leading-relaxed">
                       From idea to scalable digital product.
                    </p>
                    <div className="flex gap-5 justify-center">
                        <button className="px-10 py-5 bg-white text-brand-darkbrown font-black rounded-full uppercase text-sm hover:scale-105 transition-all shadow-2xl shadow-white/5 active:scale-95">
                            Start Project →
                        </button>
                    </div>
                </AnimatedContent>
            </main>
        </section>
    );
}