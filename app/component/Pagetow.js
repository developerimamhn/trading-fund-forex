import React, { useState,useEffect } from "react"; 
import Image from 'next/image';
import image8 from './image/image8.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Pagetow = () => {
    const [active, setActive] = useState("$10K");
   

  const handleClick = (value) => {
    setActive(value);
  };

  const buttonStyles = (value) =>
    `buttonchallentesectiontoin ${
      active === value ? "bg-[#283555]" : "bg-[#ffffff0a]"
    }`;


    const [activetow, setActivetow] = useState("2 Step");
   

    const handleClicktwo = (value) => {
        setActivetow(value);
      };
      

      const buttonStylestwo = (value) =>
        `setp2section ${
          activetow === value ? "bg-custom-gradient" : "bg-[#ffffff0a]"
        }`;


        useEffect(() => {
            gsap.from(".section2", {
              opacity: 0,
              y: 250,
              duration: 2,
              scrollTrigger: {
                trigger: ".section2",
                start: "top 80%",
                end: "top 50%",
                scrub: 2,
              },
            });
          }, []);
      


    return (
        <div className='backgroundimage section2' id="About">
            <div className='container px-[24px] sm:px-[0] mx-auto py-[40px] sm:py-[48px] md:py-[64px] lg:py-[96px] xl:py-[128px] 2xl:py-[164px]'>
                <div className='startchallenge text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] text-center'>Start Your Challenge</div>
                <h2 className='pickandcounsize text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[25px]'>Pick an Account Size</h2>
                <p className='yourhavefoive text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>You have five accounts to choose from. All following the same percentage <br className='sm:block hidden'/> based profit target and drawdown rules.</p>
                <p className='noteallpymensection text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] text-center'><span className='!text-[#EBE3F9]'>Note: </span> All payments are a one-time fee.</p>
                <div className='pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[96px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>
                    <div className='flex justify-between gap-[30px] px-[24px] sm:px-0'>
                    <div className="flex justify-start flex-wrap items-center gap-[6px] xl:gap-[8px]">
                    {["$10K", "$25K", "$50K", "$100K", "$200K"].map((amount) => (
                        <button key={amount} className={buttonStyles(amount)} onClick={() => handleClick(amount)}>
                        {amount}
                        </button>
                    ))}
                    </div>
                    <div className="flex justify-start flex-wrap items-center gap-[6px] xl:gap-[8px]">
                    {["2 Step", "1 Step"].map((amount) => (
                        <button key={amount} className={buttonStylestwo(amount)} onClick={() => handleClicktwo(amount)}>
                        {amount}
                        </button>
                    ))}
                    </div>
                    </div>
                </div>
                <div className='poisizingsection px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[30px] py-[14px] sm:py-[15px] md:py-[16px] lg:py-[20px] xl:py-[24px] 2xl:py-[32px]'>
                    <div className='grid grid-cols-2 md:grid-cols-10 items-center justify-center gap-y-[17px] md:gap-y-auto md:gap-[32px] lg:gap-[36px] xl:gap-[40px] 2xl:gap-[48px]'>
                        <div className='col-span-4 !rounded-[12px] poisizingsection px-[4px] md:px-[5px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px]'>
                            <div className='tradingsectionheader '>
                                <div className='pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[30px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px]'>
                                    <div className='flex items-center gap-[8px] md:gap-[12px] xl:gap-[16px]'>
                                        <div>
                                            <Image className='w-[28px] sm:w-[35px] xl:w-[48px]' src={image8} alt=''/>
                                        </div> 
                                        <div>
                                            <h2 className='tenktaka text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px]'>$10K</h2>
                                            <p className='youhavfive text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>You have five accounts to choose from.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className='mx-[14px] sm:mx-[15px] md:mx-[16px] lg:mx-[20px] xl:mx-[24px] 2xl:mx-[32px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px]'>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion'>Trading Period</li>
                                <p className='lineone'></p>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion'>Minimum Trading Days</li>
                                <p className='lineone'></p>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion'>Max Daily Loss</li>
                                <p className='lineone'></p>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion'>Max Total Profit</li>
                                <p className='lineone'></p>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion'>Profit Target</li>
                                <p className='lineone'></p>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion'>Profit Split</li>
                                <p className='lineone'></p>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion'>Leverage</li>
                                <p className='lineone'></p>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion'>Challenge Fee</li>
                            </ul>
                        </div>
                        <div className='col-span-6'>
                            <div className='grid grid-cols-3 gap-[15px] sm:gap-[13px] xl:gap-[17px]'>
                                <div className='!rounded-[12px] poisizingsection px-[4px] md:px-[5px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px]'>
                                <div className='tradingsectionheader '>
                                <div className='pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[30px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px]'>
                                    <div>
                                        <h2 className='tenktaka text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-center'>Phase 1</h2>
                                        <p className='youhavfive text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-center'>Challenge</p>
                                    </div>
                                </div>
                            </div>
                            <ul className='mx-[14px] sm:mx-[15px] md:mx-[16px] lg:mx-[20px] xl:mx-[24px] 2xl:mx-[32px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] flex flex-col justify-center items-center'>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>Unlimited</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>4 Days</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>4%</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>8%</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>8%</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>x</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>1:50</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] !font-[700] '>$99<del className='text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[14px]'>$110</del></li>
                            </ul>
                                </div>
                                <div className='!rounded-[12px] poisizingsection px-[4px] md:px-[5px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] backgroundphase'>
                                <div className='tradingsectionheader '>
                                <div className='pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[30px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px]'>
                                    <div>
                                        <h2 className='tenktaka text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-center'>Phase 2</h2>
                                        <p className='youhavfive text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-center'>Verification</p>
                                    </div>
                                </div>
                            </div>
                            <ul className='mx-[14px] sm:mx-[15px] md:mx-[16px] lg:mx-[20px] xl:mx-[24px] 2xl:mx-[32px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] flex flex-col justify-center items-center'>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>Unlimited</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>4 Days</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>4%</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>8%</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>5%</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>x</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>1:50</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] !font-[700] '>Free</li>
                            </ul>
                                </div>
                                <div className='!rounded-[12px] poisizingsection px-[4px] md:px-[5px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px]'>
                                <div className='tradingsectionheader '>
                                <div className='pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[30px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px]'>
                                    <div>
                                        <h2 className='tenktaka text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-center'>Phase 3</h2>
                                        <p className='youhavfive text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-center'>Challenge</p>
                                    </div>
                                </div>
                            </div>
                            <ul className='mx-[14px] sm:mx-[15px] md:mx-[16px] lg:mx-[20px] xl:mx-[24px] 2xl:mx-[32px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] flex flex-col justify-center items-center'>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>Unlimited</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>4 Days</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>4%</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>8%</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>x</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>100%</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>1:50</li>
                                <li className='py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px] tradinperesion text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] !font-[700] '>Refund</li>
                            </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagetow;