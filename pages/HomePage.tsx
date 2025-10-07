
import React from 'react';
import { Link } from 'react-router-dom';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-kayjay-blue text-white h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-kayjay-gold">
            KayJay Security
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-4xl mx-auto">
            Pioneering Brand of Security & Surveillance in Sri Lanka
          </p>
          <p className="mt-6 text-md md:text-lg max-w-3xl mx-auto text-gray-300">
            With over 35+ years’ expertise, KayJay has firmly established itself at the forefront of the industry, offering fully integrated security systems, training, and manpower solutions to clients across Sri Lanka.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="bg-kayjay-gold text-kayjay-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
              Get a Quotation
            </Link>
          </div>
        </div>
      </section>

      {/* Why KayJay Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-kayjay-blue">Why KayJay?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Integrated Solutions</h3>
              <p className="text-gray-600">Combining manpower + electronic systems to deliver effective, high-quality security solutions.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Trained Personnel</h3>
              <p className="text-gray-600">Well-trained personnel, vetted and certified for your peace of mind.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Full Spectrum of Services</h3>
              <p className="text-gray-600">Surveillance, access control, guard services, cash transit & more.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Trusted by Many</h3>
              <p className="text-gray-600">Trusted by a wide range of public & private sector clients across Sri Lanka.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-kayjay-light-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-kayjay-blue mb-4">Our Promise</h2>
            <p className="text-lg text-gray-700 mb-6">At KayJay, we are built on a foundation of trust and a commitment to excellence. Our promise is simple yet profound.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 flex-shrink-0" />
                <span className="text-xl font-semibold">Integrity.</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 flex-shrink-0" />
                <span className="text-xl font-semibold">Security.</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 flex-shrink-0" />
                <span className="text-xl font-semibold">Peace of Mind.</span>
              </div>
            </div>
            <Link to="/contact" className="mt-8 inline-block bg-kayjay-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors">
              Contact Us Today
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
             <img src="https://picsum.photos/600/400?random=1" alt="Security Professional" className="rounded-lg shadow-2xl"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
