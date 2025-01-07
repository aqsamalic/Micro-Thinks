import React from 'react';
import { ChevronRight } from 'lucide-react';

const ServiceDetailsHeader = () => {
  return (
    <div className="relative w-full h-74 bg- text-[#1F2456]  overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              background: i % 3 === 0 ? 'rgba(255,255,255,0.05)' : 
                         i % 3 === 1 ? 'rgba(249,115,22,0.05)' : 
                         'rgba(59,130,246,0.05)',
              animation: `float-${i} ${Math.random() * 10 + 15}s infinite linear`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Diagonal animated stripes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`stripe-${i}`}
              className="absolute h-[200px] w-[40px]"
              style={{
                background: i % 2 === 0 ? 
                  'linear-gradient(to bottom, rgba(249,115,22,0.1), transparent)' : 
                  'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)',
                transform: `rotate(-45deg) translate(${i * 100}px, ${i * 50}px)`,
                animation: `stripe-slide 15s infinite linear`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <div
          className="absolute rounded-full blur-2xl"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0) 70%)',
            animation: 'pulse-1 8s infinite ease-in-out',
            top: '30%',
            left: '20%',
          }}
        />
        <div
          className="absolute rounded-full blur-2xl"
          style={{
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0) 70%)',
            animation: 'pulse-2 10s infinite ease-in-out',
            top: '50%',
            left: '60%',
          }}
        />
        <div
          className="absolute rounded-full blur-2xl"
          style={{
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            animation: 'pulse-3 12s infinite ease-in-out',
            top: '20%',
            left: '40%',
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative h-full flex flex-col justify-end pb-12 px-8 z-10">
        <h1 className="text-white text-5xl font-bold mb-6 animate-fade-in">
          Service Details
        </h1>
        
        {/* Breadcrumb */}
        <div className="flex items-center text-orange-100/80 space-x-2 animate-slide-up">
          <a href="/" className="hover:text-orange-400 transition-colors">
            Home
          </a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Service Details</span>
        </div>
      </div>
    </div>
  );
};

const WebDesign = () => {
  return (
    <>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes stripe-slide {
          0% {
            transform: rotate(-45deg) translateX(-100%);
          }
          100% {
            transform: rotate(-45deg) translateX(100%);
          }
        }
        ${[...Array(6)].map((_, i) => `
          @keyframes float-${i} {
            0%, 100% {
              transform: translate(0, 0) rotate(0deg);
            }
            25% {
              transform: translate(${Math.random() * 50}px, ${Math.random() * 50}px) rotate(${Math.random() * 180}deg);
            }
            50% {
              transform: translate(${Math.random() * -50}px, ${Math.random() * 50}px) rotate(${Math.random() * 360}deg);
            }
            75% {
              transform: translate(${Math.random() * -50}px, ${Math.random() * -50}px) rotate(${Math.random() * 180}deg);
            }
          }
        `).join('')}
        @keyframes pulse-1 {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
        @keyframes pulse-2 {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1.1);
          }
          50% {
            opacity: 0.7;
            transform: scale(0.9);
          }
        }
        @keyframes pulse-3 {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
      `}</style>
      <WebDesign/>
    </>
  );
};

export default WebDesign;
