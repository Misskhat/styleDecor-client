import React from 'react';

const CustomerReviews = () => {
    return (
        <div className='bg-base-200 py-10'>
            <div className='w-11/12 mx-auto py-20'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                    <div className='bg-white py-10 px-5 rounded space-y-3'>
                        <div className='flex items-center gap-3'>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
                                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold text-blue-400'>MD. Ahasanul Hoque Siam</p>
                                <p>Posted on Google</p>
                            </div>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                        </div>
                        <p>"I think interior concepts is one of the best interior design farm in Bangladesh. I really wish I met them earlier."</p>
                    </div>
                    <div className='bg-white py-10 px-5 rounded space-y-3'>
                        <div className='flex items-center gap-3'>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
                                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold text-blue-400'>MD. Ahasanul Hoque Siam</p>
                                <p>Posted on Google</p>
                            </div>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                        </div>
                        <p>"I think interior concepts is one of the best interior design farm in Bangladesh. I really wish I met them earlier."</p>
                    </div>
                    <div className='bg-white py-10 px-5 rounded space-y-3'>
                        <div className='flex items-center gap-3'>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
                                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold text-blue-400'>MD. Ahasanul Hoque Siam</p>
                                <p>Posted on Google</p>
                            </div>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                        </div>
                        <p>"I think interior concepts is one of the best interior design farm in Bangladesh. I really wish I met them earlier."</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerReviews;