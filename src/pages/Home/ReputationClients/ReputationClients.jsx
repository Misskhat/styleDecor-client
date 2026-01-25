import React from 'react';

const ReputationClients = () => {
    return (
        <div className='w-11/12 mx-auto my-10 flex justify-center gap-10'>
            <div className='flex-1 p-10'>
                <h2 className='font-semibold text-3xl mb-5 text-[#090979]'>Our Reputation Speaks for Us</h2>
                <p className='opacity-65'>Interior Concepts & Design Limited is one of the fast-growing and promising interior design service providers in Bangladesh. We started our formal operation in 2008 as a complete interior decorators and furniture supplier.
                </p>
                <div className='mt-8 grid grid-cols-4 gap-2'>
                    <div>
                        <h2 className='text-2xl font-semibold'>300+</h2>
                        <p className='opacity-65'>Clients</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>500+</h2>
                        <p className='opacity-65'>Project</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>53K</h2>
                        <p className='opacity-65'>Impressions</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>53</h2>
                        <p className='opacity-65'>Reviews</p>
                    </div>
                </div>
            </div>
            <div className='flex-1 p-10'>
                <h2 className='font-semibold text-3xl mb-5 text-[#090979]'>Our Prestigious Clients</h2>
                <div className='grid grid-cols-3 gap-2 space-y-2 '>
                    <div className='w-24'><img src={"https://i.ibb.co.com/5hB584zS/logo1.jpg"} alt="logo1" /></div>
                    <div className='w-24'><img src={"https://i.ibb.co.com/R4MvkLBX/logo2.jpg"} alt="logo2" /></div>
                    <div className='w-24'><img src={"https://i.ibb.co.com/JRvK9kTx/logo3.png"} alt="logo3" /></div>
                    <div className='w-24'><img src={"https://i.ibb.co.com/Rp0jvYyV/logo4.jpg"} alt="logo4" /></div>
                    <div className='w-24'><img src={"https://i.ibb.co.com/p6H1xwjm/logo5.jpg"} alt="logo5" /></div>
                    <div className='w-24'><img src={"https://i.ibb.co.com/Hpd5PZ9m/logo6.jpg"} alt="logo6" /></div>
                    <div className='w-24'><img src={"https://i.ibb.co.com/wZTbZTCW/logo7.jpg"} alt="logo7" /></div>
                    <div className='w-24'><img src={"https://i.ibb.co.com/sdmX8NsN/logo8.jpg"} alt="logo8" /></div>
                    <div className='w-24'><img src={"https://i.ibb.co.com/Zyg1QDR/logo9.jpg"} alt="logo9" /></div>
                </div>
            </div>
        </div>
    );
};

export default ReputationClients;