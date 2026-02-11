import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="flex items-center justify-center bg-base-200 min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className='text-center text-2xl text-[#090979] font-bold p-2 rounded-3xl border-t-2 border-[#00d4ff]'>Welcome to styleDecor</h3>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn mt-4 bg-linear-to-r from-[#090979] to-[#00D4FF] text-white">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;