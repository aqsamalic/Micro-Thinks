"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../Navbar/Page";

const Services = [
  { name: "Hotel marketing services", component: <SubService /> },
  { name: "Hotel’s direct booking", component: <SubService /> },
  { name: "Custom Web Design", component: <SubService /> },
  { name: "Revenue Management System", component: <SubService /> },
  { name: "OTA Listing Management", component: <SubService /> },
];
const tabs = [
  "Hotel marketing services",
  "Hotel’s direct booking",
  "Custom Web Design",
  "Revenue Management System",
  "OTA Listing Management",
];
export default function Specilist() {
  const [activeTab, setActiveTab] = useState("Hotel marketing Services");
  const [mounted, setMounted] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "Hotel marketing services":
        return <SubService />;
      case "Hotel’s direct booking":
        return <SubService />;
      case "Custom Web Design":
        return <SubService />;
      case "Revenue Management System":
        return <SubService />;
      case "OTA Listing Management":
        return <SubService />;
      default:
        return null;
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div id="about-us" className="max-w-6xl mx-auto px-4 py-8 font-sans">
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

      {tabs.map((tab) => {
        <button
          className={`py-2 px-4 rounded-lg font-medium ${
            activeTab === tab ? "bg-blue-600 text-white" : " text-gray-700"
          }  hover:bg-blue-600 hover:text-white transition-colors duration-300`}
          onClick={() => setActiveTab(activeTab)}
        >
          {tab}
        </button>;
      })}
      <div className="  p-5 rounded-lg ">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2"
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>
      </div>

      {/*  */}
    </div>
  );
}
