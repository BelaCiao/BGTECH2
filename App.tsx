import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechAssistant from './components/TechAssistant';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <TechAssistant />
    </div>
  );
};

export default App;