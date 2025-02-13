"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { title: "Ingredient Sourcing", text: "We source only the finest ingredients for high-quality skincare." },
  { title: "Advanced Extraction Methods", text: "Our methods retain maximum potency and effectiveness." },
  { title: "Dermatological Testing", text: "Each product undergoes rigorous skin safety tests." },
  { title: "Sustainable Packaging", text: "We use eco-friendly, recyclable packaging for a greener future." },
];

const ScrollStairs = () => {
  const linesRef = useRef([]);

  useEffect(() => {
    linesRef.current.forEach((line) => {
      gsap.fromTo(
        line,
        { width: "0%" },
        {
          width: "100%",
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#8B5D48] text-white min-h-screen flex flex-col justify-center items-start p-20 space-y-20">
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative w-60 h-36 flex flex-col items-start"
          style={{ marginLeft: `${index * 20}rem` }} // Creates the staircase effect
        >
          <h2 className="text-2xl font-bold">{section.title}</h2>
          <p className="mt-2 text-sm">{section.text}</p>
          <div
            ref={(el) => (linesRef.current[index] = el)}
            className="absolute bottom-0 left-0 h-[0.1rem] bg-white"
            style={{ width: "0%", transition: "width 0.5s ease-in-out" }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ScrollStairs;
