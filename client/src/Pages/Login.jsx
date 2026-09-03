
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate()
  const {storetokenInLS} = useAuth() 
const [user, setUser] = useState({
   email:"",
 password:"",
});
// handling the input values
const handleInput = (e)=>{
   let name = e.target.name;
   let value = e.target.value;
   

   setUser({
    ...user,
    [name]:value,
   })
  

}

// handling form ssubmission
// const handleSubmit = async  (e)=>{
//   e.preventDefault()
//   console.log(user);
//   try {
//     const response = await axios.post(`http://localhost:5000/api/auth/login`,user,{
//       headers: {
//         "Content-Type": "application/json"
//       },
//       withCredentials: true,

//     })
//     console.log("Login Response:",response);
//       if(response){
//         storetokenInLS(response.data.token)
       
//         setUser({
//           email:"",
//           password:"",
//         })
//         navigate("/")

//       }else{
//         alert(response.data.message || "Something went wrong!");
//         console.log("Invalid Crenditials");
        

//       }
    
    
//   } catch (error) {
//     console.log(error);
    
    
//   }
  

// }
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   console.log(user);

//   try {
//     const response = await axios.post(`http://localhost:5000/api/auth/login`, user, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       withCredentials: true,
//     });

//     console.log("Login Response:", response);

//     // success
//     storetokenInLS(response.data.token);

//     setUser({
//       email: "",
//       password: "",
//     });

//     // navigate("/");
//     navigate("/", { replace: true });

//   } catch (error) {
//     console.error("❌ Login Error:", error);

//     // This will now catch error responses like 401 or 400
//     if (error.response) {
//       toast.error(error.response.data.extraDetails || "Invalid credentials!");
//     } else {
//       alert("Something went wrong. Please try again later.");
//     }
//   }
// };
const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("📝 Submitting login form with:", user);

  try {
    const response = await axios.post(
      `https://lms-platform-backend-psal.onrender.com/api/auth/login`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log("✅ Login response:", response);

    const token = response.data.token;
    if (!token) {
      console.error("❌ Token not found in response");
      toast.error("Token not received. Login failed.");
      return;
    }

    storetokenInLS(token);

    setUser({ email: "", password: "" });

    console.log("🚀 Navigating to home...");
    navigate("/", { replace: true });

  } catch (error) {
    console.error("❌ Login error caught:", error);

    if (error.response) {
      console.error("❗ Error Response Data:", error.response.data);
      toast.error(error.response.data.extraDetails || "Invalid credentials");
    } else if (error.request) {
      console.error("❗ No response received from server:", error.request);
      toast.error("Server did not respond.");
    } else {
      console.error("❗ Axios config/setup error:", error.message);
      toast.error("Request setup error.");
    }
  }
};





  return (
    <section className=" min-h-screen flex items-center justify-center py-12 px-4 mb-5">
      <main className="w-full max-w-[1200px]  rounded-2xl shadow-lg p-10 flex flex-col lg:flex-row items-center gap-10 -mt-30">
        
        {/* Left side image */}
        <div className="w-full lg:w-1/2 flex justify-center -ml-20">
          <img
            src="\images\login.png"
            alt="register"
            className=" h-auto object-contain"
            width={600}
            height={600}
          />
        </div>

        {/* Right side form */}
        <div className="w-full lg:w-1/2 bg-[#1f1f1f] p-8 rounded-xl shadow-inner">
          <h1 className="text-4xl font-bold text-center text-white mb-6">
            Login Form
          </h1>

          <form    onSubmit={handleSubmit} className="text-white space-y-6 text-lg">
         

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                required
                value={user.email}
                onChange={handleInput}
                autoComplete="off"
                className="px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

           
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                required
                value={user.password}
                onChange={handleInput}
                autoComplete="off"
                className="px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold text-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Login;
