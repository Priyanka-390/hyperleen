"use client";
import { useEffect, useRef, useCallback } from "react";
import { CloseAccordiom, OpenAccordion } from "./common/Icons";

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
      className={`border-[0.5px] mb-5 rounded-2xl overflow-hidden border-dark-grey border-solid ${
        isOpen
          ? " border-transparent"
          : " border-dark-grey"
      }`}
    >
      <button
        className={`font-poppins font-medium w-full py-[23px] px-6 text-base flex justify-between items-center relative z-10 ${
          isOpen ? " bg-dark-blue text-white rounded-t-2xl" : " bg-white text-black"
        }`}
        onClick={onClick}
        aria-label="accordion button"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${data.title}`}
      >
        {data.title}
          {isOpen ? <OpenAccordion/>: <CloseAccordiom/>}
    
      </button>
      <div
        ref={contentRef}
        id={`accordion-content-${data.title}`}
        style={{ maxHeight: "0px", transition: "max-height 0.3s ease" }}
        className={`overflow-hidden bg-dark-blue bg-opacity-5`}
        aria-hidden={!isOpen}
      >
        <p className="p-6 font-normal text-dark-grey ff-gilroy-regular leading-140 text-xl relative z-10">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Accordion;