import React from 'react';
import PageHeader from '../components/PageHeader';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CashManagementPage: React.FC = () => {
    const clients = [
        "Citibank", "NDB Bank", "DFCC Bank", "Seylan Bank", "LOLC Finance", "LB Finance", 
        "Arpico Finance", "LankaTiles", "Cargills", "Singer Finance", "ODEL", 
        "Cinnamon Hotels", "John Keells Logistics", "United Motors", "Mobitel", "Public Bank", 
        "UniMo", "Perera & Sons", "Nawaloka Hospitals", "UltraTech Cement", "LECO"
    ];
    
    const branches = [
        "Colombo 15 (BCP)", "Jaffna", "Batticaloa", "Anuradhapura", "Kurunegala", "Kandy",
        "Bandarawela", "Rathnapura", "Gampaha", "Matara", "Kalutara"
    ];

  return (
    <div>
      <PageHeader 
        title="KAYJAY Cash Management" 
        subtitle="ISO 9001:2015 Certified | Over 35 Years of Industry Leadership" 
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://picsum.photos/800/600?random=7" alt="Secure cash handling" className="rounded-lg shadow-xl"/>
            </div>
            <div className="text-lg text-gray-700 space-y-4">
              <h2 className="text-3xl font-bold text-kayjay-blue mb-4">About Us</h2>
              <p>KAYJAY Cash Management is Sri Lanka’s premier provider of secure, end-to-end cash handling solutions. With over three decades of experience, we’ve earned the trust of leading banks, corporates, and hospitality brands through our commitment to professionalism, integrity, and innovation.</p>
              <p>Our specialized ARM division ensures the highest standards in asset protection, financial logistics, and operational efficiency. We continuously evolve through cutting-edge technology, rigorous training, and global best practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-kayjay-blue mb-3">Our Vision</h3>
              <p className="text-gray-600">To be the most preferred total cash management solutions provider in Sri Lanka.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-kayjay-blue mb-3">Our Mission</h3>
              <p className="text-gray-600">To deliver the highest standards of service by empowering our team, enhancing stakeholder relationships, and cultivating a culture of excellence and integrity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-kayjay-blue mb-12">Our Services</h2>
            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full bg-white">
                    <thead className="bg-kayjay-blue text-white">
                        <tr>
                            <th className="text-left py-4 px-6 font-semibold">Category</th>
                            <th className="text-left py-4 px-6 font-semibold">Services</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        <tr className="border-b">
                            <td className="py-4 px-6 font-medium">Cash Logistics</td>
                            <td className="py-4 px-6">Cash-in-transit, secure armed guard services, vault facilities</td>
                        </tr>
                        <tr className="bg-kayjay-light-gray border-b">
                            <td className="py-4 px-6 font-medium">ATM & SSD Management</td>
                            <td className="py-4 px-6">Replenishment, maintenance, reconciliation, journal roll replacement</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-4 px-6 font-medium">Financial Operations</td>
                            <td className="py-4 px-6">Salary packeting & distribution, teller services, foreign currency handling</td>
                        </tr>
                        <tr className="bg-kayjay-light-gray border-b">
                            <td className="py-4 px-6 font-medium">Technology & Reporting</td>
                            <td className="py-4 px-6">Real-time cash tracking, dashboards, audit trails, exception alerts</td>
                        </tr>
                        <tr>
                            <td className="py-4 px-6 font-medium">Compliance & Security</td>
                            <td className="py-4 px-6">Role-based access, customizable reports, central bank deposits</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Fleet & Infrastructure</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> GPS-enabled, CCTV-equipped soft-skin vehicles with engine force-stop systems.</li>
                    <li className="flex items-start"><CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> Compliant with international security protocols.</li>
                    <li className="flex items-start"><CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> Deployment tailored to client requirements.</li>
                    <li className="flex items-start"><CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> Vault facilities maintained to global safety standards.</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Our Team</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> Dedicated operational units for each service vertical.</li>
                    <li className="flex items-start"><CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> 100% vetting and training prior to deployment.</li>
                    <li className="flex items-start"><CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> Certified in weapons handling and operational procedures.</li>
                    <li className="flex items-start"><CheckIcon className="h-6 w-6 text-kayjay-gold mr-3 mt-1 flex-shrink-0" /> Adherence to high professional and security benchmarks.</li>
                  </ul>
                </div>
            </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-kayjay-blue mb-12">Our Branch Network</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {branches.map(branch => (
                <div key={branch} className="bg-kayjay-light-gray p-4 rounded-lg">
                    <p className="font-semibold text-kayjay-blue">{branch}</p>
                </div>
            ))}
          </div>
          <div className="mt-8 text-center text-gray-600">
             <p><span className="font-bold">Corporate Office:</span> No. 337A, Rajagiriya Road, Nawala</p>
             <p><span className="font-bold">Head Office:</span> No. 500, Nawala Road, Rajagiriya</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-kayjay-blue mb-12">Our Valued Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4 text-center">
            {clients.map(client => (
                <div key={client}>
                    <p className="text-gray-700 font-medium">{client}</p>
                </div>
            ))}
            <div className="text-gray-700 font-medium">...and many more.</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CashManagementPage;