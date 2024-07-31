"use client";
import { FAQ_LIST } from "@/utils/helper";
import { useState } from "react";
import Accordion from "./Accordion";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      className={``}
    >

      <div className="xl:max-w-[1440px] container xl:px-0 ">
        <div className="sm:pt-8 pt-6 md:pt-14 lg:pt-16 xl:pt-24 lg:max-w-[884px] mx-auto">
            {FAQ_LIST.map((accordion, index) => (
              <Accordion     key={index}
                data={accordion}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;