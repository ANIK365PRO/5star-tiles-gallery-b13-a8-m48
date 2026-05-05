import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div className='sticky top-16 z-10 bg-white p-2 flex gap-2 max-w-7xl mx-auto '>
            <Button className="bg-pink-400 text-white flex rounded-sm">Latest</Button>
            <Marquee >
            🔥 New Arrivals: Luxury Marble & Ceramic Tiles  |  ⭐ Weekly Feature: Modern Geometric Designs  |  💸 Special Discounts Running  |  👉 Join Our Community
            </Marquee>
        </div>
    );
};

export default Marque;