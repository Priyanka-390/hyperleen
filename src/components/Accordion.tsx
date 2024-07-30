"use client"
import { useState } from 'react';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type AccordionItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
      >
        <span>{title}</span>
        {/* {isOpen ? <FaChevronUp /> : <FaChevronDown />} */}
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="p-4">
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Item 1', content: 'Content for Item 1' },
    { title: 'Item 2', content: 'Content for Item 2' },
    { title: 'Item 3', content: 'Content for Item 3' },
  ];

  const handleClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="border border-gray-200 rounded-md">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;