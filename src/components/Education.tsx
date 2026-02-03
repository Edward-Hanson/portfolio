import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  University of Energy and Natural Resources
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-2">BSc. Computer Science</p>
                <p className="text-slate-600 mb-3">Sept 2019 - October 2023</p>
                <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-4 py-2 inline-block">
                  <Award size={20} className="text-blue-600" />
                  <span className="font-bold text-slate-800">CGPA: 3.77 / 4.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
