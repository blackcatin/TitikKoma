import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import React, { useRef, useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    document.fonts.ready.then(() => {
      if (isMounted) setFontsLoaded(true);
    }).catch((err) => {
      console.error('Font loading failed:', err);
      if (isMounted) setFontsLoaded(true); 
    });
    return () => { isMounted = false; };
  }, []);

  useGSAP(() => {
    if (!ref.current || !fontsLoaded) return;
    const split = new GSAPSplitText(ref.current, {
      type: splitType,
      charsClass: 'split-char',
      wordsClass: 'split-word',
      linesClass: 'split-line'
    });

    const targets = 
      splitType === 'chars' ? split.chars :
      splitType === 'words' ? split.words :
      split.lines;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: `top ${(1 - threshold) * 100}%`,
        once: true,
        toggleActions: 'play none none none'
      }
    });

    tl.fromTo(
      targets,
      from,
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: onLetterAnimationComplete
      }
    );
    return () => {
      split.revert();
    };
  }, { scope: ref, dependencies: [text, fontsLoaded, splitType, delay, duration, ease] });

  const Tag = tag as any; 

  return (
    <Tag
      ref={ref}
      className={`inline-block overflow-hidden pointer-events-none select-none ${className}`}
      style={{ textAlign, whiteSpace: 'pre-wrap' }}
    >
      {text}
    </Tag>
  );
};

export default SplitText;