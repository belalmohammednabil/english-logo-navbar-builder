
import React from 'react';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 py-4">
        <Navbar />
      </div>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 font-cairo">مرحباً بكم في Flawless</h1>
          <p className="text-xl text-gray-600 font-cairo">طريقكم نحو التميز</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
