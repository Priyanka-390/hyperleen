"use client"
import Link from 'next/link'
import Image from "next/image";
import { NAV_LIST } from '@/utils/helper';
import { useState } from 'react';

const NavBar = () => {
    const [show, setShow] = useState(true);
    function showNav() {
    setShow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:!overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:!overflow-hidden");
    }
  }
  return (
    <nav>
       <div className="container my-[17px] xl:max-w-[1140px] xl:px-0">
         <div className='flex justify-between items-center'>
           <Link aria-label="logo" href="/">
                <Image
                  src="/assets/images/svg/nav-logo.svg"
                  width={54}
                  height={56.19}
                  alt="logo"
                  className="sm:w-[54px] w-10"
                />
              </Link>
          <ul className={`flex gap-2.5 items-center mobileView ${
              show ? "right-[-100%]" : "right-0"
            }`}>
            {NAV_LIST.map((data, i) => (
               <li key={i}>
                <Link  onClick={showNav} aria-label="logo" href={data.URL} className='font-poppins p-2.5 text-dark-grey leading-150 font-normal text-base duration-300 NavLinkHover'>{ data.title}</Link>
               </li>
            ))}
            <li className='pl-6'><button>Sign Up</button></li>
             <li><button>Contact Us</button></li>
          </ul>
            <label className="lg:hidden" onClick={showNav}>
              {show ? (
                <div className="z-30 relative">
                  <span className="flex bg-dark-blue h-1 rounded-3xl duration-300 w-6"></span>
                  <span className="flex bg-dark-blue h-1 rounded-3xl duration-300 w-6 mt-1"></span>
                  <span className="flex bg-dark-blue h-1 rounded-3xl duration-300 w-6 mt-1"></span>
                </div>
              ) : (
                <div className="z-20 relative">
                  <span className="flex bg-dark-blue absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                  <span className="flex bg-dark-blue absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                </div>
              )}
            </label>
         </div>
      </div>
      <div className='w-full mt-[1px] bg-dark-grey h-[0.5px]'></div>
    </nav>
  )
}

export default NavBar