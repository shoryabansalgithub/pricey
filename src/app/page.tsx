"use client";

import { motion } from "motion/react";
import { RocketLaunch, Code, Palette, Lightning } from "@phosphor-icons/react";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col font-sans selection:bg-indigo-500/30">
      <main className="flex-1 flex flex-col items-center justify-center p-8 md:p-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl w-full flex flex-col items-center text-center space-y-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-300 backdrop-blur-sm">
            <Lightning className="w-4 h-4 text-indigo-400" weight="fill" />
            <span>Template Initialized</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Build something <br /> extraordinary.
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed">
            Your modern stack is ready. Next.js, Tailwind CSS, Motion, and Phosphor Icons configured for rapid development.
          </p>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-8"
          >
            {[
              {
                icon: <Code className="w-6 h-6 text-blue-400" weight="duotone" />,
                title: "Next.js",
                desc: "App router ready"
              },
              {
                icon: <Palette className="w-6 h-6 text-teal-400" weight="duotone" />,
                title: "Tailwind CSS",
                desc: "Utility-first styling"
              },
              {
                icon: <RocketLaunch className="w-6 h-6 text-orange-400" weight="duotone" />,
                title: "Motion & Phosphor",
                desc: "Smooth UI framework"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={item}
                className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl bg-white/5 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-400 text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </main>
      
      <footer className="py-8 text-center text-sm text-neutral-500 border-t border-white/10">
        <p>Template created successfully.</p>
      </footer>
    </div>
  );
}
