
 import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
 import {  toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate()
  const {storetokenInLS} = useAuth() 
const [user, setUser] = useState({
  username:"",
  email:"",
  phone:"",
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
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("📤 Sending user data:", user);

  try {
    const response = await axios.post(`https://lms-platform-backend-psal.onrender.com/api/auth/register`, user, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true,
    });

    console.log("✅ Registration response:", response.data);

    // Use status or a custom success flag
    if (response.status === 201) {
      storetokenInLS(response.data.token);
      setUser({ username: "", email: "", phone: "", password: "" });
      navigate("/login");
    } else {
      alert(response.data.msg || "Something went wrong!");
    }

  } catch (err) {
    console.error("❌ Axios error caught:", err);

    if (err.response) {
      toast.error(err.response.data.extraDetails || "Registration failed");
    } else {
      toast("Network or server error");
    }
  }
};









  return (
    <>
  

    <section className=" min-h-screen flex items-center justify-center py-12 px-4 mb-5">
      <main className="w-full max-w-[1200px]  rounded-2xl shadow-lg p-10 flex flex-col lg:flex-row items-center gap-10 -mt-20">
        
        {/* Left side image */}
        <div className="w-full lg:w-1/2 flex justify-center -mt-20 -ml-20">
          <img
            src="/images/register.png"
            alt="register"
            className=" h-auto object-contain"
            width={600}
            height={600}
          />
        </div>

        {/* Right side form */}
        <div className="w-full lg:w-1/2 bg-[#1f1f1f] p-8 rounded-xl shadow-inner">
          <h1 className="text-4xl font-bold text-center text-white mb-6">
            Register Form
          </h1>

          <form    onSubmit={handleSubmit} className="text-white space-y-6 text-lg">
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-1 font-medium">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Your Username"
                required
                value={user.username}
                onChange={handleInput}
                autoComplete="off"
                className="px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

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
              <label htmlFor="phone" className="mb-1 font-medium">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter Your Phone Number"
                required
                value={user.phone}
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
                Register Now
              </button>
            </div>
          </form>
        </div>
      </main>
    </section>
    </>
  );
};

export default Register;
