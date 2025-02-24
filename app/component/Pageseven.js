import React,{useEffect} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Pageseven = () => {

    useEffect(() => {
        gsap.from(".section6", {
          opacity: 0,
          y: 250,
          duration: 2,
          scrollTrigger: {
            trigger: ".section6",
            start: "top 80%",
            end: "top 50%",
            scrub: 2,
          },
        });
      }, []);

    return (
        <div className=''>
            <div className='container px-[32px] sm:px-[36px] md:px-[40px] lg:px-[48px] xl:px-[64px] 2xl:px-[96px] mx-auto py-[40px] sm:py-[48px] md:py-[64px] lg:py-[96px] xl:py-[128px] 2xl:py-[164px] px-[24px] sm:px-[0]' id="FAQ">
                <div className='section6 startchallenge text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] text-center'>FAQ's FOR OUR SERVICES</div>
                <h2 className='section6 pickandcounsize text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[25px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px] text-center'>Frequently Asked <br/> Quetions</h2>
                <div className='md:flex-row flex-col flex justify-center items-center gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[48px] xl:mt-[64px] 2xl:mt-[84px]'>
                    <div className='flex flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] flex-1'>
                        <div className='section6 gridingss p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[28px]'>
                            <h3 className='areesatrading text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Are EAs & Trade Copiers allowed?</h3>
                            <svg className='w-[16px] sm:w-[20px] md:w-[24px] lg:w-[32px] xl:w-[36px] 2xl:w-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.06"/>
                            <path d="M14 20H26" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 26V14" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='section6 gridingss p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[28px]'>
                            <h3 className='areesatrading text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Are EAs & Trade Copiers allowed?</h3>
                            <svg className='w-[16px] sm:w-[20px] md:w-[24px] lg:w-[32px] xl:w-[36px] 2xl:w-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.06"/>
                            <path d="M14 20H26" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 26V14" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='section6 gridingss p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[28px]'>
                            <h3 className='areesatrading text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Are EAs & Trade Copiers allowed?</h3>
                            <svg className='w-[16px] sm:w-[20px] md:w-[24px] lg:w-[32px] xl:w-[36px] 2xl:w-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.06"/>
                            <path d="M14 20H26" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 26V14" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='section6 gridingss p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[28px]'>
                            <h3 className='areesatrading text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Are EAs & Trade Copiers allowed?</h3>
                            <svg className='w-[16px] sm:w-[20px] md:w-[24px] lg:w-[32px] xl:w-[36px] 2xl:w-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.06"/>
                            <path d="M14 20H26" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 26V14" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className='flex-1'>
                    <div className='flex flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] flex-1'>
                        <div className='section6 gridingss p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[28px]'>
                            <h3 className='areesatrading text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Are EAs & Trade Copiers allowed?</h3>
                            <svg className='w-[16px] sm:w-[20px] md:w-[24px] lg:w-[32px] xl:w-[36px] 2xl:w-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.06"/>
                            <path d="M14 20H26" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 26V14" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='section6 gridingss p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[28px]'>
                            <h3 className='areesatrading text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Are EAs & Trade Copiers allowed?</h3>
                            <svg className='w-[16px] sm:w-[20px] md:w-[24px] lg:w-[32px] xl:w-[36px] 2xl:w-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.06"/>
                            <path d="M14 20H26" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 26V14" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='section6 gridingss p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[28px]'>
                            <h3 className='areesatrading text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Are EAs & Trade Copiers allowed?</h3>
                            <svg className='w-[16px] sm:w-[20px] md:w-[24px] lg:w-[32px] xl:w-[36px] 2xl:w-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.06"/>
                            <path d="M14 20H26" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 26V14" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='section6 gridingss p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[28px]'>
                            <h3 className='areesatrading text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Are EAs & Trade Copiers allowed?</h3>
                            <svg className='w-[16px] sm:w-[20px] md:w-[24px] lg:w-[32px] xl:w-[36px] 2xl:w-[40px]' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.06"/>
                            <path d="M14 20H26" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 26V14" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Pageseven;