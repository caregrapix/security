
import React from 'react';
import PageHeader from '../components/PageHeader';

const PrimeMoversPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="KayJay Prime Movers" subtitle="Expanding our logistics and operational capabilities in Sri Lanka." />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <img src="https://picsum.photos/800/600?random=6" alt="Transportation truck" className="rounded-lg shadow-xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Our Transportation Arm</h2>
              <p className="text-lg text-gray-700">
                As part of our growing group of companies, KayJay now also offers transportation services under the Prime Movers division. This expansion enhances our logistical framework, allowing us to provide even more comprehensive and integrated solutions to our clients across Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrimeMoversPage;
