"use client";

import { useMemo, useState } from "react";
import FsLightbox from "fslightbox-react";
import { cn } from "@/lib/utils";

type ResponsiveLightboxImageProps = {
  src: string;
  alt: string;
  sources?: string[];
  initialIndex?: number;
  className?: string;
  imageClassName?: string;
};

export function ResponsiveLightboxImage({
  src,
  alt,
  sources,
  initialIndex = 0,
  className,
  imageClassName,
}: ResponsiveLightboxImageProps) {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(initialIndex + 1);

  const lightboxSources = useMemo(
    () => (sources && sources.length > 0 ? sources : [src]),
    [sources, src],
  );

  const safeIndex = Math.min(Math.max(initialIndex, 0), lightboxSources.length - 1);

  const handleOpen = () => {
    setSlide(safeIndex + 1);
    setToggler((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={cn("block h-full w-full cursor-zoom-in", className)}
        aria-label={`Open image: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={cn("h-full w-full", imageClassName)}
          loading="lazy"
        />
      </button>

      <FsLightbox toggler={toggler} slide={slide} sources={lightboxSources} />
    </>
  );
}
