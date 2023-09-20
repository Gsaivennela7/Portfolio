import React from 'react';
import profileImg from '../../assets/images/profileImg.jpeg'
import CountUp from 'react-countup';

const Profile = () =>{
    return (
    <div className='container pt-14'>
        <section className='pt-0' id='about'>
        
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                <div className='w-full'>
                <h5 data-aos ="fade-right"
                data-aos-duration = "1500"
                className= "text-headingColor font-[600] text-[16px]">
                    Welcome to my Profile.
                    </h5>
                    <h1 data-aos ="fade-up"
                data-aos-duration = "1500"
                className= "text-headingColor font-[800] text-[16px] sm:text-[40px] leading-[35px]\
                 sm:leading-[46px] mt-5">
                        This is Sai Vennela.<br/>
                        Software Developer.
                    </h1>
                    <div
                    data-aos = "fade-up"
                    data-aos-delay = "200"
                    data-aos-duration = "1800"
                    className='flex items-center gap-6 mt-7'
                    >
                        <button className='bg-primaryColor text-white font-[500] py-2 px-4 rounded-[8px] 
                        hover:'>
                            <a className='flex' href="#contact"><i className='ri-mail-line'>
                              Hire Me   </i></a>
                        </button>
                        <a href= "#portfolio" 
                        className='text-smallTextColor font-[600] text-[16px] border-b border-solid
                        border-smallTextColor'>
                            See Portfolio
                        </a>
                        <p data-aos="fade-left"
                        data-aos-duration="1500" className='flex gap-2 text-headingColor
                        mt-12 font-[15px] leading-7 sm:pl-14 sm:pr:10' >
                        <span>
                            <i class="ri-apps-2-line">
                            </i>
                        </span>
                        I am currently pursuing my MS in 
                            Computer Engineering at SJSU. I am Looking for co-op and full-time 
                            opportunities.
                        </p>
                        </div>
                        <div className='flex items-center gap-9 mt-14'>
                            <span className='text-smallTextColor text-[15px] font-[600]'>
                            Follow Me:
                            </span>

                            <span>
                                <a href="https://www.youtube.com/channel/UC4VQETdGw7obCKEzS1UZfaw" className='text-smallTextColor text-[18px] font-[600]'>
                                    <i class="ri-youtube-line"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://github.com/Gsaivennela7" className='text-smallTextColor text-[18px] font-[600]'>
                                    <i class="ri-github-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://www.linkedin.com/in/gsaivennela7" className='text-smallTextColor text-[18px] font-[600]'>
                                    <i class="ri-linkedin-box-fill"></i>
                                </a>
                            </span>

                            </div>             
                </div>
                <div className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='fex items-center rounded-[25%] justify-center'>
                        <img src={profileImg} className="w-[200px] h-[500px] ml-[20%]" alt=""/>
                    </figure>
                </div>
                {/* profile content right end*/}
                <div className='md:basis-1/5 flex justify-between
                 text-center mt-10 ml-[1%] flex-wrap gap-3 md:mt-0 md:flex-col 
                 md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={3} duartion={2} suffix="+"/>
                        </h2>
                        <h4 className='text-headingColor  font-[600] text-[18px]'>
                        Years of experience
                        </h4>
                        </div>

                        <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={2} duartion={2} suffix="+"/>
                        </h2>
                        <h4 className='text-headingCOlor font-[600] text-[18px]'>
                         Clients
                        </h4>
                        </div>
                 </div>

            </div>
            </section>
        </div>
    );
}

export default Profile;