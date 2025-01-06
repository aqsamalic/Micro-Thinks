"use client"
import Navbar from './Navbar/Page';
import Footer from './Footer/Page';
import HeroSection from './Hero/page';
import Specilist from "./About/page";
import OtaPlatoforms from "./OtaPlatforms/page"
import ServicesSection from "./Services/Page";
import ContactPage from "./Contact/Page";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';



export default function Home() {
    const pathname = usePathname();
  
  useEffect(()=>{

    console.log("The pathname is" , pathname)
  }) 
 

  return (
    <>
     
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <HeroSection />
          <Specilist/>

        
          <ServicesSection/>
          <OtaPlatoforms/>
          
        </main>
  </div>
          <ContactPage/>
    </>
  );
}

