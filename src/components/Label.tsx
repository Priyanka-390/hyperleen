import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'

const Label = () => {
  return (
      <div className='pt-20'>
      <div className="container xl:max-w-[1140px] xl:px-0">
        <div className="grid grid-col-12">
          <div className="col-span-5">
           <Heading className='max-w-[478px] mb-4' name='Add' darkBlueText='Label' name2='of an Image' />
           <Paragraph className='mb-6' paraText='Efficient and Accurate  Labeling on Image.'/>
            <div className='p-5 border-[0.5px] border-dark-blue rounded-2xl xl:w-[462px]'>
              <p className='font-poppins font-semibold mb-5 text-base leading-150'>Upload Image and add label</p>
              <div className='p-5 rounded-xl bg-'>

              </div>
            </div>
          </div>
        </div>
          </div>
    </div>
  )
}

export default Label