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

const FirstSection: React.FC<{ children: React.ReactNode }> = ({
  children,
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
      className=" bg-home-1 bg-cover bg-no-repeat bg-center from-[#000000] via-[#5500E0] from-opacity-100 via-opacity-80 to-opacity-100 to-[#000000] w-full  flex flex-col items-center py-[10rem] px-[9rem] "
      ref={containerRef}
    >
      {children}
    </section>
  );
};

export default FirstSection;
