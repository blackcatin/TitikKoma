interface StatProps {
    label: string;
    value: string;
    description?: string;
}

export default function Statistics({ label, value, description }: StatProps) {
    return (
        <div className="bg-linear-to-br from-white/10 to-transparent backdrop-blur-md border border-white/5 p-6 rounded-3xl flex flex-col items-center justify-center text-center">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">
                {label}
            </span>
            <h4 className="text-4xl font-black bg-linear-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
                {value}
            </h4>
            {description && (
                <p className="text-xs text-gray-500 mt-2 italic">
                    {description}
                </p>
            )}
        </div>
    );
}