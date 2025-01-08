


'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Building2, Users2, ChevronRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const images = [

  {
    src: '/pp.webp',
    alt: 'Modern Workspace',
    icon: Users2,
    title: 'Expert Team',
    description: 'Our dedicated professionals ensure your stay exceeds expectations.'
  },
  {
    src: '/ppp.webp',
    alt: 'Modern Workspace',
    icon: Users2,
    title: 'Premium Locations',
    description: "Experience luxury in the heart of the world's most iconic destinations."
  }
];

export default function OtaPlatforms() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovering]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="container mx-auto py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg">
      <div id='Ota-Platforms' className="grid lg:grid-cols-2 gap-12 items-center">
        <div
          className="relative group rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 "
          
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentImage === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <image.icon className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">{image.title}</h3>
                  </div>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button
              onClick={prevImage}
              className="p-2 rounded-full   "
              aria-label="Previous image"
            >
              
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full "
              aria-label="Next image"
            >
            
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImage === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4 font-serif text-[#1F2456]  ">
              OTA Listing
            </h2>
            <div className="w-30 h-1 bg-gradient-to-r text-[#1F2456] rounded-full"></div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Microthinks.com, we elevate your hotel's online visibility with innovative and customized solutions to strengthen guest satisfaction. Our platform combines cutting-edge technology with personalized service to create exceptional digital experiences that set your property apart in the competitive hospitality landscape.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-1 text-orange-500">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-current" />
                ))}
            </div>
            <span className="text-gray-600">Trusted by 1000+ hotels worldwide</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
           
           
            <Button
  onClick={() => {
    document.getElementById("Contact-page").scrollIntoView({ behavior: "smooth" });
  }}
  className="outline  outline-2 text-[#1F2456]   group hover:rounded-3xl duration-300 hover:outline-orange-500"
>
Contact Us <ChevronRight className="w-5 h-5 inline-block ml-2 transform group-hover:translate-x-1 transition-transform" />
</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

