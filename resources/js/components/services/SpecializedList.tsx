import React from 'react';

interface SpecialistSectionProps {
    title: string;
    skills: string[];
}

export const SpecialistSection: React.FC<SpecialistSectionProps> = ({ title, skills }) => {
    return (
        <div className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] hover:border-brand-yellow/20 transition-all group/box">
            <h3 className="text-brand-yellow font-black italic uppercase text-xl mb-6 border-b border-white/10 pb-4">
                {title}
            </h3>
            <ul className="space-y-3">
                {skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400 group/item">
                        <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full transition-transform duration-300 group-hover/item:scale-150" />
                        <span className="group-hover/item:text-white transition-colors duration-300">
                            {skill}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};