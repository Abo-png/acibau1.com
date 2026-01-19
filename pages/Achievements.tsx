import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { ACHIEVEMENTS } from '../services/data';

const Achievements: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Hall of Fame</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">Our Achievements</h1>
          <p className="mt-4 text-xl text-gray-600">Celebrating milestones and excellence in engineering.</p>
        </div>

        <div className="relative">
          {/* Vertical Line for Timeline (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {ACHIEVEMENTS.map((item, index) => (
              <div key={item.id} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 md:px-12 mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
                    {/* Arrow for Desktop */}
                    <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-b border-l border-gray-100 ${index % 2 === 0 ? '-left-2 border-l-0 border-b-0 border-r border-t' : '-right-2'}`}></div>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar size={14} className="mr-2" />
                      {item.date}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center Marker */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-md z-10">
                   <Award size={14} className="text-white" />
                </div>

                {/* Image Side */}
                <div className="w-full md:w-1/2 md:px-12">
                  <div className="rounded-2xl overflow-hidden shadow-md h-64 md:h-80">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;