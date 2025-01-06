"use client"

import { useEffect, useRef } from 'react'

export default function CircleLogo() {
  const textRef = useRef(null)

  useEffect(() => {
    const animate = () => {
      if (textRef.current) {
        // Get current offset and increment it
        const currentOffset = parseFloat(textRef.current.getAttribute('startOffset') || '0')
        const newOffset = (currentOffset + 0.1) % 100 // Keep it between 0-100
        textRef.current.setAttribute('startOffset', `${newOffset}%`)
      }
      requestAnimationFrame(animate)
    }

    const animation = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animation)
  }, [])

  return (
    <div className="absolute right-6 bottom-6  w-48 h-48 flex items-center justify-center">
      {/* Background circle */}
      <div className="absolute inset-0 rounded-full bg-transparent flex items-center justify-center">
        {/* Orange circle */}
        <div className="w-14 h-14 rounded-full bg-[#FF6B00] flex items-center justify-center">
          {/* Arrow icon */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="transform rotate-45"
          >
            <path 
              d="M5 19L19 5M19 5V19M19 5H5" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      
      {/* Rotating text */}
      <svg 
        viewBox="0 0 100 100" 
        width="100%" 
        height="100%"
        className="absolute inset-0"
      >
        <defs>
          <path
            id="circle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text fill="white" fontSize="8.5">
          <textPath 
            ref={textRef}
            href="#circle" 
            startOffset="0%"
          >
            Grow Your Hotel .Our Marketing Services . Microthink.com
          </textPath>
        </text>
      </svg>
    </div>
  )
}
