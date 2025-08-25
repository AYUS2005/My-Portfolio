import { GraduationCap } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "5+", label: "Major Projects" },
    { value: "2", label: "Internships" },
    { value: "15+", label: "Technologies" },
    { value: "1st", label: "Place Winner" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="about-title">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="about-description">
            A passionate Full Stack Developer currently pursuing B.Tech in Information Technology, 
            with hands-on experience in building scalable web applications and AI-powered solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up" data-testid="about-image">
            <img 
              src="" 
              alt="Professional headshot" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
            />
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6" data-testid="education-title">
              Education & Background
            </h3>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8" data-testid="education-card">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-500 text-white p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900" data-testid="degree-title">
                    B.Tech in Information Technology
                  </h4>
                  <p className="text-primary-600 font-medium" data-testid="institution-name">
                    Dronacharya Group of Institutions
                  </p>
                  <p className="text-gray-600" data-testid="institution-location">
                    Greater Noida, U.P, India
                  </p>
                  <p className="text-gray-500 text-sm mt-2" data-testid="education-duration">
                    Nov 2022 - Jul 2026
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4" data-testid={`stat-${index}`}>
                  <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
