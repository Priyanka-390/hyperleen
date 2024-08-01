import Image from "next/image";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";

export default function Ensure() {
    return(
       <div className="py-20">
        <div className="container xl:max-w-[1140px] xl:px-0 ">
<Heading name="How We" darkBlueText="Ensure High Quality" className="text-center mb-4" />
<Paragraph paraText="Our rigorous quality assurance process ensures that our data labeling services provide accurate and reliable results. Here’s a breakdown of our process:" className="max-w-[674px] text-center mx-auto mb-1"/>
<div className="flex mt-24 flex-row w-full gap-5 items-start">
<div className="max-w-[326px] w-full border-[0.5px] border-solid border-dark-blue rounded-2xl px-5 pt-5 pb-6 bg-white">
    <h4 className="ff-gilroy-semibold text-2xl leading-145 font-semibold text-black mb-2">Step 01</h4>
    <h5 className="ff-gilroy-semibold text-dark-grey font-semibold text-xl leading-145 mb-2">Data Labeling</h5>
    <div className="max-w-[239px] w-full bg-rich-black py-[11px] pr-3 pl-[11px] bg-opacity-5 rounded-2xl relative mb-7">
        <Image src="/assets/images/webp/pie.webp" sizes="100vw" alt="pie" width={216.49} height={93.35}/>
        <span className="absolute -right-11 top-[50%]">
            <span className="max-w-[66.51px] bg-dark-blue text-white text-base !leading-158 p-[0.5px_17.26px] rounded-full font-poppins after:content-[url(/assets/images/svg/tag-arrow.svg)] after:absolute relative after:top-[-68%] after:left-[-20%]">
            Pie..
            </span>
        </span>
    </div>
    <div className="max-w-[239px] w-full bg-rich-black py-[11px] pr-3 pl-[11px] bg-opacity-5 rounded-2xl relative">
        <Image src="/assets/images/webp/car.webp" sizes="100vw" alt="car" width={216.49} height={93.35}/>
        <span className="absolute -right-11 top-[50%]">
            <span className="max-w-[66.51px] bg-dark-blue text-white text-base !leading-158 p-[0.5px_17.26px] rounded-full font-poppins after:content-[url(/assets/images/svg/tag-arrow.svg)] after:absolute relative after:top-[-68%] after:left-[-20%]">
            Car
            </span>
        </span>
    </div>
</div>
<div className="max-w-[449px] w-full border-[0.5px] border-solid border-dark-blue rounded-2xl p-5">
    <div className="flex justify-between items-start mb-2">
        <div>
            <h4 className=" ff-gilroy-semibold font-semibold text-2xl text-black leading-145 mb-2">Step 02</h4>
            <h5 className=" ff-gilroy-semibold font-semibold text-xl text-dark-grey leading-145">Verification</h5>
        </div>
        <div className=" flex gap-[13px]">
            <div className="max-w-[86px] w-full py-1.5 px-3 rounded-xl bg-dark-blue bg-opacity-5 flex gap-[3px] items-center border-[0.5px] border-solid border-dark-blue">
<span className=" ff-gilroy-semibold font-semibold text-xl leading-145">90%</span>
<span><Image src="/assets/images/svg/check.svg" alt="check" width={20} height={20}/></span>
            </div>
            <div className="max-w-[86px] w-full py-1.5 px-3 rounded-xl bg-dark-blue bg-opacity-5 flex gap-[3px] items-center border-[0.5px] border-solid border-dark-blue">
<span className=" ff-gilroy-semibold font-semibold text-xl leading-145">10%</span>
<span><Image src="/assets/images/svg/cross.svg" alt="cross" width={20} height={20}/></span>
            </div>
        </div>
    </div>
    <div className=" flex">
        <div className="w-1/2 flex flex-col gap-2.5">
        <div className=" max-w-[181px] w-full bg-rich-black bg-opacity-5 rounded-md p-[9px]">
        <Image src="/assets/images/webp/car2.webp" alt="car2" sizes="100vw" width={163.95} height={70.7}/>
        </div>
        <div className=" max-w-[181px] w-full bg-rich-black bg-opacity-5 rounded-md p-[9px]">
        <Image src="/assets/images/webp/tomato.webp" alt="tomato" sizes="100vw" width={163.95} height={70.7}/>
        </div>
        <div className=" max-w-[181px] w-full bg-rich-black bg-opacity-5 rounded-md p-[9px]">
        <Image src="/assets/images/webp/man.webp" alt="man" sizes="100vw" width={163.95} height={70.7}/>
        </div>
        </div>
        <div className="w-1/2 flex flex-col items-end gap-2.5">
        <div className=" max-w-[181px] w-full bg-rich-black bg-opacity-5 rounded-md p-[9px]">
        <Image src="/assets/images/webp/man.webp" alt="man" sizes="100vw" width={163.95} height={70.7}/>
        </div>
        <div className=" max-w-[181px] w-full bg-rich-black bg-opacity-5 rounded-md p-[9px]">
        <Image src="/assets/images/webp/car2.webp" alt="car2" sizes="100vw" width={163.95} height={70.7}/>
        </div>
        <div className=" max-w-[181px] w-full bg-rich-black bg-opacity-5 rounded-md p-[9px]">
        <Image src="/assets/images/webp/pie2.webp" alt="pie2" sizes="100vw" width={163.95} height={70.7}/>
        </div>
        </div>
    </div>
</div>
<div className="max-w-[326px] w-full border-[0.5px] border-solid border-dark-blue rounded-2xl px-5 pt-5 pb-6 bg-white">
    <h4 className="ff-gilroy-semibold text-2xl leading-145 font-semibold text-black mb-2">Step 03</h4>
    <h5 className="ff-gilroy-semibold text-dark-grey font-semibold text-xl leading-145 mb-2.5">Relabeling</h5>
    <Paragraph paraText="Incorrectly labeled data is reviewed and relabeled correctly" className="mb-2"/>
 <div className="max-w-[181px]">
    <div className="w-full bg-rich-black bg-opacity-5 p-[9px] rounded-md relative">
<Image src="/assets/images/webp/relabeling-pie.webp" sizes="100vw" alt="relableling-pie" width={163.95} height={70.7}/>
<span className="absolute">
    <span className="bg-dark-blue text-white text-custom-sm font-poppins leading-150 px-4 rounded-full after:absolute relative after:content-[url(/assets/images/svg/relabeling-arrow.svg)] after:top-[-65%] after:-left-3.5">
    Pie..
    </span>
</span>
    </div>
 </div>
</div>
</div>
        </div>
       </div>
    )
}