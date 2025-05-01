
// import React, { useEffect, useState } from 'react'
// import { useAuth } from '../store/auth';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const { authorizationToken } = useAuth();

//   const getAllUsersData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/admin/users`, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: authorizationToken,
//         },
//       });
//       setUsers(response.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   // delete user on delete button

//   const deleteUser = async (id)=>{
//     try {
//       const response = await axios.delete(`http://localhost:5000/api/admin/users/delete/${id}`, {
//         headers: {
//           Authorization: authorizationToken,
//         },
//       });
//       console.log(`users after delete:${response}`);
//       if(response){
//         // getAllUsersData()
//         setUsers(users.filter(user => user._id !== id));
//       }
      
      
//     } catch (error) {
//       console.log(error.message);
//     }
    

//   }

//   useEffect(() => {
//     getAllUsersData();
//   }, []);

//   return (
//     <section className="min-h-screen bg-[#121212] text-white py-10 px-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold mb-10 text-center">Admin Users</h1>

//         <div className="overflow-x-auto shadow-md rounded-xl border border-gray-800">
//           <table className="min-w-full table-auto border-collapse text-left">
//             <thead className="bg-[#1f1f1f] text-gray-300 uppercase text-sm">
//               <tr>
//                 <th className="py-4 px-6 border-b border-gray-700">Name</th>
//                 <th className="py-4 px-6 border-b border-gray-700">Email</th>
//                 <th className="py-4 px-6 border-b border-gray-700">Phone</th>
//                 <th className="py-4 px-6 border-b border-gray-700">Update</th>
//                 <th className="py-4 px-6 border-b border-gray-700">Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={index} className="hover:bg-[#1a1a1a] transition duration-200">
//                   <td className="py-4 px-6 border-b border-gray-700">{user.username}</td>
//                   <td className="py-4 px-6 border-b border-gray-700">{user.email}</td>
//                   <td className="py-4 px-6 border-b border-gray-700">{user.phone}</td>
//                   <td className="py-4 px-6 border-b border-gray-700">
//                     <Link  to={`/admin/users/${user._id}/edit`}    className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-lg text-sm">Edit</Link>
//                   </td>
//                   <td className="py-4 px-6 border-b border-gray-700">
//                     <button   onClick={()=>deleteUser(user._id)}  className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg text-sm">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdminUsers;
import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/users`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationToken,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/admin/users/delete/${id}`, {
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.status === 200) {
        setUsers(users.filter((user) => user._id !== id));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <section className="min-h-screen bg-[#121212] text-white py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-purple-500">Admin Users</h1>

        <div className="overflow-x-auto rounded-xl border border-gray-800 shadow-md">
          <table className="min-w-full text-sm sm:text-base table-auto border-collapse text-left">
            <thead className="bg-[#1f1f1f] text-gray-300 uppercase">
              <tr>
                <th className="py-3 px-4 sm:px-6 border-b border-gray-700">Name</th>
                <th className="py-3 px-4 sm:px-6 border-b border-gray-700">Email</th>
                <th className="py-3 px-4 sm:px-6 border-b border-gray-700">Phone</th>
                <th className="py-3 px-4 sm:px-6 border-b border-gray-700">Update</th>
                <th className="py-3 px-4 sm:px-6 border-b border-gray-700">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-[#1a1a1a] transition duration-200">
                  <td className="py-3 px-4 sm:px-6 border-b border-gray-700 break-all">{user.username}</td>
                  <td className="py-3 px-4 sm:px-6 border-b border-gray-700 break-all">{user.email}</td>
                  <td className="py-3 px-4 sm:px-6 border-b border-gray-700">{user.phone}</td>
                  <td className="py-3 px-4 sm:px-6 border-b border-gray-700">
                    <Link
                      to={`/admin/users/${user._id}/edit`}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-lg text-xs sm:text-sm"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="py-3 px-4 sm:px-6 border-b border-gray-700">
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg text-xs sm:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminUsers;


