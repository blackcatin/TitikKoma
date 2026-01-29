import Matter from 'matter-js';
import { useRef, useState, useEffect } from 'react';

interface FallingTextProps {
  text?: string;
  highlightWords?: string[];
  trigger?: 'auto' | 'scroll' | 'click' | 'hover';
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
  fontSize?: string;
}

const FallingText: React.FC<FallingTextProps> = ({
  text = '',
  highlightWords = [],
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = '1rem'
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const [effectStarted, setEffectStarted] = useState(false);

  // Perbaikan: Mapping Span Kata
  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');

    const newHTML = words
      .map(word => {
        const isHighlighted = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
        return `<span
          class="inline-block px-5 py-2 m-1.5 rounded-full border border-white/10 select-none cursor-grab active:cursor-grabbing transition-colors
          ${isHighlighted 
            ? 'bg-brand-yellow text-brand-darkbrown font-black uppercase italic shadow-[0_0_15px_rgba(212,157,0,0.3)]' 
            : 'bg-white/10 text-gray-300'}"
        >
          ${word}
        </span>`;
      })
      .join(' ');

    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords]);

  // Perbaikan: Observer Trigger
  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }

    const currentContainer = containerRef.current;
    if (trigger === 'scroll' && currentContainer) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(currentContainer);
      return () => observer.disconnect();
    }
  }, [trigger]);

  // Perbaikan Utama: Matter.js Engine & Cleanup
  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
    
    // Perbaikan: Salin ref ke variabel lokal untuk cleanup agar tidak error linting
    const currentCanvasContainer = canvasContainerRef.current;
    const currentContainer = containerRef.current;
    
    if (!currentContainer || !currentCanvasContainer || !textRef.current) return;

    const containerRect = currentContainer.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;
    if (width <= 0 || height <= 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: currentCanvasContainer,
      engine,
      options: { width, height, background: backgroundColor, wireframes }
    });

    const boundaryOptions = { isStatic: true, render: { fillStyle: 'transparent' } };
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

    const wordSpans = textRef.current.querySelectorAll('span');
    const wordBodies = Array.from(wordSpans).map(elem => {
      const rect = elem.getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: 'transparent' },
        restitution: 0.6,
        frictionAir: 0.02,
        friction: 0.1,
        chamfer: { radius: rect.height / 2 } 
      });

      Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 5, y: 0 });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

      return { elem, body };
    });

    const mouse = Mouse.create(currentContainer);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false }
      }
    });

    World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map(wb => wb.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    let animationId: number;
    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.position = 'absolute';
        elem.style.left = `${x}px`;
        elem.style.top = `${y}px`;
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      animationId = requestAnimationFrame(updateLoop);
    };
    updateLoop();

    // Cleanup Function yang aman
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && currentCanvasContainer) {
        currentCanvasContainer.removeChild(render.canvas);
      }
      World.clear(engine.world, false);
      Engine.clear(engine);
      cancelAnimationFrame(animationId);
    };
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-1 w-full h-full cursor-pointer overflow-hidden"
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
    >
      <div
        ref={textRef}
        className="inline-block w-full text-center relative"
        style={{ fontSize, lineHeight: 1.8 }}
      />
      <div className="absolute top-0 left-0 z-0 pointer-events-none" ref={canvasContainerRef} />
    </div>
  );
};

export default FallingText;