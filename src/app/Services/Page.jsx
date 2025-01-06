


"use client";

import React from "react";
import { Monitor, Search, Speaker, BarChart, Home, DollarSign } from "lucide-react";

const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-lg overflow-hidden ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardFooter = ({ children, className }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

export default function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Custom Web Design",
      description:
        "It offers a personalized online experience for your visitors and helps you stand out.",
        featured: true,
    },
    {
      icon:  BarChart,
      title: "Google Ads Management",
        description:
          "Optimize your ad spend with expert Google Ads management for higher ROI and targeted traffic.",

    },

    {
      icon: Speaker,
      title: "Social Media Marketing",
      description:
        "It involves creating and sharing valuable content that resonates with your target audience.",
    },

    {
      icon: Home,
      title: "Property Management System",
        description:
          "We provide property management solutions to streamline operations and enhance your property's performance.",

    },
    {
      icon: DollarSign,
      title: "Revenue Management System",
      description:
        "optimizes pricing strategies and inventory distribution to maximize a hotel's profitability by analyzing data and market demand.",
    },
    {
      icon: Search,
      title: "OTA Listing Management",
      description:
        "An OTA (Online Travel Agency) allows users to book travel services like flights, hotels, and car rentals online..",
    },
  ];

  return (
    
    <section 
            id= 'service' 
      className="relative min-h-screen w-full bg-fixed bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/Hotel1.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70" />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-white mb-4">Service We Provide</h2>
          <p className="text-gray-300 font-serif  max-w-2xl mx-auto">
            Transform your space with our comprehensive range of professional services, delivered with expertise
            and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`transition-transform duration-300 font-serif hover:-translate-y-1 ${
                service.featured ? "bg-[#1a2b4d] text-white" : "bg-white"
              }`}
            >
              <CardContent>
                <div className="mb-4">
                  <service.icon
                    className={`w-12 h-12 ${service.featured ? "text-white" : "text-orange-500"}`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold font-serif mb-3 ${
                    service.featured ? "text-white" : "text-blue-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p className={service.featured ? "text-white/90 font-serif" : "text-gray-600"}>
                  {service.description}
                </p>
              </CardContent>
              <CardFooter>
                <button
                  className={`text-sm font-medium ${
                    service.featured
                      ? "text-white hover:text-white/80"
                      : "text-orange-500 hover:text-orange-600"
                  }`}
                >
                  Learn More →
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>

  );
}


