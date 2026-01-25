import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const ChiefInterior = () => {
    return (
        <div className='bg-base-200 my-10 py-15'>
            <div className='w-11/12 mx-auto md:flex items-center justify-between gap-12'>
                <div className='md:flex-1'>
                    <img className='w-full rounded' src={"https://i.ibb.co.com/67rPpTCT/chief-Interior.jpg"} alt="" />
                </div>
                <div className='md:flex-1'>
                    <h4 className='text-xl text-blue-400'>A Legacy of Innovation:</h4>
                    <h2 className='text-2xl font-semibold pb-5'>Meet Our Chief Interior Designer</h2>
                    <p className='opacity-60'>Md. Misskhat Hossen, the visionary behind Interior-Concepts & Design Limited, is an esteemed Chief Interior Designer with a profound influence on the realm of interior design in Bangladesh. With an illustrious career spanning over 15 years, Anamul Haque has passionately shaped spaces.
                    </p>
                    <button className='flex gap-2 items-center justify-center my-5 bg-linear-to-r from-[#090979] to-[#00D4FF] btn text-white'>
                        Contact Us
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChiefInterior;