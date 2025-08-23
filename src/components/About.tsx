import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const education = [
    {
      degree: "Master of Information Technology (Advanced)",
      institution: "Torrens University, Melbourne",
      period: "2022 – 2024",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Bachelor of Computer Science Engineering",
      institution: "Maharashi Dayanand University",
      period: "2014 – 2018",
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  const experience = [
    {
      title: "Frontend Developer (React)",
      company: "Focus Bear, Melbourne",
      period: "Apr 2025 – Jul 2025",
      description: "Developed React-based applications focusing on user productivity and performance optimization.",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Web Development Intern",
      company: "Quinlan Consulting, Melbourne",
      period: "Jul 2023 – Oct 2023",
      description: "Worked on client projects using modern web technologies and agile methodologies.",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "PHP (Laravel) Developer",
      company: "Neputer Tech, Nepal",
      period: "Jul 2018 – Dec 2021",
      description: "Led full-stack development projects, API integrations, and database optimization using Laravel framework.",
      icon: <Briefcase className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/10">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate full-stack developer with expertise in modern web technologies and a track record of delivering scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Professional Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 4 years of experience in web development, I specialize in creating robust, scalable applications 
                using PHP (Laravel), React, and WordPress. My journey started in Nepal and continued in Melbourne, where I 
                enhanced my skills with advanced IT studies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about clean code, performance optimization, and delivering exceptional user experiences. 
                My expertise spans from backend API development to modern frontend frameworks, making me well-versed 
                in the full development lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <GraduationCap className="mr-3 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="project-card">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-primary mt-1">{edu.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                          <p className="text-muted-foreground">{edu.institution}</p>
                          <div className="flex items-center mt-2 text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            {edu.period}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
            <Briefcase className="mr-3 text-primary" />
            Work Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="project-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1">{exp.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                      <div className="flex items-center mb-3 text-primary">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.company}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;