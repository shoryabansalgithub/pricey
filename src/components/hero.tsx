"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=100%", // Distance to scroll
        scrub: 1, // Smooth easing during scroll
        pin: true, // Pins the section while scrolling
      },
    });

    // Blur the image on scroll
    tl.to(
      imageWrapperRef.current,
      {
        filter: "blur(24px)",
        scale: 1.05,
        opacity: 0.8,
        ease: "none",
      },
      0
    );

    // Pop the text up nicely
    tl.fromTo(
      textRef.current,
      { y: 100, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, ease: "power2.out" },
      0.1
    );
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Target for GSAP blur */}
      <div ref={imageWrapperRef} className="absolute inset-0 w-full h-full -z-10">
        <Image
          src={"/main.png"}
          alt="horizon"
          fill
          sizes="100vw"
          priority
          quality={100}
          className="object-cover object-center"
        />
      </div>

      {/* Pop up text */}
      <h1
        ref={textRef}
        className="text-7xl md:text-9xl font-bold uppercase tracking-[0.2em] text-white drop-shadow-2xl opacity-0"
      >
        Horizon
      </h1>
    </div>
  );
}
