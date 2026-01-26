import React from 'react';

interface FloatingCardProps {
    title: string;
    sub: string;
    pos: string;
    variant?: 'yellow' | 'red' | 'white' | 'orange' | 'emerald' | 'blue';
    shape?: 'rounded' | 'pill' | 'leaf';
    icon: React.ReactNode; 
    delay?: string;
}

export const Card = ({ 
    title, 
    sub, 
    pos, 
    variant = 'white', 
    shape = 'rounded', 
    icon,
    delay = '0s' 
}: FloatingCardProps) => {
    
    const variants = {
        white: "bg-white/5 border-white/10 text-white shadow-white/5",
        yellow: "bg-brand-yellow/10 border-brand-yellow/20 text-brand-yellow shadow-brand-yellow/5",
        red: "bg-brand-red/10 border-brand-red/20 text-brand-red shadow-brand-red/5",
        orange: "bg-orange-500/10 border-orange-500/20 text-orange-400 shadow-orange-500/5",
        emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-emerald-500/5",
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-400 shadow-blue-500/5"
    };

    const shapes = {
        rounded: "rounded-2xl",
        pill: "rounded-full px-6",
        leaf: "rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg"
    };

    return (
        <div 
            className={`absolute ${pos} z-20 hidden lg:block animate-float-slow`}
            style={{ animationDelay: delay }}
        >
            <div className={`
                ${variants[variant]} 
                ${shapes[shape]} 
                border backdrop-blur-xl p-4 shadow-2xl flex items-center gap-4 min-w-max 
                transition-all duration-500 hover:scale-110 hover:border-opacity-50 cursor-default group
            `}>
                <div className={`
                    w-10 h-10 shrink-0 flex items-center justify-center
                    ${shape === 'pill' ? 'rounded-full' : 'rounded-xl'}
                    bg-white/10 group-hover:bg-opacity-20 transition-colors
                `}>
                    <div className="w-5 h-5 flex items-center justify-center">
                        {icon}
                    </div>
                </div>

                <div className="text-left pr-2">
                    <h4 className="font-bold text-sm leading-none mb-1 whitespace-nowrap tracking-tight">{title}</h4>
                    <p className="opacity-50 text-[9px] uppercase tracking-[0.2em] font-medium">{sub}</p>
                </div>
            </div>
        </div>
    );
};