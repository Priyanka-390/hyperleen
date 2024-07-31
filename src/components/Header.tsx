import Image from "next/image";
import NavBar from './NavBar'
import { HEADER_BUTTONS } from '@/utils/helper'
import Paragraph from './common/Paragraph'

const Header = () => {
  return (
      <div className='min-h-[715px] flex flex-col'>
          <NavBar/>
      <div className='flex-grow items-center justify-center flex relative'>
         <Image
        src="/assets/images/webp/header-left-line.webp"
        width={256}
        height={707}
        className="absolute left-0 top-0 -z-10 pointer-events-none "
        alt="left-line"
        />
         <Image
        src="/assets/images/webp/header-right-line.webp"
        width={154}
        height={492}
        className="absolute right-[-10%] top-0 -z-10 pointer-events-none "
        alt="right-line"
      />
              <div className='container xl:max-w-[1140px] xl:px-0'>
                  <p className='font-poppins relative after:absolute after:content-[url(/assets/images/svg/solution-line.svg)] after:left-[41%] before:absolute mb-6 before:rotate-180 before:right-[41%] before:top-[10%] after:top-[-3%] before:content-[url(/assets/images/svg/solution-line.svg)] font-normal text-base leading-150 text-center text-dark-blue'>AI Solutions</p>
          <div className='flex gap-6 pb-11 justify-center'>
            {HEADER_BUTTONS.map((data, i) => (
              <button aria-label='header-btn' key={i} className='px-6 py-2.5 shadow-sky-blue border-[0.5px] border-dark-blue rounded-[122px] bg-sky-blue text-dark-blue font-poppins font-normal text-base leading-150'>{data.title}</button>
            ))}
            <button className='px-6 py-2.5 shadow-sky-blue border-[0.5px] border-dark-blue rounded-[122px] bg-sky-blue text-dark-blue font-poppins font-normal text-base leading-150'>Accurate</button>
          </div>
          <h1 className='text-custom-9xl leading-100 mb-5 ff-gilroy-medium font-medium max-w-[757px] text-center mx-auto text-black'>Transform Your <span className='text-dark-blue'>Data into AI</span> Insights</h1>
            <Paragraph className='max-w-[634px] mx-auto mb-10 text-center' paraText='Unlock the full potential of your AI models with our premium data labeling services. Our expert annotators ensure your data is meticulously labeled, enabling superior performance and insights.' />
        </div>
          </div>
    </div>
  )
}

export default Header