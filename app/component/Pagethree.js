import React,{useEffect} from 'react';
import Image from 'next/image';
import image9 from './image/image9.png';
import image10 from './image/image10.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Pagethree = () => {
    useEffect(() => {
        gsap.from(".section3", {
          opacity: 0,
          y: 250,
          duration: 2,
          scrollTrigger: {
            trigger: ".section3",
            start: "top 80%",
            end: "top 50%",
            scrub: 2,
          },
        });
      }, []);

    return (
        <div className='trasingviewsectionbackground relative overflow-hidden py-[40px] sm:py-[48px] md:py-[64px] lg:py-[96px] xl:py-[128px] 2xl:py-[164px] ' id="Competitions">
            <Image className='w-full absolute top-0 left-0 h-auto object-cover -z-[1]' src={image9} alt='Loading...'/>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-[25px] xl:gap-[32px] px-[24px] sm:px-[0] container mx-auto px-[24px] sm:px-[32px] md:px-[36px] lg:px-[40px] xl:px-[48px] 2xl:px-[64px] section3'>
                <div className='flex-1 selectaround'>
                    <div className='relative p-[11px] sm:p-[12px] md:p-[13px] lg:p-[14px] xl:p-[15px] 2xl:p-[16px]'>
                       <Image className='w-full object-cover' src={image10} alt='Loading...'/>
                    </div>
                    <div className='px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[40px]'>
                        <h4 className='tradingviewsection text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Trading View</h4>
                        <p className='tradingdow text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>We're thrilled to offer you enhanced charting capabilities powered by trading view. with their powerful tools integrated into our site, you can analyze markets, spot trends, and make informed decisions with ease.</p>
                    </div>
                </div>
                <div className='flex-1 selectaround '>
                    <div className='relative p-[11px] sm:p-[12px] md:p-[13px] lg:p-[14px] xl:p-[15px] 2xl:p-[16px]'>
                        <Image className='w-full object-cover' src={image10} alt='Loading...'/>
                        <span className='absolute top-[24px] sm:top-[30px] xl:top-[40px] left-[24px] sm:left-[30px] xl:left-[40px] platformbuides text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Platform Guides</span>
                    </div>
                    <div className='px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[40px]'>
                        <h4 className='tradingviewsection text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Match Trader</h4>
                        <p className='tradingdow text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Elevate your trading with match trader, our executing brokerage that offers effortless trading at your fingertips. Enjoy lightning-fast order execution while giving you access to a wide range of markets.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagethree;