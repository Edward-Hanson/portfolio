import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ehanson787@gmail.com',
      link: 'mailto:ehanson787@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+233 247 799 544',
      link: 'tel:+233247799544',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kumasi, Ghana',
      link: '',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/Edward-Hanson',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/edward-hanson-147bb124b',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{item.label}</h3>
                  <p className="text-slate-600">{item.value}</p>
                </div>
              );

              return item.link ? (
                <a key={index} href={item.link} className="block hover:-translate-y-1 transition-transform">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-50 rounded-xl hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 group"
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600">
            &copy; {new Date().getFullYear()} Edward Hanson Mensah. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
