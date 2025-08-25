import { Code, Layers, Database, Cloud, Palette, TestTube, Brain } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      skills: ["C++", "JavaScript", "Java", "Python", "SQL", "TypeScript", "HTML5", "CSS3"]
    },
    {
      title: "Frameworks", 
      icon: Layers,
      color: "text-green-500",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      skills: ["React.js", "Next.js", "Angular.js", "Node.js", "Express.js", "Flask", "Django", "Spring Boot"]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "text-purple-500", 
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Git", "Docker", "Kafka", "Postman"]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "text-orange-500",
      bgColor: "bg-orange-100", 
      textColor: "text-orange-800",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Linux", "Prometheus", "Grafana"]
    }
  ];

  const additionalSkills = [
    {
      title: "Libraries",
      icon: Palette,
      color: "text-pink-500",
      bgColor: "bg-pink-100",
      textColor: "text-pink-800", 
      skills: ["Tailwind CSS", "Pandas", "NumPy", "OpenCV", "YOLOv8", "Socket.io"]
    },
    {
      title: "Testing",
      icon: TestTube,
      color: "text-indigo-500",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-800",
      skills: ["Jest", "Cypress", "Selenium", "PyTest", "JUnit"]
    },
    {
      title: "Core Subjects",
      icon: Brain,
      color: "text-teal-500",
      bgColor: "bg-teal-100",
      textColor: "text-teal-800",
      skills: ["DSA", "System Design", "Operating Systems", "OOPS", "Networking"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="skills-title">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600" data-testid="skills-subtitle">
            Technologies I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg" data-testid={`skill-category-${index}`}>
                <div className="flex items-center mb-4">
                  <IconComponent className={`w-8 h-8 ${category.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`tech-badge ${category.bgColor} ${category.textColor} px-3 py-2 rounded-lg text-sm`}
                      data-testid={`skill-${index}-${skillIndex}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalSkills.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg" data-testid={`additional-skill-category-${index}`}>
                <div className="flex items-center mb-4">
                  <IconComponent className={`w-8 h-8 ${category.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`tech-badge ${category.bgColor} ${category.textColor} px-3 py-2 rounded-lg text-sm`}
                      data-testid={`additional-skill-${index}-${skillIndex}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
