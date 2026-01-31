import { motion } from 'framer-motion'; 
import { Code2, Palette, Rocket, Linkedin, ExternalLink } from 'lucide-react'; 

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
  linkedin: string;  
  portfolio: string; 
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  const icons = {
    code: Code2,
    design: Palette,
    strategy: Rocket,
  };

  const Icon = icons[member.icon];

  return (
    <motion.div
      className="relative p-6 md:p-8 rounded-xl border border-brand-red/40 bg-brand-dark/60 backdrop-blur-sm hover:border-brand-red hover:shadow-xl hover:shadow-brand-red/20 transition-all flex flex-col h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      <div className="mb-6 flex justify-between items-start">
        <motion.div
          className="w-14 h-14 bg-brand-red rounded-lg flex items-center justify-center shadow-lg shadow-brand-red/20"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        <div className="flex gap-2">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 rounded-full border border-white/10 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 group"
            title="Visit LinkedIn"
          >
            <Linkedin size={16} className="text-white/50 group-hover:text-white" />
          </a>
          <a
            href={member.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 rounded-full border border-white/10 hover:bg-brand-yellow hover:border-brand-yellow transition-all duration-300 group"
            title="View Portfolio"
          >
            <ExternalLink size={16} className="text-white/50 group-hover:text-brand-darkbrown" />
          </a>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-black italic text-white mb-2 tracking-tighter">{member.name}</h3>
        <p className="text-sm md:text-base text-brand-yellow font-bold uppercase tracking-widest">{member.role}</p>
      </div>
      <div className="mb-6 pb-6 border-b border-white/10">
        <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] mb-2 font-black">Core Passion</p>
        <p className="text-white/80 text-sm md:text-base leading-relaxed">{member.passion}</p>
      </div>
      <blockquote className="mb-8 pl-4 border-l-2 border-brand-red/50">
        <p className="text-white/60 italic text-sm md:text-base leading-relaxed">"{member.quote}"</p>
      </blockquote>
      <div className="mt-auto grid grid-cols-3 gap-3">
        {member.stats.map((stat) => (
          <div key={stat.label} className="text-center bg-white/5 rounded-2xl py-3 px-2 border border-white/5 hover:bg-white/10 transition-colors">
            <motion.div
              className="text-xl md:text-2xl font-black text-brand-red mb-1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, type: 'spring' }}
            >
              {stat.value}
            </motion.div>
            <div className="text-[8px] md:text-[10px] text-white/40 uppercase font-bold tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}