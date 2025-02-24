"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import image1 from "./image/image4.png";
import image2 from "./image/image5.png";
import image3 from "./image/image6.jpg";
import image4 from "./image/image7.png";

const HeroArea = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        // Hero section fade-in
        gsap.from(heroRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        });

        // Text animation
        gsap.from(textRef.current, {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
        });

        // Button animation
        gsap.from(buttonRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: 0.6,
            ease: "power3.out",
        });

        // Swiper animation
        gsap.from(swiperRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.9,
            ease: "power3.out",
        });

    }, []);

    return (
        <div ref={heroRef} className="relative">
            <div className="container px-[24px] sm:px-[0] mx-auto mt-[66px] sm:mt-[88px] md:mt-[114px] lg:mt-[150px] xl:mt-[210px] 2xl:mt-[276px]">
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
                    <div ref={swiperRef} className="relative mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]">
                        <div className="custom-box overflow-hidden hidden xl:block"></div>
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
                            className="mySwiper w-full fill-white"
                        >
                            <SwiperSlide><Image className="w-full rounded-[15px]" src={image1} alt="image is loading...." /></SwiperSlide>
                            <SwiperSlide><Image className="w-full rounded-[15px]" src={image2} alt="image is loading...." /></SwiperSlide>
                            <SwiperSlide><Image className="w-full rounded-[15px]" src={image3} alt="image is loading...." /></SwiperSlide>
                            <SwiperSlide><Image className="w-full rounded-[15px]" src={image4} alt="image is loading...." /></SwiperSlide>
                            <SwiperSlide><Image className="w-full rounded-[15px]" src={image1} alt="image is loading...." /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;
