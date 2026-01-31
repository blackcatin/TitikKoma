'use client';

interface LanyardProps {
  label?: string;
}

export default function Lanyard({ label }: LanyardProps) {
  return (
    <div className="relative flex items-center justify-center h-full">
      <img
        src="/assets/img/lanyard.png"
        alt="Lanyard"
        className="w-72 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-float"
      />

      {label && (
        <span className="absolute -bottom-10 text-xs tracking-widest text-white/50">
          {label}
        </span>
      )}
    </div>
  );
}
