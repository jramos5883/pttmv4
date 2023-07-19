"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/images/PoketotheMoon_028.jpg",
    "/images/PoketotheMoon_010.jpg",
    "/images/PoketotheMoon_030.jpg",
    "/images/PoketotheMoon_006.jpg",
    "/images/PoketotheMoon_009.jpg",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentSlide, images.length]);

  return (
    <div className="container bg-black xl:max-w-2xl 2xl:max-w-5xl">
      <SwitchTransition>
        <CSSTransition
          key={currentSlide}
          classNames="carousel-transition"
          timeout={1000}
        >
          <div className="">
            <Image
              src={images[currentSlide]}
              alt=""
              layout="responsive"
              width={4500}
              height={3000}
            />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
