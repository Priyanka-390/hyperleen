import React from 'react';
import Link from 'next/link';
import Paragraph from './common/Paragraph';
import { POLICY_LINK, QUICK_LINK, SOCIAL_ICONS, SUPPORT_LINK } from '@/utils/helper';
import Image from 'next/image';

interface LinkItem {
    name: string;
    path: string;
}

interface SocialIcon {
    link: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    
    // Function to transform the path
    const transformPath = (path: string): string => {
        return `${path.slice(1).replace(/\//g, '#')}`;
    };

    return (
        <div className='bg-footer bg-full bg-no-repeat bg-center pt-[180px] pb-7'>
            <div className="container xl:max-w-[1140px] xl:px-0 pb-14">
                <div className="flex flex-row flex-wrap justify-between">
                    <div className='w-full lg:w-5/12'>
                        <Link href="/">
                            <Image src="/assets/images/svg/footerlogo.svg" width={117} height={135} alt="Footer Logo" className='mb-5' />
                        </Link>
                        <Paragraph paraText='Lorem ipsum dolor sit amet consectetur. Massa ac commodo duis amet et ut. Tincidunt faucibus integer risus id at.' className='text-white text-opacity-70 max-w-[279px]' />
                    </div>
                    <div className='w-full lg:w-7/12'>
                        <div className="flex flex-wrap  justify-between w-full ">
                            <div className='flex flex-col max-w-[102px] w-full'>
                                <p className='mb-5 text-white font-poppins text-lg leading-150'>Quick Links</p>
                                <ul className='gap-5 flex flex-col'>
                                    {QUICK_LINK.map((link: LinkItem, index: number) => (
                                        <li className='mb-2' key={index}>
                                            <Link rel="noopener noreferrer" aria-label={link.name} href={transformPath(link.path)} className='text-white text-opacity-70 text-base leading-150 font-poppins'>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex flex-col'>
                                <p className='mb-5 text-white font-poppins text-lg leading-150'>Links</p>
                                <ul className=' flex flex-col gap-5'>
                                    {SUPPORT_LINK.map((link: LinkItem, index: number) => (
                                        <li className='mb-2' key={index}>
                                            <Link rel="noopener noreferrer" aria-label={link.name} href={link.path} className='text-white text-opacity-70 text-base leading-150 font-poppins'>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex flex-col'>
                                <p className='mb-5 text-white font-poppins text-lg leading-150'>Policy</p>
                                <ul className='flex flex-col gap-5'>
                                    {POLICY_LINK.map((link: LinkItem, index: number) => (
                                        <li className='mb-2' key={index}>
                                            <Link rel="noopener noreferrer" aria-label={link.name} href={link.path} className='text-white text-opacity-70 text-base leading-150 font-poppins'>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex flex-col '>
                                <p className='mb-5 text-lg text-white font-poppins leading-150'>Follow us on</p>
                                <div className="flex items-center gap-3">
                                    {SOCIAL_ICONS.map((social: SocialIcon, index: number) => (
                                        <Link aria-label='social-link' key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                                            <div className='bg-white size-8 rounded-full flex justify-center items-center border border-solid border-dark-blue'>
                                                <social.icon />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-footer-line opacity-10'></div>
            <p className='text-white text-center font-poppins text-base leading-150 text-opacity-70 pt-5 pb-4'>© {currentYear} Hyperleen, All Rights reserved.</p>
        </div>
    );
}

export default Footer;
