import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CodeMate VS-Code Extension',
      description: 'Intelligent code analysis extension for enhanced developer productivity with complex code identification, automated refactoring suggestions, and unit test generation.',
      technologies: ['VSCode API', 'TypeScript', 'JavaScript', 'ESComplex'],
      status: 'Production-ready, pending API integration',
      link: '',
      github: '',
    },
    {
      title: 'Microservices Architecture Implementation',
      description: 'Complete microservices ecosystem with service discovery, distributed configuration, API gateway for centralized routing, and distributed tracing with Zipkin.',
      technologies: ['Java Spring', 'Eureka Server', 'Config Server', 'Zipkin', 'GraphQL/DGS'],
      status: 'Trial Project',
      link: '',
      github: '',
    },
    {
      title: 'Women Empowerment Platform',
      description: 'Comprehensive platform featuring job portal, professional portfolio showcase, community support, secure email confirmation registration, and interactive chatbot functionality.',
      technologies: ['Django', 'JavaScript', 'CSS', 'HTML'],
      status: 'Completed',
      link: '',
      github: '',
    },
    {
      title: 'File Server & Management System',
      description: 'Secure file management system with role-based access control, JWT authentication, admin dashboard, and comprehensive CRUD operations with usage analysis.',
      technologies: ['Django', 'PostgreSQL', 'JWT', 'Email Authentication'],
      status: 'Completed',
      link: '',
      github: '',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Technical Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-800 flex-1">{project.title}</h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <Github size={20} className="text-slate-600" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <ExternalLink size={20} className="text-slate-600" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200">
                <span className="text-sm text-blue-600 font-medium">{project.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
