"use client";
import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { LampContainer } from "@/components/ui/lamp";

const riders = [
    {
        id: 1,
        name: "Alex Rider",
        designation: "Adventure Tourer",
        image: "/riders/anurag.jpg",
    },
    {
        id: 2,
        name: "Sarah Cruiser",
        designation: "Street Rider",
        image: "/riders/tanisha.jpg",
    },
    {
        id: 3,
        name: "Mike Tourer",
        designation: "Group Leader",
        image: "/riders/gman.jpg",
    },
    {
        id: 4,
        name: "Elena Cruz",
        designation: "Track Day Enthusiast",
        image: "/riders/elena.jpg",
    },
    {
        id: 5,
        name: "Ryan Park",
        designation: "Cafe Racer Builder",
        image: "/riders/ryan.jpg",
    },
];

const features = [
    {
        title: "Smart Route Planning",
        description: "AI-powered route suggestions based on your riding preferences",
        icon: "🗺️",
        link: "/features/smart-route-planning",
    },
    {
        title: "Group Ride Coordination",
        description: "Real-time group tracking and communication",
        icon: "👥",
        link: "/features/group-ride-coordination",
    },
    {
        title: "Ride Journal",
        description: "Automatically log your rides with stats and photos",
        icon: "📔",
        link: "/features/ride-journal",
    },
    {
        title: "Bike Maintenance",
        description: "Track service intervals and get reminders",
        icon: "🔧",
        link: "/features/bike-maintenance",
    },
    {
        title: "Community Hub",
        description: "Connect with riders in your area",
        icon: "💬",
        link: "/features/community-hub",
    },
];

const content = [
    {
        title: "Connect with Local Riders",
        description:
            "Find and connect with motorcycle enthusiasts in your area. Join local groups, participate in events, and make new riding buddies who share your passion.",
        content: (
            <div className="h-full w-full bg-black flex items-center justify-center rounded-xl overflow-hidden">
                <img
                    src="/features/community-map.jpg"
                    alt="Community Map"
                    className="w-full h-full object-cover"
                />
            </div>
        ),
    },
    {
        title: "Plan Your Perfect Ride",
        description:
            "Our AI-powered route planner takes into account your preferences, time constraints, and riding style to suggest the perfect routes for your next adventure.",
        content: (
            <div className="h-full w-full bg-black flex items-center justify-center rounded-xl overflow-hidden">
                <img
                    src="/features/route-planning.jpg"
                    alt="Route Planning"
                    className="w-full h-full object-cover"
                />
            </div>
        ),
    },
    {
        title: "Ride Together, Stay Together",
        description:
            "Never lose track of your group again. Our real-time tracking and communication tools keep everyone connected, even when you're miles apart.",
        content: (
            <div className="h-full w-full bg-black flex items-center justify-center rounded-xl overflow-hidden">
                <img
                    src="/features/group-tracking.jpg"
                    alt="Group Tracking"
                    className="w-full h-full object-cover"
                />
            </div>
        ),
    },
    {
        title: "Capture Every Moment",
        description:
            "Automatically log your rides with detailed statistics, route maps, and photos. Share your adventures with the community or keep them as personal memories.",
        content: (
            <div className="h-full w-full bg-black flex items-center justify-center rounded-xl overflow-hidden">
                <img
                    src="/features/ride-journal.jpg"
                    alt="Ride Journal"
                    className="w-full h-full object-cover"
                />
            </div>
        ),
    },
];



export function MotorcycleHero() {
    return (
        <div className="relative w-full overflow-hidden mt-20 bg-black">

            {/* Hero Section */}
            <LampContainer className="h-screen">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex flex-col items-center justify-center h-full px-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8">
                        <span className="text-orange-500">Ride</span> Together, <span className="text-orange-500">Connect</span> Forever
                    </h1>

                    <TextGenerateEffect
                        className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-12"
                        words="The next-generation platform designed for motorcycle enthusiasts. Experience rides like never before with our community-driven features and advanced route planning."
                    />

                    <div className="flex flex-col sm:flex-row gap-4 mt-4 z-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium rounded-full shadow-lg hover:shadow-orange-500/30 transition-all"
                        >
                            Download App
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-gray-700 text-white font-medium rounded-full hover:bg-gray-800/50 transition-all group"
                        >
                            <span className="flex items-center">
                                <span>Watch Demo</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </motion.button>
                    </div>

                    <div className="mt-16">
                        <p className="text-gray-400 mb-4 text-center">Trusted by thousands of riders worldwide</p>
                        <div className="flex items-center justify-center gap-4">
                            <AnimatedTooltip items={riders} />
                            <span className="text-orange-400 font-medium flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                4.9 (2.4k reviews)
                            </span>
                        </div>
                    </div>
                </motion.div>
            </LampContainer>

            {/* App Preview with Spotlight */}
            <div className="relative h-screen py-40">
                <Spotlight
                    className="-top-40 left-0"
                    fill="orange"
                />
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                            Experience the <span className="text-orange-500">Future</span> of Riding
                        </h2>

                        <div className="relative w-full max-w-4xl mx-auto">
                            <div className="absolute -inset-4 bg-orange-500 rounded-3xl blur-xl opacity-20" />
                            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/screenshots/app-preview.png"
                                    alt="App Preview"
                                    className="w-full h-auto"
                                />
                                <SparklesCore
                                    id="tsparticles"
                                    background="transparent"
                                    minSize={0.6}
                                    maxSize={1.4}
                                    particleDensity={100}
                                    className="absolute inset-0 pointer-events-none"
                                    particleColor="#FF6B00"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Feature Showcase with Sticky Scroll */}
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-24">
                        Built for <span className="text-orange-500">Riders</span>, by Riders
                    </h2>
                </div>
                <StickyScroll content={content} />
            </div>

            {/* Feature Cards */}
            <div className="py-20 container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Key <span className="text-orange-500">Features</span>
                </h2>
                <HoverEffect items={features} />
            </div>

            {/* Testimonials */}
            <div className="py-20 relative">
                <BackgroundBeams className="opacity-20" />
                <div className="container mx-auto px-6 relative z-10">
                    <h3 className="text-2xl md:text-4xl font-bold text-center mb-16">
                        What Our <span className="text-orange-500">Community</span> Says
                    </h3>
                    <InfiniteMovingCards
                        items={[
                            {
                                quote: "This app completely changed how our riding group organizes trips. The route planning is incredible!",
                                name: "James Wilson",
                                title: "Adventure Rider",
                            },
                            {
                                quote: "Finally an app that understands what bikers need. The real-time group tracking is a game changer.",
                                name: "Maria Garcia",
                                title: "Touring Enthusiast",
                            },
                            {
                                quote: "Made so many riding buddies through this platform. The community features are top-notch.",
                                name: "David Kim",
                                title: "Daily Commuter",
                            },
                            {
                                quote: "The maintenance tracking saved me from breaking down in the middle of nowhere. This app is essential for any serious rider.",
                                name: "Lauren Taylor",
                                title: "Weekend Explorer",
                            },
                            {
                                quote: "I've been riding for 15 years and never found a better way to document my journeys. The ride journal feature is brilliant.",
                                name: "Marcus Johnson",
                                title: "Long-Distance Tourer",
                            },
                        ]}
                        direction="right"
                        speed="slow"
                        className="py-10"
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.orange.500/15),transparent_70%)]"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Ready to <span className="text-orange-500">Ride</span> with Us?
                    </h2>
                    <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                        Join thousands of riders who are already experiencing the future of motorcycle community. Download the app today and start your journey.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium rounded-full shadow-lg hover:shadow-orange-500/30 transition-all"
                        >
                            Download Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-gray-700 text-white font-medium rounded-full hover:bg-gray-800/50 transition-all"
                        >
                            Learn More
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}