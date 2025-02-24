"use client";

import React from 'react';
import Image from 'next/image';
import imageten from './image/imageten.png';
import Link from 'next/link';


const Footer = () => {
    return (
        <div className='relative backgroundfooter overflow-hidden'>
            <Image className='absolute left-0 bottom-0 w-full -z-[1]' src={imageten} layout="fill" alt='Loading... Background'/>
            <div className='container mx-auto pt-[40px] sm:pt-[48px] md:pt-[64px] lg:pt-[96px] xl:pt-[128px] 2xl:pt-[164px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px] px-[24px] sm:px-[0]'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='startchallenge text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] text-center'>Join community</div>
                    <h2 className='pickandcounsize text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[25px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]'>Join a secret traders <br/> community just like you.</h2>
                    <p className='yourhavefoive text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Join a secret community of like minded traders just like you and get the opportunity <br className='sm:block hidden'/> to discuss and exchange ideas with other funded traders.</p>
                    <button className='footerbtn text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px]'>Join The Community</button>
                </div>
                <div className='flex justify-center gap-[40px] sm:gap-[0] sm:justify-between items-start sm:items-center py-[8px] md:py-[12px] xl:py-[16px] pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[132px]'>
                    <div className='flex sm:flex-row flex-col justify-center sm:items-center gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px] '>
                        <Link className={`Link-manu-bar !text-start !text-[#fff] `} href="#HowItWorks">Contact</Link>
                        <Link className={`Link-manu-bar !text-[#fff]`} href="#About">Platform guide</Link>
                        <Link className='Link-manu-bar !text-[#fff]' href="#Competitions">Payouts</Link>
                        <Link className='Link-manu-bar !text-[#fff]' href="#Payouts">Affiliate</Link>
                        <Link className='Link-manu-bar !text-[#fff]' href="#Payouts">Terms & Conditions</Link>
                        <Link className='Link-manu-bar !text-[#fff]' href="#Payouts">Privacy</Link>
                    </div>
                    <div className='flex sm:flex-row flex-col justify-center sm:items-center gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px] '>
                        <Link className={`Link-manu-bar !text-[#fff]`} href="#HowItWorks">Twitter</Link>
                        <Link className={`Link-manu-bar !text-[#fff]`} href="#About">Facebook</Link>
                        <Link className='Link-manu-bar !text-[#fff]' href="#Competitions">Instagram</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;