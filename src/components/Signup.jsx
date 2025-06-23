// import React from "react";
// import Login from "./Login";
// import { Link } from "react-router-dom";

// function Signup() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white text-black">

//       <div className="p-6 rounded shadow-md border w-96">

//         <h2 className="text-2xl font-bold mb-4">Signup</h2>

//         <span>Name</span>
//         <input
//           type="text"
//           placeholder="Enetr your Name"
//           className="w-full  flex justify-center mb-4 p-2 border rounded"
//         />
//         <span>Email</span>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <p>Password</p>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <button className="w-3/4 mx-auto flex justify-center bg-pink-500 text-white py-2 rounded">
//           Create Account
//         </button>
//         <p className="mt-4 text-sm">
//           Already have an account?{" "}
//           <button
//             className="underline text-blue-500 cursor-pointer"
//             onClick={() =>
//               document.getElementById("my_modal_3").showModal()}
//           >
//             Login
//           </button>{" "}
//           <Login />
//           {/* <Link to="/" className="text-blue-600 underline">
//             Login
//           </Link> */}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

function Signup() {
  const navigate = useNavigate(); // For navigation

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", formData);
      // proceed to API call or navigation if needed
    }
  };

  const handleClose = () => {
    navigate("/"); // ✅ Navigate to home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black relative">
      <div className="p-6 rounded shadow-md border w-96 relative bg-white">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-3/4 mx-auto flex justify-center bg-pink-500 text-white py-2 rounded"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <button
            className="underline text-blue-500 cursor-pointer"
            onClick={() => document.getElementById("my_modal_3")?.showModal()}
          >
            Login
          </button>
        </p>

        <Login />
      </div>
    </div>
  );
}

export default Signup;
