import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const ResearchDevelopment = () => {
    return (
        <div className='my-10 py-15'>
            <div className='w-11/12 mx-auto md:flex items-center justify-between gap-12'>
                <div className='md:flex-1'>
                    <h4 className='text-xl text-blue-400'>Research & Development:</h4>
                    <h2 className='text-3xl font-semibold pb-5 text-[#090979]'>Research Paper Presentation on Future of Energy-Efficient Interiors</h2>
                    <p className='opacity-60'>Smart lighting is transforming the way we design and experience interior spaces. In Bangladesh, the need for energy-efficient solutions is greater than ever.
                    </p>
                    <p className='py-5 opacity-60'>
                        In this research paper presentation, we highlight how smart lighting can reduce energy consumption, enhance user comfort, and create dynamic interior environments.
                    </p>
                    <button className='flex gap-2 items-center justify-center my-5 bg-linear-to-r from-[#090979] to-[#00D4FF] btn text-white'>
                        Read More
                        <FaArrowRightLong />
                    </button>
                </div>
                <div className='md:flex-1'>
                    <iframe className='rounded' width="560" height="315" src="https://www.youtube.com/embed/jm0gylw-MOs?si=x5ds17kLZbE89he0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default ResearchDevelopment;