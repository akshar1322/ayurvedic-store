"use client";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container text-white mx-auto p-4">
      <nav className="text-sm p-4 text-yellow-50 mt-5 mb-4">
                <a href="/" className="hover:underline">Home</a> &gt;
                <a href="/about" className="hover:underline p-1">AboutUs</a>
              </nav>
        
        <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

        {/* Mission Section */}
        <div className="bg-[#8B5D48] text-white  p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-white">
            At [Your Brand Name], our mission is to provide high-quality skincare products that nourish and rejuvenate your skin. We believe in the power of natural ingredients and cutting-edge science to help you achieve a radiant, healthy complexion.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-[#8B5D48] p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-white">
            Founded in [Year], [Your Brand Name] started as a small family-owned business with a passion for skincare. Over the years, we've grown into a trusted brand, offering a wide range of products designed to meet the unique needs of every skin type.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-[#8B5D48] p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-5 text-white">
            <li>Commitment to quality and safety</li>
            <li>Use of natural and sustainable ingredients</li>
            <li>Customer satisfaction and trust</li>
            <li>Innovation in skincare science</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="bg-[#8B5D48] p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <p className="text-white">
            Our team of skincare experts, scientists, and customer service professionals is dedicated to helping you achieve your skincare goals. We're here to support you every step of the way.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
          <p className="text-white mb-6">
            Discover the difference that [ Ayurveda] can make for your skin. Explore our products and start your skincare journey today!
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
