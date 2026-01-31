import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { usePage } from '@inertiajs/react';
import { RippleGrid } from '../components/About/Ripple';
import { FloatingSkills } from '../components/About/FloatingSkills';
import { TeamCard } from '../components/About/TeamCard';
import TextType from '../components/About/TextType';
import PillNav from '../components/PillNav';
import myLogo from '../../assets/icons/Logo.png';
import { ChevronRight, Target, Rocket, Users, Code2, Palette } from 'lucide-react';
import CountUp from '../components/About/CountUp';
import founder from "../../assets/img/founder.jpg";
import cofounder from "../../assets/img/co-founder.jpg";

interface TeamMember {
  name: string;
  role: string;
  passion: string;
  quote: string;
  stats: { label: string; value: string; }[];
  icon: 'code' | 'design' | 'strategy';
}

interface TeamMember {
  name: string;
  role: string;
  passion: string;
  quote: string;
  stats: { label: string; value: string; }[];
  icon: 'code' | 'design' | 'strategy';
  linkedin: string;  // Tambahkan ini
  portfolio: string; // Tambahkan ini
}

const teamMembers: TeamMember[] = [
  {
    name: 'Azkiya Laili',
    role: 'Lead Developer',
    passion: 'Crafting pixel-perfect experiences with clean, scalable code',
    quote: 'Code is poetry in motion.',
    stats: [{ label: 'Coffee', value: '999' }, { label: 'Lines', value: '10K' }, { label: 'Products', value: '5' }],
    icon: 'code',
    linkedin: 'https://linkedin.com/in/azkiyalaili',
    portfolio: 'https://azkiya.dev',
  },
  {
    name: 'Marah Rofidah',
    role: 'Creative Director',
    passion: 'Transforming chaos into intuitive design systems',
    quote: "Design is how it feels.",
    stats: [{ label: 'Designs', value: '200' }, { label: 'Pixels', value: '1K' }, { label: 'Awards', value: '8' }],
    icon: 'design',
    linkedin: 'https://linkedin.com/in/marahrofidah',
    portfolio: 'https://marah.design',
  },
  {
    name: 'Andini Putri',
    role: 'Strategy Lead',
    passion: 'Connecting business goals with human needs',
    quote: 'Strategy without execution is hallucination.',
    stats: [{ label: 'Projects', value: '50' }, { label: 'Clients', value: '30' }, { label: 'Growth', value: '3' }],
    icon: 'strategy',
    linkedin: 'https://linkedin.com/in/andiniputri',
    portfolio: 'https://andini.strategy',
  },
];

export default function About() {
  const { url } = usePage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-screen w-screen bg-brand-darkbrown text-white overflow-hidden font-sans">
      <RippleGrid opacity={0.15} />

      <header className="fixed top-0 left-0 w-full z-50 py-6">
        <PillNav
          logo={myLogo}
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'About', href: '/about' },
            { label: 'FaQ', href: '/FaQ' },
            { label: 'Contact', href: '/contact' },
          ]}
          activeHref={url}
          baseColor="#ba3c3d"
          pillColor="transparent"
          pillTextColor="#9ca3af"
          hoveredPillTextColor="#ffffff"
        />
      </header>

      <div
        ref={scrollContainerRef}
        className="flex h-full w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth hide-scrollbar"
      >
        <section className="min-w-full h-full snap-center flex items-center justify-center p-20 gap-16 relative">
          <div className="w-1/2 space-y-8">
            <div className="inline-block px-4 py-1 bg-brand-red/20 border border-brand-red text-brand-red text-[10px] font-black uppercase tracking-widest rounded-full">
              The Identity
            </div>
            <h2 className="text-7xl font-black italic uppercase text-brand-yellow tracking-tighter leading-none">
              Titik Koma <br /> Ecosystem
            </h2>
            <p className="text-xl leading-relaxed text-white/70 italic border-l-4 border-brand-red pl-6">
              Titik Koma dibangun atas keresahan terhadap solusi digital yang kaku. Kami hadir sebagai "jeda" untuk berpikir kritis sebelum meluncurkan inovasi yang benar-benar memberikan dampak.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="text-4xl font-black text-brand-red"><CountUp to={150} />+</div>
                <div className="text-xs uppercase font-bold text-white/40 tracking-widest">Problems Solved</div>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="text-4xl font-black text-brand-yellow"><CountUp to={45} />+</div>
                <div className="text-xs uppercase font-bold text-white/40 tracking-widest">Global Clients</div>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex justify-center">
            <img src={myLogo} alt="Logo" className="w-full max-w-sm drop-shadow-[0_0_50px_rgba(186,60,61,0.4)] animate-pulse" />
          </div>
          <div className="absolute right-10 bottom-10 flex flex-col items-center gap-4 group">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-brand-yellow transition-colors duration-500">
                Swipe Right to Explore
              </span>
              <div className="w-20 h-px bg-white/10 relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-brand-yellow"
                />
              </div>
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="p-3 rounded-full border border-white/10 bg-white/5 text-white/40"
            >
              <ChevronRight size={20} />
            </motion.div>
          </div>
        </section>
        <section className="min-w-full h-full snap-center flex items-center justify-between px-16 bg-brand-darkbrown relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[25vw] font-black uppercase italic text-white/2 leading-none -rotate-12 translate-y-10">
              Visionaries
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center perspective-1000 relative z-10">
            <div className="absolute left-10 top-1/4 space-y-4 opacity-40 group-hover:opacity-100 transition-opacity hidden xl:block text-right">
              <div className="text-[10px] font-bold text-brand-red uppercase tracking-widest">Experience</div>
              <div className="text-xl font-black italic">8+ YEARS</div>
            </div>
            <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="relative group cursor-pointer">
              <div className="absolute -top-[50vh] left-1/2 -translate-x-1/2 w-0.5 h-[50vh] bg-linear-to-b from-transparent via-brand-red to-brand-red opacity-30"></div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 border-4 border-brand-red rounded-full z-20 bg-brand-darkbrown"></div>
              <div className="absolute inset-0 bg-brand-red/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-64 h-96 bg-zinc-900/90 rounded-[2.5rem] border border-white/10 p-6 flex flex-col items-center shadow-2xl transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute inset-2 border border-white/5 rounded-[2rem] pointer-events-none"></div>
                <div className="w-full h-56 bg-zinc-800 rounded-2xl mb-6 overflow-hidden relative">
                  <img src={founder} alt="Founder" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-red/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <span className="text-[8px] font-black text-white uppercase tracking-widest">Architect</span>
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-black italic uppercase text-white tracking-tighter leading-none">Firlana Umi</h3>
                  <p className="text-[10px] font-bold uppercase text-brand-red tracking-[0.3em]">Chief Executive Founder</p>
                </div>
                <div className="mt-auto w-full space-y-3">
                  <div className="w-full h-4 flex gap-0.5 opacity-20 group-hover:opacity-40 transition-opacity">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="h-full bg-white" style={{ width: `${Math.random() * 3 + 1}px` }} />
                    ))}
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-1 text-left">
                      <span className="text-[6px] font-bold text-white/30 uppercase tracking-[0.2em]">Verified Property</span>
                      <div className="w-10 h-6 flex items-center justify-start overflow-hidden">
                        <img src={myLogo} className="w-full h-full object-contain object-left opacity-50 group-hover:opacity-100 saturate-0 group-hover:saturate-100" alt="logo" />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1 mb-0.5">
                        <div className="w-1 h-1 rounded-full bg-brand-red animate-pulse"></div>
                        <span className="text-[6px] font-black uppercase text-brand-red">Active Node</span>
                      </div>
                      <div className="text-[8px] font-mono text-white/40">SEC_ID: <span className="text-white/80">TK-001-A26</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-1/3 text-center space-y-10 z-20 px-6">
            <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-yellow">Mindset Behind Titik Koma</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-6xl font-black italic uppercase text-white tracking-tighter leading-[0.9]">
                The <span className="text-brand-yellow">Vision</span>aries
              </h2>
              <div className="h-1 w-20 bg-brand-red mx-auto rounded-full"></div>
            </div>
            <p className="text-base text-white/50 leading-relaxed italic font-medium max-w-sm mx-auto">
              "Kami bukan sekadar membangun sistem, kami mengarsiteki masa depan digital yang lebih manusiawi."
            </p>
            <div className="flex justify-center gap-10 pt-4">
              <div className="flex flex-col items-center gap-2 group cursor-help text-center">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-brand-red transition-colors shadow-lg">
                  <Target className="text-brand-red" size={28} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">Precision</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-help text-center">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-brand-yellow transition-colors shadow-lg">
                  <Rocket className="text-brand-yellow" size={28} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">Disruption</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center perspective-1000 relative z-10">
            <div className="absolute right-10 bottom-1/4 space-y-4 opacity-40 group-hover:opacity-100 transition-opacity hidden xl:block text-left">
              <div className="text-[10px] font-bold text-brand-yellow uppercase tracking-widest">Portfolio</div>
              <div className="text-xl font-black italic">120+ PROJECTS</div>
            </div>
            <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="relative group cursor-pointer">
              <div className="absolute -top-[50vh] left-1/2 -translate-x-1/2 w-0.5 h-[50vh] bg-linear-to-b from-transparent via-brand-yellow to-brand-yellow opacity-30"></div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 border-4 border-brand-yellow rounded-full z-20 bg-brand-darkbrown"></div>
              <div className="absolute inset-0 bg-brand-yellow/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-64 h-96 bg-zinc-900/90 rounded-[2.5rem] border border-white/10 p-6 flex flex-col items-center shadow-2xl transition-all duration-500 group-hover:-rotate-y-12 group-hover:scale-105 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute inset-2 border border-white/5 rounded-[2rem] pointer-events-none"></div>
                <div className="w-full h-56 bg-zinc-800 rounded-2xl mb-6 overflow-hidden relative">
                  <img src={cofounder} alt="Co-Founder" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-yellow/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <span className="text-[8px] font-black text-white uppercase tracking-widest">Creative</span>
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-black italic uppercase text-white tracking-tighter leading-none">Fiona Anggilia</h3>
                  <p className="text-[10px] font-bold uppercase text-brand-yellow tracking-[0.3em]">Creative Strategy Lead</p>
                </div>
                <div className="mt-auto w-full space-y-3">
                  <div className="w-full h-4 flex gap-0.5 opacity-20 group-hover:opacity-40 transition-opacity">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="h-full bg-white" style={{ width: `${Math.random() * 3 + 1}px` }} />
                    ))}
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-1 text-left">
                      <span className="text-[6px] font-bold text-white/30 uppercase tracking-[0.2em]">Verified Property</span>
                      <div className="w-10 h-6 flex items-center justify-start overflow-hidden">
                        <img src={myLogo} className="w-full h-full object-contain object-left opacity-50 group-hover:opacity-100 saturate-0 group-hover:saturate-100" alt="logo" />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1 mb-0.5">
                        <div className="w-1 h-1 rounded-full bg-brand-yellow animate-pulse"></div>
                        <span className="text-[6px] font-black uppercase text-brand-yellow">Active Node</span>
                      </div>
                      <div className="text-[8px] font-mono text-white/40">SEC_ID: <span className="text-white/80">TK-002-B26</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="min-w-full h-full snap-center flex flex-col items-center justify-center p-20 bg-brand-red relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03]">
            <span className="text-[30vw] font-black uppercase italic leading-none">Process</span>
          </div>

          <div className="max-w-7xl w-full relative z-10">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-[7vw] font-black italic uppercase tracking-tighter leading-none text-white">
                Our Journey <br />
                <span className="text-brand-darkbrown">The Strategy</span>
              </h2>
              <div className="flex justify-center gap-2 items-center">
                <div className="h-px w-20 bg-white/20"></div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">Step by step to excellence</p>
                <div className="h-px w-20 bg-white/20"></div>
              </div>
            </div>

            <div className="relative grid grid-cols-4 gap-8">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 hidden lg:block">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
              </div>

              {[
                { id: '01', phase: 'Discovery', desc: 'Diving deep into your business core to find the "Point" of impact.', icon: <Target size={16} /> },
                { id: '02', phase: 'Strategy', desc: 'Crafting a surgical digital blueprint tailored for scalable growth.', icon: <Users size={16} /> },
                { id: '03', phase: 'Crafting', desc: 'High-precision building combined with iterative, human-centered design.', icon: <Rocket size={16} /> },
                { id: '04', phase: 'Evolution', desc: 'Continuous optimization to scale your digital presence to new heights.', icon: <ChevronRight size={16} /> }
              ].map((p, index) => (
                <div
                  key={p.id}
                  className="relative p-10 bg-brand-darkbrown/30 rounded-[3.5rem] border border-white/10 backdrop-blur-xl hover:bg-brand-darkbrown/60 transition-all duration-500 group"
                >
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-darkbrown border-2 border-white/20 flex items-center justify-center text-white group-hover:border-brand-yellow transition-colors group-hover:scale-110 duration-300">
                      {p.icon}
                    </div>
                    <div className="w-px h-8 bg-white/20 group-hover:bg-brand-yellow"></div>
                  </div>
                  <div className="space-y-4">
                    <span className="text-5xl font-black text-white/5 italic group-hover:text-brand-yellow/20 transition-colors">#{p.id}</span>
                    <h3 className="text-2xl font-black italic uppercase text-white group-hover:text-brand-yellow transition-colors leading-none">{p.phase}</h3>
                    <p className="text-[11px] text-white/50 leading-relaxed font-medium uppercase tracking-wider group-hover:text-white transition-colors">{p.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="min-w-full h-full snap-center flex flex-col items-center justify-center p-20 bg-brand-darkbrown relative">
          <div className="max-w-7xl w-full">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-7xl font-black italic uppercase tracking-tighter">
                The <span className="text-brand-yellow">Architects</span>
              </h2>
              <p className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-bold">Behind every digital masterpiece</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {teamMembers.map((m, i) => (
                <TeamCard key={m.name} member={m} index={i} />
              ))}
            </div>
          </div>
        </section>
        <section className="min-w-full h-full snap-center flex items-center justify-center p-20 bg-brand-darkbrown/50 relative overflow-hidden">
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-brand-yellow/5 blur-[120px] rounded-full opacity-50" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-red/5 blur-[120px] rounded-full opacity-50" />

          <div className="max-w-7xl w-full grid grid-cols-4 grid-rows-2 gap-6 h-[75vh] relative z-10">
            <div className="col-span-2 row-span-1 bg-zinc-900/80 border border-white/10 rounded-[3.5rem] p-12 flex flex-col justify-between group hover:border-brand-red/40 transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/20 border border-brand-red/30 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">Specialized Ecosystem</span>
                </div>
                <h3 className="text-5xl font-black italic uppercase leading-[0.9] text-white tracking-tighter">
                  <TextType text="Integrated Digital Solutions" className="text-white" />
                  <br />
                  <span className="text-brand-yellow">Ecosystem.</span>
                </h3>
              </div>
              <div className="relative">
                <p className="text-sm text-white/50 max-w-sm font-medium leading-relaxed italic border-l-2 border-brand-red/30 pl-4 mb-6">
                  Kami menciptakan ekosistem digital yang cerdas, adaptif, dan berpusat pada pengalaman manusia.
                </p>
                <div className="w-full h-px bg-linear-to-r from-brand-red/50 via-brand-yellow/20 to-transparent opacity-30" />
              </div>
            </div>
            <div className="col-span-1 bg-white/5 border border-white/10 rounded-[3.5rem] p-8 flex flex-col items-center text-center group hover:bg-white/8 transition-all duration-500">
              <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform">
                <Code2 size={28} />
              </div>
              <h4 className="font-black italic uppercase text-xl mb-4">Web & Mobile</h4>
              <div className="flex flex-wrap justify-center gap-1.5">
                {['React', 'Laravel', 'Flutter', 'Next.js'].map(tech => (
                  <span key={tech} className="px-2.5 py-1 bg-white/5 rounded-md text-[8px] font-bold uppercase text-white/40 border border-white/5 group-hover:bg-brand-red group-hover:text-white transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-span-1 bg-white/5 border border-white/10 rounded-[3.5rem] p-8 flex flex-col group hover:bg-white/8 transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-yellow group-hover:rotate-12 transition-transform">
                  <Target size={24} />
                </div>
                <div className="text-right">
                  <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">Neural Load</span>
                  <div className="text-sm font-mono text-brand-yellow">ACTIVE</div>
                </div>
              </div>
              <h4 className="font-black italic uppercase text-xl mb-4 text-center">AI & Data</h4>
              <div className="mt-auto h-16 flex items-end justify-between gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="w-full bg-brand-yellow/50 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
            <div className="col-span-1 bg-zinc-900/50 border border-white/10 rounded-[3.5rem] p-8 flex flex-col justify-center group overflow-hidden relative">
              <div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Palette className="text-white/20 mb-4 group-hover:text-brand-yellow transition-colors mx-auto" size={32} />
              <h4 className="font-black italic uppercase text-lg text-center text-white/90">UX Precision</h4>
              <div className="space-y-2 mt-4">
                <div className="flex justify-between text-[8px] font-bold text-white/40 uppercase tracking-tighter">
                  <span>Reliability</span>
                  <span className="text-brand-yellow">99.9%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.9%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-brand-yellow shadow-[0_0_10px_rgba(255,219,0,0.5)]"
                  />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 text-center">
                <div className="text-3xl font-black italic text-brand-yellow"><CountUp to={99} />.9%</div>
              </div>
            </div>
            <div className="col-span-3 bg-brand-yellow rounded-[3.5rem] p-12 flex items-center justify-between group cursor-pointer overflow-hidden relative shadow-[0_0_50px_rgba(255,219,0,0.1)]">
              <div className="space-y-4 relative z-10">
                <h3 className="text-5xl font-black italic uppercase text-brand-darkbrown leading-none tracking-tighter">
                  Ready to start <br />
                  <span className="opacity-80">a new project?</span>
                </h3>
                <p className="text-brand-darkbrown/60 text-sm font-bold uppercase tracking-widest max-w-md italic">
                  Mari transformasikan ide Anda menjadi realitas digital.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.1, x: 5 }}
                className="w-24 h-24 bg-brand-darkbrown rounded-full flex items-center justify-center text-brand-yellow relative z-10 shadow-2xl transition-transform"
              >
                <ChevronRight size={48} />
              </motion.div>
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-white/30 transition-all duration-700" />
            </div>

          </div>
        </section>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </div>
  );
}