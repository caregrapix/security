
import React from 'react';
import PageHeader from '../components/PageHeader';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CashTransitPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Cash Transit & Cash Management" subtitle="Secure solutions that safeguard your cash assets through every link of the chain." />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-kayjay-blue mb-4">What We Offer</h2>
              <p className="text-lg text-gray-700 mb-6">In a world where cash remains a critical medium of exchange, its safe handling and transport is non-negotiable. We operate with strict protocols to minimize risk and ensure that cash reaches its destination securely, on time, every time.</p>
              <div className="space-y-4">
                  <div className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Armed escort and secure couriers</span>
                  </div>
                  <div className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Secure vehicles and transport logistics</span>
                  </div>
                  <div className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Route planning with risk mitigation</span>
                  </div>
                  <div className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Real-time tracking and monitoring</span>
                  </div>
                  <div className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Protocols for handling anomalies or emergencies</span>
                  </div>
              </div>
            </div>
            <div>
              <img src="https://picsum.photos/800/600?random=5" alt="Armored vehicle" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-kayjay-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Secure Your Assets</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">Trust KayJay for reliable and secure cash management services. Contact us to discuss your specific needs.</p>
          <a href="/#/contact" className="bg-kayjay-gold text-kayjay-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
            Get a Secure Quote
          </a>
        </div>
      </section>

    </div>
  );
};

export default CashTransitPage;
