import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Github, ExternalLink, Database } from 'lucide-react';
import React from 'react';
import type { FloatingCommentData } from './FloatingElement';
import { UserQuoteCard } from './FloatingElement';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    mainMockup: string;
    techStack: string[];
    themeColor: string;
    userComments?: FloatingCommentData[];
}

interface CubeProjectProps {
    project: Project;
    direction: number;
}

export default function CubeProject({ project, direction }: CubeProjectProps) {
    const variants = {
        initial: (dir: number) => ({
            rotateX: dir > 0 ? 35 : -35,
            y: dir > 0 ? 100 : -100,
            opacity: 0,
            filter: "blur(15px)",
            scale: 1.1,
            z: -200
        }),
        animate: {
            rotateX: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            z: 0
        },
        exit: (dir: number) => ({
            rotateX: dir > 0 ? -30 : 30,
            y: dir > 0 ? -100 : 100,
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.9,
            z: -150
        })
    };

    return (
        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
                key={project.id}
                custom={direction}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.8,
                    ease: [0.23, 1, 0.32, 1]
                }}
                className="group w-[85vw] h-[75vh] rounded-[4rem] flex overflow-visible relative shadow-2xl border border-white/5 bg-[#110809]"
            >
                <div className="absolute inset-0 overflow-hidden rounded-[4rem] pointer-events-none">
                    <div
                        className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-[150px] opacity-20"
                        style={{ backgroundColor: project.themeColor }}
                    />
                    <Sparkles className="absolute top-10 left-10 text-white/5 opacity-20" size={150} />
                </div>
                <div className="flex-1 p-16 md:p-24 flex flex-col justify-center z-10 relative text-left">
                    <div
                        className="inline-flex mb-8 w-fit px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md"
                        style={{
                            color: project.themeColor,
                            backgroundColor: `${project.themeColor}15`,
                            border: `1px solid ${project.themeColor}44`
                        }}
                    >
                        {project.category}
                    </div>

                    <h2 className="text-6xl xl:text-8xl font-black italic uppercase text-white tracking-tighter leading-[0.85] group-hover:scale-[1.02] transition-transform duration-700 origin-left">
                        {project.title.split(' ').map((word: string, i: number) => (
                            <span
                                key={i}
                                className="inline-block"
                                style={i % 2 !== 0 ? { color: project.themeColor } : {}}
                            >
                                {word}&nbsp;
                            </span>
                        ))}
                    </h2>

                    <p className="text-gray-400 mt-10 text-lg max-w-md italic pl-8 border-l-4 leading-relaxed"
                        style={{ borderColor: project.themeColor }}>
                        {project.description}
                    </p>

                    <div className="flex items-center gap-6 mt-12">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: project.themeColor, color: '#fff' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center gap-4 shadow-2xl transition-all"
                        >
                            Explore Case <ArrowRight size={18} />
                        </motion.button>
                            
                        </div>
                    </div>
                <div className="flex-1 flex items-center justify-center relative p-12 overflow-visible">

                    {project.userComments?.map((comment) => (
                        <UserQuoteCard key={comment.id} comment={comment} />
                    ))}
                    <div
                        className="absolute inset-0 rounded-full blur-[200px] opacity-30 scale-125 animate-pulse"
                        style={{ backgroundColor: project.themeColor }}
                    />
                    <motion.img
                        src={project.mainMockup}
                        alt={project.title}
                        className="relative z-10 max-h-[110%] object-contain"
                        style={{ filter: "drop-shadow(0 60px 100px rgba(0,0,0,0.8))" }}
                        whileHover={{
                            rotateY: -12,
                            rotateX: 8,
                            scale: 1.05
                        }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}