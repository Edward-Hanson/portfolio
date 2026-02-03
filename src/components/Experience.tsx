import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Backend Engineer (Associate)',
      company: 'Amalitech',
      location: 'Takoradi',
      period: 'Oct 2024 - Present',
      projects: [
        {
          name: 'Payroll Management System',
          achievements: [
            'Architected event-driven payroll processing using Kafka for reliable message handling',
            'Implemented Audit logs for accountability and monitoring',
            'Implemented GraphQL APIs to optimize data fetching and reduce over-fetching issues',
            'Optimized database queries resulting in improved system performance',
            'Integrated Sentry for comprehensive error monitoring',
            'Enhanced test coverage through comprehensive unit test implementation',
          ],
        },
        {
          name: 'Finance and Control System',
          achievements: [
            'Developed financial data processing modules using Kafka for real-time transaction handling',
            'Built GraphQL resolvers for complex financial reporting and analytics',
            'Implemented data validation and error handling mechanisms with Sentry integration',
          ],
        },
        {
          name: 'Procurement Management System',
          achievements: [
            'Developed a procurement management system to track daily requisitions',
            'Implemented a low-level access level management to ensure refined authorization',
            'Implemented AOP (audit logging) at all level of mutations for audit purposes',
            'Implemented a dashboard to give a high level overview of the system activity'
          ]
        }
      ],
    },
    {
      title: 'Backend Engineer (National Service)',
      company: 'Amalitech',
      location: 'Takoradi',
      period: 'Nov 2023 - Sep 2024',
      projects: [
        {
          name: 'Hospital Booking Platform',
          achievements: [
            'Led technical planning and implementation of core booking logic',
            'Built real-time chat system and notification system using WebSocket.IO',
            'Designed and implemented PostgreSQL database schema with optimized queries',
            'Used Flyway for database migration',
            'Developed messaging interfaces using Thymeleaf template engine',
          ],
        },
      ],
    },
    {
      title: 'I.T Support (Internship)',
      company: 'Ghana Revenue Authority (G.R.A) – Audit Department',
      location: 'Takoradi',
      period: 'Oct 2022 - Jan 2023',
      projects: [
        {
          name: '',
          achievements: [
            'Helped with the digitalization of invoices for auditing via MS-Excel',
            'Troubleshot internet connectivity failure, printers and photocopy machines',
            'Drafting and fixing templates for automated calculation after input',
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-600">{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 mt-2 sm:mt-0">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-6 mt-6">
                  {exp.projects.map((project, projectIndex) => (
                    <div key={projectIndex}>
                      {project.name && (
                        <h4 className="text-lg font-bold text-slate-700 mb-3">{project.name}</h4>
                      )}
                      <ul className="space-y-2 ml-5">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-slate-600 relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:font-bold">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
