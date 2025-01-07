'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '../Navbar/Page';

// Amenities data
const Services = [
  'Hotel marketing services',
 'Hotel’s direct booking',
  'Custom Web Design',
  'Revenue Management System',
  'OTA Listing Management',
];

export default function Specilist() {
  const [mounted, setMounted] = useState(false);

  // Ensuring client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div id='about-us' className="max-w-6xl mx-auto px-4 py-8 font-sans">
       <Navbar />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif max-w-md leading-tight">
          Giving the best just for you
        </h1>
        
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-3 mb-12"
      >
        {Services.map((item, index) => (
          <button
            key={item}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              index === 0
                ? 'bg-[#1F2456] text-white hover:bg-[#1F2456]/90'
                : 'border border-gray-200 hover:bg-gray-100'
            }`}
          >
            {item}
          </button>
        ))}
      </motion.div>

      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[4/3] rounded-3xl overflow-hidden"
        >
          <Image
            src="/Sitting.webp"
            alt="Restaurant Interior"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right Content Section */}
        <div className="space-y-8">
         
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif mb-4">
            Boost Your Hotel’s Success with Our Expert Marketing Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
            At Microthinks.com, we elevate your hotel’s online visibility with innovative and customized solutions to strengthen guest satisfaction. We leverage our skills in hotel marketing services, providing digital tactics for the hospitality industry. Our mission is to increase your hotel’s digital footprint and profitability through our tailored hotel promotion strategies. 
            </p>
          </motion.div>

          {/* Second Content Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif mb-4">
            Empowering the Hospitality Industry with Targeted Digital Tactics
            </h2>
            <p className="text-gray-600 leading-relaxed">
           We focus on advanced analytics and market insights to recognize opportunities that will assist your hotel in capturing attention in a competitive landscape.

            </p>
          </motion.div>

          {/* Call to Action Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1F2456] text-white p-6 rounded-xl mt-8"
          >
            <h3 className="text-xl font-serif mb-3">Grow your Hotels</h3>
            <p className="mb-4">
            Microthinks.com offers essential approaches for increasing hotel sales and marketing. 
            </p>
            <Button
  onClick={() => {
    document.getElementById("Contact-page").scrollIntoView({ behavior: "smooth" });
  }}
  className="outline  outline-1 text-white  group hover:rounded-3xl duration-300 hover:outline-orange-500"
>
   Book Now <ArrowRight className="w-4 h-4 text-orange-500" />
</Button>
           
          </motion.div>
        </div>
      </div>
    </div>
  );
}
