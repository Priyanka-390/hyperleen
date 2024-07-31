"use client";
import { FAQ_LIST } from "@/utils/helper";
import { useState } from "react";
import Accordion from "./Accordion";
import Heading from "./common/Heading";
import Paragraph from "./common/Para";
import { PrimaryButton, SecondaryButton } from "./common/Buttons";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div>
      <div className="xl:max-w-[1440px] container xl:px-0 ">
        <Heading darkBlueText="FAQs" className=" text-center mb-4"/>
   <Paragraph paraText="You have got Question.  We have got Answer" className="text-center pb-14"/>
        <div className="lg:max-w-[973px] mx-auto mt-1">
            {FAQ_LIST.map((accordion, index) => (
              <Accordion     key={index}
                data={accordion}
                className={`${index === 6 && "!mb-0"}`}
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