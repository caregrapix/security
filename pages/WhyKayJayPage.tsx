
import React from 'react';
import PageHeader from '../components/PageHeader';

const DifferentiatorCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-blue text-kayjay-gold mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-kayjay-blue mb-3">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
);

const WhyKayJayPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Why Choose KayJay Security?" subtitle="Combining manpower and electronic security for holistic, high-impact solutions." />
      
      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DifferentiatorCard title="Integrated Approach" icon={<IconShield />}>
              We don’t just supply guards or systems—we integrate both to form layered security that is robust and responsive.
            </DifferentiatorCard>
            <DifferentiatorCard title="Experienced Personnel" icon={<IconUsers />}>
              All staff are meticulously screened, certified, and continuously trained to handle any situation with professionalism.
            </DifferentiatorCard>
            <DifferentiatorCard title="Proven Track Record" icon={<IconTrophy />}>
              Decades of service and a respected reputation across public and private sectors stand as testament to our capabilities.
            </DifferentiatorCard>
            <DifferentiatorCard title="Client-Centered Solutions" icon={<IconTarget />}>
              Each contract is customized to the client’s specific assets, risk profile, and operational environment for maximum effectiveness.
            </DifferentiatorCard>
            <DifferentiatorCard title="Reliability & Accountability" icon={<IconClipboard />}>
              Our operations are structured for complete accountability, transparency, and an efficient, rapid response when you need it most.
            </DifferentiatorCard>
            <DifferentiatorCard title="Technological Edge" icon={<IconChip />}>
               We leverage the latest in surveillance and access control technology to provide you with a modern security infrastructure.
            </DifferentiatorCard>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Ready for Unparalleled Security?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">Partner with a leader in Sri Lankan security. Let us build a tailored solution that brings you peace of mind.</p>
          <a href="/#/contact" className="bg-kayjay-gold text-kayjay-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
            Request a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

// SVG Icons
const IconShield = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 018.618-3.04 12.02 12.02 0 008.382-11.988z" /></svg>;
const IconUsers = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13a5.975 5.975 0 013 1.803" /></svg>;
const IconTrophy = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v-2m6 2v-2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6a9 9 0 100 12A9 9 0 0012 6zm-2 9h4" /></svg>; // Simplified trophy
const IconTarget = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 15.5l-3-3m0 0l-3 3m3-3v8m0-13a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconClipboard = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>;
const IconChip = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1h-5M9 3v2m6-2v2m-3 14v-5m-3 5v-3m6 3v-4" /></svg>; // Simplified chip

export default WhyKayJayPage;
