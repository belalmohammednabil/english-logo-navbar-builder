
import React from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, FileText, User, CircleUser, BarChart2, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative py-12 overflow-hidden">
      {/* Right floating elements */}
      <div className="absolute right-0 top-10 space-y-28 hidden md:block">
        <FloatingElement 
          icon={<FileText className="text-purple-600" />}
          text="مراجعة سيرتك الذاتية"
          delay="0s"
        />
        <FloatingElement 
          icon={<Sparkles className="text-purple-600" />}
          text="اكتشف قدراتك الشخصية"
          delay="1.5s"
        />
        <FloatingElement 
          icon={<User className="text-purple-600" />}
          text="اختر تخصصك الجامعي/المهني"
          delay="3s"
        />
      </div>
      
      {/* Left floating elements */}
      <div className="absolute left-0 top-10 space-y-28 hidden md:block">
        <FloatingElement 
          icon={<Rocket className="text-purple-600" />}
          text="انطلق بحياتك المهنية"
          delay="2s"
        />
        <FloatingElement 
          icon={<BarChart2 className="text-purple-600" />}
          text="مناقشة المشاكل المهنية"
          delay="3.5s"
        />
        <FloatingElement 
          icon={<CircleUser className="text-purple-600" />}
          text="براند شخصي"
          delay="1s"
        />
      </div>
      
      {/* Main content */}
      <div className="max-w-3xl mx-auto text-center z-10 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          اكتشف <span className="bg-green-100 px-2">مفاتيح</span> النجاح 
          معنا و <span className="bg-green-100 px-2">نمّي</span> حياتك المهنية
        </h1>
        
        <p className="text-xl text-gray-700 mb-3 font-cairo">
          ساعدنا أكثر من 200,000 شخص في مسيرتهم المهنية
        </p>
        
        <p className="text-lg text-gray-600 mb-8 font-cairo">
          منصة مخصصة للطالب والخريج والمهني
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Button 
            className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-6 text-lg"
          >
            احجز جلستك الإرشادية
          </Button>
          
          <Button 
            variant="outline" 
            className="bg-white hover:bg-gray-100 border-black text-black rounded-full px-6 py-6 text-lg"
          >
            اختر ميولك المهنية
          </Button>
        </div>
        
        <p className="text-sm text-blue-400 hover:underline cursor-pointer">
          مدير وتحتاج إرشاد لموظفيك؟ تواصل معنا
        </p>
      </div>
    </div>
  );
};

// Floating element component with animation
const FloatingElement = ({ icon, text, delay }) => {
  return (
    <div 
      className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
      style={{
        animation: `float 4s ease-in-out infinite`,
        animationDelay: delay
      }}
    >
      {icon}
      <span className="text-purple-800 font-medium">{text}</span>
    </div>
  );
};

export default HeroSection;
