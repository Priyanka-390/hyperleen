import Link from "next/link";
import React from "react";

interface PrimaryButtonProps {
  text: string;
  className?: string;
  arialLabel: string;
  href: string;
}

export const PrimaryButton = ({
  text,
  className,
  arialLabel,
  href,
}: PrimaryButtonProps) => {
  return href !== "" ? (
    <Link
      href={href}
      aria-label={arialLabel}
      className={`bg-dark-blue font-poppins  text-white text-lg leading-150 text-center shadow-primary-btn py-3.5 px-6  rounded-full ${className}`}
    >
      {text}
    </Link>
  ) : (
    <button
      aria-label={arialLabel}
      className={`bg-dark-blue font-poppins  text-white text-lg leading-150 text-center shadow-primary-btn py-3.5 px-6  rounded-full ${className}`}
    >
      {text}
    </button>
  );
};


interface SecondaryButtonProps {
    text: string;
    className?: string;
    arialLabel: string;
    href: string;
  }
  
 export const SecondaryButton = ({
    text,
    className,
    arialLabel,
    href,
  }: SecondaryButtonProps) => {
    return href !== "" ? (
      <Link
        href={href}
        aria-label={arialLabel}
        className={` bg-white text-black text-lg font-poppins text-center font-normal py-3.5 px-6 leading-150 border border-solid border-black rounded-full ${className}`}
      >
        {text}
      </Link>
    ) : (
      <button
        aria-label={arialLabel}
        className={`bg-white text-black text-lg font-poppins text-center font-normal py-3.5 px-6 leading-150 border border-solid border-black rounded-full ${className}`}
      >
        {text}
      </button>
    );
  };
  