import React, { useState } from 'react';
import { Lightbulb, Users, UserCircle, ExternalLink } from 'lucide-react';

const ServiceWebcards = ({ title, description, icon: Icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative p-8 bg-[#0A192F]/90 rounded-xl backdrop-blur-lg transform transition-all 
                  duration-500 ease-out hover:shadow-[0_0_30px_rgba(255,126,0,0.1)]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/20 via-[#233554]/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-xy" />

      {/* Glass effect overlay */}
      <div className="absolute inset-[1px] rounded-xl bg-[#0A192F]/90 backdrop-blur-xl" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon container with glow effect */}
        <div className="mb-6 relative">
          <div className="absolute -inset-1 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-gradient-to-br from-[#0A192F] to-[#112240] p-3 rounded-lg inline-block">
            <Icon
              className="w-8 h-8 text-orange-400 group-hover:text-orange-500 transform transition-all duration-500"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-4 group-hover:from-orange-200 group-hover:to-white transition-all duration-500">
          {title}
        </h3>

        <p className="text-[#8892B0] group-hover:text-[#CCD6F6] transition-colors duration-500 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Learn More Link */}
        <div
          className="flex items-center text-orange-400 group-hover:text-orange-500 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
        >
          <span className="mr-2 text-sm font-semibold">Learn More</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[140%] h-[140%] bg-gradient-to-br from-orange-500/10 to-transparent
                     transform rotate-45 translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100
                     transition-opacity duration-500"
        />
      </div>

      {/* Background number */}
      <div
        className="absolute bottom-4 right-6 text-6xl font-bold text-[#112240]/20 group-hover:text-[#233554]/30 transition-colors duration-500"
      >
        {(index + 1).toString().padStart(2, '0')}
      </div>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: 'Innovation',
      description:
        'Constantly pushing the boundaries of technology to develop solutions that solve complex problems and drive business growth through creative approaches.',
      icon: Lightbulb,
    },
    {
      title: 'Collaboration',
      description:
        'Fostering a culture of teamwork, knowledge-sharing, and open communication to leverage diverse perspectives and achieve exceptional results.',
      icon: Users,
    },
    {
      title: 'User-Centricity',
      description:
        'Placing the needs and experiences of users at the forefront of product development, ensuring intuitive interfaces and meaningful interactions.',
      icon: UserCircle,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#020C1B] p-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-pattern"
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#233554]/10 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ServiceWebcards {...service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceWebcards;
