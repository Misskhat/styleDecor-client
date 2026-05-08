import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import SocialLogInButton from "../../components/SocialLogInButton/SocialLogInButton";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utility/axiosInstance";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    // console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        axiosInstance
          .post("/api/users/login", {
            name: result.user.displayName,
            email: result.user.email,
          })
          .then(() => {
            toast.success("Welcome! and thank you for log in");
            navigate(location?.state || "/");
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h3 className="text-center text-2xl text-[#090979] font-bold p-2 rounded-3xl border-t-2 border-[#00d4ff]">
              Welcome to styleDecor
            </h3>
            <form onSubmit={handleSubmit(handleLogin)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  {...register("email", { required: true })}
                  placeholder="Email"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Please provide your email id.</p>
                )}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  {...register("password", { required: true, minLength: 6 })}
                  placeholder="Password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">Password must be 6 character.</p>
                )}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn mt-4 bg-linear-to-r from-[#090979] to-[#00D4FF] text-white">
                  Login
                </button>
              </fieldset>
            </form>
            <SocialLogInButton></SocialLogInButton>
            <p>
              Don't have any account?{" "}
              <Link
                state={location.state}
                to={"/registration"}
                className="cursor-pointer"
              >
                <span className="font-bold text-blue-500">Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
