/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import appContext from "@/context/appContext";

const FirstSection: React.FC<{ children: React.ReactNode; bg: string }> = ({
  children,
  bg,
}) => {
  const ctx = useContext(appContext);

  const containerRef = useRef(null);

  const options = useMemo(() => {
    return {
      root: null,
      threshold: 0,
      rootMargin: "-150px",
    };
  }, []);

  const callBackFn = useCallback((entries: any, _observer: any) => {
    const [entry] = entries;

    ctx.changeStickyHeader(!entry.isIntersecting);
  }, []);

  useEffect(() => {
    const current = containerRef.current;
    const observer = new IntersectionObserver(callBackFn, options);

    if (current) observer.observe(current);

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [callBackFn, containerRef, options]);

  return (
    <section
      className={` ${bg} bg-cover bg-no-repeat bg-center from-[#000000] via-[#5500E0] from-opacity-100 via-opacity-80 to-opacity-100 sm:min-h-[calc(100vh-7rem)] to-[#000000] w-full  flex flex-col items-center py-[10rem] 2xl:px-[5rem] xlg:px-[3rem] smd:px-[2rem] px-[9rem] relative`}
      ref={containerRef}
    >
      <div className="bg-[rgba(0,0,0,0.85)] absolute top-0 left-0 right-0 bottom-0 -z-[10]"></div>
      {children}
    </section>
  );
};

export default FirstSection;
