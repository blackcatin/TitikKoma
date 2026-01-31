import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { usePage } from '@inertiajs/react';
import { RippleGrid } from '../components/About/Ripple';
import { FloatingSkills } from '../components/About/FloatingSkills';
import { TeamCard } from '../components/About/TeamCard';
import TextType from '../components/About/TextType'; 
import PillNav from '../components/PillNav';
import myLogo from '../../assets/icons/Logo.png';
import { ChevronRight } from 'lucide-react';
interface TeamMember {
  name: string;
  role: string;
  passion: string;
  quote: string;
  stats: {
    label: string;
    value: string;
  }[];
  icon: 'code' | 'design' | 'strategy';
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alex Chen',
    role: 'Lead Developer',
    passion: 'Crafting pixel-perfect experiences with clean, scalable code',
    quote: 'Code is poetry in motion.',
    stats: [
      { label: 'Coffee', value: '999' },
      { label: 'Lines', value: '10000' },
      { label: 'Products', value: '5' },
    ],
    icon: 'code',
  },
  {
    name: 'Sarah Kim',
    role: 'Creative Director',
    passion: 'Transforming chaos into intuitive design systems',
    quote: "Design is how it feels.",
    stats: [
      { label: 'Designs', value: '200' },
      { label: 'Pixels', value: '1000000' },
      { label: 'Awards', value: '8' },
    ],
    icon: 'design',
  },
  {
    name: 'Marcus Lee',
    role: 'Strategy Lead',
    passion: 'Connecting business goals with human needs',
    quote: 'Strategy without execution is hallucination.',
    stats: [
      { label: 'Projects', value: '50' },
      { label: 'Clients', value: '30' },
      { label: 'Growth', value: '3' },
    ],
    icon: 'strategy',
  },
];

export default function About() {
  const { url } = usePage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: scrollContainerRef,
  });

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
        <section className="min-w-full h-full snap-center flex flex-col items-center justify-center p-20 relative">
          <div className="max-w-7xl text-center">
            <h1 className="text-[10vw] font-black italic uppercase tracking-tighter leading-tight">
              <TextType 
                text={["WE CREATE", "WE INNOVATE"]} 
                typingSpeed={70}
                className="bg-linear-to-r from-brand-red to-brand-yellow bg-clip-text text-transparent inline-block"
              />
              <br />
              <span className="text-white">THE FUTURE</span>
            </h1>
            <p className="mt-8 text-xl text-white/50 italic max-w-2xl mx-auto">
              A deliberate pause before building digital products that actually matter.
            </p>
          </div>
          
          <div className="absolute right-10 bottom-10 flex items-center gap-2 animate-pulse">
            <span className="text-xs font-black uppercase tracking-widest text-white/40">Scroll Right</span>
            <ChevronRight className="text-brand-red" size={24} />
          </div>
        </section>

        <section className="min-w-full h-full snap-center flex items-center justify-center bg-black/20 p-20 gap-20">
          <div className="w-1/2 space-y-8">
            <h2 className="text-6xl font-black italic uppercase text-brand-yellow tracking-tighter">Logo Philosophy</h2>
            <div className="p-8 border-l-4 border-brand-red bg-white/5 rounded-r-3xl backdrop-blur-sm">
              <p className="text-2xl leading-relaxed italic">
                "Titik Koma (;) melambangkan jeda yang bermakna. Bukan akhir, melainkan momen untuk berpikir sebelum meluncurkan inovasi yang lebih besar."
              </p>
            </div>
            
            <div className="flex gap-8 mt-12">
               <div className="relative group cursor-pointer">
                  <div className="w-48 h-72 bg-white/10 rounded-xl border border-white/20 flex flex-col items-center p-4 transition-all group-hover:-rotate-3 group-hover:bg-white/15">
                    <div className="w-full h-40 bg-gray-800 rounded mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                       <div className="w-full h-full bg-brand-red/20 flex items-center justify-center text-brand-red font-black">PHOTO</div>
                    </div>
                    <span className="font-black text-brand-red uppercase tracking-tighter">FOUNDER</span>
                    <span className="text-[10px] font-bold uppercase text-white/50">Titik Koma</span>
                  </div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-4 h-16 bg-brand-red rounded-full opacity-30"></div>
               </div>
               
               <div className="relative group cursor-pointer">
                  <div className="w-48 h-72 bg-white/10 rounded-xl border border-white/20 flex flex-col items-center p-4 transition-all group-hover:rotate-3 group-hover:bg-white/15">
                    <div className="w-full h-40 bg-gray-800 rounded mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                       <div className="w-full h-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-black">PHOTO</div>
                    </div>
                    <span className="font-black text-brand-yellow uppercase tracking-tighter">CO-FOUNDER</span>
                    <span className="text-[10px] font-bold uppercase text-white/50">Titik Koma</span>
                  </div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-4 h-16 bg-brand-yellow rounded-full opacity-30"></div>
               </div>
            </div>
          </div>
          
          <div className="w-1/3 flex justify-center">
             <img src={myLogo} alt="Logo Philosophy" className="w-full max-w-md drop-shadow-[0_0_30px_rgba(186,60,61,0.3)] animate-pulse" />
          </div>
        </section>

        <section className="min-w-full h-full snap-center flex flex-col items-center justify-center p-20 bg-brand-darkbrown">
          <div className="max-w-7xl w-full">
            <h2 className="text-7xl font-black italic uppercase mb-20 text-center tracking-tighter">
              The <span className="text-brand-yellow">Architects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {teamMembers.map((m, i) => (
                <TeamCard key={m.name} member={m} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="min-w-full h-full snap-center flex flex-col items-center justify-center p-20 bg-brand-red">
          <div className="max-w-5xl">
            <h2 className="text-8xl font-black italic uppercase text-center mb-16 tracking-tighter">Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {['Discovery', 'Crafting', 'Evolution'].map((title, i) => (
                 <div key={title} className="p-10 bg-black/20 rounded-[3rem] border border-white/10 backdrop-blur-md hover:bg-black/30 transition-colors">
                   <span className="text-5xl font-black opacity-20 italic">0{i+1}</span>
                   <h3 className="text-2xl font-black italic uppercase mt-4 mb-2">{title}</h3>
                   <p className="text-sm text-white/70 leading-relaxed italic">Building digital excellence step by step through iterative precision.</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}