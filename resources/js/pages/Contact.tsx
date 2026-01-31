import React, { useState, useEffect, useRef } from 'react';
import { usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import PillNav from '@/components/PillNav';
import RippleGrid from '@/components/Animation/RippleGrid';
import myLogo from '../../assets/icons/Logo.png';
import {
    Send, Code2, Smartphone, Database, Palette,
    CheckCircle2, ArrowRight, Terminal, HelpCircle,
    Sparkles, MessageCircle, FileUp, Activity, Fingerprint,
    Globe, ShieldCheck, Box, Mail, Zap, User, AtSign, Loader2
} from 'lucide-react';

export default function Contact() {
    const { url } = usePage();
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const [serviceType, setServiceType] = useState('web');
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev >= 100 ? 0 : prev + 1));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const type = params.get('type');
        if (type) setServiceType(type);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('success'), 2500);
    };

    const handleCloseSuccess = () => {
        setStatus('idle');
        setUploadedFile(null);
        if (formRef.current) formRef.current.reset();
    };

    const renderDynamicFields = () => {
        const inputBase = "w-full bg-white/[0.05] border border-white/10 p-4 rounded-2xl text-[13px] focus:border-brand-yellow focus:bg-white/[0.1] outline-none transition-all placeholder:text-white/20 font-medium";

        switch (serviceType) {
            case 'inquiry':
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 font-sans">
                        <select className={inputBase} required>
                            <option className="bg-[#1a0b0e]">Tanya tentang Biaya & Cara Bayar</option>
                            <option className="bg-[#1a0b0d]">Konsultasi Ide Bisnis Baru</option>
                            <option className="bg-[#1a0b0d]">Bantuan Teknis Proyek</option>
                            <option className="bg-[#1a0b0d]">Lainnya (Jelaskan Masalah Anda)</option>
                        </select>
                        <textarea required placeholder="Ceritakan detail pertanyaan atau kendala Anda di sini..." className={`${inputBase} h-32 resize-none leading-relaxed`} />
                    </motion.div>
                );
            case 'web':
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 font-sans">
                        <select className={inputBase} required>
                            <option className="bg-brand-darkbrown">Jualan Online (E-Commerce)</option>
                            <option className="bg-brand-darkbrown">Website Perusahaan (Company Profile)</option>
                            <option className="bg-brand-darkbrown">Sistem Khusus (Custom Web App)</option>
                            <option className="bg-[#1a0b0d]">Lainnya (Jelaskan Masalah Anda)</option>
                        </select>
                        <input required type="text" placeholder="Ceritakan detail rencana atau kebutuhan Anda..." className={inputBase} />
                    </motion.div>
                );

            case 'mobile':
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 font-sans text-left">
                        <div className="space-y-3">
                            <label className="text-[10px] font-bold text-white/60 ml-2 uppercase tracking-widest">Pilih Sistem Operasi:</label>
                            <div className="flex gap-3">
                                {['Android', 'iPhone (iOS)', 'Keduanya'].map((os) => (
                                    <label key={os} className="flex-1 p-4 border border-white/10 rounded-2xl flex items-center justify-center gap-3 text-[11px] font-bold cursor-pointer hover:bg-white/10 hover:border-brand-yellow/50 transition-all group">
                                        <input
                                            type="radio"
                                            name="mobile_os"
                                            value={os}
                                            className="w-4 h-4 accent-brand-yellow cursor-pointer"
                                            required
                                        />
                                        <span className="group-hover:text-brand-yellow transition-colors">{os}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-white/60 ml-2 uppercase tracking-widest">Estimasi Skala Aplikasi:</label>
                            <input
                                required
                                type="text"
                                placeholder="Berapa banyak fitur utama yang ingin dibuat? (Contoh: 5-10 Halaman)"
                                className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-[13px] focus:border-brand-yellow focus:bg-white/10 outline-none transition-all placeholder:text-white/20 font-medium"
                            />
                        </div>
                    </motion.div>
                );
            case 'uiux':
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 font-sans">
                        <select className={inputBase} required>
                            <option className="bg-brand-darkbrown">Buat Brand & Logo Baru</option>
                            <option className="bg-brand-darkbrown">Desain Tampilan Web/App</option>
                            <option className="bg-brand-darkbrown">Perbaikan Desain (Redesign)</option>
                            <option className="bg-[#1a0b0d]">Lainnya (Jelaskan Masalah Anda)</option>
                        </select>
                        <div onClick={() => fileInputRef.current?.click()} className="p-8 border-2 border-dashed border-white/10 rounded-3xl text-center hover:border-brand-yellow/50 transition-all cursor-pointer bg-white/5 group">
                            <Sparkles className="mx-auto mb-2 text-brand-yellow group-hover:scale-125 transition-transform" size={24} />
                            <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest italic">
                                {uploadedFile ? uploadedFile.name : "Klik untuk Upload Referensi"}
                            </span>
                            <input type="file" ref={fileInputRef} onChange={(e) => setUploadedFile(e.target.files?.[0] || null)} className="hidden" />
                        </div>
                    </motion.div>
                );
            default:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 font-sans">
                        <textarea required placeholder="Ceritakan detail rencana atau kebutuhan Anda..." className={`${inputBase} h-32 resize-none`} />
                    </motion.div>
                );
        }
    };

    return (
        <div className="h-screen w-full bg-[#120607] text-white font-sans overflow-hidden relative selection:bg-brand-yellow selection:text-brand-darkbrown">
            <div className="absolute inset-0 z-0 opacity-40">
                <RippleGrid gridColor="#ba3c3d" rippleIntensity={0.05} gridSize={25} opacity={0.3} />
            </div>

            <header className="absolute top-0 left-0 w-full z-50 py-8 px-10">
                <PillNav logo={myLogo} items={[
                    { label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Portfolio', href: '/portfolio' }, { label: 'About', href: '/about' }, { label: 'FaQ', href: '/FaQ' }, { label: 'Contact', href: '/contact' },
                ]} activeHref={url} baseColor="#ba3c3d" />
            </header>

            <main className="h-full w-full max-w-350 mx-auto px-10 relative z-10 flex items-center justify-center font-black italic">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 w-full items-stretch">
                    <div className="lg:col-span-5 flex flex-col justify-between py-10">
                        <div className="space-y-6">
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[10px] font-black tracking-widest shadow-[0_0_20px_rgba(255,219,0,0.1)]">
                                <Zap size={14} className="fill-brand-yellow" /> LIVE_CONSULTATION_STATION
                            </motion.div>
                            <h1 className="text-7xl xl:text-8xl font-black italic leading-[0.8] tracking-tighter uppercase">NEED A<br /><span className="text-brand-yellow text-glow">HAND?</span></h1>
                            <p className="text-sm text-white/40 normal-case font-medium leading-relaxed max-w-sm border-l-2 border-brand-red pl-6 italic font-sans">
                                Sampaikan ide Anda dengan bahasa yang sederhana. Tim kami yang akan menerjemahkannya menjadi solusi digital yang presisi.
                            </p>
                        </div>

                        <div className="space-y-4 pr-10">
                            <div className="p-6 rounded-[2.5rem] bg-white/3 border border-white/5 backdrop-blur-xl relative overflow-hidden group hover:bg-white/5 transition-all">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[10px] font-black text-white/20 tracking-tighter uppercase">System Availability</span>
                                    <Activity className="text-green-500 animate-pulse" size={16} />
                                </div>
                                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div animate={{ width: `${progress}%` }} className="h-full bg-linear-to-r from-brand-red to-brand-yellow" />
                                </div>
                                <div className="mt-4 flex gap-4 font-sans">
                                    <div className="text-[9px] font-mono text-white/30 lowercase"><span className="text-brand-yellow">#</span> respond_time: &lt;24h</div>
                                    <div className="text-[9px] font-mono text-white/30 lowercase"><span className="text-brand-yellow">#</span> security: encrypted</div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a href="https://wa.me/628123456789" className="group flex-1 p-5 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center gap-2 hover:border-brand-yellow hover:bg-brand-yellow/5 transition-all duration-500">
                                    <MessageCircle size={20} className="text-brand-yellow group-hover:scale-110 transition-transform" />
                                    <span className="text-[9px] font-black opacity-40 uppercase tracking-widest">WhatsApp</span>
                                </a>
                                <a href="mailto:hi@titikoma.id" className="group flex-1 p-5 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center gap-2 hover:border-brand-red hover:bg-brand-red/5 transition-all duration-500">
                                    <Mail size={20} className="text-brand-red group-hover:scale-110 transition-transform" />
                                    <span className="text-[9px] font-black opacity-40 uppercase tracking-widest">Email Kami</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 relative flex items-center">
                        <div className="absolute -inset-10 bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />
                        <motion.div layout className="w-full bg-[#18080a]/80 border border-white/10 rounded-[4rem] p-12 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="flex items-center justify-between border-b border-white/5 pb-8">
                                    <div className="flex items-center gap-5">
                                        <div className="h-14 w-14 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow shadow-[0_0_30px_rgba(255,219,0,0.05)]">
                                            {serviceType === 'web' && <Code2 size={28} />}
                                            {serviceType === 'mobile' && <Smartphone size={28} />}
                                            {serviceType === 'aidata' && <Database size={28} />}
                                            {serviceType === 'uiux' && <Palette size={28} />}
                                            {serviceType === 'inquiry' && <HelpCircle size={28} />}
                                        </div>
                                        <div className="text-left">
                                            <span className="block text-[9px] font-black text-white/30 tracking-[0.2em] uppercase mb-1">Pilih Layanan:</span>
                                            <span className="block text-xl font-black italic text-brand-yellow uppercase tracking-tight">
                                                {serviceType === 'inquiry' ? 'FaQ' : `${serviceType} Solution`}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 p-1.5 bg-black/40 rounded-2xl border border-white/5">
                                        {['web', 'mobile', 'aidata', 'uiux', 'inquiry'].map((t) => (
                                            <button key={t} type="button" onClick={() => setServiceType(t)} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${serviceType === t ? 'bg-brand-yellow text-brand-darkbrown shadow-lg scale-110' : 'text-white/30 hover:bg-white/5'}`}>
                                                {t === 'web' && <Code2 size={16} />}
                                                {t === 'mobile' && <Smartphone size={16} />}
                                                {t === 'aidata' && <Database size={16} />}
                                                {t === 'uiux' && <Palette size={16} />}
                                                {t === 'inquiry' && <HelpCircle size={16} />}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8 text-left font-sans">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-white/30 flex items-center gap-2 uppercase tracking-widest"><User size={12} className="text-brand-yellow" /> Nama Lengkap</label>
                                        <input required type="text" placeholder="john parker" className="w-full bg-transparent border-b-2 border-white/10 py-3 outline-none focus:border-brand-yellow transition-all text-sm font-medium" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-white/30 flex items-center gap-2 uppercase tracking-widest"><AtSign size={12} className="text-brand-yellow" /> Alamat Email</label>
                                        <input required type="email" placeholder="john@gmail.com" className="w-full bg-transparent border-b-2 border-white/10 py-3 outline-none focus:border-brand-yellow transition-all text-sm font-medium" />
                                    </div>
                                </div>

                                <div className="space-y-6 pt-4 text-left">
                                    <div className="flex items-center gap-3">
                                        <div className="h-px flex-1 bg-linear-to-r from-transparent to-white/10" />
                                        <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase italic">Detail Rencana Proyek</span>
                                        <div className="h-px flex-1 bg-linear-to-l from-transparent to-white/10" />
                                    </div>
                                    {renderDynamicFields()}
                                </div>

                                <button disabled={status !== 'idle'} className="group w-full py-6 rounded-[2.5rem] font-black italic uppercase tracking-[0.3em] text-[13px] bg-brand-red text-white hover:bg-brand-yellow hover:text-brand-darkbrown transition-all duration-500 flex items-center justify-center gap-4 active:scale-95 shadow-2xl overflow-hidden relative">
                                    <AnimatePresence mode="wait">
                                        {status === 'sending' ? (
                                            <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                                                <Loader2 size={18} className="animate-spin" /> Transmitting...
                                            </motion.div>
                                        ) : (
                                            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4">
                                                KIRIM PENAWARAN <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </form>
                            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
                        </motion.div>
                    </div>
                </div>
            </main>
            <AnimatePresence>
                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-200 flex items-center justify-center p-6 bg-brand-darkbrown/90 backdrop-blur-3xl"
                    >
                        <motion.div
                            initial={{ scale: 0.85, y: 100, rotateX: 30 }}
                            animate={{ scale: 1, y: 0, rotateX: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: -50 }}
                            transition={{ type: "spring", damping: 20, stiffness: 100 }}
                            className="max-w-md w-full bg-[#1c0d0f] border border-brand-yellow/30 p-12 rounded-[4rem] text-center shadow-[0_0_120px_rgba(186,60,61,0.15)] relative overflow-hidden group"
                        >
                            <motion.div
                                animate={{ y: [0, 400] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-full h-px bg-brand-yellow/40 z-0"
                            />

                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-brand-yellow/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-inner border border-brand-yellow/20 animate-bounce">
                                    <CheckCircle2 className="text-brand-yellow" size={56} />
                                </div>

                                <h2 className="text-4xl font-black italic mb-4 uppercase tracking-tighter text-white leading-none">Uplink<br /><span className="text-brand-yellow">Success!</span></h2>

                                <p className="text-sm text-white/40 normal-case font-medium leading-relaxed mb-10 italic font-sans px-4">
                                    Terima kasih, <span className="text-white">Arsitek Digital</span> kami telah menerima parameter proyek Anda. Jalur komunikasi akan segera dibuka dalam <span className="text-brand-yellow">24 jam</span>.
                                </p>

                                <button
                                    onClick={handleCloseSuccess}
                                    className="w-full py-5 bg-brand-yellow text-brand-darkbrown font-black rounded-3xl text-[11px] tracking-[0.3em] hover:bg-white hover:scale-[1.03] active:scale-95 transition-all uppercase shadow-lg shadow-brand-yellow/10"
                                >
                                    Konfirmasi & Selesai
                                </button>

                                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-30 font-mono text-[8px] uppercase tracking-widest italic">
                                    <span>Auth: verified_node</span>
                                    <span>id: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,219,0,0.1)_0,transparent_70%)]" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}