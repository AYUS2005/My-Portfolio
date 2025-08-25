import { Trophy, Medal } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "1st Place Winner",
      event: "IDE BOOTCAMP", 
      organization: "Organized by AICTE and Ministry of Education, Govt. of India",
      date: "February 2025",
      icon: Trophy,
      bgColor: "bg-gradient-to-r from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
      iconBg: "bg-yellow-500",
      titleColor: "text-yellow-700"
    },
    {
      title: "Semi Finalist",
      event: "NSUT 30 Hours Hackathon",
      organization: "Competed among hundreds of participants in intense coding challenge", 
      date: "January 2024",
      icon: Medal,
      bgColor: "bg-gradient-to-r from-blue-50 to-blue-100",
      borderColor: "border-blue-200", 
      iconBg: "bg-blue-500",
      titleColor: "text-blue-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="achievements-title">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600" data-testid="achievements-subtitle">
            Milestones in my journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={index}
                className={`${achievement.bgColor} rounded-xl p-8 border ${achievement.borderColor}`}
                data-testid={`achievement-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${achievement.iconBg} text-white p-4 rounded-full`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2" data-testid={`achievement-title-${index}`}>
                      {achievement.title}
                    </h3>
                    <p className={`text-lg font-medium mb-2 ${achievement.titleColor}`} data-testid={`achievement-event-${index}`}>
                      {achievement.event}
                    </p>
                    <p className="text-gray-700 mb-3" data-testid={`achievement-org-${index}`}>
                      {achievement.organization}
                    </p>
                    <p className="text-sm text-gray-600" data-testid={`achievement-date-${index}`}>
                      {achievement.date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
