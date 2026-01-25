import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Products = () => {
    return (
        <div className='bg-base-200 my-10'>
            <div className='w-11/12 mx-auto py-20'>
                <div className='mb-10 text-center'>
                    <h2 className='text-3xl font-semibold py-2 text-[#090979]'>Our Products</h2>
                    <p className='opacity-65'>We have a range of other services that cover from wallpaper to home furniture</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-20'>
                    <div className="rounded bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className='rounded-t'
                                src="https://i.ibb.co.com/wFqft0R1/product1.jpg"
                                alt="product1" />
                        </figure>
                        <div className="py-3 px-4 flex justify-between">
                            <h2 className="card-title text-blue-400">Interior Goods</h2>
                            <button className="btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"><FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className="rounded bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className='rounded-t'
                                src="https://i.ibb.co.com/CKCryTXV/product2.jpg"
                                alt="product2" />
                        </figure>
                        <div className="py-3 px-4 flex justify-between">
                            <h2 className="card-title text-blue-400">Office Furniture</h2>
                            <button className="btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"><FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className="rounded bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className='rounded-t'
                                src="https://i.ibb.co.com/20mcPw5K/product3.jpg"
                                alt="product1" />
                        </figure>
                        <div className="py-3 px-4 flex justify-between">
                            <h2 className="card-title text-blue-400">Home Furniture</h2>
                            <button className="btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"><FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className="rounded bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className='rounded-t'
                                src="https://i.ibb.co.com/0yNnNcBQ/product4.jpg"
                                alt="product1" />
                        </figure>
                        <div className="py-3 px-4 flex justify-between">
                            <h2 className="card-title text-blue-400">Lighting</h2>
                            <button className="btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"><FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className="rounded bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className='rounded-t'
                                src="https://i.ibb.co.com/KzzzQRKw/product5.jpg"
                                alt="product1" />
                        </figure>
                        <div className="py-3 px-4 flex justify-between">
                            <h2 className="card-title text-blue-400">Flooring</h2>
                            <button className="btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"><FaArrowRightLong /></button>
                        </div>
                    </div>
                    <div className="rounded bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className='rounded-t'
                                src="https://i.ibb.co.com/2RkbM20/product6.jpg"
                                alt="product1" />
                        </figure>
                        <div className="py-3 px-4 flex justify-between">
                            <h2 className="card-title text-blue-400">Toilet Partition</h2>
                            <button className="btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"><FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;