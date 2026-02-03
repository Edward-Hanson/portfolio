import { Award, Trophy } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Developer Associate Certification',
      date: 'Sept 2025',
      type: 'certification',
      link: 'https://www.credly.com/badges/741d3314-abf7-4ebf-8dda-1f0f64a52117/public_url',
    },
    {
      title: 'AI HACKATHON - AMALITECH - 1st Runner Up',
      date: 'Nov 2024',
      type: 'achievement',
    },
    {
      title: 'AWS Cloud Practitioner Certification',
      date: 'April 2024',
      type: 'certification',
      link: 'https://www.credly.com/badges/ad09ed98-85e7-48de-8ed2-f93ff64510cc/public_url',
    },
    {
      title: 'Leadership Empowerment Summit',
      date: 'October 2020',
      type: 'certification',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const content = (
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      cert.type === 'achievement' ? 'bg-amber-500' : 'bg-blue-600'
                    }`}
                  >
                    {cert.type === 'achievement' ? (
                      <Trophy size={24} className="text-white" />
                    ) : (
                      <Award size={24} className="text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{cert.title}</h3>
                    <p className="text-slate-600">{cert.date}</p>
                  </div>
                </div>
              </div>
            );

            return cert.link ? (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
