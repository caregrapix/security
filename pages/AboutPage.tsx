
import React from 'react';
import PageHeader from '../components/PageHeader';

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="About KayJay Security" subtitle="Decades of service in the security and surveillance industry." />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://picsum.photos/800/600?random=2" alt="Company office" className="rounded-lg shadow-xl"/>
            </div>
            <div className="text-lg text-gray-700 space-y-4">
              <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Our Story</h2>
              <p>KayJay Security is a private limited company with over 40 years of service in the security and surveillance industry. We specialize in safeguarding assets, people, and infrastructure across Sri Lanka, bringing together decades of operational experience and evolving technical capability.</p>
              <p>With our deep roots and sustained presence in this field, we have earned the trust of numerous institutions and individuals. Our mission is to deliver best-in-class security solutions—comprehensive, customized, and effectively executed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-kayjay-blue mb-3">Our Vision</h3>
              <p className="text-gray-600">To be Sri Lanka’s foremost security solutions provider, innovating at the intersection of technology and manpower.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-kayjay-blue mb-3">Our Mission</h3>
              <p className="text-gray-600">To deliver holistic security that marries people, systems, and processes—ensuring safety, reliability, and client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-kayjay-blue mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-kayjay-blue">Professionalism & Integrity</h4>
            </div>
            <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-kayjay-blue">Accountability & Discretion</h4>
            </div>
            <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-kayjay-blue">Continuous Learning</h4>
            </div>
            <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-kayjay-blue">Client-Centric Approach</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
