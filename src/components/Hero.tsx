import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Edward Hanson
                <span className="block text-blue-600">Mensah</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 font-medium">
                Backend Engineer
              </p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Experienced Backend Engineer with 2+ years building scalable
              enterprise applications using Java Spring and Python Django.
              Specialized in microservices architecture and event-driven
              systems.
            </p>

            <div className="space-y-3 text-slate-600">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-blue-600" />
                <span>Kumasi, Ghana</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-600" />
                <span>+233 247 799 544</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-600" />
                <a
                  href="mailto:ehanson787@gmail.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  ehanson787@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/edward-hanson-147bb124b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all group"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Edward-Hanson"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-slate-800 hover:text-white transition-all group"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:ehanson787@gmail.com"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all group"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <img
                  src="/image.png"
                  alt="Edward Hanson Mensah"
                  className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
