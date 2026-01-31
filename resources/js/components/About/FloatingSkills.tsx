import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const skills = [
  'Precision',
  'Chaos → Order',
  'Digital Craft',
  'Innovation',
  'Bold Design',
  'Clean Code',
  'User First',
];

export function FloatingSkills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-87.5 md:h-100 overflow-hidden">
      {skills.map((skill, index) => {
        const randomX = Math.random() * 70 + 15;
        const randomY = Math.random() * 60 + 20;
        const randomDelay = Math.random() * 2;

        return (
          <motion.div
            key={skill}
            className="absolute cursor-grab active:cursor-grabbing select-none"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            initial={{ opacity: 0, y: -30 }}
            animate={{
              opacity: 1,
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: randomDelay,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.15,
              transition: { duration: 0.2 },
            }}
            drag
            dragConstraints={{
              top: -80,
              bottom: 80,
              left: -80,
              right: 80,
            }}
            dragElastic={0.6}
          >
            <motion.span
              className="text-xl md:text-3xl lg:text-4xl font-black italic tracking-tight drop-shadow-lg"
              style={{
                color: index % 2 === 0 ? '#ba3c3d' : '#ffdb00',
                textShadow: '2px 2px 10px rgba(0,0,0,0.7)',
                x: mousePosition.x * 0.008 * (index % 3),
                y: mousePosition.y * 0.008 * (index % 3),
              }}
            >
              {skill}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
}
