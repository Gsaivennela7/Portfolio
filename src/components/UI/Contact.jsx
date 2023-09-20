import React,{useState} from "react";
import emailjs from "@emailjs/browser";
import Confirm from "./Confirm"


const Contact = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const sendEmail = async (e) =>{
        e.preventDefault();
        try{
        const res = await  emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target,process.env.REACT_APP_PUBLIC_KEY)
           
            if(res.status === 200){
                setIsModalOpen(true);
            }
        }catch(err){
            console.log(err);
        }

    }

    const closeModal = () => {
        setIsModalOpen(false); 
      };

    return <section id="contact">
        <div className="container">
            <h2 className="text-heading-color font-[700] text-[2.5rem] mb-8">
                Get in touch
            </h2>
            <div className="md:flex justify-between items-center">
                <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                    <iframe  title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812543.0026795781!2d-122.47545816976347!3d37.29522615734906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1694734122874!5m2!1sen!2sus" 
                    width="600" height="450" className="border:0 w-full h-full"
                     allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>


                <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] 
                lg: flex items-center bg-indigo-100 px-4
                lg:px-8 py-8">
                    <form className="w-full" onSubmit={sendEmail}>
                        <div className="mb-5">
                            <input type="text" 
                                name = "from_name"
                                placeholder="Enter your name"
                                className="w-full p-3 focus:outline-none rounded-[5px]"/>          
                        </div>

                        <div className="mb-5">
                            <input type="text" 
                                    name="email_from"
                                placeholder="Enter your email"
                                className="w-full p-3 focus:outline-none rounded-[5px]"/>          
                        </div>

                        <div className="mb-5">
                            <input type="text" 
                                name= "subject"
                                placeholder="Subject"
                                className="w-full p-3 focus:outline-none rounded-[5px]"/>          
                        </div>

                        <div className="mb-5">
                            <input type="text" 
                                   
                                placeholder="Write your message"
                                className="w-full p-3 focus:outline-none rounded-[5px]"/>          
                        </div>

                        <button className="w-full p-3 focus:outline-none rounded-[5px]
                        bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear
                        duration-150" type="submit">
                            Send Message
                        </button>
                    </form>
                    {isModalOpen && <Confirm isOpen={isModalOpen} onClose={closeModal}/> }
                </div>

            </div>
        </div>

    </section>
}

export default Contact;