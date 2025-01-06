// 'use client';

// import { useState, useEffect } from 'react';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import { Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const ScrollToTop = () => {
//     scroll.scrollToTop();
//   };
//   const navbar = [{ name: 'Home', id: 'home' }, { name: 'About', id: 'about-us' },{ name: 'Services', id: 'service' },{ name: 'Ota Platforms', id: 'Ota-Platforms' },{ name: 'Contact', id: 'Contact-page' }];

//   return (
//     <nav
//       className={`fixed w-full z-50 ease-in-out transition-all duration-300 ${
//         isScrolled ? 'bg-white text-black backdrop-blur-md shadow-md' : 'bg-transparent text-white'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div style={{ width: '100px', height: '50px' }}>
//             <Image
//               onClick={ScrollToTop} // Scroll to top
//               src="/Logo.webp"
//               className="w-full h-auto cursor-pointer"
//               alt="MicroThink logo image"
//               height="50"
//               width="100"
//             />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//           {navbar.map((item) => (
//   <ScrollLink
//     key={item.name}
//     to={item.id}
//     spy={true}
//     smooth={true}
//     offset={-70}
//     duration={500}
//     className="cursor-pointer hover:text-orange-500 transition-colors"
//   >
//     {item.name}
//   </ScrollLink>
// ))}

// <Link href="/Contact" id='Contact-page'>
//   <Button
//     className={`border border-white hover:border-orange-500 ease-in-out rounded-3xl text-white hover:text-orange-500 ${
//       isScrolled ? 'bg-white text-black border border-black' : 'bg-transparent text-white'
//     }`}
//   >
//     Get Started
//   </Button>
// </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden"
//             aria-label="Toggle mobile menu"
//             onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden pb-6">
//             <div className="flex flex-col space-y-4">
//               {['Home', 'About', 'OTA Platforms', 'Services', 'Contact'].map((item) => (
//                 <ScrollLink
//                   key={item}
//                   to={item.toLowerCase().replace(/\s+/g, '-')}
//                   spy={true}
//                   smooth={true}
//                   offset={-70}
//                   duration={500}
//                   className="cursor-pointer text-gray-700 hover:text-orange-500 transition-colors"
//                 >
//                   {item}
//                 </ScrollLink>
//               ))}
//              <Link href="/contact">
//   <Button className="bg-orange-500 hover:bg-orange-600 w-full">Get Started</Button>
// </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { usePathname } from 'next/navigation'; // Import to get the current path
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ScrollToTop = () => {
    scroll.scrollToTop();
  };

  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about-us' },
    { name: 'Services', id: 'service' },
    { name: 'OTA Platforms', id: 'Ota-Platforms' },
    { name: 'Contact', id: 'Contact-page' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 ease-in-out transition-all duration-300 ${
        isScrolled
          ? 'bg-white text-black backdrop-blur-md shadow-md'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div style={{ width: '100px', height: '50px' }}>
            <Image
              onClick={ScrollToTop} // Scroll to top
              src="/Logo.webp"
              className="w-full h-auto cursor-pointer"
              alt="MicroThink logo image"
              height="50"
              width="100"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navbar.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-orange-500 transition-colors"
              >
                {item.name}
              </ScrollLink>
            ))}

            {/* Get Started Button */}
            {/* {pathname === '/' ? (
             
              <ScrollLink
                to="Contact-page"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button
                  className={`border border-white hover:border-orange-500 ease-in-out rounded-3xl text-white hover:text-orange-500 ${
                    isScrolled
                      ? 'bg-white text-black border border-black'
                      : 'bg-transparent text-white'
                  }`}
                >
                  Get Started
                </Button>
              </ScrollLink>
            ) : (
              // Navigate to the Contact page if not on the home page
              <Link href="/Contact">
                <Button
                  className={`border border-white hover:border-orange-500 ease-in-out rounded-3xl text-white hover:text-orange-500 ${
                    isScrolled
                      ? 'bg-white text-black border border-black'
                      : 'bg-transparent text-white'
                  }`}
                >
                  Get Started
                </Button>
              </Link>
            )} */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              {navbar.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer text-gray-700 hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </ScrollLink>
              ))}

              {/* Mobile Get Started Button */}
              {pathname === '/' ? (
                <ScrollLink
                  to="Contact-page"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button className="bg-orange-500 hover:bg-orange-600 w-full">
                    Get Started
                  </Button>
                </ScrollLink>
              ) : (
                <Link href="/Contact">
                  <Button className="bg-orange-500 hover:bg-orange-600 w-full">
                    Get Started
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
