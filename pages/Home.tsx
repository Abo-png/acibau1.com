import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Award, BookOpen, Users } from 'lucide-react';
import { EVENTS, ACHIEVEMENTS } from '../services/data';

const Home: React.FC = () => {
  const latestEvent = EVENTS.find(e => e.status === 'upcoming') || EVENTS[0];
  const latestAchievement = ACHIEVEMENTS[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://picsum.photos/seed/engineering/1920/1080" 
            alt="Engineering Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-400/30 bg-blue-900/30 backdrop-blur-sm">
             <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">ACI BAU Chapter</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Building the Future <br />
            <span className="text-blue-500">Concrete Solutions</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10">
            Join the premier academic community for Civil and Architectural Engineering students at Beirut Arab University.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              to="/register" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
            >
              Join the Chapter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-lg font-semibold transition-all flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-24 relative z-10">
            {[
              { title: 'Who We Are', icon: Users, desc: 'Meet our team and mission.', link: '/about', color: 'bg-indigo-600' },
              { title: 'Achievements', icon: Award, desc: 'Celebrating our success.', link: '/achievements', color: 'bg-emerald-600' },
              { title: 'Upcoming Events', icon: Calendar, desc: 'Seminars and workshops.', link: '/events', color: 'bg-blue-600' },
              { title: 'Academic Hub', icon: BookOpen, desc: 'Resources for success.', link: '/academic', color: 'bg-amber-600' },
            ].map((card, idx) => (
              <Link 
                key={idx} 
                to={card.link}
                className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
              >
                <div className={`h-12 w-12 rounded-lg ${card.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Latest Event Highlight */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-blue-600 font-semibold uppercase tracking-wider text-sm">
                <span className="w-8 h-0.5 bg-blue-600"></span>
                <span>Don't Miss Out</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Next Major Event</h2>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row gap-6">
                <img 
                  src={latestEvent.imageUrl} 
                  alt={latestEvent.title} 
                  className="w-full md:w-48 h-32 object-cover rounded-lg shadow-sm"
                />
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full mb-3">
                    {latestEvent.status === 'upcoming' ? 'Registration Open' : 'Coming Soon'}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{latestEvent.title}</h3>
                  <div className="text-gray-500 text-sm space-y-1 mb-4">
                     <p className="flex items-center"><Calendar size={14} className="mr-2"/> {latestEvent.date} • {latestEvent.time}</p>
                     <p className="flex items-center"><Users size={14} className="mr-2"/> {latestEvent.location}</p>
                  </div>
                  <Link to="/events" className="text-blue-600 font-medium text-sm hover:underline">View Event Details &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Achievement Highlight */}
            <div className="space-y-6">
               <div className="flex items-center space-x-2 text-indigo-600 font-semibold uppercase tracking-wider text-sm">
                <span className="w-8 h-0.5 bg-indigo-600"></span>
                <span>Our Pride</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Latest Achievement</h2>
               <div className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"/>
                 <img 
                   src={latestAchievement.imageUrl} 
                   alt={latestAchievement.title} 
                   className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                   <h3 className="text-2xl font-bold mb-2">{latestAchievement.title}</h3>
                   <p className="text-gray-200 text-sm line-clamp-2">{latestAchievement.description}</p>
                   <Link to="/achievements" className="mt-4 inline-block text-sm font-medium hover:text-blue-300 transition-colors">Read Full Story &rarr;</Link>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;