import React from 'react';
import { Link } from 'react-router';

const Registration = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className='text-center text-2xl text-[#090979] font-bold p-2 rounded-3xl border-t-2 border-[#00d4ff]'>Welcome to styleDecor</h3>
                        <form>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Name" />
                                <label className="label">Mobile Number</label>
                                <input type="number" className="input" placeholder="Mobile Number" />
                                <label className="label">Upload Your Photo</label>
                                <input type="file" className="file-input" />
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <button className="btn mt-4 bg-linear-to-r from-[#090979] to-[#00D4FF] text-white">Login</button>
                                <p>Have an Account? <Link to={"/login"} className='cursor-pointer'><span className='font-bold text-blue-500'>Login</span></Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;