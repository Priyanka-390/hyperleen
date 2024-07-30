"use client";
import { useEffect, useRef, useCallback } from "react";
// import { MinusIcon, PlusIcon } from "./Icons";

type AccordionProps = {
  data: { title: string; description: string };
  isOpen: boolean;
  onClick: () => void;
};

const Accordion = ({ data, isOpen, onClick }: AccordionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const updateMaxHeight = useCallback(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  useEffect(() => {
    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);
    return () => window.removeEventListener("resize", updateMaxHeight);
  }, [isOpen, updateMaxHeight]);

  return (
    <div
      className={`border border-solid bg-white backdrop-blur-[26.4px] bg-opacity-[3%] after:w-full after:h-full after:opacity-0 after:origin-top after:bg-faq-gradient after:top-0 after:left-0 after:absolute relative ${
        isOpen
          ? "after:opacity-100 after:duration-300 after:ease-linear border-picton-blue border-opacity-100"
          : "after:opacity-0 border-opacity-30 border-white after:duration-300 after:ease-linear"
      }`}
    >
      <button
        className={`w-full lg:pt-[19px] pt-3 px-4 md:px-5 md:pt-4 text-left font-orbitron font-medium sm:text-lg text-base md:text-xl lg:text-2xl !leading-150 text-white flex justify-between items-center relative z-10 ${
          !isOpen ? "pb-[19px]" : "pb-0"
        }`}
        onClick={onClick}
        aria-label="accordion button"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${data.title}`}
      >
        {data.title}
        <div className="md:min-w-10 min-h-8 min-w-8 md:min-h-10 rounded-full border border-solid border-white flex items-center justify-center ml-1.5">
          {/* {isOpen ? <MinusIcon /> : <PlusIcon />} */}
        </div>
      </button>
      <div
        ref={contentRef}
        id={`accordion-content-${data.title}`}
        style={{ maxHeight: "0px", transition: "max-height 0.3s ease" }}
        className={`overflow-hidden ${isOpen ? "opacity-100" : ""}`}
        aria-hidden={!isOpen}
      >
        <p className="font-poppins pl-4 md:pl-5 pb-4 font-normal sm:text-base text-sm md:text-lg text-white opacity-70 !leading-160 relative z-10 mt-1 sm:mt-1.5 max-w-[759px] pr-16 lg:pr-0">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Accordion;