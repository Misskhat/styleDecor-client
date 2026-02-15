import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ServiceBooking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleBookingForm = (data) => {
        console.log(data);
        toast.success('Thank you for submitting your booking consultant.')
    }

    return (
        <div className='w-11/12 mx-auto p-20'>
            <div className='flex flex-col items-center'>
                <div>
                    <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#090979] to-[#00D4FF]'>StyleDecor</h1>
                    <p>Booked consultancy for your interior design</p>
                    <form className='' onSubmit={handleSubmit(handleBookingForm)}>
                        <fieldset className="fieldset">
                            {/* name field */}

                            <label className="label">Name</label>
                            <input type="text" className="input" {...register('name', { required: true })} placeholder="Name" />
                            {
                                errors.name?.type === "required" &&
                                <p className='text-red-500'>Name must be require</p>
                            }

                            {/* mobile number field */}

                            <label className="label">Mobile Number</label>
                            <input type="number" className="input" {...register('mobileNumber')} placeholder="Mobile Number" />

                            {/* photo field */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Select Your Interior Design</legend>
                                <select defaultValue="Pick An Interior Service" {...register('service', { required: true })} className="select">
                                    <option disabled={false}>Pick an interior design</option>
                                    <option>Office Interior Design</option>
                                    <option>Home Interior</option>
                                    <option>Landscape Design</option>
                                    <option>Exterior Design</option>
                                    <option>Architectural Design</option>
                                    <option>Showroom Design</option>
                                </select>
                            </fieldset>
                            {errors.service?.type === "required" && <p>Please select a service</p>}

                            {/* Email */}

                            <label className="label">Email</label>
                            <input type="email" className="input" {...register('email', { required: true })} placeholder="Email" />
                            {
                                errors.email?.type === 'required' &&
                                <p className='text-red-500'>Email ID required</p>
                            }
                            <button className="border-none btn btn-neutral mt-4 bg-linear-to-r from-[#090979] to-[#00D4FF] text-white">Booked Consultant</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceBooking;