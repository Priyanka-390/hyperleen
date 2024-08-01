import Image from "next/image";
import Heading from "./common/Heading";

export default function Platforms() {
    return (
        <>
        <div className="py-20">
            <div className=" container xl:max-w-[1140px] xl:px-0">
                    <Heading name="Tools and" darkBlueText="Platforms for Polygon" name2="Annotations" className="max-w-[652px] mx-auto text-center mb-16"/>
 
                  <Image src="/assets/images/webp/platform-logos1.webp" width={1140} height={107} alt="platform-logo1 " className="mb-6"/>
                  <Image src="/assets/images/webp/platform-logos2.webp" width={1140} height={107} alt="platform-logo2"/>
            </div>
        </div>
        </>
    )
}