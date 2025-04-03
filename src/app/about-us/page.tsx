"use client";
import { motion } from 'framer-motion';

export default function AboutUs() {
    return (
        <main className="py-20 bg-harley-gray min-h-screen">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto px-4"
            >
                <h1 className="text-4xl font-bold text-harley-orange mb-6">About Us</h1>
                <p className="text-xl mb-4">
                    MotoApp was built by a team of passionate bikers and tech enthusiasts. Our mission is to create a powerful research tool that adapts to your journey.
                </p>
                <p className="text-xl">
                    Inspired by the freedom of the open road and the spirit of the biker community, we designed MotoApp to empower users with deep conversational capabilities that remember every detail.
                </p>
            </motion.div>
        </main>
    );
}
