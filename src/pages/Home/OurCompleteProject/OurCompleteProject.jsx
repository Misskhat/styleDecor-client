import React from 'react';

const OurCompleteProject = () => {
    return (
        <div className='w-11/12 mx-auto my-20'>
            <div className='text-center'>
                <h2 className='text-2xl font-semibold my-5'>
                    Our Completed Interior Designs Projects
                </h2>
                <p className='md:w-3xl mx-auto'>Interior Concepts & Design Limited has completed a wide range of projects all over Bangladesh. Our aim is to satisfy our respected clients in the best possible way.
                </p>
            </div>
            <div className='my-8  md:grid grid-cols-4 gap-5 space-y-5'>
                <div className='overflow-hidden'>
                    <iframe width="320" height="200" src="https://www.youtube.com/embed/NoWyNgAQe34?si=93dZAy7fF-PlPm3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='overflow-hidden'>
                    <iframe width="320" height="198" src="https://www.youtube.com/embed/R8OejFuUYqo?si=DocWeRCZJGNkfKFO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='overflow-hidden'>
                    <iframe width="320" height="198" src="https://www.youtube.com/embed/rADAxeON0Dg?si=iVcqNx6ri3BdOWDb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='overflow-hidden'>
                    <iframe width="320" height="198" src="https://www.youtube.com/embed/ej2fZkqXi6I?si=SIpg7Af7gB8x7psC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default OurCompleteProject;