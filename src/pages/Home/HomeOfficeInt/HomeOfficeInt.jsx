import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const HomeOfficeInt = () => {
    return (
        <div className='bg-base-200 my-10'>
            <div className='w-11/12 mx-auto py-20'>
                <div className='mb-10 text-center'>
                    <h2 className='text-3xl font-semibold py-2 text-[#090979]'>Home & Office Interior Design Services We Offer</h2>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-20'>
                    <div className="rounded bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className='rounded-t'
                                src="https://i.ibb.co.com/rhjjQ2K/int1.jpg"
                                alt="int1" />
                        </figure>
                        <div className="py-3 px-4 flex justify-between">
                            <h2 className="card-title text-blue-400">Office Interior Design</h2>
                            <button className="btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"><FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className="rounded bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className='rounded-t w-96 h-56 object-cover'
                                src="https://i.ibb.co.com/9HQDwbtg/int2.jpg"
                                alt="int2" />
                        </figure>
                        <div className="py-3 px-4 flex justify-between">
                            <h2 className="card-title text-blue-400">Home Interior</h2>
                            <button className="btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"><FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className="rounded bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className='rounded-t'
                                src="https://i.ibb.co.com/WvtRBsSF/int3.jpg"
                                alt="int3" />
                        </figure>
                        <div className="py-3 px-4 flex justify-between">
                            <h2 className="card-title text-blue-400">Landscape Design</h2>
                            <button className="btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"><FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className="rounded bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className='rounded-t'
                                src="https://i.ibb.co.com/WWzF9Dpr/int4.jpg"
                                alt="int4" />
                        </figure>
                        <div className="py-3 px-4 flex justify-between">
                            <h2 className="card-title text-blue-400">Showroom Design</h2>
                            <button className="btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"><FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className="rounded bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className='rounded-t'
                                src="https://i.ibb.co.com/LdqqjMnY/int5.jpg"
                                alt="int5" />
                        </figure>
                        <div className="py-3 px-4 flex justify-between">
                            <h2 className="card-title text-blue-400">Architectural Design</h2>
                            <button className="btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"><FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className="rounded bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className='rounded-t'
                                src="https://i.ibb.co.com/DDN5wf79/int6.jpg"
                                alt="int6" />
                        </figure>
                        <div className="py-3 px-4 flex justify-between">
                            <h2 className="card-title text-blue-400">Exterior Design</h2>
                            <button className="btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"><FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeOfficeInt;