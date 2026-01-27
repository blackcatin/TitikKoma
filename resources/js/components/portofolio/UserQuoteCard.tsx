import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// Interface untuk data komentar
export interface FloatingCommentData {
    id: number;
    userName: string;
    avatar: string; 
    text: string;
    likes: number;
    position: string; 
    delay: number;
}

export const UserQuoteCard = ({ comment }: { comment: FloatingCommentData }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
            delay: comment.delay, 
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1] 
        }}
        className={`absolute ${comment.position} z-30 w-64 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 rounded-[1.5rem] shadow-2xl pointer-events-none select-none`}
        style={{ 
            animation: `float 5s ease-in-out infinite ${comment.delay}s` 
        }}
    >
        <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-yellow shrink-0 border-2 border-white/20 overflow-hidden">
                <img src={comment.avatar} alt={comment.userName} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 text-left">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black text-white uppercase tracking-wider">{comment.userName}</span>
                    <div className="flex items-center gap-1 text-brand-red">
                        <Heart size={10} fill="currentColor" />
                        <span className="text-[9px] font-bold text-white/60">{comment.likes}</span>
                    </div>
                </div>
                <p className="text-[11px] text-gray-200 leading-snug italic font-medium">
                    "{comment.text}"
                </p>
            </div>
        </div>
    </motion.div>
);