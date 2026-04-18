"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/** Local assets under public/hero_images — keep in sync with deployed files */
const heroImages = [
  "/hero_images/hero1.jpeg",
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
    <div className="pointer-events-none absolute inset-0 z-0">
      {heroImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Solar company hero image ${index + 1}`}
          fill
          priority={index === 0}
          sizes="100vw"
          quality={85}
          className={`object-cover object-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        />
      ))}
    </div>
  );
}