// import React, { useState } from 'react'
// import { useAuth } from '../store/auth';
// import axios from 'axios';

// const defaultContactFormData = {
//   username:"",
//       email:"",
//       message:"",
// }

// const Contact = () => {
//   const [contact, setContact] = useState(defaultContactFormData);
//     const [userData, setUserData] = useState(true)
//   const {user} = useAuth()

//   if(userData && user){
//     setContact({
//       username:user.username,
//       email:user.email,
//       message:"",
//     })
//     setUserData(false)
//   }
//   const handleInput = (e)=>{
//       const name = e.target.name;
//       const value = e.target.value
//       // setContact({
//       //   ...contact,
//       //   [name]:value
//       // })
//       setContact((prev)=>({
//         prev,
//         [name]:value,
//       }))
//   }
//   const handleSubmit = (e)=>{
//     e.preventDefault()
//     console.log(contact);
//     try {
//        const response = axios.post(`http://localhost:5000/api/form/contact`,contact,{
//         headers: {
//           "Content-Type": "application/json"
//         },
//        })
//        if(response){
//         setContact(defaultContactFormData)
//         console.log(response);
//         alert("Message send Sucessfully")
        

//        }
      
//     } catch (error) {
//       alert("Message not send")
//       console.log(error.message);
      
//     }
    

//   }
//   return (
//     <section>
//       <main className='flex gap-[20rem]'>

//         <div className="left ml-30">
//           <h1 className='text-4xl font-bold text-purple-700 text-center mt-5'>Contact Us</h1>
//           <img     width={500} height={500} src="\images\support.png" alt="" />
//         </div>
//         <div className="right">
       
//        <form onSubmit={handleSubmit} className="text-white space-y-10 text-xl max-w-4xl w-full mx-auto p-8 bg-[#1a1a1a] rounded-2xl shadow-lg">
//        <div className="flex flex-col">
//               <label htmlFor="username" className="mb-1 font-medium">Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 id="username"
//                 placeholder="Enter Your Username"
//                 required
//                 value={user.username}
//                 onChange={handleInput}
//                 autoComplete="off"
//                 className="px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
  
//   {/* Email */}
//   <div className="flex flex-col">
//     <label htmlFor="email" className="mb-2 font-semibold text-2xl">Email</label>
//     <input
//       type="email"
//       name="email"
//       id="email"
//       placeholder="Enter Your Email"
//       required
//       value={contact.email}
//       onChange={handleInput}
//       autoComplete="off"
//       className="px-6 py-4 text-lg rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//   </div>

//   {/* Password */}
//   {/* <div className="flex flex-col">
//     <label htmlFor="password" className="mb-2 font-semibold text-2xl">Password</label>
//     <input
//       type="password"
//       name="password"
//       id="password"
//       placeholder="Enter Your Password"
//       required
//       value={contact.password}
//       onChange={handleInput}
//       autoComplete="off"
//       className="px-6 py-4 text-lg rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//   </div> */}

//   {/* Message */}
//   <div className="flex flex-col">
//     <label htmlFor="message" className="mb-2 text-2xl font-semibold text-white">Message</label>
//     <textarea
//       name="message"
//       id="message"
//       rows="8"
//       placeholder="Enter your message..."
//       value={contact.message}
//       onChange={handleInput}
//       className="w-full px-6 py-4 text-lg rounded-lg bg-[#2a2a2a] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//     ></textarea>
//   </div>

//   {/* Submit Button */}
//   <div className="pt-4">
//     <button
//       type="submit"
//       className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-xl font-semibold rounded-lg transition"
//     >
//       Submit
//     </button>
//   </div>
// </form>

//         </div>
//       </main>
//     </section>
//   )
// }

// export default Contact

// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../store/auth';
// import axios from 'axios';

// const defaultContactFormData = {
//   username: "",
//   email: "",
//   message: "",
// };

// const Contact = () => {
//   const [contact, setContact] = useState(defaultContactFormData);
//   const [userData, setUserData] = useState(true);
//   const { user } = useAuth();

//   useEffect(() => {
//     if (user && userData) {
//       setContact({
//         username: user.username || "",
//         email: user.email || "",
//         message: "",
//       });
//       setUserData(false);
//     }
//   }, [user, userData]);

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setContact((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `http://localhost:5000/api/form/contact`,
//         contact,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response) {
//         setContact(defaultContactFormData);
//         alert("Message sent successfully");
//       }
//     } catch (error) {
//       alert("Message not sent");
//       console.error(error.message);
//     }
//   };

//   return (
//     <section>
//       <main className="flex gap-[10rem] justify-center items-center flex-wrap">
//         <div className="left">
//           <h1 className="text-4xl font-bold text-purple-700 text-center mt-5">Contact Us</h1>
//           <img width={400} height={400} src="/images/support.png" alt="Support" />
//         </div>

//         <div className="right w-full max-w-xl">
//           <form
//             onSubmit={handleSubmit}
//             className="text-white space-y-8 text-xl w-full p-8 bg-[#1a1a1a] rounded-2xl shadow-lg"
//           >
//             {/* Username */}
//             <div className="flex flex-col">
//               <label htmlFor="username" className="mb-1 font-medium">Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 id="username"
//                 placeholder="Enter Your Username"
//                 required
//                 value={contact.username || ""}
//                 onChange={handleInput}
//                 autoComplete="off"
//                 className="px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Email */}
//             <div className="flex flex-col">
//               <label htmlFor="email" className="mb-2 font-semibold">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter Your Email"
//                 required
//                 value={contact.email || ""}
//                 onChange={handleInput}
//                 autoComplete="off"
//                 className="px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Message */}
//             <div className="flex flex-col">
//               <label htmlFor="message" className="mb-2 font-semibold">Message</label>
//               <textarea
//                 name="message"
//                 id="message"
//                 rows="6"
//                 placeholder="Enter your message..."
//                 required
//                 value={contact.message}
//                 onChange={handleInput}
//                 className="px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//               ></textarea>
//             </div>

//             {/* Submit */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </section>
//   );
// };

// export default Contact;
import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import axios from 'axios';

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user && userData) {
      setContact({
        username: user.username || "",
        email: user.email || "",
        message: "",
      });
      setUserData(false);
    }
  }, [user, userData]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/form/contact`,
        contact,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        setContact(defaultContactFormData);
        alert("Message sent successfully");
      }
    } catch (error) {
      alert("Message not sent");
      console.error(error.message);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] py-12 px-4">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* Left */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-extrabold text-purple-500">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-md">
            Have questions or feedback? Fill out the form and we’ll get back to you as soon as possible.
          </p>
          <img
            src="/images/support.png"
            alt="Support"
            className="w-[320px] md:w-[400px] mx-auto md:mx-0"
          />
        </div>

        {/* Right */}
        <div className="flex-1 w-full max-w-xl bg-[#1e1e1e] p-8 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6 text-white">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block mb-1 text-sm font-semibold">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                required
                value={contact.username}
                onChange={handleInput}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={contact.email}
                onChange={handleInput}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-semibold">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={contact.message}
                onChange={handleInput}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition text-white font-bold text-lg rounded-lg shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

