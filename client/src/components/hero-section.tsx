import { Mail, Phone, ExternalLink } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-name">
            Ayush Singh
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100" data-testid="hero-title">
            Full Stack Developer & Tech Enthusiast
          </p>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto" data-testid="hero-description">
            Building innovative web applications with modern technologies. 
            Passionate about creating scalable solutions and delivering exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a 
              href="mailto:ayushhomz@gmail.com" 
              className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              data-testid="button-contact"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              data-testid="button-projects"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Projects
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="tel:+919810238290" 
              className="text-white hover:text-blue-200 transition-colors text-2xl"
              data-testid="link-phone"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
