"use client";
import { motion } from 'framer-motion';

export default function ContactUs() {
    return (
        <main className="py-20 bg-harley-black min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-harley-orange mb-6 text-center"
                >
                    Contact Us
                </motion.h1>
                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col space-y-4"
                >
                    <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-harley-gray text-white" />
                    <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-harley-gray text-white" />
                    <textarea placeholder="Your Message" className="p-3 rounded-lg bg-harley-gray text-white" rows={5}></textarea>
                    <button type="submit" className="px-6 py-3 bg-harley-orange text-harley-black rounded-lg hover:scale-105 transition-transform">
                        Send Message
                    </button>
                </motion.form>
            </div>
        </main>
    );
}
