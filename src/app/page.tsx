"use client";
import { motion } from 'framer-motion';
import { MotorcycleHero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-harley-black">
      {/* Hero Section */}
      <MotorcycleHero />

      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-harley-orange mb-4">
            Ride Smarter, Connect Better
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to plan perfect rides and build your biking community
          </p>
        </motion.div>

        {/* App Screens Carousel */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-8 items-center justify-center"
          >
            <div className="relative max-w-md">
              <div className="w-full h-auto rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/app-screen-1.svg"
                  alt="Live Ride Tracking"
                  width={300}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -left-6 bg-harley-orange px-4 py-2 rounded-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="font-bold text-white">Live Ride Tracking</span>
              </motion.div>
            </div>
            <div className="relative max-w-md mt-10 lg:mt-0">
              <div className="w-full h-auto rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/app-screen-2.svg"
                  alt="Group Management"
                  width={300}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <motion.div
                className="absolute -top-6 -right-6 bg-harley-orange px-4 py-2 rounded-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span className="font-bold text-white">Group Management</span>
              </motion.div>
            </div>
            <div className="relative max-w-md mt-10 lg:mt-20">
              <div className="w-full h-auto rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/app-screen-3.svg"
                  alt="Route Sharing"
                  width={300}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-harley-orange px-4 py-2 rounded-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <span className="font-bold text-white">Route Sharing</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={
              <div className="w-12 h-12">
                <Image
                  src="/images/route-icon.svg"
                  alt="Route Icon"
                  width={48}
                  height={48}
                  className="text-harley-orange"
                />
              </div>
            }
            title="Smart Route Planning"
            description="Create, save, and share your favorite routes with turn-by-turn navigation optimized for bikes"
            animationDelay={0.1}
          />
          <FeatureCard
            icon={
              <div className="w-12 h-12">
                <Image
                  src="/images/group-icon.svg"
                  alt="Group Icon"
                  width={48}
                  height={48}
                  className="text-harley-orange"
                />
              </div>
            }
            title="Ride Groups"
            description="Organize group rides with real-time member tracking and scheduled meetups"
            animationDelay={0.3}
          />
          <FeatureCard
            icon={
              <div className="w-12 h-12">
                <Image
                  src="/images/chat-icon.svg"
                  alt="Chat Icon"
                  width={48}
                  height={48}
                  className="text-harley-orange"
                />
              </div>
            }
            title="Biker Community"
            description="Connect with local riders, share experiences, and join discussions"
            animationDelay={0.5}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-harley-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Hit the Road?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-harley-orange hover:bg-orange-600 text-white font-bold rounded-lg transition-all text-lg">
              Download Now
            </button>
            <button className="px-8 py-4 border-2 border-harley-orange text-harley-orange hover:bg-orange-900/30 font-bold rounded-lg transition-all text-lg">
              See How It Works
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}