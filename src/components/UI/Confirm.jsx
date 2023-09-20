
import React from 'react';
import Modal from 'react-modal';

const Confirm = ({isOpen, onClose}) => {
    console.log(isOpen, isOpen)
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10
        bg-headingColor bg-opacity-40 ">
            <div className="max-w-[500px] absolute top-1/2 left-1/2 z-20
            bg-[white] rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 pt-4 pl-4 pr-4">
                <h2 className="text-2xl text-headingColor font-[500] my-5" text-black>Email Sent Successfully</h2>
                <div lassName="flex justify-center">
                <button className=" bg-primaryColor text-white py-2 px-4 my-3 mx-20 rounded-[8px] font-[500]
                        hover:bg-headingColor ease-in duration-300" onClick={onClose}>Close</button>
            </div>
                </div>
                
       </div>
  );
}

export default Confirm;