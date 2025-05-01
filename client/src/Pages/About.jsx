
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../store/auth';

// const About = () => {

//   // const [user, setUser] = useState(true)

//   const {user} = useAuth()
//   return (
//     <section className="text-white  py-16">
//       <main className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
//         {/* Left Content */}
//         <div className="md:w-1/2 space-y-6 ml-20">
//         <p className='text-2xl text-white font-bold'>Welcome {user ? user.username :`to our Website`}</p>
//           <h1 className="text-4xl md:text-5xl font-bold text-purple-600">Why Choose Us?</h1>
          
//           <ul className="space-y-4 text-lg text-gray-300">
//             <li>
//               <span className="font-semibold text-white">Expertise:</span> Our team consists of experienced IT professionals who stay updated with the latest trends.
//             </li>
//             <li>
//               <span className="font-semibold text-white">Customization:</span> We tailor solutions to match your business’s unique needs and goals.
//             </li>
//             <li>
//               <span className="font-semibold text-white">Customer-Centric:</span> Your satisfaction is our priority—we offer top-notch support for all IT concerns.
//             </li>
//             <li>
//               <span className="font-semibold text-white">Affordability:</span> Competitive pricing without compromising on quality.
//             </li>
//             <li>
//               <span className="font-semibold text-white">Reliability:</span> We’re available 24/7 to ensure your systems stay up and running.
//             </li>
//           </ul>

//           {/* Buttons */}
//           <div className="flex gap-4 pt-4">
//             <Link
//               to="/"
//               className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition text-white font-semibold"
//             >
//               Connect Now
//             </Link>
//             <Link
//               to="/contact"
//               className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition text-white font-semibold"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2">
//           <img
//             src="/images/about.png" // Make sure path is correct
//             alt="About Us"
//             className="rounded-xl shadow-lg w-full max-w-md mx-auto"
//           />
//         </div>
//       </main>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth';

const About = () => {
  const { user } = useAuth();

  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-4">
      <main className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-2xl font-bold">
            Welcome {user ? user.username : 'to our Website'}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600">
            Why Choose Us?
          </h1>

          <ul className="space-y-4 text-lg text-gray-300">
            <li>
              <span className="font-semibold text-white">Expertise:</span> Our team consists of experienced IT professionals who stay updated with the latest trends.
            </li>
            <li>
              <span className="font-semibold text-white">Customization:</span> We tailor solutions to match your business’s unique needs and goals.
            </li>
            <li>
              <span className="font-semibold text-white">Customer-Centric:</span> Your satisfaction is our priority—we offer top-notch support for all IT concerns.
            </li>
            <li>
              <span className="font-semibold text-white">Affordability:</span> Competitive pricing without compromising on quality.
            </li>
            <li>
              <span className="font-semibold text-white">Reliability:</span> We’re available 24/7 to ensure your systems stay up and running.
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition text-white font-semibold"
            >
              Connect Now
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition text-white font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/about.png"
            alt="About Us"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </main>
    </section>
  );
};

export default About;

