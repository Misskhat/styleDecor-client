import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegister = (data) => {
        console.log(data);
    }

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className='text-center text-2xl text-[#090979] font-bold p-2 rounded-3xl border-t-2 border-[#00d4ff]'>Welcome to styleDecor</h3>
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input" {...register('name', { required: true })} placeholder="Name" />
                                {
                                    errors.name?.type === "required" &&
                                    <p className='text-red-500'>Name must be require</p>
                                }
                                <label className="label">Mobile Number</label>
                                <input type="number" className="input" {...register('mobileNumber')} placeholder="Mobile Number" />
                                <label className="label">Upload Your Photo</label>
                                <input type="file" className="file-input" />
                                <label className="label">Email</label>
                                <input type="email" className="input" {...register('email', { required: true })} placeholder="Email" />
                                {
                                    errors.email?.type === 'required' &&
                                    <p className='text-red-500'>Email ID required</p>
                                }
                                <label className="label">Password</label>
                                <input type="password" className="input" {...register('password', { required: true, minLength: 6 })} placeholder="Password" />
                                {
                                    errors.password?.type === 'required' &&
                                    <p className='text-red-500'>Password Require</p>
                                }
                                {
                                    errors.password?.type === 'minLength' &&
                                    <p className='text-red-500'>Password must be 6 character.</p>
                                }
                                <button className="btn mt-4 bg-linear-to-r from-[#090979] to-[#00D4FF] text-white">Register</button>
                            </fieldset>
                        </form>
                        <button className="btn bg-white text-black border-[#e5e5e5]">
                            <FcGoogle className='text-2xl' />
                            Login with Google
                        </button>
                        <p>Have an Account? <Link to={"/login"} className='cursor-pointer'><span className='font-bold text-blue-500'>Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;