import { useAuth } from "../store/auth";


const Service = () => {
  const {serviceData} = useAuth()
   


  // const handleCards = async()=>{
  //     const response = await axios.get(`http://localhost:5000/api/data/service`,{
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //     })
  //     setServiceData(response)
  // }

  // useEffect(()=>{
  //   handleCards()
  // },[])
  return (
    
    <div className="min-h-screen  text-white px-6 py-10">
     <h1 className="text-4xl font-bold text-center mb-4 relative inline-block ml-160 -mt-4">
  Services
  <span className="block h-1 w-24 bg-purple-600 mx-auto mt-2 rounded"></span>
</h1>

      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
       
        
        {
          serviceData.map((item,index)=>(
            <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full object-cover" key={index} >
            <img src="https://i.pinimg.com/736x/f9/36/fa/f936fad38ac20c4ccc9415e746ecaa43.jpg" alt="Web Dev" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{item.service}</h2>
              <p className="text-gray-300 mb-3">{item.description}</p>
              <p className="text-teal-400 font-medium">Price:{item.price}</p>
              <p className="text-sm text-gray-400 mt-2">Provider: {item.provider}</p>
            </div>
          </div>
          ))
        }

     
      </div>
    </div>
  );
};

export default Service;
