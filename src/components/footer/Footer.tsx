"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-harley-gray py-6">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} MotoApp. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
