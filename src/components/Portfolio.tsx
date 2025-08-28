import { ExternalLink, Github, Database, Globe, Code } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import broadway_infosys from "../assets/images/broadway_infosys.png";
import kumarijob from "../assets/images/kumarijob.png";
import kanbanboard from "../assets/images/kanban_board.png";
import ecommerce from "../assets/images/ecommerce.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Task Flow Web App",
      description:
        "Develop a full-featured task management application using React for frontend and PHP (Laravel) for backend, with drag-and-drop functionality and real-time task updates using Docker to enhance team productivity.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Laravel", "PHP", "MySQL", "Docker"],
      features: [
        "Drag-and-drop Task Management",
        "Real-time Task Updates",
        "Secure User Authentication",
        "Robust Backend APIs",
        "Team Productivity Enhancement",
      ],
      category: "Web Application",
      demoUrl: "#",
      githubUrl: "https://github.com/ashokneupane/laravel-react-task-app",
      icon: <Globe className="h-6 w-6" />,
      imageUrl: kanbanboard,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce solution built with Laravel, featuring payment integration, inventory management, and order tracking.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "React", "MySQL", "Stripe", "Tailwind CSS"],
      features: [
        "Product Catalog Management",
        "Shopping Cart & Checkout",
        "Payment Gateway Integration",
        "Order Management System",
        "Admin Dashboard",
      ],
      category: "E-Commerce",
      demoUrl: "#",
      githubUrl: "https://github.com/ashokneupane/ecommerce-admin-portal",
      icon: <Code className="h-6 w-6" />,
      imageUrl: ecommerce,
    },
    {
      title: "Kumari Job Portal",
      description:
        "A comprehensive job portal platform migrated from CodeIgniter to Laravel with enhanced performance and user management features.",
      image: "/api/placeholder/400/250",
      technologies: ["CodeIgniter", "PHP", "MySQL", "Bootstrap", "jQuery","Laravel"],
      features: [
        "User Registration & Profile Management",
        "Job Listings with Advanced Search",
        "Application Management System",
        "Admin Panel with Analytics",
        "Performance Optimization",
      ],
      category: "Web Application",
      demoUrl: "https://www.kumarijob.com/",
      githubUrl: "#",
      icon: <Globe className="h-6 w-6" />,
      imageUrl: kumarijob,
    },
    {
      title: "IT Course Management System",
      description:
        "Backend developer role designing and implementing services for IT course management platform. Built modules for course management, user enrollment, and payment integration with focus on scalability.",
      image: "/api/placeholder/400/250",
      technologies: ["PHP", "Laravel", "MySQL", "APIs", "Payment Integration"],
      features: [
        "Course Management Module",
        "Campaign Management System",
        "User Enrollment Processing",
        "Payment Gateway Integration",
        "System Scalability Optimization",
      ],
      category: "Backend Development",
      demoUrl: "https://broadwayinfosys.com/",
      githubUrl: "#",
      icon: <Database className="h-6 w-6" />,
      imageUrl: broadway_infosys,
    },
  ];

  const categories = [
    "All",
    "Web Application",
    "E-Commerce",
    "Backend Development",
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my recent projects showcasing expertise in full-stack
            development, performance optimization, and modern web technologies.
          </p>
        </div>

        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={
                index === 0
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
                  : "border-border hover:bg-primary hover:text-primary-foreground transition-smooth"
              }
            >
              {category}
            </Button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card group overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img src={project.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center space-x-4">
                  {project.demoUrl != "#" && (
                    <a target="_blank" href={project.demoUrl}>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl != "#" && (
                    <a target="_blank" href={project.githubUrl}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-foreground text-foreground hover:bg-foreground hover:text-background"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-secondary rounded text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              I'm always excited to work on new challenges and bring innovative
              ideas to life. Let's collaborate to create something amazing
              together.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button">
              <a href="#contact" className="flex items-center">
                Start a Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
