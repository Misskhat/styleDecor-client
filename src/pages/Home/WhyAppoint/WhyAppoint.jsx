import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { RiEmotionHappyLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";
import { CiBadgeDollar } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";


const WhyAppoint = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-3xl font-semibold pb-5 text-[#090979]'>Why Should You Appoint Us?</h2>
            <div className='flex gap-10 justify-between'>
                <div className='flex-1'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                        <div className='space-y-2 shadow-sm p-5 rounded'>
                            <RiEmotionHappyLine className='text-3xl text-blue-400' />
                            <p className='text-blue-500'>We Listen</p>
                            <p className='opacity-65'>At Interior Concepts & Design Limited we offer minimalistic design, luxurious design.</p>
                        </div>
                        <div className='space-y-2 shadow-sm p-5 rounded'>
                            <SlBadge className='text-3xl text-blue-400' />
                            <p className='text-blue-500'>Best Solution</p>
                            <p className='opacity-65'>We are ready to give you the best solution for your office or home interior.</p>
                        </div>
                        <div className='space-y-2 shadow-sm p-5 rounded'>
                            <CiBadgeDollar className='text-3xl text-blue-400' />
                            <p className='text-blue-500'>Budget-Friendly</p>
                            <p className='opacity-65'>Interior Concepts & Design Limited saves your costs by helping you choose the best materials.</p>
                        </div>
                        <div className='space-y-2 shadow-sm p-5 rounded'>
                            <AiOutlineLike className='text-3xl text-blue-400' />
                            <p className='text-blue-500'>Modern Design</p>
                            <p className='opacity-65'>We are committed to providing you the best and modern design interior.</p>
                        </div>
                    </div>
                    <button className='flex gap-2 items-center justify-center my-5 bg-linear-to-r from-[#090979] to-[#00D4FF] btn text-white'>
                        Booking an Appointment
                        <FaArrowRightLong />
                    </button>
                </div>
                <div className='flex-1'>
                    <iframe className='rounded' width="560" height="315" src="https://www.youtube.com/embed/6xSgcnrwZ2g?si=av87EiyEndtOpU2S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default WhyAppoint;