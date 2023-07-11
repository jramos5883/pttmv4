"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();

  const setTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrent((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, 5000);
  };

  useEffect(() => {
    setTimer();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
    setTimer();
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    setTimer();
  };

  return (
    <div className="container">
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
              width={500}
              height={500}
              layout="responsive"
              alt=""
              className="object-cover"
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
    </div>
  );
}
