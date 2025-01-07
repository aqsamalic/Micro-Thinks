
"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import CircleLogo from "./CircleLogo";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";

const HeroSection = () => {
  const pathname = usePathname();

  return (
    <div id="home" className="relative w-full h-screen mb-[100px]">
    
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover custom-img"
        style={{ backgroundImage: "url('/HeroImage.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      </div>

     
      <div className="relative z-10 ml-16 flex justify-start items-center h-full text-left text-white px-10">
        <div className="max-w-md">
          <h1 className="mb-5 scroll-m-20 text-4xl font-serif font-bold tracking-tight lg:text-5xl">
            Grow your Hotels with our Marketing 
            <span className="text-orange-500"> Services</span>
          </h1>
          <p className="mb-5 scroll-m-20 text-xl font-semibold font-serif tracking-tight">
            We elevate your hotel’s online presence with customized solutions to enrich guests' experiences.
          </p>

        
          <Button
  onClick={() => {
    document.getElementById("Contact-page").scrollIntoView({ behavior: "smooth" });
  }}
  className="outline  outline-1 text-white  group hover:rounded-3xl duration-300 hover:outline-orange-500"
>
  Get Started
</Button>

        </div>
      </div>

      {/* CircleLogo in the Bottom-Right */}
      <div className=" hidden lg:block absolute bottom-5 right-5">
        <CircleLogo />
      </div>
    </div>
  );
};

export default HeroSection;

