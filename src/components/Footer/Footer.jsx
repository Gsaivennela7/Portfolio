import React from 'react';

const Footer = () =>{

    const year = new Date().getFullYear();
        return (<footer className='bg-[#12141e] pt-12'>
            <div className='container'>
                <div className='sm:flex items-center justify-between md:gap-8'>
                    <div className='w-full sm:w-1/2'>
                        <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
                            Do you want to make Projects?
                        </h2>
                        <button className='bg-primaryColor text-white font-[500] py-2 px-4 rounded-[8px] 
                        hover:'>
                            <a className='flex' href="#contact"><i className='ri-mail-line'>
                              Hire Me   </i></a>
                        </button>
                    </div>


                    <div className='w-full sm:w-1/2'>
                        <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
                            I am constantly improving myself. 
                            I will ensure to give the quality work.
                        </p>

                        <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
                            <span className='text-gray-300 font-[600] text-[15px]'>
                                Follow Me:
                            </span>

                            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer
                            text-center'>
                                <a href="https://www.youtube.com/channel/UC4VQETdGw7obCKEzS1UZfaw" className='text-white text-[18px] font-[600]'>
                                    <i class="ri-youtube-line"></i>
                                </a>

                            </span>
                            <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer
                            text-center">
                                <a href="https://github.com/Gsaivennela7" className="text-white text-[18px] font-[600]">
                                    <i class="ri-github-fill"></i>
                                </a>
                            </span>
                            <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer
                            text-center">
                                <a href="https://www.linkedin.com/in/gsaivennela7" className="text-white text-[18px] font-[600]">
                                    <i class="ri-linkedin-box-fill"></i>
                                </a>
                            </span>

                        </div>
                    </div>

                </div>
            </div>
            <div className='h-[50px] bg-black'>
                <p className='text-white text-[14px] mt-[20px] pl-[40%]'>
                    Copyright {year} @ Developed by sai vennela garikapati
                </p>
                <p className='text-white text-[14px] pl-[48%]'>
                All rights reserved
                </p>
            </div>
           
        </footer>
        );
}

export default Footer;