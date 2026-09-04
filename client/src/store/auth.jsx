import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

   export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [serviceData, setServiceData] = useState("")
     const authorizationToken =`Bearer ${token}`
    const storetokenInLS = (servertoken)=>{
        setToken(servertoken);
        return localStorage.setItem("token",servertoken)

    };

    let isLoggedIn = !!token;
    console.log("isloggged in:",isLoggedIn);
    
    // logout function

    const  LogoutUser = ()=>{

        setToken("")
        localStorage.removeItem("token")
    }
    // AUTHENCATION-to get the current user data


    const  userAuthentication = async  ()=>{
        try {
            // setIsLoading(true)
            const response = await axios.get(`https://lms-platform-backend-psal.onrender.com/api/auth/user`,{
                headers: {
                    Authorization: authorizationToken
                  },
            })
            if(response){
                console.log("user dataa:",response.data.userData);
                
                setUser(response.data.userData)
                setIsLoading(false)
            }else{
                setIsLoading(false)
                
            }
            
        } catch (error) {
            console.log(error.msg);
            
        }



    }

    const getServices = async()=>{
        try {
            const response = await axios.get(`https://lms-platform-backend-psal.onrender.com/api/data/service`)
            if(response){
                console.log("serverice data",response.data.response);
                setServiceData(response.data.response)
                
            }
        } catch (error) {
            console.log(error.message);
            
        }
    }





     useEffect(()=>{
        getServices()
     },[])
        useEffect(()=>{
            userAuthentication()
        },[])
        useEffect(() => {
            if (token) {
              userAuthentication();
            } else {
              setUser(""); // clear user if token removed
            }
          }, [token]);
          
    return (
    <AuthContext.Provider value={ {storetokenInLS, LogoutUser, isLoggedIn,user,serviceData,authorizationToken,isLoading}}>
        {children}
    </AuthContext.Provider>
    
)

   };




   export const useAuth  =()=>{
     const authContextValue =  useContext(AuthContext)
     if(!authContextValue){
        throw new Error("useAuth ussed outside of the provider")
     }
     return authContextValue;

   }

// src/store/auth.js

// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(() => localStorage.getItem("token") || "");
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
//   const [user, setUser] = useState("");
//   const [serviceData, setServiceData] = useState("");

//   const authorizationToken = `Bearer ${token}`;

//   // ✅ Store token and update login state
//   const storetokenInLS = (serverToken) => {
//     setToken(serverToken);
//     setIsLoggedIn(true);
//     localStorage.setItem("token", serverToken);
//   };

//   // ✅ Logout user
//   const LogoutUser = () => {
//     setToken("");
//     setIsLoggedIn(false);
//     setUser("");
//     localStorage.removeItem("token");
//   };

//   // ✅ Authenticate and fetch user
//   const userAuthentication = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/auth/user", {
//         headers: {
//           Authorization: authorizationToken,
//         },
//       });

//       if (response?.data?.userData) {
//         setUser(response.data.userData);
//         console.log("✅ Authenticated user:", response.data.userData);
//       }
//     } catch (error) {
//       console.error("❌ Auth Error:", error.response?.data?.message || error.message);
//     }
//   };

//   // ✅ Fetch service data
//   const getServices = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/data/service");
//       if (response?.data?.response) {
//         setServiceData(response.data.response);
//         console.log("✅ Service data:", response.data.response);
//       }
//     } catch (error) {
//       console.error("❌ Service Fetch Error:", error.message);
//     }
//   };

//   // Fetch services on mount
//   useEffect(() => {
//     getServices();
//   }, []);

//   // Fetch user if token exists
//   useEffect(() => {
//     if (token) {
//       userAuthentication();
//     } else {
//       setUser("");
//     }
//   }, [token]);

//   return (
//     <AuthContext.Provider
//       value={{
//         storetokenInLS,
//         LogoutUser,
//         isLoggedIn,
//         user,
//         serviceData,
//         authorizationToken,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // ✅ useAuth hook
// export const useAuth = () => {
//   const authContextValue = useContext(AuthContext);
//   if (!authContextValue) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return authContextValue;
// };
