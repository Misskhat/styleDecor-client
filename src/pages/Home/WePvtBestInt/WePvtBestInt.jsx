import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const WePvtBestInt = () => {
    return (
        <div className='bg-base-200 my-10 py-15'>
            <div className='w-11/12 mx-auto md:flex items-center justify-between gap-12'>
                <div className='md:flex-1'>
                    <h2 className='text-2xl font-semibold pb-5'>We Provide Best Interior Designs in Bangladesh</h2>
                    <p className='opacity-60'>Interior design plays a very important role in our life today, making our daily life more modern and stylish. Not only that it also introduces us to elegance and comfort and helps to raise the functionality in our life.
                    </p>
                    <p className='py-5 opacity-60'>
                        Interior design plays a very important role in our life today, making our daily life more modern and stylish. Not only that it also introduces us to elegance and comfort and helps to raise the functionality in our life.
                    </p>
                    <p className='opacity-60'>
                        Interior Concepts & Design Limited understands the needs of its clients and follows their hearts when it comes to designing the perfect homes and structures.
                    </p>
                    <button className='flex gap-2 items-center justify-center my-5 bg-linear-to-r from-[#090979] to-[#00D4FF] btn text-white'>
                        Contact Us
                        <FaArrowRightLong />
                    </button>
                </div>
                <div className='md:flex-1'>
                    <img className='w-full rounded' src={"https://i.ibb.co.com/qbCP70L/img1.jpg"} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WePvtBestInt;