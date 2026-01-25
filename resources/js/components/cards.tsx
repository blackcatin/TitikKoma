interface CardProps {
    title: string;
    category: string; 
    icon?: string;
}

export default function Cards({ title, category, icon = "🚀" }: CardProps) {
    return (
        <div className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-4xl hover:border-brand-red/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-brand-red/20 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-red transition-colors">
                {icon}
            </div>
            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-2 block">
                {category}
            </span>
            <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">
                {title}
            </h3>
        </div>
    );
}