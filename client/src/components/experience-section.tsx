import { Check } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "CODEC Technologies",
      location: "Remote",
      duration: "Jul 2025 - Aug 2025",
      achievements: [
        "Engineered RESTful APIs using FastAPI, Spring Boot, and PostgreSQL, reducing data retrieval time by 40%",
        "Designed GitHub analytics dashboard with Flask, Django, React.js, improving tracking efficiency by 50%",
        "Developed dynamic visualizations for real-time classroom repository insights"
      ],
      technologies: ["FastAPI", "Spring Boot", "React.js", "PostgreSQL"],
      bgColor: "bg-blue-100",
      textColor: "text-blue-800"
    },
    {
      title: "Full Stack Developer Intern",
      company: "EI Systems", 
      location: "Remote",
      duration: "Oct 2024 - Dec 2024",
      achievements: [
        "Developed full-stack web applications using MERN stack, accelerating development cycles by 30%",
        "Built responsive UIs with React.js and Angular.js, increasing user engagement by 25%",
        "Implemented secure backend APIs with Express.js and integrated MongoDB/SQL"
      ],
      technologies: ["MERN Stack", "Angular.js", "Spring Boot", "MongoDB"],
      bgColor: "bg-green-100",
      textColor: "text-green-800"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="experience-title">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600" data-testid="experience-subtitle">
            My journey in software development
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
                data-testid={`experience-${index}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full border-4 border-white shadow"></div>
                
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-5/12`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900" data-testid={`job-title-${index}`}>
                        {exp.title}
                      </h3>
                      <span className="text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full mt-2 sm:mt-0" data-testid={`duration-${index}`}>
                        {exp.duration}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-medium text-primary-600 mb-4" data-testid={`company-${index}`}>
                      {exp.company} ({exp.location})
                    </h4>
                    
                    <ul className="space-y-2 text-gray-600 mb-4">
                      {exp.achievements.map((achievement, achieveIndex) => (
                        <li key={achieveIndex} className="flex items-start space-x-2" data-testid={`achievement-${index}-${achieveIndex}`}>
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`tech-badge ${exp.bgColor} ${exp.textColor} px-3 py-1 rounded-full text-sm`}
                          data-testid={`tech-${index}-${techIndex}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
