
import React from 'react';
import PageHeader from '../components/PageHeader';

const ServiceCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-2xl font-bold text-kayjay-blue mb-4">{title}</h3>
    <div className="text-gray-600 space-y-2">{children}</div>
  </div>
);

const ServicesPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Our Security Solutions" subtitle="A wide spectrum of services to meet both commercial and residential needs." />

      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title="Retail Trained Officers">
              <p>Specially trained guards for retail outlets, ensuring a safe and secure shopping environment.</p>
            </ServiceCard>
            <ServiceCard title="In-Store Civil Detectives">
              <p>Discreet undercover loss-prevention agents to protect your assets and minimize shrinkage.</p>
            </ServiceCard>
            <ServiceCard title="Civil Recovery Management">
              <p>Professional handling of recoveries, disputes, and security enforcement with tact and authority.</p>
            </ServiceCard>
            <ServiceCard title="Electronic Security Systems">
              <p>State-of-the-art CCTV systems, access control, intrusion alarms, and advanced sensors.</p>
            </ServiceCard>
            <ServiceCard title="Customer Service Officers">
              <p>Highly-trained front desk, visitor handling, and reception support personnel.</p>
            </ServiceCard>
            <ServiceCard title="Security Manpower / Guard Services">
              <p>Certified and trained security guards screened to the highest standards for competence and trustworthiness.</p>
            </ServiceCard>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Pre-employment Checks & Testing</h2>
              <p className="text-lg text-gray-700 mb-6">Before recruitment, every candidate undergoes a rigorous vetting process to ensure only reliable individuals are deployed.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Background / criminal record verification</li>
                <li>Aptitude testing</li>
                <li>Psychological and integrity assessments</li>
              </ul>
            </div>
            <div>
              <img src="https://picsum.photos/800/600?random=3" alt="Background check process" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src="https://picsum.photos/800/600?random=4" alt="Training session" className="rounded-lg shadow-xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Training & Development</h2>
              <p className="text-lg text-gray-700">We conduct extensive training courses—practical, theoretical, and scenario-based—for both local and international clients. Officers are trained in surveillance, emergency response, client handling, and technology usage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Cash Transit & Management</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">We deliver total cash management solutions designed to protect cash during transportation. Our protocols, armored vehicles, and trained personnel ensure maximum protection.</p>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
