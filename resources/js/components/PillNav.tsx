import React, { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { gsap } from 'gsap';

export type PillNavItem = {
    label: string;
    href: string;
    ariaLabel?: string;
};

export interface PillNavProps {
    logo: string;
    logoAlt?: string;
    items: PillNavItem[];
    activeHref?: string;
    className?: string;
    ease?: string;
    baseColor?: string;
    pillColor?: string;
    hoveredPillTextColor?: string;
    pillTextColor?: string;
    initialLoadAnimation?: boolean;
}

const PillNav: React.FC<PillNavProps> = ({
    logo,
    logoAlt = 'Logo',
    items,
    activeHref,
    className = '',
    ease = 'power3.out',
    baseColor = '#ba3c3d',
    pillColor = '#351518',
    hoveredPillTextColor = '#fff',
    pillTextColor = '#gray-400',
    initialLoadAnimation = true
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
    const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
    const logoImgRef = useRef<HTMLImageElement | null>(null);
    const logoTweenRef = useRef<gsap.core.Tween | null>(null);
    const hamburgerRef = useRef<HTMLButtonElement | null>(null);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);
    const navItemsRef = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        const layout = () => {
            circleRefs.current.forEach(circle => {
                if (!circle?.parentElement) return;

                const pill = circle.parentElement as HTMLElement;
                const rect = pill.getBoundingClientRect();
                const { width: w, height: h } = rect;
                const R = ((w * w) / 4 + h * h) / (2 * h);
                const D = Math.ceil(2 * R) + 2;
                const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
                const originY = D - delta;

                circle.style.width = `${D}px`;
                circle.style.height = `${D}px`;
                circle.style.bottom = `-${delta}px`;

                gsap.set(circle, {
                    xPercent: -50,
                    scale: 0,
                    transformOrigin: `50% ${originY}px`
                });

                const label = pill.querySelector<HTMLElement>('.pill-label');
                const white = pill.querySelector<HTMLElement>('.pill-label-hover');

                if (label) gsap.set(label, { y: 0 });
                if (white) gsap.set(white, { y: h + 12, opacity: 0 });

                const index = circleRefs.current.indexOf(circle);
                if (index === -1) return;

                tlRefs.current[index]?.kill();
                const tl = gsap.timeline({ paused: true });

                tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.6, ease, overwrite: 'auto' }, 0);
                if (label) tl.to(label, { y: -(h + 8), duration: 0.6, ease, overwrite: 'auto' }, 0);
                if (white) {
                    gsap.set(white, { opacity: 0 });
                    tl.to(white, { y: 0, opacity: 1, duration: 0.6, ease, overwrite: 'auto' }, 0);
                }

                tlRefs.current[index] = tl;
            });
        };

        layout();
        const onResize = () => layout();
        window.addEventListener('resize', onResize);

        if (initialLoadAnimation) {
            if (logoRef.current) gsap.from(logoRef.current, { scale: 0, duration: 0.6, ease });
            if (navItemsRef.current) gsap.from(navItemsRef.current, { width: 0, opacity: 0, duration: 0.8, ease });
        }

        return () => window.removeEventListener('resize', onResize);
    }, [items, ease]);

    const handleEnter = (i: number) => {
        const tl = tlRefs.current[i];
        if (tl) {
            activeTweenRefs.current[i]?.kill();
            activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.4, ease });
        }
    };

    const handleLeave = (i: number) => {
        const tl = tlRefs.current[i];
        if (tl) {
            activeTweenRefs.current[i]?.kill();
            activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.3, ease });
        }
    };

    const cssVars = {
        '--base': baseColor,
        '--pill-bg': pillColor,
        '--hover-text': hoveredPillTextColor,
        '--pill-text': pillTextColor,
        '--nav-h': '48px',
        '--pill-gap': '6px'
    } as React.CSSProperties;

    return (
        <div className="fixed top-8 z-1000 w-full flex justify-center">
            <nav className={`flex items-center bg-brand-dark/40 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1 ${className}`} style={cssVars}>
                <Link
                    href="/"
                    ref={logoRef}
                    onMouseEnter={() => gsap.to(logoImgRef.current, { rotate: 360, duration: 0.5 })}
                    className="w-10 h-10 rounded-full overflow-hidden bg-brand-yellow p-1 flex items-center justify-center"
                >
                    <img
                        src={logo}
                        ref={logoImgRef}
                        alt={logoAlt}
                        className="w-full h-full object-contain" 
                    />
                </Link>

                <div ref={navItemsRef} className="flex ml-4">
                    <ul className="flex gap-2 list-none p-0 m-0">
                        {items.map((item, i) => (
                            <li key={item.href} className="relative overflow-hidden rounded-full">
                                <Link
                                    href={item.href}
                                    onMouseEnter={() => handleEnter(i)}
                                    onMouseLeave={() => handleLeave(i)}
                                    className="relative flex items-center justify-center px-6 py-2 no-underline font-bold text-sm uppercase tracking-wider"
                                    style={{ color: activeHref === item.href ? '#fff' : 'var(--pill-text)' }}
                                >
                                    <span className="hover-circle absolute left-1/2 bottom-0 rounded-full z-0 bg-brand-yellow pointer-events-none" ref={el => { circleRefs.current[i] = el; }} />
                                    <span className="relative z-10 flex flex-col items-center">
                                        <span className="pill-label">{item.label}</span>
                                        <span className="pill-label-hover absolute opacity-0 text-white font-black">{item.label}</span>
                                    </span>
                                    {activeHref === item.href && (
                                        <span className="absolute bottom-1 w-1 h-1 bg-white rounded-full" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default PillNav;