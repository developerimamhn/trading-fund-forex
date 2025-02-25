import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards,Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import Image from 'next/image';
import image11 from './image11.png';
import image12 from "./image12.png";
import image13 from "./image13.png";
import image14 from "./image14.png";
import image15 from "./image15.png";
import image16 from "./image16.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const images = [
    { src: image11, caption: "Image 11" },
    { src: image12, caption: "Image 12" },
    { src: image13, caption: "Image 13" },
    { src: image14, caption: "Image 14" },
    { src: image15, caption: "Image 15" },
    { src: image16, caption: "Image 16" },
    { src: image11, caption: "Image 11" },
    { src: image12, caption: "Image 12" },
    { src: image13, caption: "Image 13" },
    { src: image14, caption: "Image 14" },
    { src: image15, caption: "Image 15" },
    { src: image16, caption: "Image 16" },
    { src: image11, caption: "Image 11" },
    { src: image12, caption: "Image 12" },
    { src: image13, caption: "Image 13" },
    { src: image14, caption: "Image 14" },
    { src: image15, caption: "Image 15" },
    { src: image16, caption: "Image 16" },
    { src: image11, caption: "Image 11" },
    { src: image12, caption: "Image 12" },
    { src: image13, caption: "Image 13" },
    { src: image14, caption: "Image 14" },
    { src: image15, caption: "Image 15" },
    { src: image16, caption: "Image 16" },
  ];

const Pagefive = () => {
    useEffect(() => {
        setTimeout(() => {
          document.querySelectorAll(".swiper-slide-shadow").forEach(el => el.remove());
        }, 100); // Adjust the delay if necessary
      }, []);

      const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;

    const startScrolling = () => {
      if (slider) {
        slider.style.animation = "scroll 20s linear infinite";
      }
    };

    startScrolling();

    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    gsap.from(".section4", {
      opacity: 0,
      y: 250,
      duration: 2,
      scrollTrigger: {
        trigger: ".section4",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
      },
    });
  }, []);


    return (
        <div className='relative section4' id="Payouts">
            <div className='custombackgroundiamge absolute bottom-0 left-0 w-full h-2/5'></div>
            <div className='container  px-[24px] sm:px-[0] mx-auto py-[40px] sm:py-[48px] md:py-[64px] lg:py-[96px] xl:py-[128px] 2xl:py-[164px]'>
                <div className=''>
                    <div className='startchallenge text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] text-center'>Testimonial</div>
                    <h2 className='pickandcounsize text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[25px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]'>Pick an Account Size</h2>
                    <p className='yourhavefoive text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Traders all over the world love our funded accounts, see for <br className='sm:block hidden'/> yourself before becoming a funded trader.</p>
                </div>
                <div className='overflow-hidden relative px-[24px] sm:px-[0] pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[57px]'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div ref={sliderRef} className="flex animate-scroll items-center gap-[20px] lg:gap-[30px] 2xl:gap-[40px]">
                        {images.map((image, index) => (
                        <div key={index} className="flex flex-col items-center feature w-[150px] ">
                            <Image
                                src={image.src}
                                alt={image.caption}
                                className=""
                                
                            />
                            </div>
                        ))}
                        </div>
                    </div>
                    <style jsx>{`
                        @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                        }
                        .animate-scroll {
                        display: flex;
                        min-width: max-content;
                        animation: scroll 65s linear infinite;
                        }
                    `}</style>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    speed= '1000'
                    // autoplay={{
                    //     delay: 3500,
                    //     disableOnInteraction: false,
                    //   }}
                    pagination={{
                        el: ".custom-pagination",
                        clickable: true,
                        renderBullet: (index, className) => {
                          return `<span class="${className} custom-bullet"></span>`;
                        },
                      }}
                      
                      
                    modules={[EffectCards,Autoplay,Pagination]}
                    className=" mySwiper sm:left-[18%] md:left-[28%]" 
                >
                    <SwiperSlide className='flex justify-center items-center custom-slide'>
                    <div className='backgroundilingsing bg-[#] p-[16px] sm:p-[20px] md:p-[24px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px] inline-flex justify-start items-start flex-col '>
                        <svg className='w-[35px] sm:w-[50px] xl:w-[69px]' viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1204 7.33105H8.31554C3.72322 7.33105 0 11.0543 0 15.6466V24.4514C0 29.0437 3.72322 32.7669 8.31554 32.7669H9.1866C9.91695 32.7669 10.6011 33.1273 11.0154 33.7304C11.4278 34.3336 11.5184 35.1015 11.2544 35.7829L6.28811 48.6528C6.02411 49.335 6.11468 50.1029 6.5271 50.7052C6.94137 51.3083 7.62552 51.6688 8.35588 51.6688H14.2026C15.0274 51.6688 15.7848 51.21 16.1663 50.4798L23.2253 36.9939C24.6782 34.2179 25.4375 31.1306 25.4375 27.9973V15.6465C25.4378 11.0543 21.7127 7.33105 17.1204 7.33105Z" fill="url(#paint0_linear_564_2677)"/>
                        <path d="M50.6846 7.33105H41.8795C37.2872 7.33105 33.5642 11.0543 33.5642 15.6466V24.4514C33.5642 29.0437 37.2873 32.7669 41.8795 32.7669H42.7487C43.4791 32.7669 44.1651 33.1273 44.5775 33.7304C44.9919 34.3336 45.0805 35.1015 44.8185 35.7829L39.8504 48.653C39.5864 49.3351 39.6769 50.1031 40.0912 50.7053C40.5036 51.3084 41.1878 51.6689 41.9201 51.6689H47.765C48.5897 51.6689 49.3472 51.2101 49.7307 50.4799L56.7876 36.994C58.2406 34.2179 58.9999 31.1308 58.9999 27.9973V15.6465C58.9999 11.0543 55.2768 7.33105 50.6846 7.33105Z" fill="url(#paint1_linear_564_2677)"/>
                        <defs>
                        <linearGradient id="paint0_linear_564_2677" x1="0" y1="7.33105" x2="28.3438" y2="9.2741" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#AB8EF8"/>
                        <stop offset="0.5" stop-color="#3942FF"/>
                        <stop offset="1" stop-color="#3C7DDE"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_564_2677" x1="33.5642" y1="7.33105" x2="61.906" y2="9.27381" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#AB8EF8"/>
                        <stop offset="0.5" stop-color="#3942FF"/>
                        <stop offset="1" stop-color="#3C7DDE"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        <p className='noteallpymensection text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[10px] sm:pt-[11px] md:pt-[12px] pb-[40px] sm:pb-[48px] md:pb-[64px] lg:pb-[96px] xl:pb-[128px] 2xl:pb-[157px] !text-[#000]'><span className='!text-[#000]'>OneStopProp's 100% profit payout is a game-changer. </span><br/> Other firms take a cut, but here, I keep everything I <br/> earn. It's the best choice for serious traders looking to <br/> maximize their returns.</p>
                        <p className='noteallpymensection text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[10px] sm:pt-[11px] md:pt-[12px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px] !text-[#000]'><span className=''>Jacke L</span></p>
                        <p className='fundertrading text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[40px] !text-[#000]'>Funded Trader</p>
                        <div className='linetwo !bg-white'><div className='lineorderblack'></div></div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center items-center custom-slide'>
                    <div className='traddingaueroad p-[16px] sm:p-[20px] md:p-[24px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px] inline-flex justify-start items-start flex-col'>
                        <svg className='w-[35px] sm:w-[50px] xl:w-[69px]' viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1204 7.33105H8.31554C3.72322 7.33105 0 11.0543 0 15.6466V24.4514C0 29.0437 3.72322 32.7669 8.31554 32.7669H9.1866C9.91695 32.7669 10.6011 33.1273 11.0154 33.7304C11.4278 34.3336 11.5184 35.1015 11.2544 35.7829L6.28811 48.6528C6.02411 49.335 6.11468 50.1029 6.5271 50.7052C6.94137 51.3083 7.62552 51.6688 8.35588 51.6688H14.2026C15.0274 51.6688 15.7848 51.21 16.1663 50.4798L23.2253 36.9939C24.6782 34.2179 25.4375 31.1306 25.4375 27.9973V15.6465C25.4378 11.0543 21.7127 7.33105 17.1204 7.33105Z" fill="url(#paint0_linear_564_2677)"/>
                        <path d="M50.6846 7.33105H41.8795C37.2872 7.33105 33.5642 11.0543 33.5642 15.6466V24.4514C33.5642 29.0437 37.2873 32.7669 41.8795 32.7669H42.7487C43.4791 32.7669 44.1651 33.1273 44.5775 33.7304C44.9919 34.3336 45.0805 35.1015 44.8185 35.7829L39.8504 48.653C39.5864 49.3351 39.6769 50.1031 40.0912 50.7053C40.5036 51.3084 41.1878 51.6689 41.9201 51.6689H47.765C48.5897 51.6689 49.3472 51.2101 49.7307 50.4799L56.7876 36.994C58.2406 34.2179 58.9999 31.1308 58.9999 27.9973V15.6465C58.9999 11.0543 55.2768 7.33105 50.6846 7.33105Z" fill="url(#paint1_linear_564_2677)"/>
                        <defs>
                        <linearGradient id="paint0_linear_564_2677" x1="0" y1="7.33105" x2="28.3438" y2="9.2741" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#AB8EF8"/>
                        <stop offset="0.5" stop-color="#3942FF"/>
                        <stop offset="1" stop-color="#3C7DDE"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_564_2677" x1="33.5642" y1="7.33105" x2="61.906" y2="9.27381" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#AB8EF8"/>
                        <stop offset="0.5" stop-color="#3942FF"/>
                        <stop offset="1" stop-color="#3C7DDE"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        <p className='noteallpymensection text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[10px] sm:pt-[11px] md:pt-[12px] pb-[40px] sm:pb-[48px] md:pb-[64px] lg:pb-[96px] xl:pb-[128px] 2xl:pb-[157px]'><span className='!text-[#EBE3F9]'>OneStopProp's 100% profit payout is a game-changer. </span><br/> Other firms take a cut, but here, I keep everything I <br/> earn. It's the best choice for serious traders looking to <br/> maximize their returns.</p>
                        <p className='noteallpymensection text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[10px] sm:pt-[11px] md:pt-[12px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]'><span className='!text-[#FEFFFF]'>Jacke L</span></p>
                        <p className='fundertrading text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[40px]'>Funded Trader</p>
                        <div className='linetwo'><div className='lineorder'></div></div>
                    </div>
                    </SwiperSlide >
                    
                    <SwiperSlide className='flex justify-center items-center custom-slide'>
                    <div className='traddingaueroad p-[16px] sm:p-[20px] md:p-[24px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px] inline-flex justify-start items-start flex-col'>
                        <svg className='w-[35px] sm:w-[50px] xl:w-[69px]' viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1204 7.33105H8.31554C3.72322 7.33105 0 11.0543 0 15.6466V24.4514C0 29.0437 3.72322 32.7669 8.31554 32.7669H9.1866C9.91695 32.7669 10.6011 33.1273 11.0154 33.7304C11.4278 34.3336 11.5184 35.1015 11.2544 35.7829L6.28811 48.6528C6.02411 49.335 6.11468 50.1029 6.5271 50.7052C6.94137 51.3083 7.62552 51.6688 8.35588 51.6688H14.2026C15.0274 51.6688 15.7848 51.21 16.1663 50.4798L23.2253 36.9939C24.6782 34.2179 25.4375 31.1306 25.4375 27.9973V15.6465C25.4378 11.0543 21.7127 7.33105 17.1204 7.33105Z" fill="url(#paint0_linear_564_2677)"/>
                        <path d="M50.6846 7.33105H41.8795C37.2872 7.33105 33.5642 11.0543 33.5642 15.6466V24.4514C33.5642 29.0437 37.2873 32.7669 41.8795 32.7669H42.7487C43.4791 32.7669 44.1651 33.1273 44.5775 33.7304C44.9919 34.3336 45.0805 35.1015 44.8185 35.7829L39.8504 48.653C39.5864 49.3351 39.6769 50.1031 40.0912 50.7053C40.5036 51.3084 41.1878 51.6689 41.9201 51.6689H47.765C48.5897 51.6689 49.3472 51.2101 49.7307 50.4799L56.7876 36.994C58.2406 34.2179 58.9999 31.1308 58.9999 27.9973V15.6465C58.9999 11.0543 55.2768 7.33105 50.6846 7.33105Z" fill="url(#paint1_linear_564_2677)"/>
                        <defs>
                        <linearGradient id="paint0_linear_564_2677" x1="0" y1="7.33105" x2="28.3438" y2="9.2741" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#AB8EF8"/>
                        <stop offset="0.5" stop-color="#3942FF"/>
                        <stop offset="1" stop-color="#3C7DDE"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_564_2677" x1="33.5642" y1="7.33105" x2="61.906" y2="9.27381" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#AB8EF8"/>
                        <stop offset="0.5" stop-color="#3942FF"/>
                        <stop offset="1" stop-color="#3C7DDE"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        <p className='noteallpymensection text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[10px] sm:pt-[11px] md:pt-[12px] pb-[40px] sm:pb-[48px] md:pb-[64px] lg:pb-[96px] xl:pb-[128px] 2xl:pb-[157px]'><span className='!text-[#EBE3F9]'>OneStopProp's 100% profit payout is a game-changer. </span><br/> Other firms take a cut, but here, I keep everything I <br/> earn. It's the best choice for serious traders looking to <br/> maximize their returns.</p>
                        <p className='noteallpymensection text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[10px] sm:pt-[11px] md:pt-[12px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]'><span className='!text-[#FEFFFF]'>Jacke L</span></p>
                        <p className='fundertrading text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[40px]'>Funded Trader</p>
                        <div className='linetwo'><div className='lineorder'></div></div>
                    </div>
                    </SwiperSlide>
                    
                    </Swiper>
                    <div className="custom-pagination z-10 pt-[25px] sm:pt-[33.77px] gap-[6px] md:gap-[8px]"></div>
                </div>
            </div>
        </div>
    );
};

export default Pagefive;