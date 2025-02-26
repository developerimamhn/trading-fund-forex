"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import image1 from "./image4.png";
import image2 from "./image5.png";
import image3 from "./image6.jpg";
import image4 from "./image7.png";

const images = [
    { src: image1, caption: "Image 1" },
    { src: image2, caption: "Image 2" },
    { src: image1, caption: "Image 3" },
    { src: image4, caption: "Image 4" },
    { src: image1, caption: "Image 1" },
    { src: image2, caption: "Image 2" },
    { src: image1, caption: "Image 3" },
    { src: image4, caption: "Image 4" },
    { src: image1, caption: "Image 1" },
    { src: image2, caption: "Image 2" },
    { src: image1, caption: "Image 3" },
    { src: image4, caption: "Image 4" },
  ];




const HeroArea = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        gsap.from(heroRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        });

        gsap.from(textRef.current, {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
        });

        gsap.from(buttonRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: 0.6,
            ease: "power3.out",
        });

        gsap.from(swiperRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.9,
            ease: "power3.out",
        });

    }, []);


    useEffect(() => {
        setTimeout(() => {
          document.querySelectorAll(".swiper-slide-shadow").forEach(el => el.remove());
        },);
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


    return (
        <div ref={heroRef} className="relative">
            <div className="container overflow-hidden px-[24px] sm:px-[0] mx-auto mt-[66px] sm:mt-[88px] md:mt-[114px] lg:mt-[150px] xl:mt-[210px] 2xl:mt-[276px]">
                <div ref={textRef}>
                    <span className="cheers">Cheers to a profitable 2025! </span><span>🚀</span>
                    <h2 className="forexstockas mt-[8px] md:mt-[12px] xl:mt-[16px]">
                        We Fund Forex,<br />Stocks & Crypto Traders
                    </h2>
                    <p className="keepitsimple mt-[16px] md:mt-[20px] xl:mt-[25px]">
                        We keep it simple. access up to $200,000 in trading capital on <br className="sm:block hidden" /> a funded account and keep 100% of your earnings.
                    </p>
                    <button
                        ref={buttonRef}
                        className="roundeikngbtn mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px] rounded-[4px] md:rounded-[6px] xl:rounded-[8px]"
                    >
                        <p className="roundiingp spx-[18px] px-[25px] xl:px-[32px] py-[12px] md:py-[16px] xl:py-[20px] rounded-[4px] xl:rounded-[6px]">
                            Get Funded
                        </p>
                    </button>
                </div>
                <div className="mt-[36px] sm:mt-[40px] md:mt-[48px] lg:mt-[64px] xl:mt-[100px] 2xl:mt-[136px]">
                    <p className="recentverified text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                        Recent Verified Payouts 💰
                    </p>
                    <div ref={swiperRef} className="relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px]  2xl:mt-[24px]">
                        <div className="custom-box overflow-hidden hidden 2xl:block"></div>
                        <div className='2xl:hidden block'>
                        <Swiper
                            breakpoints={{
                                640: { slidesPerView: 1, spaceBetween: 10 },
                                768: { slidesPerView: 2, spaceBetween: 15 },
                                1024: { slidesPerView: 3, spaceBetween: 20 },
                                1280: { slidesPerView: 4.2, spaceBetween: 24 },
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            loop={true}
                            className="mySwiper w-full fill-white "
                        >
                            <SwiperSlide><Image className="w-full rounded-[15px]" src={image1} alt="image is loading...." /></SwiperSlide>
                            <SwiperSlide><Image className="w-full rounded-[15px]" src={image2} alt="image is loading...." /></SwiperSlide>
                            <SwiperSlide><Image className="w-full rounded-[15px]" src={image3} alt="image is loading...." /></SwiperSlide>
                            <SwiperSlide><Image className="w-full rounded-[15px]" src={image4} alt="image is loading...." /></SwiperSlide>
                            <SwiperSlide><Image className="w-full rounded-[15px]" src={image1} alt="image is loading...." /></SwiperSlide>
                        </Swiper>
                        </div>
                        <div className="scroll-container 2xl:block hidden">
                        <div className="scroll-content">
                            {[...images, ...images].map((image, index) => (
                            <div key={index} className="flex flex-col items-center w-[295px]">
                                <Image src={image.src} alt={image.caption} />
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;
