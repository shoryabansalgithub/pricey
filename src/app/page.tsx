"use client";

import Hero from "@/components/hero";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Simple fade-up reveals for standard sections
    const sections = gsap.utils.toArray('.reveal-section');
    sections.forEach((section: unknown) => {
      gsap.fromTo(section as HTMLElement,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section as HTMLElement,
            start: "top 85%",
          }
        }
      );
    });

    // 2. Open Roles Accordion Reveals
    const roles = gsap.utils.toArray('.role-item');
    roles.forEach((role: unknown, index) => {
      gsap.fromTo(role as HTMLElement,
        { autoAlpha: 0, x: -50 },
        {
          autoAlpha: 1, x: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: role as HTMLElement,
            start: "top 85%",
          }
        }
      );
    });

    // 3. Stats Grid Animation
    const numbersList = gsap.utils.toArray('.bignum-item');
    numbersList.forEach((item: unknown, index: number) => {
      gsap.fromTo(item as HTMLElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1,
          ease: "back.out(1.7)",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: "#numbers-container",
            start: "top 60%",
          }
        }
      );
    });

    // 5. Testimonial Immersive Text Reveal
    const words = gsap.utils.toArray('.testimonial-text-words span');
    gsap.to(words, {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#testimonial-section",
        start: "top 60%",
        end: "bottom 90%",
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <main className="w-full bg-[#111111] font-sans selection:bg-[#00a5ff] selection:text-white" ref={containerRef}>
      {/* We keep the original Hero which blurs out to the Horizon title */}
      <Hero />
      
      {/* The Brand New "TopNotch" Inspiration Page */}
      <div className="w-full bg-white text-black min-h-screen border-t border-neutral-800 rounded-t-3xl sm:rounded-t-[3rem] -mt-10 relative z-20 overflow-hidden shadow-2xl">
        
        {/* -- 1. About Section -- */}
        <section className="reveal-section px-6 md:px-16 py-24 md:py-32 flex flex-col md:flex-row gap-12 border-b border-neutral-200">
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold tracking-tight">About us</h3>
          </div>
          <div className="w-full md:w-3/4 flex flex-col gap-12">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl">
              Horizon is a digital innovation lab driven by a relentless pursuit of the exceptional.
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl">
              We partner with visionary brands to craft digital experiences that defy convention and define the future.
            </h2>
          </div>
        </section>

        {/* -- 2. Roles We Are Hiring (Premium List) -- */}
        <section className="w-full bg-[#FAFAFA] py-32 px-6 md:px-16" id="roles-section">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold tracking-tight mb-16 text-neutral-800"> Open Positions</h3>
            
            <div className="flex flex-col border-t border-neutral-300">
              
              {/* Role Item */}
              <div className="role-item group flex flex-col md:flex-row items-baseline justify-between py-12 border-b border-neutral-300 hover:border-[#00a5ff] cursor-pointer transition-colors duration-500">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#111] group-hover:text-[#00a5ff] transition-colors duration-300 z-10">
                  Design Engineer
                </h2>
                <div className="flex items-center mt-4 md:mt-0 font-mono text-sm tracking-widest uppercase text-neutral-500 group-hover:text-[#00a5ff] transition-colors">
                  <span className="mr-8">Delhi / Remote</span>
                  <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center group-hover:bg-[#00a5ff] group-hover:border-[#00a5ff] group-hover:text-white transition-all overflow-hidden relative">
                     <span className="group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-5 translate-y-5 transition-transform duration-300 absolute">↗</span>
                     <span className="group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-300 absolute">↗</span>
                  </div>
                </div>
              </div>

              {/* Role Item */}
              <div className="role-item group flex flex-col md:flex-row items-baseline justify-between py-12 border-b border-neutral-300 hover:border-[#00a5ff] cursor-pointer transition-colors duration-500">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#111] group-hover:text-[#00a5ff] transition-colors duration-300 z-10">
                  Creative Director
                </h2>
                <div className="flex items-center mt-4 md:mt-0 font-mono text-sm tracking-widest uppercase text-neutral-500 group-hover:text-[#00a5ff] transition-colors">
                  <span className="mr-8">New York</span>
                  <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center group-hover:bg-[#00a5ff] group-hover:border-[#00a5ff] group-hover:text-white transition-all overflow-hidden relative">
                     <span className="group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-5 translate-y-5 transition-transform duration-300 absolute">↗</span>
                     <span className="group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-300 absolute">↗</span>
                  </div>
                </div>
              </div>

              {/* Role Item */}
              <div className="role-item group flex flex-col md:flex-row items-baseline justify-between py-12 border-b border-neutral-300 hover:border-[#00a5ff] cursor-pointer transition-colors duration-500">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#111] group-hover:text-[#00a5ff] transition-colors duration-300 z-10">
                  Full Stack Dev
                </h2>
                <div className="flex items-center mt-4 md:mt-0 font-mono text-sm tracking-widest uppercase text-neutral-500 group-hover:text-[#00a5ff] transition-colors">
                  <span className="mr-8">Remote</span>
                  <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center group-hover:bg-[#00a5ff] group-hover:border-[#00a5ff] group-hover:text-white transition-all overflow-hidden relative">
                     <span className="group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-5 translate-y-5 transition-transform duration-300 absolute">↗</span>
                     <span className="group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-300 absolute">↗</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* -- 3. Stats Redesign: Brutalist Full-Width List -- */}
        <section className="w-full bg-[#111111] text-white py-32 border-t border-neutral-900" id="numbers-container">
          <div className="px-6 md:px-16 pb-24 md:pb-48">
            <h3 className="text-[#00a5ff] font-mono tracking-widest uppercase mb-12 border-b border-neutral-800 pb-4 inline-block">By the numbers</h3>
            <h2 className="text-4xl md:text-6xl lg:text-[5vw] font-medium tracking-tight max-w-5xl leading-[1.1] text-neutral-200">
              Our footprint spans the globe, pushing the boundaries of what is possible in the digital realm.
            </h2>
          </div>

          <div className="w-full flex flex-col border-t border-neutral-800 border-b">
            
            <div className="bignum-item group flex flex-col md:flex-row items-center border-b border-neutral-800 hover:bg-[#00a5ff] transition-colors duration-500 cursor-default">
              <div className="w-full md:w-1/2 p-6 md:p-16 border-r-0 md:border-r border-neutral-800 group-hover:border-[#00a5ff]/50 transition-colors">
                <span className="text-[25vw] md:text-[15vw] leading-[0.8] font-bold tracking-tighter text-[#00a5ff] group-hover:text-white transition-colors duration-500 drop-shadow-sm">50+</span>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-16 py-12 flex flex-col justify-center">
                <h4 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-6 tracking-tight text-white transition-colors">Global Experts</h4>
                <p className="text-xl font-light text-neutral-400 group-hover:text-white/80 max-w-xl transition-colors">Brilliant minds from multiple disciplines shaping our cohesive design vision.</p>
              </div>
            </div>

            <div className="bignum-item group flex flex-col md:flex-row items-center border-b border-neutral-800 hover:bg-[#00a5ff] transition-colors duration-500 cursor-default">
              <div className="w-full md:w-1/2 p-6 md:p-16 border-r-0 md:border-r border-neutral-800 group-hover:border-[#00a5ff]/50 transition-colors">
                <span className="text-[25vw] md:text-[15vw] leading-[0.8] font-bold tracking-tighter text-[#00a5ff] group-hover:text-white transition-colors duration-500 drop-shadow-sm">250+</span>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-16 py-12 flex flex-col justify-center">
                <h4 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-6 tracking-tight text-white transition-colors">Products Built</h4>
                <p className="text-xl font-light text-neutral-400 group-hover:text-white/80 max-w-xl transition-colors">Websites, applications, and ecosystems successfully launched to market.</p>
              </div>
            </div>

            <div className="bignum-item group flex flex-col md:flex-row items-center border-b-0 hover:bg-[#00a5ff] transition-colors duration-500 cursor-default">
              <div className="w-full md:w-1/2 p-6 md:p-16 border-r-0 md:border-r border-neutral-800 group-hover:border-[#00a5ff]/50 transition-colors">
                <span className="text-[25vw] md:text-[15vw] leading-[0.8] font-bold tracking-tighter text-[#00a5ff] group-hover:text-white transition-colors duration-500 drop-shadow-sm">12+</span>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-16 py-12 flex flex-col justify-center">
                <h4 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-6 tracking-tight text-white transition-colors">Timezones</h4>
                <p className="text-xl font-light text-neutral-400 group-hover:text-white/80 max-w-xl transition-colors">Our remote-first infrastructure ensures continuous output and unparalleled agility.</p>
              </div>
            </div>

          </div>
        </section>

        {/* -- 5. Immersive Testimonial Reveal -- */}
        <section className="relative w-full min-h-screen bg-[#111] flex items-center justify-center py-32 px-6 md:px-16" id="testimonial-section">
          <div className="max-w-6xl w-full text-center flex flex-col items-center">
            
            <p className="text-sm text-[#00a5ff] font-mono tracking-widest uppercase mb-16">Client Stories</p>
            
            {/* Word-by-Word Reveal Animation */}
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.2] mb-16 testimonial-text-words flex flex-wrap justify-center gap-x-3 gap-y-2">
              {"\"Working with Horizon transformed our entire digital footprint. Their ability to translate complex business needs into seamless, beautiful user journeys is absolutely unmatched. A phenomenal partnership.\"".split(" ").map((word, i) => (
                <span key={i} className="opacity-20 text-white transition-colors duration-300">{word}</span>
              ))}
            </h2>

          <div className="flex flex-col gap-6 mt-16 md:flex-row md:gap-12 md:mt-24">
            
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="w-16 h-16 md:w-32 md:h-32 mb-6 rounded-full overflow-hidden relative bg-black/20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80')] bg-cover bg-center grayscale"></div>
              </div>
              <p className="font-bold text-lg md:text-2xl text-white">Sarah Lin</p>
              <p className="text-xs md:text-sm text-[#00a5ff] font-mono tracking-wider mt-1">VP of Product, StellarTech</p>
            </div>
            
            <div className="hidden md:block w-[1px] h-32 bg-neutral-800"></div>

            <div className="w-full md:w-1/3 flex flex-col items-center mt-12 md:mt-0">
              <div className="w-16 h-16 md:w-32 md:h-32 mb-6 rounded-full overflow-hidden relative bg-black/20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80')] bg-cover bg-center grayscale"></div>
              </div>
              <p className="font-bold text-lg md:text-2xl text-white">James Sterling</p>
              <p className="text-xs md:text-sm text-[#00a5ff] font-mono tracking-wider mt-1">CEO, Vanguard</p>
            </div>

            <div className="hidden md:block w-[1px] h-32 bg-neutral-800"></div>

            <div className="w-full md:w-1/3 flex flex-col items-center mt-12 md:mt-0">
              <div className="w-16 h-16 md:w-32 md:h-32 mb-6 rounded-full overflow-hidden relative bg-black/20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80')] bg-cover bg-center grayscale"></div>
              </div>
              <p className="font-bold text-lg md:text-2xl text-white">Markus Vance</p>
              <p className="text-xs md:text-sm text-[#00a5ff] font-mono tracking-wider mt-1">founder, collective</p>
            </div>

          </div>
          </div>
        </section>

      </div>
    </main>
  );
}

