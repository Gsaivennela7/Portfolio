import React from 'react'
import backendImg from '../../assets/images/backend.png'
const experience = () => {

    return (

        <section id="experience">
            <div className='container lg:pt-5'>
             <div className='text-center'>
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
                    My Experience 
                </h2>
                <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                    I have 3 years of experience in Telecom domain and have Java and Spring Boot framework knowledge.
                </p>
             </div>

            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                        <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 
                        transform-translate-x-1/2'>
                        
                        </div>
                        {/* start left card */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                      <div data-aos = "fade-right" data-aos-duration = '1200'  className='bg-white p-4 
                                      rounded shadow group hover:bg-primaryColor
                                      cursor-pointer ease-in duration-150'  >
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                         group-hover:font[500]'> Proximus</h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white 
                                        group-hover:font-[500] leading-7'>
                                        Analyzed the legacy system and developed an efficient application for order processing, 
                                        using the Spring Batch framework, which reduced the processing time by 50%.
                                        </p>                        
                                      </div>
                                    </div>
                                </div>


                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10
                                     absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                                    justify-center'>
                                        <figure>
                                            <img src={backendImg} alt=""/>
                                        </figure>
                                    </div>


                            </div>

                        </div>

                        </div>
                        {/* start right card */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                      <div data-aos = "fade-left" data-aos-duration = '1200'  className='bg-white p-4 
                                      rounded shadow group hover:bg-primaryColor
                                      cursor-pointer ease-in duration-150'  >
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                         group-hover:font[500]'> TCS </h3>
                                        <p className='text-[15px] text-smallTextColor group-hover:text-white 
                                        group-hover:font-[500] leading-7'>
                                               Actively involved in the design and development of the dashboard, 
                                               which helped in optimizing the efficiency and planning of the team by more than 15%.
                                        </p>
                                      
                                      </div>
                                    </div>
                                </div>


                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10
                                     absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                                    justify-center'>
                                        <figure>
                                            <img src={backendImg} alt=""/>
                                        </figure>
                                    </div>


                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>


        
        </section>

    )

}

export default experience;