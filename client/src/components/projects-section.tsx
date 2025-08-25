import { ExternalLink, Github, Plus } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      name: "YatraFlow",
      description: "Real-time traffic and accident alert system with live updates under 1-second latency using Socket.io integration.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      duration: "Jul 2025 - Aug 2025",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800"
    },
    {
      name: "Sahaara",
      description: "Full-featured property listing platform with search filters, comparisons, and real-time messaging with Razorpay integration.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Angular.js", "Node.js", "Express.js", "MongoDB"],
      duration: "Jun 2025 - Jul 2025",
      bgColor: "bg-red-100",
      textColor: "text-red-800"
    },
    {
      name: "VisionTower360",
      description: "AI-powered surveillance system with YOLOv8 and OpenCV for real-time detection with 85% accuracy and React dashboard.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "OpenCV", "YOLOv8", "React.js"],
      duration: "Feb 2025 - Mar 2025",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800"
    },
    {
      name: "MediPredict",
      description: "AI-powered disease prediction engine with 82% accuracy, featuring React dashboard with Chart.js and Google Maps integration.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "Spring Boot", "FastAPI", "MySQL"],
      duration: "Apr 2025 - May 2025",
      bgColor: "bg-green-100",
      textColor: "text-green-800"
    },
    {
      name: "FinGuard",
      description: "High-performance financial platform processing 10,000+ daily transactions with real-time fraud detection using Kafka.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Angular", "Spring Boot", "Kafka", "PostgreSQL"],
      duration: "May 2025 - Jun 2025",
      bgColor: "bg-orange-100",
      textColor: "text-orange-800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600" data-testid="projects-subtitle">
            A showcase of my technical expertise and creativity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-white rounded-xl shadow-lg overflow-hidden"
              data-testid={`project-${index}`}
            >
              <img 
                src={project.image} 
                alt={`${project.name} interface`} 
                className="w-full h-48 object-cover"
                data-testid={`project-image-${index}`}
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3" data-testid={`project-name-${index}`}>
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`${project.bgColor} ${project.textColor} px-3 py-1 rounded-full text-xs`}
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500" data-testid={`project-duration-${index}`}>
                    {project.duration}
                  </span>
                  <div className="flex space-x-2">
                    <button 
                      className="text-primary-600 hover:text-primary-800"
                      data-testid={`project-github-${index}`}
                    >
                      <Github className="w-5 h-5" />
                    </button>
                    <button 
                      className="text-primary-600 hover:text-primary-800"
                      data-testid={`project-demo-${index}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Coming Soon Card */}
          <div className="project-card bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl shadow-lg overflow-hidden border-2 border-dashed border-primary-300" data-testid="project-coming-soon">
            <div className="p-8 text-center">
              <Plus className="w-16 h-16 text-primary-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-primary-700 mb-3">More Projects Coming Soon</h3>
              <p className="text-primary-600">I'm constantly working on new and exciting projects. Stay tuned for updates!</p>
              <button className="mt-4 bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors" data-testid="button-follow-updates">
                Follow for Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
