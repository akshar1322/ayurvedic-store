"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const images = [
  "/images/Prodct6.jpg",
  "/images/Prodct6.jpg",
  "/images/Prodct6.jpg",
  "/images/Prodct6.jpg",
  "/images/Prodct6.jpg",
  "/images/Prodct6.jpg",
];

// Duplicate images for infinite scrolling effect
const infiniteImages = [...images, ...images];

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // Infinite loop
    tl.to(sliderRef.current, {
      x: "-100%", // Moves left infinitely
      duration: images.length * 2, // Speed of sliding
      ease: "linear",
    });
  }, []);

  return (
    <div className="relative w-full max-w-screen-2xl h-[50%] mx-auto overflow-hidden">
      {/* Slider Container */}
      <div className="w-full h-full overflow-hidden">
        <div ref={sliderRef} className="flex space-x-4 w-[200%]">
          {infiniteImages.map((src, index) => (
            <motion.div
              key={index}
              className="min-w-[25%] min-h-[50%] flex justify-center items-center"
            >
              <Image
                src={src}
                width={500}
                height={500}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
