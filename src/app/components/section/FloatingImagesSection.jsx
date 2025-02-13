"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingImagesSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = down, -1 = up

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScroll = () => {
      setDirection(window.scrollY > lastScrollY ? 1 : -1);
      lastScrollY = window.scrollY;
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="grid grid-cols-2 w-full h-[600px] gap-10 px-10">
      {/* Left Section */}
      <div className="flex flex-col justify-center">
        {/* Follow Us Section */}
        <div className="text-left text-lg font-bold">
          FOLLOW #US
          <div className="w-16 h-[2px] bg-black mt-2"></div>
        </div>

        {/* Grid of Links (4 Columns, 6 Rows) */}
        <div className="grid grid-cols-4 grid-rows-6 gap-4 mt-6 text-base text-gray-700">
          {[
            "Instagram →",
            "Facebook →",
            "TikTok →",
            "Pinterest →",

          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`${
                index % 4 < 2 ? "text-left" : "text-right"
              } hover:text-yellow-50 transition`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Right Section (Floating Images) */}
      <div className="relative flex justify-end items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute right-0 w-2/3 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1643379855823-086c58876e27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        />

        {/* Floating Images */}
        <div className="absolute right-10 flex flex-col gap-6">
          {[
            "/images/Prodct1.jpg",
            "/images/Prodct3.jpg",
            "/images/Prodct4.jpg",
            "/images/Prodct9.png",
          ].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Floating ${index}`}
              className="w-32 h-32 rounded-lg shadow-lg"
              initial={{ y: 0 }}
              animate={{ y: direction * 20 }} // Moves up/down on scroll
              transition={{ type: "tween", duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingImagesSection;
