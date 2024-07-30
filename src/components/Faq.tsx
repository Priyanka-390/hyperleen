"use client";
import { FAQ_LIST } from "@/utils/helper";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Accordion from "./Accordion";

const Faqs = () => {
  const PathName = usePathname();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      className={`bg-faq xl:mt-3 max-sm:mt-12 xl:bg-100 bg-cover bg-top bg-opacity-70 bg-no-repeat overflow-x-clip relative z-10`}
    >
      <div className="xl:max-w-[1440px] container xl:px-0 ">
        {/* <Heading
          name="FAQ"
          className="-translate-x-[49.5%]"
          line="/assets/images/svg/common/faq-heading-line.svg"
        /> */}
        <div className="sm:pt-8 pt-6 md:pt-14 lg:pt-16 xl:pt-24 lg:max-w-[884px] mx-auto">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            {FAQ_LIST.map((accordion, index) => (
              <Accordion     key={index}
                data={accordion}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;