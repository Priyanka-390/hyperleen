import Image from 'next/image'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import { PrimaryButton, SecondaryButton, } from './common/Buttons'

const SegmentVerification = () => {
  return (
    <div className='py-40'>
      <div className="container sm:my-[17px] my-3 xl:max-w-[1140px] xl:px-0">
    <Heading className='text-center max-w-[506px] mb-4 mx-auto' name='Image' darkBlueText='Segmentation and' name2='Verification' />
     <Paragraph className='text-center mx-auto max-w-[740px] mb-10' paraText='In the realm of sentiment analysis, human judgment plays a crucial role. While our methods may not be extravagant, they are designed to ensure precise and reliable results.'/>
        <div className="md:grid mt-5 flex items-center xl:gap-20 lg:gap-16 flex-col-reverse gap-10 md:grid-cols-2">
          <div>
            <h3 className='text-black md:text-start text-center leading-135 lg:mb-4 mb-2 ff-gilroy-semibold font-semibold lg:text-custom-3xl sm:text-2xl text-xl'>Image Segmentation</h3>
          <Paragraph className='md:max-w-[540px] md:text-start text-center max-md:mx-auto lg:mb-12 sm:mb-8 mb-4' paraText='Image segmentation is the process of partitioning an image into multiple segments to simplify its representation and make it more meaningful. This technique is essential for identifying and analyzing objects within an image, such as cars in autonomous driving applications.'/>
         <div className='flex md:justify-start justify-center'>
           <PrimaryButton arialLabel='Learn More' href='Learn More' text='Learn More'/>
         </div>
          </div>
          <div className='flex justify-center lg:flex-col xl:items-end'>
             <div className='relative justify-center flex'>
               <Image
                    src="/assets/images/webp/segment.webp"
                    width={502}
                    height={483}
                    alt="segment"
                    className="xl:w-[502px]  xl:h-[483px]"
              />
               <div className='p-4 bg-dark-blue absolute top-0 w-full rounded-tr-2xl rounded-tl-2xl'>
                  <p className='font-poppins font-normal mb-[7px] text-lg leading-150 text-white'>Selected All Squares With</p>
                  <p className='text-white ff-gilroy-semibold leading-135 font-semibold text-custom-3xl'>Car</p>
              </div>
             </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:gap-20 lg:gap-16 gap-10 items-center mt-14 pt-1">
          <div className='flex md:justify-start justify-center lg:flex-col xl:items-start after:-left-5 after:h-[370px] after:rounded-2xl after:-z-10 after:bg-sky-blue relative lg:after:absolute lg:after:w-[395px] after:-top-5'>
             <div className='relative flex'>
               <Image
                    src="/assets/images/webp/verification.webp"
                    width={502}
                    height={483}
                    alt="segment"
                    className="xl:w-[502px]  xl:h-[483px]"
              />
               <div className='p-4 bg-dark-blue absolute top-0 w-full rounded-tr-2xl rounded-tl-2xl'>
                  <p className='ff-gilroy-semibold font-semibold text-custom-3xl leading-135 text-white'>Is Previous Selected Object is Correct?</p>
              </div>
             <div className='py-4 px-2.5 absolute md:bottom-[-25%] bottom-[-10%] bg-white -left-5 w-[332px] rounded-2xl'>
                <p className='ff-gilroy-semibold font-semibold text-center text-black mb-1 leading-140 text-2xl'>Confirm your action</p>
               <Paragraph className='text-center mb-7' paraText='Confirm if the segmentation was performed correctly.' />
              <div className='gap-4 flex'>
                <PrimaryButton className='!px-[58px]' arialLabel='yes' href='yes' text='Yes' />
                 <SecondaryButton className='!px-[61.5px]' arialLabel='no' href='no' text='No'/>
           </div>
            </div>
            </div>
          
          </div>
            <div className='flex justify-end flex-col items-end'>
            <div>
              <h3 className='text-black md:text-start text-center leading-135 lg:mb-4 mb-2 ff-gilroy-semibold font-semibold lg:text-custom-3xl sm:text-2xl text-xl'>Verification</h3>
                        <Paragraph className='md:max-w-[540px] md:text-start text-center max-md:mx-auto lg:mb-12 sm:mb-8 mb-4' paraText='Verification is a crucial step to ensure the accuracy of the labeled data. It involves reviewing the segmented image to confirm if the segmentation was performed correctly'/>
                       <div className='flex md:justify-start justify-center'>
                         <PrimaryButton arialLabel='Learn More' href='Learn More' text='Learn More'/>
                       </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SegmentVerification