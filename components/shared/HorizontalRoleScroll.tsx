"use client";

import { useRef, useEffect, useState, ReactNode, Children } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HorizontalRoleScroll({ children, title }: { children: ReactNode, title: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(2000);
  const [winH, setWinH] = useState(700);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const update = () => {
      setWinH(window.innerHeight);
      if (!trackRef.current) return;
      const excess = trackRef.current.scrollWidth - window.innerWidth + 80;
      setScrollRange(Math.max(200, excess));
    };
    const t = setTimeout(update, 120);
    window.addEventListener("resize", update);
    update();
    return () => { clearTimeout(t); window.removeEventListener("resize", update); };
  }, [children]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const childArray = Children.toArray(children);

  return (
    <section ref={sectionRef} className="relative bg-[#ffffff]" style={{ height: winH + scrollRange }}>
      <div className="sticky top-[64px] overflow-hidden flex flex-col bg-[#ffffff]" style={{ height: winH - 64 }}>
        
        {/* Heading */}
        <div className="shrink-0 pt-16 pb-4 text-center px-4">
          <h2 className="typo-h2 font-black text-navy tracking-tight">
            {title}
          </h2>
        </div>

        {/* Scrolling card track */}
        <div className="flex-1 flex items-center overflow-hidden py-4">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-5 pl-5 sm:pl-8 lg:pl-10 pr-12 will-change-transform items-stretch"
          >
            {childArray.map((child, idx) => (
              <div key={idx} className="w-[85vw] sm:w-[46vw] lg:w-[40vw] shrink-0 flex">
                {child}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
