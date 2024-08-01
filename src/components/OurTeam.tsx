import React from 'react';
import Image from "next/image";
import Paragraph from "./common/Paragraph";
import { Call, Mail } from "./common/Icons";
import Link from "next/link";
import { TEAM_DATA_LIST, TEAM_SOCIAL_ICONS_LIST } from "@/utils/helper";

const OurTeam: React.FC = () => {
  return (
    <div className="md:bg-team max-md:bg-dark-blue lg:bg-full bg-cover xl:py-44 lg:py-36 md:py-24 sm:py-16 py-12">
      <div className="container xl:max-w-[1140px] xl:px-0 py-1.5">
        <h2 className="text-white leading-120 mb-4 text-center ff-gilroy-medium font-medium text-5xl">
          Our Team
        </h2>
        <Paragraph
          className="text-center mx-auto max-w-[411px] lg:mb-14 md:mb-10 mb-5 text-white text-opacity-70"
          paraText="Meet our dedicated team of experts ensuring precision and quality in every data labeling task."
        />
        <div className="grid xl:gap-5 gap-3 lg:grid-cols-2">
          {TEAM_DATA_LIST.map((data, i) => (
              <div key={i} className="col-span-1 flex lg:justify-start justify-center">
            <div className="bg-white max-w-[563px] relative rounded-2xl">
                 <div className="md:py-4 py-2.5 md:px-2 px-1 border-t-[0.5px] absolute md:w-12 w-9 top-0 right-0 rounded-tr-2xl bg-white bg-opacity-[16%] border-l-[0.5px] shadow-team-social-icons border-l-light-sky-blue border-t-light-sky-blue">
              <div className='flex flex-col md:gap-4 gap-2'>
                {TEAM_SOCIAL_ICONS_LIST.map((data, i) => (
                    <Link href="" key={i} className="md:size-8 size-7 rounded-full flex-col duration-300 hover:bg-white group bg-dark-blue flex justify-center items-center">
                        <data.icon />
                  </Link>
                ))}
              </div>
            </div>
              <Image
                src={data.image}
                width={563}
                height={393}
                alt="name"
              />
              <div className="w-full h-3 bg-black"></div>
              <div className="sm:p-4 p-3">
                <div className="flex md:pt-4 pt-1 justify-between gap-1 flex-wrap items-center">
                  <div className="mt-[2px]">
                    <p className="ff-gilroy-semibold font-semibold mb-1 leading-140 text-black md:text-2xl text-xl">
                     {data.name}
                    </p>
                    <p className="font-poppins font-normal leading-150 md:text-lg text-base text-dark-grey">
                     {data.role}
                    </p>
                  </div>
                  <div className="mt-[2px]">
                    <Link className="flex items-center" href="tel:972.215.8214">
                      <span>
                        <Call />
                      </span>{" "}
                      <span className="sm:pl-3 pl-1.5 font-poppins font-normal text-base leading-150 text-dark-blue">
                        {data.contact}
                      </span>
                    </Link>
                    <Link className="flex sm:mt-2 mt-1 items-center" href="mailto:darrin.araki@cbpacific.com">
                      <span>
                        <Mail />
                      </span>{" "}
                      <span className="sm:pl-3 pl-1.5 font-poppins font-normal text-base leading-150 text-dark-blue">
                        {data.mail}
                      </span>
                    </Link>
                  </div>
                </div>
                <Paragraph
                  className="max-w-[528px] md:mt-6 mt-3"
                  paraText={data.description}
                />
              </div>
            </div>
          </div>
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
