"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const banner = () => {
  return (
    <div className="relative w-full uppercase h-[700px] max-w-9xl mx-auto rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599022484226-2cd40d53a027?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between p-1">
        {/* Heading (Top Right) */}
        <h2 className="absolute top-6 right-2 text-white text-2xl font-bold">
        Ayurvedic: <samp className="text-2xl">SUMMER SALE</samp>
        <p className="absolute top-7 right-2 text-white text-2xl font-bold" >GLOW UP & SAVE!</p>
        </h2>


        {/* Discount Text & Button (Bottom Right) */}
        <div className="absolute bottom-6 left-2 text-right">
          <p className="text-white text-lg font-semibold">
            Up To 25% Off On Our Top Products
          </p>
          <motion.button
            whileHover={{ backgroundColor: "white", color: "black" }}
            transition={{ duration: 0.3 }}
            className="flex mt-3 mb-4 px-5 left-2 py-2 border border-white text-white font-medium  transition-all"
          >
            <Link href="/product">
            Shop Now →
          </Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default banner;
