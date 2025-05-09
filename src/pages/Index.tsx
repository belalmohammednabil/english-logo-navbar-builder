
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50" dir="rtl">
      <div className="container mx-auto px-4 py-4">
        <Navbar />
      </div>
      <div className="container mx-auto py-6 px-4">
        <HeroSection />
      </div>
    </div>
  );
};

export default Index;
