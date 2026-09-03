// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useAuth } from '../store/auth';

// const AdminContacts = () => {
//    const [contactData,setContactData] = useState([])
//    const { authorizationToken } = useAuth();

//   const  getContactData = async ()=>{
//     try {
//       const response = await axios.get(`http://localhost:5000/api/admin/contacts`,{
//         headers:{
//           Authorization:authorizationToken
//         }
//       })
//       console.log("contact data:",response.data);
//       if(response){
//         setContactData(response.data)
//       }
      

      
//     } catch (error) {
//       console.log(error.msg);
      
//     }
//   }


//   useEffect(()=>{
//     getContactData()
//   },[])
//   return (
//     <>
//         <h1>Hello Contacts</h1>

//       {
//         contactData.map((item,index)=>(
//           <div key={index}>
//             <h1>{item.username}</h1>
//             <h1>{item.email}</h1>
//             <h1>{item.message}</h1>
//           </div>
//         ))
//       }
//     </>
//   )
// }

// export default AdminContacts
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/contacts`, {
        headers: {
          Authorization: authorizationToken,
        },
      });
      console.log('contact data:', response.data);
      if (response) {
        setContactData(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // const deleteContact = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
  //       headers: {
  //         Authorization: authorizationToken,
  //       },
  //     });
  //     setContactData(prev => prev.filter(item => item._id !== id));
  //   } catch (error) {
  //     console.log('Error deleting contact:', error.message);
  //   }
  // };
     const deleteContact = async(id)=>{
      try {
        const response = axios.delete(`https://lms-platform-backend-psal.onrender.com/api/admin/contacts/delete/${id}`,{
          headers:{
            Authorization: authorizationToken,

          }
        })
        if(response){
          getContactData()
          alert("Deleted Successfully")
        }else{
          alert("Not Deleted")

        }
        
      } catch (error) {
        console.log(error);
        
      }

     }
  useEffect(() => {
    getContactData();
  }, []);

  return (
    <section className="min-h-screen bg-[#121212] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-500 mb-10">
          Contact Messages
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-purple-700 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-400">
                  {item.username}
                </h2>
                <p className="text-gray-300 mb-1">
                  <span className="font-medium text-white">Email:</span> {item.email}
                </p>
                <p className="text-gray-300">
                  <span className="font-medium text-white">Message:</span> {item.message}
                </p>
              </div>

              <button
                onClick={() => deleteContact(item._id)}
                className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminContacts;

