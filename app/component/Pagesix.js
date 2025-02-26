import React,{useEffect} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Pagesix = () => {

    useEffect(() => {
        gsap.from(".section5", {
          opacity: 0,
          y: 250,
          duration: 2,
          scrollTrigger: {
            trigger: ".section5",
            start: "top 80%",
            end: "top 50%",
            scrub: 2,
          },
        });
      }, []);

    return (
        <div className='relative section5' id="About">
            <div className='custombackgroundiamge absolute bottom-0 left-0 w-full h-2/6 -z-[1]'></div>
            <div className='container mx-auto py-[40px] sm:py-[48px] md:py-[64px] lg:py-[96px] xl:py-[128px] 2xl:py-[164px] px-[24px] sm:px-[0] '>
            <div className='flex justify-between items-center sm:flex-row flex-col gap-[35px] sm:gap-[50px] md:gap-[60px] lg:gap-[80px] xl:gap-[100px] 2xl:gap-[122px]'>
                <div className='flex-1'>
                    <div className='startchallenge text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-start'>About Us</div>
                    <h2 className='pickandcounsize text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[25px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px] !text-start'>We provide traders with funded accounts.</h2>
                    <p className='yourhavefoive text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-start'>At one stop prop, our mission is to provide skilled traders like you funding for all assets. every trader dreams of financial freedom and mastery. at OSP, we help make that dream a reality.</p>
                    <div className='flex justify-center items-center pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[84px]'>
                        <span className='numberstyling text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] pr-[11px] sm:pr-[12px] md:pr-[13px] lg:pr-[14px] xl:pr-[15px] 2xl:pr-[16px]'>01</span>
                        <div className='linethree'><div className='lenefive'></div></div>
                        <span className='numberstyling text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] pl-[11px] sm:pl-[12px] md:pl-[13px] lg:pl-[14px] xl:pl-[15px] 2xl:pl-[16px]'>04</span>
                    </div>
                </div>
                <div className='flex-1 ourskliling pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[40px]'>
                    <div className=' px-[11px] sm:px-[12px] md:px-[13px] lg:px-[14px] xl:px-[15px] 2xl:px-[16px] w-full'>
                        <svg className='w-full' viewBox="0 0 602 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="16" width="602" height="297" rx="12" fill="url(#paint0_linear_882_252)"/>
                        <rect x="21" y="32" width="80" height="80" rx="12" fill="url(#paint1_linear_882_252)"/>
                        <rect x="117" y="32" width="80" height="80" rx="12" fill="url(#paint2_linear_882_252)"/>
                        <rect x="213" y="32" width="80" height="80" rx="12" fill="url(#paint3_linear_882_252)"/>
                        <rect x="309" y="32" width="80" height="80" rx="12" fill="url(#paint4_linear_882_252)"/>
                        <rect x="405" y="32" width="80" height="80" rx="12" fill="url(#paint5_linear_882_252)"/>
                        <rect x="501" y="32" width="80" height="80" rx="12" fill="url(#paint6_linear_882_252)"/>
                        <rect x="21" y="128" width="80" height="80" rx="12" fill="url(#paint7_linear_882_252)"/>
                        <rect x="117" y="128" width="80" height="80" rx="12" fill="url(#paint8_linear_882_252)"/>
                        <rect x="213" y="128" width="80" height="80" rx="12" fill="url(#paint9_linear_882_252)"/>
                        <rect x="309" y="128" width="80" height="80" rx="12" fill="url(#paint10_linear_882_252)"/>
                        <rect x="405" y="128" width="80" height="80" rx="12" fill="url(#paint11_linear_882_252)"/>
                        <rect x="501" y="128" width="80" height="80" rx="12" fill="url(#paint12_linear_882_252)"/>
                        <rect x="21" y="224" width="80" height="80" rx="12" fill="url(#paint13_linear_882_252)"/>
                        <rect x="117" y="224" width="80" height="80" rx="12" fill="url(#paint14_linear_882_252)"/>
                        <rect x="213" y="224" width="80" height="80" rx="12" fill="url(#paint15_linear_882_252)"/>
                        <rect x="309" y="224" width="80" height="80" rx="12" fill="url(#paint16_linear_882_252)"/>
                        <rect x="405" y="224" width="80" height="80" rx="12" fill="url(#paint17_linear_882_252)"/>
                        <rect x="501" y="224" width="80" height="80" rx="12" fill="url(#paint18_linear_882_252)"/>
                        <rect y="16" width="602" height="297" rx="12" fill="url(#paint19_radial_882_252)"/>
                        <g filter="url(#filter0_f_882_252)">
                        <rect x="253" y="120" width="96" height="96" rx="12" fill="url(#paint20_linear_882_252)"/>
                        </g>
                        <rect x="254" y="121" width="94" height="94" rx="11" fill="url(#paint21_linear_882_252)" fill-opacity="0.7" stroke="url(#paint22_linear_882_252)" stroke-width="2"/>
                        <path d="M297.014 179.333L290.32 172.653" stroke="#FEFFFF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M297.014 156.667V179.333" stroke="#FEFFFF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M304.986 156.667L311.68 163.347" stroke="#FEFFFF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M304.986 179.333V156.667" stroke="#FEFFFF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <filter id="filter0_f_882_252" x="129" y="-4" width="344" height="344" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="62" result="effect1_foregroundBlur_882_252"/>
                        </filter>
                        <linearGradient id="paint0_linear_882_252" x1="301" y1="16" x2="301" y2="313" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#081127"/>
                        <stop offset="1" stop-color="#050C1D"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_882_252" x1="61" y1="32" x2="61" y2="112" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_882_252" x1="157" y1="32" x2="157" y2="112" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_882_252" x1="253" y1="32" x2="253" y2="112" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_882_252" x1="349" y1="32" x2="349" y2="112" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_882_252" x1="445" y1="32" x2="445" y2="112" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_882_252" x1="541" y1="32" x2="541" y2="112" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear_882_252" x1="61" y1="128" x2="61" y2="208" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint8_linear_882_252" x1="157" y1="128" x2="157" y2="208" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint9_linear_882_252" x1="253" y1="128" x2="253" y2="208" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint10_linear_882_252" x1="349" y1="128" x2="349" y2="208" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint11_linear_882_252" x1="445" y1="128" x2="445" y2="208" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint12_linear_882_252" x1="541" y1="128" x2="541" y2="208" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint13_linear_882_252" x1="61" y1="224" x2="61" y2="304" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint14_linear_882_252" x1="157" y1="224" x2="157" y2="304" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint15_linear_882_252" x1="253" y1="224" x2="253" y2="304" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint16_linear_882_252" x1="349" y1="224" x2="349" y2="304" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint17_linear_882_252" x1="445" y1="224" x2="445" y2="304" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint18_linear_882_252" x1="541" y1="224" x2="541" y2="304" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <radialGradient id="paint19_radial_882_252" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 164.5) rotate(90) scale(153 310.121)">
                        <stop stop-color="#081127" stop-opacity="0"/>
                        <stop offset="1" stop-color="#050C1D"/>
                        </radialGradient>
                        <linearGradient id="paint20_linear_882_252" x1="253" y1="120" x2="358.958" y2="132.661" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#AB8EF8"/>
                        <stop offset="0.5" stop-color="#3942FF"/>
                        <stop offset="1" stop-color="#3C7DDE"/>
                        </linearGradient>
                        <linearGradient id="paint21_linear_882_252" x1="301" y1="120" x2="301" y2="216" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0A183A"/>
                        <stop offset="1" stop-color="#060F25"/>
                        </linearGradient>
                        <linearGradient id="paint22_linear_882_252" x1="253" y1="120" x2="358.958" y2="132.661" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#AB8EF8"/>
                        <stop offset="0.5" stop-color="#3942FF"/>
                        <stop offset="1" stop-color="#3C7DDE"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </div>
                    <div className='px-[20px] sm:px-[24px] md:px-[32px] lg:px-[36px] xl:px-[40px] 2xl:px-[48px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>
                        <h3 className='yourskillsupport text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Your Skills, Our Support</h3>
                        <p className='tradingpaddingsdisf text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Your trading skill deserves to be rewarded, not hindered. our simple process identifies top talent, so you can focus on what you do best- trading profitably. together we can do anything, for us the sky is the limit.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagesix;