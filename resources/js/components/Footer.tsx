import React from 'react';
import { Link } from '@inertiajs/react';
import { Instagram, Linkedin, Github, Mail, Phone } from 'lucide-react';
import myLogo from '../../assets/icons/icon.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 bg-brand-darkbrown border-t border-white/5 pt-20 pb-10 overflow-hidden">
            {/* Background Glow - Dikecilkan ukurannya agar fokus di tengah */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-160 h-160 bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    
                    {/* Brand Section - Dibuat lebih ramping dengan max-width */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-block group">
                            <img
                                src={myLogo}
                                alt="Titik Koma Logo"
                                className="w-32 h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </Link>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Studio teknologi yang fokus membangun produk digital
                            terstruktur dan scalable untuk ambisi bisnis Anda.
                        </p>
                        
                        <div className="flex gap-3 pt-2">
                            {[
                                { label: 'Instagram', icon: <Instagram size={16} />, href: 'https://www.instagram.com/firlazz_/' },
                                { label: 'LinkedIn', icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/firlanaumi/' },
                                { label: 'GitHub', icon: <Github size={16} />, href: 'https://github.com/blackcatin' },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-brand-yellow hover:text-brand-darkbrown hover:border-brand-yellow transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-12">
                        <div className="space-y-5">
                            <h4 className="text-brand-yellow text-[10px] font-black uppercase tracking-[0.3em]">
                                Menu
                            </h4>
                            <ul className="space-y-3 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-5">
                            <h4 className="text-brand-yellow text-[10px] font-black uppercase tracking-[0.3em]">
                                Company
                            </h4>
                            <ul className="space-y-3 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                                <li className="opacity-30 cursor-not-allowed italic">Careers</li>
                            </ul>
                        </div>

                        <div className="space-y-5 col-span-2 md:col-span-1">
                            <h4 className="text-brand-yellow text-[10px] font-black uppercase tracking-[0.3em]">
                                Connect
                            </h4>
                            <ul className="space-y-3 text-gray-400 text-sm font-medium">
                                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                                    <Mail size={14} className="text-brand-yellow" />
                                    <span>titikkoma@gmail.com</span>
                                </li>
                                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                                    <Phone size={14} className="text-brand-yellow" />
                                    <span>+62 812 3456 7890</span>
                                </li>
                                <li className="text-[11px] leading-snug opacity-50 uppercase tracking-tight pt-2">
                                    Surabaya, East Java<br />Indonesia
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    <p>© {currentYear} Titik Koma Digital</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}