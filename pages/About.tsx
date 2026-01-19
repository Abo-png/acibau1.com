import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Header */}
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Our Chapter</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are the student chapter of the American Concrete Institute at Beirut Arab University, dedicated to excellence in civil and architectural engineering.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Mission/Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading student platform for concrete technology and structural engineering innovation in the region.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-indigo-600">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center text-indigo-600 mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To bridge the gap between academic theory and practical application by organizing seminars, site visits, and competitions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-emerald-600">
            <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center text-emerald-600 mb-4">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrity, Academic Excellence, Collaboration, and Sustainable Engineering Practices.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Chapter Objectives</h2>
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <span className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1 text-xs">1</span>
                   <span>Promote student interest in concrete engineering and technology.</span>
                 </li>
                 <li className="flex items-start">
                   <span className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1 text-xs">2</span>
                   <span>Provide opportunities for students to interact with industry professionals.</span>
                 </li>
               </ul>
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <span className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1 text-xs">3</span>
                   <span>Encourage participation in ACI international competitions.</span>
                 </li>
                 <li className="flex items-start">
                   <span className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1 text-xs">4</span>
                   <span>Facilitate access to the latest ACI codes and standards.</span>
                 </li>
               </ul>
             </div>
             {/* Decorative circle */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;