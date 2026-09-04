


import React from 'react';

const Home = () => {
  return (
    <>
      {/* Hero Section 1 */}
      <main className="bg-[#0f0f0f] text-white py-16 px-4">
        <section className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-purple-600 text-xl font-semibold">
              We are the World's Best IT Company
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Welcome to <span className="text-purple-600">Avinash Technical</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Are you ready to take your business to the next level with cutting-edge IT solutions?
              <br />
              Look no further! At Avinash Technical, we provide innovative services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
                  Contact Me
                </button>
              </a>
              <a href="/services">
                <button className="border-2 border-blue-600 hover:bg-blue-700 hover:text-white text-blue-500 font-semibold py-3 px-6 rounded-lg transition">
                  Learn More
                </button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/home.png"
              alt="Hero Banner"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-contain"
            />
          </div>
        </section>
      </main>

      {/* Analytics Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center rounded-xl shadow-lg p-6">
          {[ 
            { number: "50+", label: "Registered Companies" },
            { number: "100,000+", label: "Happy Clients" },
            { number: "500+", label: "Well Known Developers" },
            { number: "24/7", label: "Service" },
          ].map((item, index) => (
            <div
              key={index}
              className={`px-4 ${index !== 3 ? 'border-r border-gray-300' : ''}`}
            >
              <h2 className="text-3xl font-bold text-blue-600">{item.number}</h2>
              <p className="text-gray-700 font-medium mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Section 2 */}
      <main className="bg-[#0f0f0f] text-white py-16 px-4">
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/design.png"
              alt="Design Banner"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-purple-500 text-xl font-semibold">We are here to help you</p>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-purple-600">Get Started</span> Today
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Ready to build a more efficient and secure IT infrastructure?
              Contact us for a free consultation and let's make your digital vision a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/contact">
                <button className="bg-purple-600 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition">
                  Contact Me
                </button>
              </a>
              <a href="/services">
                <button className="border-2 border-purple-600 hover:bg-purple-700 hover:text-white text-pupurple-500 font-semibold py-3 px-6 rounded-lg transition">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Services Scrolling Section */}
     {/* Services Scrolling Section */}
<section className="bg-purple-600 py-8">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center text-white mb-6">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <p className="text-lg">Explore the variety of services we offer</p>
    </div>

    {/* Marquee Wrapper */}
    <div className="overflow-hidden relative">
      {/* Scrolling Content */}
      <div className="whitespace-nowrap animate-marquee flex gap-16 min-w-max">
        {[
          "Web Development",
          "App Development",
          "SEO Services",
          "UI/UX Design",
          "Cloud Computing",
          "E-Commerce Solutions",
        ]
          .concat([
            "Web Development",
            "App Development",
            "SEO Services",
            "UI/UX Design",
            "Cloud Computing",
            "E-Commerce Solutions",
          ]) // Duplicate for continuous loop
          .map((service, index) => (
            <span key={index} className="text-xl font-semibold text-white">
              {service}
            </span>
          ))}
      </div>
    </div>
  </div>
</section>


      
<style>{`
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
`}</style>


    </>
  );
};

export default Home;



