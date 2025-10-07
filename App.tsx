import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyKayJayPage from './pages/WhyKayJayPage';
import CareersPage from './pages/CareersPage';
import CashTransitPage from './pages/CashTransitPage';
import ContactPage from './pages/ContactPage';
import ExpertisePage from './pages/ExpertisePage';
import PrimeMoversPage from './pages/PrimeMoversPage';
import ScrollToTop from './components/ScrollToTop';
import CashManagementPage from './pages/CashManagementPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="solutions" element={<ServicesPage />} />
          <Route path="why-kayjay" element={<WhyKayJayPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="cash-transit" element={<CashTransitPage />} />
          <Route path="cash-management" element={<CashManagementPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="expertise" element={<ExpertisePage />} />
          <Route path="prime-movers" element={<PrimeMoversPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;