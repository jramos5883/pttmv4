"use client";

import Image from "next/image";
import { useState } from "react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="relative">
      <h1>Carousel</h1>

      {images.map((image, index) => (
        <div
          className={
            index === current
              ? "absolute w-full transition duration-1000 opacity-100 z-10"
              : "absolute w-full transition duration-1000 opacity-0 z-0"
          }
          key={index}
        >
          <Image
            src={image}
            alt=""
            width={500}
            height={500}
            layout="responsive"
            className="object-cover w-full h-64"
            priority
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 bg-white p-2 z-20"
      >
        Previous
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 bg-white p-2 z-20"
      >
        Next
      </button>
    </div>
  );
}
