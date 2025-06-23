// import React from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);
//   return (
//     <>
//       <div>
//         {/* You can open the modal using document.getElementById('ID').showModal() method */}
//         <dialog id="my_modal_3" className="modal">
//           <div className="modal-box">
//             <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//               {/* if there is a button in form, it will close the modal */}
//               <Link
//                 to="/"
//                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               >
//                 ✕
//               </Link>
//             </form>
//             <h3 className="font-bold text-lg">Login</h3>
//             {/* Email */}
//             <div>
//               <span>Email</span>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-80 px-3 border rounded-md outline-none"
//                 {...register("email", { required: true })}
//               />
//             </div>
//             {/* Password */}
//             <div>
//               <span>Password</span>
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter your Password"
//                 className="w-80 px-3 border rounded-md outline-none"
//                 {...register("password", { required: true })}
//               />
//             </div>
//             <div className="flex justify-around mt-4">
//               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
//                 Login
//               </button>
//               <p>
//                 Not registered?{" "}
//                 <Link
//                   to="/signup"
//                   className="underline text-blue-500 cursor-pointer "
//                 >
//                   Signup
//                 </Link>{" "}
//               </p>
//             </div>
//             {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
//           </div>
//         </dialog>
//       </div>
//     </>
//   );
// }

// export default Login;
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close button */}
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_3").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>

              {/* <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link> */}

              <h3 className="font-bold text-lg px-10">Login</h3>

              {/* Email */}
              <div className="px-10">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />{" "}
                {errors.email && (
                  <p className="text-red-500 text-sm">Email is required</p>
                )}
              </div>

              {/* Password */}
              <div className="px-10">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Password"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">Password is required</p>
                )}
              </div>

              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300"
                >
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer "
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>

            {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
