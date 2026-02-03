const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['Java', 'Spring Boot', 'Python', 'Django', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Hibernate', 'SQLite'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (S3, ECS, Beanstalk)', 'Docker', 'Git Actions', 'AWS Certified'],
    },
    {
      title: 'Messaging & APIs',
      skills: ['Kafka', 'RabbitMQ', 'GraphQL', 'REST APIs', 'WebSocket.IO', 'SNS'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Maven', 'Sentry', 'Flyway', 'Thymeleaf', 'SonarQube'],
    },
    {
      title: 'Development Practices',
      skills: ['Microservices', 'TDD', 'Async Programming', 'Performance Optimization'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-blue-600">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
