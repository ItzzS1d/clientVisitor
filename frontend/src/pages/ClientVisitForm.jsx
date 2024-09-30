import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { registerClient } from "../../apiClient";
import { useNavigate } from "react-router-dom";
const ClientVisitForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const formData = { ...data, from: startDate, to: endDate };
    registerClient(formData);
    navigate("/");
  });

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="bg-white mt-6 p-10 rounded-lg shadow-lg w-[90%] md:w-[55%] mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
          Client Visit Form
        </h2>

        <div className="mb-4 gap-4 flex flex-col md:flex-row items-center   justify-between">
          <div className="w-full md:w-1/2 pr-2">
            <label className="block text-gray-700 font-medium">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("firstName", { required: "First Name is required" })}
            />

            {errors.firstName && (
              <span className="text-red-500 font-semibold text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="w-full md:w-1/2 md:pl-2">
            <label className="block text-gray-700 font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("lastName", { required: "Last Name is required" })}
            />
            {errors.lastName && (
              <span className="text-red-500 font-semibold text-sm">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>

        <div className="mb-4 gap-4  flex flex-col md:flex-row items-center   justify-between">
          <div className="w-full md:w-1/2 pr-2">
            <label className="block text-gray-700 font-medium">Phone No.</label>
            <input
              type="text"
              name="phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("phone", {
                required: "Phone Number is required",
                pattern: {
                  value: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                  message: "Enter valid phone number",
                },
              })}
            />
            {errors.phone && (
              <span className="text-red-500 font-semibold text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="w-full md:w-1/2 md:pl-2">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="text"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 font-semibold text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4 gap-4  flex flex-col md:flex-row items-center   justify-between">
          <div className="w-full  pr-2">
            <label className="block text-gray-700 font-medium">Location</label>
            <input
              type="text"
              name="location"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("location", { required: "location is required" })}
            />
            {errors.location && (
              <span className="text-red-500 font-semibold text-sm">
                {errors.location.message}
              </span>
            )}
          </div>
          <div className="w-full  pr-2">
            <label className="block text-gray-700 font-medium">Company</label>
            <input
              type="text"
              name="company"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("company", { required: "Company Name is required" })}
            />
            {errors.company && (
              <span className="text-red-500 font-semibold text-sm">
                {errors.company.message}
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Purpose of Visit
          </label>
          <textarea
            name="purpose"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            {...register("purpose", { required: "Visit Purpose is required" })}
          ></textarea>
          {errors.purpose && (
            <span className="text-red-500 font-semibold text-sm">
              {errors.purpose.message}
            </span>
          )}
        </div>

        <div className="mb-4  flex flex-col md:flex-row items-center   justify-between">
          <div className="w-full md:w-1/2 pr-2 mb-3">
            <label className="block text-gray-700 font-medium">From</label>

            <DatePicker
              startDate={startDate}
              selected={startDate}
              minDate={startDate}
              showDateSelect
              onChange={(date) => setStartDate(date)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2">
            <label className="block text-gray-700 font-medium">To</label>
            <DatePicker
              startDate={startDate}
              selected={endDate}
              minDate={startDate}
              showDateSelect
              onChange={(date) => setEndDate(date)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>

    // <form
    //   className="border-2 max-w-screen-lg m-auto translate-y-14 pb-4 shadow-lg rounded-md px-5"
    //   onSubmit={onSubmit}
    // >
    //   <h1 className="text-center mb-10 text-2xl font-semibold mt-2">
    //     Client Visit
    //   </h1>
    //   <div className="|">
    //     <div className= "flex flex-col md:flex-row items-center   max-w-screen-sm m-auto ">
    //       <label htmlFor="firstName" className="text-sm  flex flex-col md:flex-row items-center  -1 font-semibold ">
    //         First Name
    //         <input
    //           type="text"
    //           name="firstName"
    //           className="w-full  border-2 py-2 md:pl-2 rounded-md border-blue-500 outline-none"
    //           {...register("firstName", { required: "First Name is required" })}
    //         />
    //         {errors.firstName && (
    //           <span className="text-red-500 font-semibold text-sm">
    //             {errors.firstName.message}
    //           </span>
    //         )}
    //       </label>
    //       <label
    //         htmlFor="lastName"
    //         className="text-sm  flex flex-col md:flex-row items-center  -1  ml-10 font-semibold "
    //       >
    //         Last Name
    //         <input
    //           type="text"
    //           id="lastName"
    //           className="w-full border-2 border-blue-500 py-2 md:pl-2 rounded-md  outline-none"
    //           name="lastName"
    //           {...register("lastName", { required: "Last Name is required" })}
    //         />
    //         {errors.lastName && (
    //           <span className="text-red-500 font-semibold text-sm">
    //             {errors.lastName.message}
    //           </span>
    //         )}
    //       </label>
    //     </div>
    //     <div className= "flex flex-col md:flex-row items-center   max-w-screen-sm m-auto mt-10">
    //       <label htmlFor="email" className="text-sm  flex flex-col md:flex-row items-center  -1 font-semibold ">
    //         Email
    //         <input
    //           type="text"
    //           id="email"
    //           name="email"
    //           className="w-full  border-2 py-2 md:pl-2 rounded-md border-blue-500 outline-none"
    //           {...register("email", { required: "Email is required" })}
    //         />
    //         {errors.email && (
    //           <span className="text-red-500 font-semibold text-sm">
    //             {errors.email.message}
    //           </span>
    //         )}
    //       </label>
    //       <label
    //         htmlFor="phone"
    //         className="text-sm  flex flex-col md:flex-row items-center  -1  ml-10 font-semibold "
    //       >
    //         Mobile Number
    //         <input
    //           type="text"
    //           id="phone"
    //           name="phone"
    //           className="w-full border-2 border-blue-500 py-2 md:pl-2 rounded-md  outline-none"
    //           {...register("phone", { required: "Mobile number is required" })}
    //         />
    //         {errors.phone && (
    //           <span className="text-red-500 font-semibold text-sm">
    //             {errors.phone.message}
    //           </span>
    //         )}
    //       </label>
    //     </div>
    //   </div>
    //   <div className="max-w-screen-sm m-auto mt-10 ">
    //     <div className= "flex flex-col md:flex-row items-center   justify-between mb-5">
    //       <div>
    //         <p className="font-semibold text-sm">Start Date</p>
    //         <DatePicker
    //           startDate={startDate}
    //           selected={startDate}
    //           minDate={startDate}
    //           showDateSelect
    //           onChange={(date) => setStartDate(date)}
    //           className="w-full border-2 border-blue-500 rounded-md md:pl-2"
    //         />
    //       </div>
    //       <div>
    //         <p className="font-semibold text-sm">End Date</p>
    //         <DatePicker
    //           startDate={startDate}
    //           selected={endDate}
    //           minDate={startDate}
    //           showDateSelect
    //           onChange={(date) => setEndDate(date)}
    //           className="w-full border-2 border-blue-500 rounded-md md:pl-2"
    //         />
    //       </div>
    //     </div>
    //     <label htmlFor="location" className="font-semibold text-sm">
    //       Location
    //       <input
    //         type="text"
    //         id="location"
    //         name="location"
    //         {...register("location", { required: "location is required" })}
    //         className="w-full border-2 border-blue-500 rounded-md py-2 md:pl-2"
    //       />
    //       {errors.location && (
    //         <span className="text-red-500 font-semibold text-sm">
    //           {errors.location.message}
    //         </span>
    //       )}
    //     </label>
    //   </div>

    //   <div className="max-w-screen-sm m-auto mt-8">
    //     <label htmlFor="visit" className="text-sm font-semibold">
    //       Visit Purpose
    //     </label>
    //     <div>
    //       <textarea
    //         name="purpose"
    //         id="visit"
    //         rows={5}
    //         className="w-full border-2 border-blue-500 rounded-md outline-none"
    //         {...register("purpose", { required: "Visit Purpose is required" })}
    //       ></textarea>
    //       {errors.purpose && (
    //         <span className="text-red-500 font-semibold text-sm">
    //           {errors.purpose.message}
    //         </span>
    //       )}
    //     </div>
    //     <button className="hover:text-white hover:bg-blue-500 transition-all duration-150 text-blue-500 border-2 font-semibold border-blue-500 mt-4 rounded-md px-4 py-1">
    //       Create Visit
    //     </button>
    //   </div>
    // </form>
  );
};

export default ClientVisitForm;
