import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-8 w-8" />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 90 },
      ]
    },
    {
      title: "Backend Development",
      icon: <Code className="h-8 w-8" />,
      skills: [
        { name: "PHP", level: 95 },
        { name: "Laravel", level: 90 },
        { name: "WordPress", level: 85 },
        { name: "APIs", level: 88 },
        { name: "CodeIgniter", level: 80 },
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="h-8 w-8" />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Unit Testing", level: 80 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      title: "Methodologies",
      icon: <Wrench className="h-8 w-8" />,
      skills: [
        { name: "Agile/Scrum", level: 85 },
        { name: "Clean Code", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "Performance Optimization", level: 85 },
        { name: "UI/UX Design", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies I use to build exceptional web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="project-card">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            {[
              "PHP", "Laravel", "React", "JavaScript", "MySQL", "WordPress", 
              "Docker", "Git", "Bootstrap", "Tailwind", "HTML5", "CSS3"
            ].map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-secondary rounded-lg text-secondary-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;