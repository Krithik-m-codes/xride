"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function JoinCommunity() {
    return (
        <main className="py-20 bg-harley-gray min-h-screen">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-harley-orange mb-6"
                >
                    Join Our Community
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-xl mb-8"
                >
                    Become a part of a vibrant network of bikers and researchers. Share your insights, collaborate on projects, and fuel your passion for the open road.
                </motion.p>
                <Link href="/contact-us" className="px-6 py-3 bg-harley-orange text-harley-black rounded-lg hover:scale-105 transition-transform">
                    Contact Us to Join
                </Link>
            </div>
        </main>
    );
}
