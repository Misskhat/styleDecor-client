import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SocialLogInButton from '../../components/SocialLogInButton/SocialLogInButton';
import axios from 'axios';

const Registration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { registerUser, updateUserProfile } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = (data) => {
        const profileImage = data.photo[0];
        registerUser(data.email, data.password)
            .then(result => {

                // add the image to from data
                const formData = new FormData()
                formData.append('image', profileImage)

                // generate and upload image to image host
                const imageUrlApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST}`
                axios.post(imageUrlApi, formData)
                    .then(res => {
                        console.log('after image update', res.data.data.url)

                        // Update user profile information.

                        const userProfile = {
                            displayName: data.name,
                            photoURL: res.data.data.url
                        }

                        updateUserProfile(userProfile)
                            .then(() => {
                                console.log('User profile update done.')
                                navigate(location?.state || "/")
                            })
                            .catch(error => console.log(error))
                    })


                console.log(result.user);

            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h3 className='text-center text-2xl text-[#090979] font-bold p-2 rounded-3xl border-t-2 border-[#00d4ff]'>Welcome to styleDecor</h3>
                        <form onSubmit={handleSubmit(handleRegister)}>
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

                                <label className="label">Upload Your Photo</label>
                                <input type="file" {...register('photo', { required: true })} className="file-input" placeholder='Your Photo' />

                                {/* Email */}

                                <label className="label">Email</label>
                                <input type="email" className="input" {...register('email', { required: true })} placeholder="Email" />
                                {
                                    errors.email?.type === 'required' &&
                                    <p className='text-red-500'>Email ID required</p>
                                }

                                {/* password */}

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
                        <SocialLogInButton></SocialLogInButton>
                        <p>Have an Account? <Link to={"/login"} className='cursor-pointer'><span className='font-bold text-blue-500'>Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;