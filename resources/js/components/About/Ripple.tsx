import { useEffect, useRef } from 'react';

interface RippleGridProps {
  opacity?: number;
}

export function RippleGrid({ opacity = 0.1 }: RippleGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const gridSize = 50;
    const ripples: { x: number; y: number; radius: number; maxRadius: number }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.92) { // Throttled ripple creation
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 0,
          maxRadius: 150 + Math.random() * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw Grid Lines
      ctx.strokeStyle = `rgba(186, 60, 61, ${opacity * 0.2})`; // Brand Red
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Draw Ripples
      ripples.forEach((ripple, i) => {
        ripple.radius += 1.5;
        const alpha = (1 - ripple.radius / ripple.maxRadius) * opacity;
        ctx.strokeStyle = `rgba(255, 219, 0, ${alpha})`; // Brand Yellow
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();
        if (ripple.radius >= ripple.maxRadius) ripples.splice(i, 1);
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [opacity]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}