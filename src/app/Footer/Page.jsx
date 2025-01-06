'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isClient, setIsClient] = useState(false);
  const [service, setService] = useState({ featured: false }); // Initialize service with a default value

  useEffect(() => {
    setIsClient(true); // Ensures this block runs only on the client
  }, []);

  useEffect(() => {
    // Simulating a fetch operation or dynamic setting
    const fetchedService = { featured: true }; // Replace with actual data fetching logic
    setService(fetchedService);
  }, []);

  if (!isClient) return null;

  return (
    <footer className="bg-[#1e2756] text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
          <div className='mb-8'>
            
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/Assets1.png"
                  height={100}
                  width={100}
                  alt="microthinks-logo"
                  className="w-48 h-auto"
                />
              </div>
              <p className="text-sm">
                MicroThinks drives hotel growth with tailored digital solutions
                and expert support to maximize your online presence and revenue.
              </p>
            </div> 
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Exclusive Offers</h3>
              <p className="text-sm mb-2">
                Sign up to our newsletter to receive our latest offers
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="px-3 py-2 rounded bg-white text-black flex-1"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded">
                  Submit
                </button>
              </div>
            </div>

            
          </div>

          {/* Middle Column */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#">Manage Booking</Link>
                </li>
                <li>
                  <Link href="#">Support</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Services</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#">Website Development</Link>
                </li>
                <li>
                  <Link href="#">Google Ads Campaigns</Link>
                </li>
                <li>
                  <Link href="#">Property Management System</Link>
                </li>
                <li>
                  <Link href="#">Revenue Management System</Link>
                </li>
                <li>
                  <Link href="#">OTA Listing Management</Link>
                </li>
                <li>
                  <Link href="#">Social Media Marketing</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">You want to Book?</h3>
              <p className="text-sm">Call us: +92 308 4512116</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Get in touch</h3>
              <p className="text-sm">info@microthinks.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Office</h3>
              <p className="text-sm mb-1">
                Lawrence Road, Near China Chowk, Lahore, Punjab, Pakistan
              </p>
              <p className="text-sm">Mon to Sat: 9am to 5pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>

            <div className="flex gap-8 text-sm">
              <Link href="#">T&Cs</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="#">Legal Notice</Link>
            </div>
          </div>

          <div className="mt-4 text-center text-sm">
            Copyright © MicroThinks 2024 All rights reserved
          </div>
          <Link href="/PrivacyPolicy">
            <div className="text-center items-center justify-center">
              <button
                className={`text-sm font-medium ${
                  service.featured
                    ? "text-white hover:text-white/80"
                    : "text-orange-500 hover:text-orange-600"
                }`}
              >
                Learn More →
              </button>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}



