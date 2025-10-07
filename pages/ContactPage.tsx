import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const ContactInfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-kayjay-blue text-kayjay-gold mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-kayjay-blue mb-3">{title}</h3>
    <div className="text-gray-600 space-y-1">{children}</div>
  </div>
);

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we'll just log the data and show a success message.
    // Later, this would be where you'd send the data to a server.
    console.log('Form data submitted:', formState);
    setSubmitted(true);
  };

  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We're here to help. Reach out to us with your security needs and we'll respond promptly." />

      <section className="py-16 md:py-24 bg-kayjay-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactInfoCard title="Head Office" icon={<IconMapPin />}>
              <p>618, Aluthmawatha Road,</p>
              <p>Colombo 15, Sri Lanka</p>
            </ContactInfoCard>
            <ContactInfoCard title="Phone" icon={<IconPhone />}>
              <p><a href="tel:+94112522302" className="hover:text-kayjay-gold">+94 (11) 252 2302</a></p>
              <p><a href="tel:+94112529242" className="hover:text-kayjay-gold">+94 (11) 252 9242</a></p>
              <p><a href="tel:+94112526060" className="hover:text-kayjay-gold">+94 (11) 252 6060</a></p>
              <p><a href="tel:+94114891888" className="hover:text-kayjay-gold">+94 (11) 489 1888</a></p>
            </ContactInfoCard>
            <ContactInfoCard title="Email" icon={<IconMail />}>
              <p><a href="mailto:kayjay@kayjay-group.com" className="hover:text-kayjay-gold">kayjay@kayjay-group.com</a></p>
              <p><a href="mailto:sales@kayjay-group.com" className="hover:text-kayjay-gold">sales@kayjay-group.com</a></p>
              <p><a href="mailto:marketing@kayjay-group.com" className="hover:text-kayjay-gold">marketing@kayjay-group.com</a></p>
            </ContactInfoCard>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-kayjay-blue mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-700">Feel free to send us your project details. We’ll respond promptly with a tailored proposal to meet your security requirements.</p>
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto">
              {submitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-md shadow-md" role="alert">
                  <p className="font-bold text-lg">Thank You!</p>
                  <p>Your message has been received. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                    <input type="tel" name="phone" id="phone" value={formState.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                  </div>
                   <div className="sm:col-span-1">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" name="subject" id="subject" required value={formState.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" rows={5} required value={formState.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kayjay-gold focus:border-kayjay-gold"></textarea>
                  </div>
                   <div className="sm:col-span-2 text-right">
                    <button type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-bold rounded-full text-kayjay-blue bg-kayjay-gold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kayjay-gold transition-transform transform hover:scale-105">
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
        </div>
      </section>
    </div>
  );
};

// SVG Icons
const IconMapPin = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const IconMail = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

export default ContactPage;