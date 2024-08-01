import Image from "next/image";
import NavBar from './NavBar'
import { HEADER_BUTTONS } from '@/utils/helper'
import Paragraph from './common/Paragraph'
import { PrimaryButton, SecondaryButton } from "./common/Buttons";

const Header = () => {
  return (
      <div className='lg:min-h-[715px] flex flex-col overflow-x-clip'>
          <NavBar/>
      <div className='flex-grow items-center lg:py-20 md:py-16 py-10 justify-center flex relative'>
         <Image
        src="/assets/images/webp/header-left-line.webp"
        width={256}
        height={707}
        className="absolute max-sm:max-w-[100px] max-lg:max-w-[150px] xl:left-0 left-[-6%] top-0 -z-10 pointer-events-none "
        alt="left-line"
        />
         <Image
        src="/assets/images/webp/header-right-line.webp"
        width={154}
        height={492}
        className="absolute xl:right-[7%] right-[-6%] max-sm:max-w-[100px] max-lg:max-w-[150px] top-0 -z-10 pointer-events-none "
        alt="right-line"
      />
              <div className='container xl:max-w-[1140px] xl:px-0'>
                  <div className="max-w-[92px] mb-6 w-full relative after:absolute after:content-[url(/assets/images/svg/solution-line.svg)] after:left-[-62%] before:absolute mx-auto before:rotate-180 before:right-[-62%] before:top-[10%] after:top-[-7%] before:content-[url(/assets/images/svg/solution-line.svg)]">
                    <p className='font-poppins  font-normal text-base leading-150 text-center text-dark-blue'>AI Solutions</p>
                    </div>
                              <div className='flex lg:gap-6 gap-3 flex-wrap lg:pb-11 md:pb-8 pb-5 justify-center'>
                  
            {HEADER_BUTTONS.map((data, i) => (
              <button aria-label='header-btn' key={i} className='md:px-6 px-3 sm:py-2.5 py-1.5 shadow-sky-blue border-[0.5px] border-dark-blue rounded-[122px] bg-sky-blue text-dark-blue font-poppins font-normal sm:text-base text-sm leading-150'>{data.title}</button>
            ))}
          </div>
          <h1 className='xl:text-custom-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl leading-100 lg:mb-5 mb-3 ff-gilroy-medium font-medium max-w-[757px] text-center mx-auto text-black'>Transform Your <span className='text-dark-blue'>Data into AI</span> Insights</h1>
            <Paragraph className='max-w-[634px] mx-auto lg:mb-10 md:mb-7 mb-4 text-center' paraText='Unlock the full potential of your AI models with our premium data labeling services. Our expert annotators ensure your data is meticulously labeled, enabling superior performance and insights.' />
          <div className="flex justify-center items-center gap-4">
            <PrimaryButton text="Get Started" href="get-started" arialLabel="get-started" />
            <SecondaryButton text="Try For Free" href="Try For Free" arialLabel="Try For Free" />
          </div>
        </div>
          </div>
    </div>
  )
}

export default Header