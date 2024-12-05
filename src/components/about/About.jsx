import React from 'react';
import poster from '../../assets/poster.png'
const About = () => {  
  return (  
    <>
    <section className="py-12 bg-gray-100">  
      <div className="max-w-4xl mx-auto px-4 text-center">  
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our New Year Card Generator</h2>  
        <p className="text-gray-600 text-lg mb-8">  
          Our New Year Card Generator is a user-friendly platform designed to help you create personalized greeting cards effortlessly. Whether it's for friends, family, or colleagues, you can share your New Year wishes in a beautiful and memorable way.  
        </p>  

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Use Cases</h3>  
        <ul className="text-left list-disc list-inside text-gray-600 mb-8">  
          <li>Send personalized New Year greetings to loved ones.</li>  
          <li>Share creative cards on social media to spread the festive spirit.</li>  
          <li>Create professional New Year cards for clients and business contacts.</li>  
        </ul>  

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">How to Use</h3>  
        <ol className="text-left list-decimal list-inside text-gray-600 mb-8">  
          <li>Browse through our collection of 1-15 New Year templates.</li>  
          <li>Click on your favorite template to get started.</li>  
          <li>Fill in the details like name, address, and upload a photo.</li>  
          <li>Generate your personalized New Year card instantly.</li>  
          <li>Download or share your card with just a click!</li>  
        </ol>  

        <p className="text-gray-600 text-lg">Start creating your card now and make this New Year unforgettable!</p>  
      </div>  
    </section>  
    <div className="w-4/4 md:w-3/4 mx-auto  px-4 pt-14  flex justify-center items-center">
  <img src={poster} alt="Poster" className="max-w-full h-auto rounded-lg border-gray-300 border-2 shadow-lg " />
</div>
</>
  );  
};  

export default About;
