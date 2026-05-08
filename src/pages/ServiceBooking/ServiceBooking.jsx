import { useForm } from "react-hook-form";
import { FaArrowRightLong } from "react-icons/fa6";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router";

const ServiceBooking = () => {
  const { id } = useParams();
  //   console.log(id);
  const { user } = useAuth();
  console.log(user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.displayName,
      email: user.email,
      address: "Dhaka, Bangladesh",
    },
  });

  const handleBookingForm = (data) => {
    const bookingData = {
      userEmail: user.email,
      serviceId: id,
      serviceName: data.service,
      bookingDate: data.date,
      location: data.address,
    };
    console.log(data);
    toast.success("Thank you for submitting your booking consultant.");
    reset();
  };

  return (
    <div className="w-11/12 mx-auto px-4 py-14">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Book Our Interior Service
        </h1>

        <p className="max-w-3xl mx-auto text-base-content/70 leading-8">
          Fill out the booking form below to schedule your preferred interior or
          decoration service. Our expert team will contact you shortly to
          discuss your project requirements, pricing, and design preferences.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="space-y-6">
          <div className="bg-base-200 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Shell Decor?</h2>

            <p className="text-base-content/70 leading-8">
              We provide professional interior solutions for homes, offices,
              restaurants, and commercial spaces with modern aesthetics and
              functional designs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold">250+</h3>
              <p className="text-base-content/70 mt-2">Successful Projects</p>
            </div>

            <div className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold">120+</h3>
              <p className="text-base-content/70 mt-2">Happy Clients</p>
            </div>

            <div className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold">5 Years</h3>
              <p className="text-base-content/70 mt-2">Industry Experience</p>
            </div>

            <div className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-base-content/70 mt-2">Client Support</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="card bg-base-100 shadow-xl border border-base-200">
          <div className="card-body p-8">
            <form
              onSubmit={handleSubmit(handleBookingForm)}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Email Address</span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Phone Number</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="input input-bordered w-full"
                  {...register("phone", {
                    required: "Phone required",
                    minLength: {
                      value: 11,
                      message: "Phone number must be 11 digits",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Service */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Select Service</span>
                </label>

                <select
                  name="service"
                  className="select select-bordered w-full"
                  {...register("service", { required: "Service is required" })}
                >
                  <option disabled selected value="">
                    Choose a service
                  </option>

                  <option value="Modern Interior Design">
                    Modern Interior Design
                  </option>
                  <option value="Office Decoration">Office Decoration</option>
                  <option value="Lighting Setup">Lighting Setup</option>
                  <option value="Furniture Design">Furniture Design</option>
                  <option value="Wall Decoration">Wall Decoration</option>
                </select>
                {errors.service && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </span>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Project Address
                  </span>
                </label>

                <input
                  type="text"
                  name="address"
                  placeholder="Enter project location"
                  className="input input-bordered w-full"
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.address.message}
                  </span>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Booking Date</span>
                </label>

                <input
                  type="date"
                  className="input input-bordered w-full"
                  name="date"
                  placeholder="Date formate: DD/MM/YYYY"
                  {...register("date", { required: "Date is required" })}
                />
                {errors.date && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.date.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Additional Message
                  </span>
                </label>

                <textarea
                  name="message"
                  className="textarea textarea-bordered h-32 w-full"
                  placeholder="Write your project details..."
                  {...register("message")}
                ></textarea>
              </div>

              {/* Button */}

              <button className="w-full flex gap-2 items-center justify-center my-4 bg-linear-to-r from-[#090979] to-[#00D4FF] btn text-white">
                Confirm Booking
                <FaArrowRightLong />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;
