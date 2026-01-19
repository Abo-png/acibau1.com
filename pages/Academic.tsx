import React, { useState } from 'react';
import { Book, FileText, Download, ExternalLink, ChevronRight, Folder } from 'lucide-react';
import { ACADEMIC_RESOURCES, CIVIL_CURRICULUM } from '../services/data';
import { AcademicCategory } from '../types';

const Academic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AcademicCategory>(AcademicCategory.CIVIL);

  const categories = Object.values(AcademicCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Academic Resources</h1>
          <p className="text-gray-600 mt-2">Curated study materials for engineering excellence.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Tabs */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700">Departments</h3>
              </div>
              <div className="flex flex-col">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`text-left px-4 py-4 border-l-4 transition-all ${
                      activeTab === cat
                        ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium'
                        : 'border-transparent text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[400px]">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{activeTab}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {activeTab === AcademicCategory.CIVIL 
                      ? 'Full Curriculum & Materials'
                      : `Found ${ACADEMIC_RESOURCES[activeTab].length} resources`
                    }
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                {activeTab === AcademicCategory.CIVIL ? (
                  <div className="space-y-8">
                    {CIVIL_CURRICULUM.map((section, idx) => (
                      <div key={idx} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                        <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {section.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {section.courses.map((course, cIdx) => (
                            <div 
                              key={cIdx} 
                              className="group flex items-center p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all cursor-pointer"
                            >
                              <div className="mr-3 text-blue-300 group-hover:text-blue-600">
                                <Folder size={18} />
                              </div>
                              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-800">
                                {course}
                              </span>
                              <ChevronRight size={14} className="ml-auto text-gray-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {ACADEMIC_RESOURCES[activeTab].map((resource) => (
                      <div key={resource.id} className="flex items-start p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div className={`p-3 rounded-lg mr-4 ${
                          resource.type === 'pdf' ? 'bg-red-100 text-red-600' :
                          resource.type === 'link' ? 'bg-blue-100 text-blue-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {resource.type === 'pdf' ? <Download size={20} /> :
                           resource.type === 'link' ? <ExternalLink size={20} /> :
                           <FileText size={20} />}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{resource.title}</h4>
                            <span className="text-xs font-semibold uppercase bg-gray-200 text-gray-600 px-2 py-0.5 rounded ml-2">
                              {resource.type}
                            </span>
                          </div>
                          {resource.description && (
                            <p className="text-gray-500 text-sm mt-1">{resource.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                    {ACADEMIC_RESOURCES[activeTab].length === 0 && (
                      <div className="text-center py-12 text-gray-500 italic">
                        No resources available for this category yet.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;