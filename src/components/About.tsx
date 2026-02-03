import { Code2, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'Expert in designing robust APIs and implementing microservices architecture',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Proven track record in optimizing database queries and improving system performance',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experienced in working with cross-functional teams in agile environments',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-slate-600 leading-relaxed text-center">
            Experienced Backend Engineer with 2+ years of hands-on experience building scalable enterprise applications using Java Spring ecosystem and Python Django. Proven track record in microservices architecture, performance optimization, and leading technical implementations in cross-functional teams. Expertise in designing robust APIs, optimizing database queries, and implementing event-driven architecture with message brokers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
