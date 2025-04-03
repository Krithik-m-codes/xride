"use client";
import { motion } from 'framer-motion';

const featuresList = [
    { title: 'Deep Research', description: 'Engage in detailed, context-aware conversations.' },
    { title: 'Memory-Driven', description: 'Our chat remembers your past inputs for continuous insight.' },
    { title: 'Community Focused', description: 'Connect with like-minded bikers and researchers.' },
    { title: 'Modern UI', description: 'Experience a sleek design with smooth animations.' }
];

export default function FeaturesPage() {
    return (
        <main className="py-20 bg-harley-black min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-center text-harley-orange mb-12"
                >
                    Features
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuresList.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-harley-gray p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-harley-orange mb-2">{feature.title}</h2>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
