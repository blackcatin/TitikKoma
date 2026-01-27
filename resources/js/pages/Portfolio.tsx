import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Database, PenTool, ArrowUp, ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/PortfolioData';
import CubeProject from '../components/portofolio/CubeProject';
import PillNav from '../components/PillNav';
import myLogo from '../../assets/icons/Logo.png';
import { usePage } from '@inertiajs/react';

const categories = [
    { id: 'web', label: 'Web', icon: Layout },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'data&AI', label: 'Data & AI', icon: Database },
    { id: 'ui/ux', label: 'UI / UX', icon: PenTool },
];

export default function PortfolioCube() {
    const { url } = usePage();
    const [activeCat, setActiveCat] = useState<'web' | 'mobile' | 'data&AI' | 'ui/ux'>('web');
    const [projectIndex, setProjectIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const filteredProjects = useMemo(
        () => portfolioData.filter(p => p.category === activeCat),
        [activeCat]
    );

    const navigate = (dir: number) => {
        const next = projectIndex + dir;
        if (next >= 0 && next < filteredProjects.length) {
            setDirection(dir);
            setProjectIndex(next);
        }
    };

    return (
        <div className="h-screen w-screen bg-[#0d0607] overflow-hidden relative flex items-center justify-center font-sans">

            {/* NAVBAR */}
            <header className="fixed top-0 left-0 w-full z-60 py-6">
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

            {/* SIDEBAR CATEGORY */}
            <aside className="absolute right-8 z-50 flex flex-col gap-6 p-4 rounded-[2.5rem] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl">
                {categories.map((cat) => (
                    <div key={cat.id} className="relative group flex items-center">
                        <div className="absolute right-full mr-4 px-4 py-2 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest rounded-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl whitespace-nowrap">
                            {cat.label}
                            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-brand-red rotate-45" />
                        </div>

                        <button
                            onClick={() => {
                                setActiveCat(cat.id as any);
                                setProjectIndex(0);
                            }}
                            className={`p-4 rounded-2xl transition-all duration-500
                                ${activeCat === cat.id
                                    ? 'bg-brand-red text-white scale-110 shadow-lg shadow-brand-red/30'
                                    : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                        >
                            <cat.icon size={22} />
                        </button>
                    </div>
                ))}
            </aside>

            {/* NAVIGASI PROJECT */}
            <div className="absolute left-12 z-50 flex flex-col gap-10 items-center">
                <button
                    onClick={() => navigate(-1)}
                    disabled={projectIndex === 0}
                    className={`transition-all duration-300 ${projectIndex === 0 ? 'opacity-20' : 'hover:text-brand-yellow hover:-translate-y-1'}`}
                >
                    <ArrowUp size={32} strokeWidth={3} />
                </button>

                <div className="h-40 w-px bg-white/10 relative">
                    <motion.div
                        animate={{
                            y: filteredProjects.length > 1
                                ? (projectIndex / (filteredProjects.length - 1)) * 160
                                : 0
                        }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-10 bg-brand-yellow rounded-full shadow-[0_0_15px_rgba(212,157,0,0.5)]"
                        transition={{ type: 'spring', stiffness: 120 }}
                    />
                </div>

                <button
                    onClick={() => navigate(1)}
                    disabled={projectIndex === filteredProjects.length - 1}
                    className={`transition-all duration-300 ${projectIndex === filteredProjects.length - 1 ? 'opacity-20' : 'hover:text-brand-yellow hover:translate-y-1'}`}
                >
                    <ArrowDown size={32} strokeWidth={3} />
                </button>

                <div className="text-[10px] font-black text-white/40 mt-2 tracking-widest uppercase">
                    {projectIndex + 1} / {filteredProjects.length}
                </div>
            </div>

            {/* CUBE */}
            <div className="w-full h-full perspective-2000 flex items-center justify-center">
                {filteredProjects.length > 0 && (
                    <CubeProject
                        project={filteredProjects[projectIndex]}
                        direction={direction}
                    />
                )}
            </div>

            {/* BACKGROUND TEXT */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                <h1 className="text-[35vw] font-black italic uppercase tracking-tighter">
                    {activeCat}
                </h1>
            </div>
        </div>
    );
}
