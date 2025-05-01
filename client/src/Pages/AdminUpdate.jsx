
// import React, { useState } from 'react'

// const AdminUpdate = () => {
//     const [data, setData] = useState({
//         username:"",
//         email:"",
//         phone:"",

//     })

//     const handleInput = ()={}
//   return (
//     <section>
//       <main className="flex gap-[10rem] justify-center items-center flex-wrap">
//         <div className="left">
//           <h1 className="text-4xl font-bold text-purple-700 text-center mt-5">Contact Us</h1>
//           <img width={400} height={400} src="/images/support.png" alt="Support" />
//         </div>

//         <div className="right w-full max-w-xl">
//           <form
           
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
//                 value={data.username || ""}
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
//                 value={data.email || ""}
//                 onChange={handleInput}
//                 autoComplete="off"
//                 className="px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Message */}
//             <div className="flex flex-col">
//               <label htmlFor="email" className="mb-2 font-semibold">Mobile Number</label>
//               <input
//                 type="phone"
//                 name="phone"
//                 id="phone"
//                 placeholder="Enter Your Email"
//                 required
//                 value={data.phone || ""}
//                 onChange={handleInput}
//                 autoComplete="off"
//                 className="px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
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
//   )
// }

// export default AdminUpdate
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useAuth } from '../store/auth';

// const AdminUpdate = () => {

//   const [data, setData] = useState({
//     username: '',
//     email: '',
//     phone: '',
//   });
//   const params = useParams()
//   console.log("params data:",params);
  
//   const { authorizationToken} = useAuth()


//    const getSingleUserData = async ()=>{
//       try {
//         const response = await axios.get(`http://localhost:5000/api/admin/users/${params.id}`, {
//           headers: {
//             Authorization: authorizationToken,
//           },
//         });
//         console.log(`users single data:${response}`);
//         // if(response){
//         //   // getAllUsersData()
//         //   setUsers(users.filter(user => user._id !== id));
//         // }
//         setData(response.data)
        
        
//       } catch (error) {
//         console.log(error.message);
//       }
      
  
//     }

//   useEffect(()=>{
//      getSingleUserData()
//   },[])



//   const handleInput = (e) => {
//     let name = e.target.name;;
//     let value = e.target.value;
//     setData({
//         ...data,
//         [name]:value
//     })
//   };
//   const handleSubmit = async (e)=>{
//     e.preventDefault()
//    try {
//          const response = await axios.patch(`http://localhost:5000/api/admin/users/update/${params.id}`,data, {
//            headers: {
//              Authorization: authorizationToken,
//            },
          
//          });
//          if(response){
//             alert("Updated Sussesfully")
//          }else{
//             alert("Error in Updating..")

//          }
        
         
//        }catch (error) {
//          console.log(error.msg);
         
//     }

//   }


//   return (
//     <section className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
//       <div className="w-full max-w-2xl p-10 bg-[#1f1f1f] rounded-2xl shadow-2xl">
//         <h1 className="text-3xl font-bold text-center text-purple-500 mb-10">
//           Update User
//         </h1>
//         <form onSubmit={handleSubmit}  className="space-y-8 text-white text-lg">
//           {/* Username */}
//           <div className="flex flex-col">
//             <label htmlFor="username" className="mb-1 font-medium text-gray-300">
//               Username
//             </label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               placeholder="Enter Your Username"
//               required
//               value={data.username || ''}
//               onChange={handleInput}
//               autoComplete="off"
//               className="px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//           </div>

//           {/* Email */}
//           <div className="flex flex-col">
//             <label htmlFor="email" className="mb-1 font-medium text-gray-300">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter Your Email"
//               required
//               value={data.email || ''}
//               onChange={handleInput}
//               autoComplete="off"
//               className="px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//           </div>

//           {/* Phone */}
//           <div className="flex flex-col">
//             <label htmlFor="phone" className="mb-1 font-medium text-gray-300">
//               Mobile Number
//             </label>
//             <input
//               type="phone"
//               name="phone"
//               id="phone"
//               placeholder="Enter Your Mobile Number"
//               required
//               value={data.phone || ''}
//               onChange={handleInput}
//               autoComplete="off"
//               className="px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition duration-200"
//             >
//               Update
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default AdminUpdate;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';

const AdminUpdate = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
  });

  const params = useParams();
  const { authorizationToken } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        data,
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.status === 200) {
        alert('Updated Successfully');
      } else {
        alert('Error in Updating..');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="min-h-screen bg-[#121212] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full max-w-xl bg-[#1f1f1f] p-6 sm:p-10 rounded-2xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-500 mb-8">
          Update User
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 sm:space-y-8 text-white text-base sm:text-lg"
        >
          {/* Username */}
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Your Username"
              required
              value={data.username || ''}
              onChange={handleInput}
              autoComplete="off"
              className="px-4 py-2 sm:py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
              value={data.email || ''}
              onChange={handleInput}
              autoComplete="off"
              className="px-4 py-2 sm:py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 font-medium text-gray-300">
              Mobile Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter Your Mobile Number"
              required
              value={data.phone || ''}
              onChange={handleInput}
              autoComplete="off"
              className="px-4 py-2 sm:py-3 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition duration-200"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminUpdate;
