import React from 'react';
import AnimatedContent from '@/components/Animation/AnimatedContent';
import { Code2, Palette, Cpu, Cloud, Zap } from 'lucide-react';
import { Card } from '@/components/services/FloatingCard';
import RotatingText from '../Animation/RotatingText';
import Icon from '../../../assets/icons/icon.png';

export default function ServiceHero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden bg-transparent">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-yellow/5 blur-[160px] rounded-full -z-10 opacity-30"></div>

            <Card title="Web Development" sub="High Performance" variant="orange" shape="pill" pos="left-[5%] top-[20%] -rotate-6" icon={<Code2 size={18} />} />
            <Card title="UI/UX Design" sub="Human-Centric" variant="emerald" shape="leaf" pos="left-[8%] bottom-[25%] rotate-3" delay="1s" icon={<Palette size={18} />} />
            <Card title="AI Integration" sub="Smart Solutions" variant="blue" shape="rounded" pos="right-[8%] top-[25%] rotate-6" delay="0.5s" icon={<Cpu size={18} />} />
            <Card title="Cloud Infrastructure" sub="Scalable System" variant="yellow" shape="pill" pos="right-[5%] bottom-[40%] -rotate-3" delay="1.5s" icon={<Cloud size={18} />} />
            <Card title="Automation" sub="Efficiency First" variant="red" shape="leaf" pos="left-[45%] top-[12%] rotate-0 scale-90" delay="1.8s" icon={<Zap size={18} />} />

            <div className="absolute right-[15%] bottom-[25%] -rotate-12 z-20 hidden lg:block animate-float-reverse">
                <div className="bg-brand-yellow px-4 py-2 rounded-full text-brand-darkbrown font-black text-xs uppercase tracking-tighter shadow-xl">
                    Live Support 24/7
                </div>
            </div>

            <main className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center">
                <AnimatedContent distance={40} direction="vertical" duration={1}>
                    <div className="flex flex-col items-center justify-center mb-6"> 
                        <div className="relative group flex justify-center">
                            <div className="absolute inset-0 bg-brand-yellow/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <img
                                src={Icon}
                                alt="Mission Icon"
                                className="relative w-24 h-auto md:w-48 object-contain mx-auto" 
                            />
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-[6.5rem] font-black tracking-tighter leading-[0.8] text-white uppercase italic mb-6 flex flex-col items-center">
                        <span className="block mb-2">We Build</span>
                        <div className="relative inline-block py-3">
                            <RotatingText
                                texts={['Frontend', 'Backend', 'Fullstack', 'Mobile', 'UI/UX', 'AI & Data']}
                                mainClassName="px-6 bg-brand-yellow text-brand-darkbrown overflow-hidden py-2 justify-center rounded-2xl inline-flex shadow-2xl"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2500}
                            />
                        </div>
                        <span className="block mt-2">Products</span>
                    </h1>

                    <p className="text-gray-400/80 max-w-xl text-lg mx-auto mb-12 leading-relaxed font-medium">
                        From idea to scalable digital product.
                    </p>

                    <div className="flex gap-5 justify-center">
                        <button className="px-12 py-5 bg-white text-brand-darkbrown font-black rounded-full uppercase text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all active:scale-95">
                            Start Project →
                        </button>
                    </div>
                </AnimatedContent>
            </main>
        </section>
    );
}