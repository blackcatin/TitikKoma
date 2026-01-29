import { X, CheckCircle2, Zap, Target, Layers, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import * as Icons from "lucide-react"; 
import React, { useEffect } from 'react';
interface ServiceData {
    icon: string; 
    title: string;
    desc: string;
    fullDesc?: string;
    category: string;
    work?: string[];
    techStack?: string;
    budget?: string;
    target?: string;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: ServiceData | null;
}

export default function ServiceModal({ isOpen, onClose, data }: ModalProps) {
    const LucideIcon = data && (Icons as any)[data.icon] ? (Icons as any)[data.icon] : HelpCircle;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6 overflow-hidden">
            <div
                className="absolute inset-0 bg-[#0c0405]/90 backdrop-blur-xl transition-opacity duration-500"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="relative z-110 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] bg-linear-to-b from-[#1e0a0d] to-[#0c0405] border border-white/10 shadow-[0_0_80px_rgba(186,60,61,0.2)] custom-scrollbar animate-in fade-in zoom-in duration-300">
                <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-brand-red/10 to-transparent pointer-events-none" />
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-yellow/5 blur-[100px] rounded-full pointer-events-none" />

                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 z-30 p-3 rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-brand-red transition-all duration-300 group"
                >
                    <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>

                <div className="relative p-8 md:p-16">
                    <div className="flex flex-col gap-10 mb-16">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/30 text-brand-red text-[9px] font-black uppercase tracking-[0.25em] shadow-sm">
                                <Sparkles size={12} />
                                {data.category}
                            </div>
                            <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                            <div className="relative shrink-0">
                                <div className="absolute inset-0 bg-brand-yellow/10 blur-3xl rounded-full animate-pulse" />
                                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white/3 border border-white/10 rounded-[2.5rem] flex items-center justify-center shadow-inner">
                                    <LucideIcon size={64} strokeWidth={1.5} className="text-brand-yellow" />
                                </div>
                            </div>

                            <div className="space-y-4 text-center md:text-left">
                                <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.85] tracking-tighter uppercase italic drop-shadow-sm">
                                    {data.title.split(' ').map((word, i) => (
                                        <span key={i} className={i % 2 !== 0 ? 'text-brand-yellow' : 'text-white'}>
                                            {word}{' '}
                                        </span>
                                    ))}
                                </h2>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl font-medium border-l-4 border-brand-red pl-6 mx-auto md:mx-0">
                                    {data.fullDesc || data.desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-white/5 pt-16">

                        <div className="bg-white/2 p-6 rounded-[2rem] border border-white/5 space-y-6">
                            <div className="flex items-center gap-3 text-brand-yellow">
                                <Zap size={16} className="fill-brand-yellow" />
                                <h4 className="text-[10px] font-black uppercase tracking-[0.25em]">Key Works</h4>
                            </div>
                            <ul className="space-y-3">
                                {data.work?.map((w, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400 text-xs group">
                                        <CheckCircle2 size={16} className="text-brand-red shrink-0 mt-0.5 opacity-70" />
                                        <span className="leading-tight group-hover:text-white transition-colors">{w}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6 px-2">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-brand-red">
                                    <Layers size={16} />
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.25em]">Technology Stack</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {data.techStack?.split(',').map((tech, i) => (
                                        <span key={i} className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] font-semibold text-gray-400 uppercase tracking-wider hover:text-brand-yellow hover:border-brand-yellow/50 transition-all cursor-default">
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 text-left text-[11px] leading-relaxed">
                                <div className="flex items-center gap-2 text-brand-red">
                                    <Target size={16} />
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.25em]">Target Audience</h4>
                                </div>
                                <p className="text-gray-400 italic leading-relaxed">
                                    {data.target || "Bisnis yang ingin bertransformasi secara digital dengan standar teknologi tinggi."}
                                </p>
                            </div>
                        </div>

                        <div className="relative group p-6 rounded-[2rem] bg-brand-yellow border border-white/20 shadow-2xl shadow-brand-yellow/5 overflow-hidden flex flex-col justify-between">
                            <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/20 blur-2xl rounded-full pointer-events-none" />
                            
                            <div>
                                <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-darkbrown/80 mb-1">Estimated Investment</h4>
                                <div className="text-3xl font-black text-brand-darkbrown tracking-tight mb-2 italic leading-none">
                                    {data.budget}
                                </div>
                                <p className="text-[9px] text-brand-darkbrown/80 leading-tight uppercase font-bold tracking-widest">
                                    *Investment varies based on project complexity and scope.
                                </p>
                            </div>

                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="w-full mt-6 py-3 rounded-xl bg-brand-darkbrown text-white font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:scale-[1.02] transition-all duration-300"
                            >
                                GET QUOTE <ArrowRight size={12} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
