import { motion } from 'motion/react';
import { Code2, Palette, Rocket } from 'lucide-react';

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
      className="relative p-6 md:p-8 rounded-xl border border-brand-red/40 bg-brand-dark/60 backdrop-blur-sm hover:border-brand-red hover:shadow-xl hover:shadow-brand-red/20 transition-all"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      {/* Icon */}
      <div className="mb-6 flex justify-between items-start">
        <motion.div
          className="w-14 h-14 bg-brand-red rounded-lg flex items-center justify-center"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
      </div>

      {/* Name & Role */}
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-black italic text-white mb-2">{member.name}</h3>
        <p className="text-lg md:text-xl text-brand-lightorange font-bold">{member.role}</p>
      </div>

      {/* Passion */}
      <div className="mb-6 pb-6 border-b border-brand-red/30">
        <p className="text-brand-yellow uppercase tracking-wider text-xs mb-2 font-bold">Passion</p>
        <p className="text-white/90 text-sm md:text-base">{member.passion}</p>
      </div>

      {/* Quote */}
      <blockquote className="mb-6 pl-4 border-l-2 border-brand-lightorange">
        <p className="text-white/70 italic text-sm md:text-base">"{member.quote}"</p>
      </blockquote>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {member.stats.map((stat) => (
          <div key={stat.label} className="text-center bg-black/30 rounded-lg py-3 px-2">
            <motion.div
              className="text-xl md:text-2xl font-black text-brand-red mb-1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, type: 'spring' }}
            >
              {stat.value}
            </motion.div>
            <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
