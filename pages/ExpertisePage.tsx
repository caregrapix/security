
import React from 'react';
import PageHeader from '../components/PageHeader';

const ExpertiseCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-kayjay-blue mb-4">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
);

const ExpertisePage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Our Expertise" subtitle="Specialized services that reinforce our manpower quality and compatibility with client expectations." />
      
      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExpertiseCard title="Pre-Employment Background Checks">
              We conduct thorough verifications of candidates' backgrounds, including criminal record checks, to ensure the utmost reliability and trustworthiness of our personnel.
            </ExpertiseCard>
            <ExpertiseCard title="Aptitude Testing">
              Our comprehensive aptitude tests evaluate candidates on critical thinking, problem-solving, and situational awareness to ensure they are well-suited for security roles.
            </ExpertiseCard>
            <ExpertiseCard title="Extensive Training Modules">
              We provide continuous, in-depth training covering everything from on-the-ground tactics and emergency response to customer service and technology use, keeping our team at the industry forefront.
            </ExpertiseCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;
