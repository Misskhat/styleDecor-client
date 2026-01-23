import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div className='relative'>
                    <img className='h-[70vh] w-full object-cover' src={"https://i.ibb.co.com/Z1YXRDCc/banner1.jpg"} />
                    <p className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white border-none">Contact Our Interior Designer</p>
                </div>
                <div>
                    <img className='h-[70vh] w-full object-cover' src={"https://i.ibb.co.com/hRXLy0nt/banner2.jpg"} />
                    <p className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white border-none">Contact Our Interior Designer</p>
                </div>
                <div>
                    <img className='h-[70vh] w-full object-cover' src={"https://i.ibb.co.com/69VpT42/banner3.webp"} />
                    <p className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white border-none">Contact Our Interior Designer</p>
                </div>
                <div>
                    <img className='h-[70vh] w-full object-cover' src={"https://i.ibb.co.com/rGRxC360/banner4.jpg"} />
                    <p className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white border-none">Contact Our Interior Designer</p>
                </div>
                <div>
                    <img className='h-[70vh] w-full object-cover' src={"https://i.ibb.co.com/ycgK9D3X/banner5.avif"} />
                    <p className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white border-none">Contact Our Interior Designer</p>
                </div>
            </Carousel>
            <div className='my-10 mx-auto w-3/4 text-center'>
                <h2 className='my-5 text-3xl font-semibold text-[#090979]'>Top-notch Interior Design Firm in Dhaka, Bangladesh</h2>
                <p className='border-l-4 border-[#00D4FF] p-2 bg-gray-100 rounded'> Interior Concepts & Design Limited is one of the top and most competitive interior design companies in Bangladesh. We have a desire to decorate the details in a way that clearly communicates what is most important to us as a family. The projects covered by very talented interior designers involved in the specification, arranging products and consistently completing excellent projects in Bangladesh. </p>
            </div>
        </div>
    );
};

export default Banner;