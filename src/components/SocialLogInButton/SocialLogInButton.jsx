import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

const SocialLogInButton = () => {

    const { signInGoogle } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignInGoogle = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state || '/')
                toast.success('Welcome! and thank you for log in')

            })
            .catch(error => console.log(error))
    }

    return (
        <button onClick={handleSignInGoogle} className="btn bg-white text-black border-[#e5e5e5]">
            <FcGoogle className='text-2xl' />
            Login with Google
        </button>
    );
};

export default SocialLogInButton;