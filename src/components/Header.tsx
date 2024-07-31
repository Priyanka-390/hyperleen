import React from 'react'
import NavBar from './NavBar'
import { HEADER_BUTTONS } from '@/utils/helper'

const Header = () => {
  return (
      <div className='min-h-[715px] flex flex-col'>
          <NavBar/>
          <div className='flex-grow items-center justify-center flex'>
              <div className='container xl:max-w-[1140px] xl:px-0'>
                  <p className='font-poppins relative after:absolute after:content-[url(/assets/images/svg/solution-line.svg)] after:left-[41%] before:absolute mb-6 before:rotate-180 before:right-[41%] before:top-[10%] after:top-[-3%] before:content-[url(/assets/images/svg/solution-line.svg)] font-normal text-base leading-150 text-center text-dark-blue'>AI Solutions</p>
          <div className='flex gap-6 pb-11 justify-center'>
            {HEADER_BUTTONS.map((data, i) => (
              <button aria-label='header-btn' key={i} className='px-6 py-2.5 shadow-sky-blue border-[0.5px] border-dark-blue rounded-[122px] bg-sky-blue text-dark-blue font-poppins font-normal text-base leading-150'>{data.title}</button>
            ))}
            <button className='px-6 py-2.5 shadow-sky-blue border-[0.5px] border-dark-blue rounded-[122px] bg-sky-blue text-dark-blue font-poppins font-normal text-base leading-150'>Accurate</button>
          </div>
          <h1 className='text-custom-9xl mb-5 font-gilroy-medium font-medium max-w-[757px] text-center mx-auto text-black'>Transform Your <span className='text-dark-blue'>Data into AI</span> Insights</h1>
            <p></p>
        </div>
          </div>
    </div>
  )
}

export default Header