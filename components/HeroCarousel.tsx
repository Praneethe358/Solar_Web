"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  "/hero_images/hero1.jpg",
  "/hero_images/hero2.jpeg",
  "/hero_images/hero3.webp",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {heroImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Solar company hero image ${index + 1}`}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        />
      ))}
    </>
  );
}