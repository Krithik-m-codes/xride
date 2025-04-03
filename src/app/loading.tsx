"use client";
import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-harley-black">
            <motion.svg
                className="w-20 h-20"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
                <circle cx="50" cy="50" r="45" stroke="#FF6600" strokeWidth="10" fill="none" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="#FF6600" strokeWidth="5" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="#FF6600" strokeWidth="5" />
                <line x1="20" y1="20" x2="80" y2="80" stroke="#FF6600" strokeWidth="5" />
                <line x1="80" y1="20" x2="20" y2="80" stroke="#FF6600" strokeWidth="5" />
            </motion.svg>
        </div>
    );
}
