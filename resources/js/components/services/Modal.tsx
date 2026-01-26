interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}
import React from 'react';

export default function ServiceModal({ isOpen, onClose, data }: any) {
    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-brand-darkbrown/80 backdrop-blur-2xl" onClick={onClose} />
            
            <div className="relative bg-[#1a0d0f] border border-white/10 w-full max-w-3xl p-10 md:p-14 rounded-[4rem] shadow-2xl overflow-y-auto max-h-[85vh] scrollbar-hide">
                <button onClick={onClose} className="absolute top-8 right-10 text-gray-500 hover:text-white transition-colors text-2xl font-light">✕</button>
                
                <div className="flex items-center gap-6 mb-10">
                    <span className="text-5xl">{data.icon}</span>
                    <div>
                        <span className="text-brand-yellow text-xs font-black uppercase tracking-[0.3em]">Service Detail</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">{data.title}</h2>
                    </div>
                </div>

                <div className="space-y-10">
                    <p className="text-gray-300 text-xl leading-relaxed italic">"{data.fullDesc}"</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm border-b border-brand-yellow/30 pb-2 inline-block">Key Works</h4>
                            <ul className="space-y-3">
                                {data.work.map((w: string, i: number) => (
                                    <li key={i} className="text-gray-400 text-sm flex items-center gap-3">
                                        <span className="w-1 h-1 bg-brand-yellow rounded-full" /> {w}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm border-b border-brand-yellow/30 pb-2 inline-block">Technical Stack</h4>
                            <p className="text-gray-400 text-sm leading-relaxed font-mono">{data.techStack}</p>
                            <h4 className="text-white font-bold mt-8 mb-4 uppercase tracking-widest text-sm border-b border-brand-yellow/30 pb-2 inline-block">Cocok Untuk</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{data.target}</p>
                        </div>
                    </div>

                    <div className="p-8 bg-brand-yellow/5 rounded-[2.5rem] border border-brand-yellow/10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <span className="text-[10px] text-brand-yellow uppercase font-bold tracking-widest">Estimasi Investasi</span>
                            <div className="text-2xl font-black text-white">{data.budget}</div>
                        </div>
                        <button className="w-full md:w-auto bg-brand-yellow text-brand-darkbrown font-black px-10 py-4 rounded-2xl hover:bg-white transition-all uppercase tracking-tighter">
                            Mulai Diskusi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}