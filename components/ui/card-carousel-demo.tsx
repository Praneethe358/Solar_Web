import React from "react";

import { CardCarousel } from "@/components/ui/card-carousel";

const CardCarouselDemo = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=500&h=750&q=80",
      alt: "Solar panels in sunlight",
    },
    {
      src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=500&h=750&q=80",
      alt: "Solar farm installation",
    },
    {
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=500&h=750&q=80",
      alt: "Renewable energy field",
    },
  ];

  return (
    <div className="w-full">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};

export default CardCarouselDemo;