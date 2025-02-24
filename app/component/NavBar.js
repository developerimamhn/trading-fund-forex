"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);


    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 50,
            behavior: "smooth",
          });
          setToggle(false);
        }
      };

      useEffect(() => {
          const handleScroll = () => {
              if (window.scrollY > 50) {
                  setScrolled(true);
              } else {
                  setScrolled(false);
              }
          };
          window.addEventListener("scroll", handleScroll);
          return () => {
              window.removeEventListener("scroll", handleScroll);
          };
      }, []);
    return (
        <div className={` header ${scrolled ? "scrolled" : ""}  w-full`}>
            
            <header className={` roundermine container mx-auto flex justify-between items-center py-[18px] sm:py-[24px] relative px-[24px] sm:px-0`}>
                <div className='sm:hidden relative top-[-11px]'>
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-[#9C9D9F] text-[25px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-[#9C9D9F] text-[25px] absolute' />
                    </div>
                </div>
                <nav ref={menuRef} className={`flex  justify-center items-center gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px] py-[8px] md:py-[12px] xl:py-[16px]`} >
                    <a className="Link-manu-bar" href="#HowItWorks" onClick={(e) => handleScroll(e, "HowItWorks")}>
                        How it works
                    </a>
                    <a className="Link-manu-bar" href="#About" onClick={(e) => handleScroll(e, "About")}>
                        About
                    </a>
                    <a className="Link-manu-bar" href="#Competitions" onClick={(e) => handleScroll(e, "Competitions")}>
                        Competitions
                    </a>
                    <a className="Link-manu-bar" href="#Payouts" onClick={(e) => handleScroll(e, "Payouts")}>
                        Payouts
                    </a>
                </nav>
                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:right-0 sm:relative duration-1000 z-50 sm:opacity-100 flex justify-between items-start sm:items-center gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px] p-[8px] md:p-[12px] xl:p-[16px] sm:bg-transparent bg-[#000] sm:flex-row flex-col p-[20px] sm:p-[0]
                    ${toggle ? 'right-[10]' :'right-[130%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <a className="Link-manu-bar" href="#Accounts" onClick={(e) => handleScroll(e, "Accounts")}>
                        Accounts
                    </a>
                    <a className="Link-manu-bar" href="#FAQ" onClick={(e) => handleScroll(e, "FAQ")}>
                        FAQ
                    </a>
                    <a className="Link-manu-bar" href="#Contact" onClick={(e) => handleScroll(e, "Contact")}>
                        Contact
                    </a>
                    <button className={`Link-manu-bar-btn`} href="#StartFreeTrial">Start Free Trial</button>
                </nav>
            </header>
            <div className='w-full h-[1px] gradinganiction '></div>
        </div>
    );
};

export default NavBar;