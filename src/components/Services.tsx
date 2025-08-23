import { Code, Palette, Server, Zap, Globe, Wrench } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Full-Stack Development",
      description: "Complete web application development using PHP (Laravel), React, and modern technologies. From concept to deployment.",
      features: ["Custom Web Applications", "Database Design", "API Development", "Third-party Integrations"]
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "WordPress Solutions",
      description: "Custom WordPress development, theme creation, and plugin development for scalable content management systems.",
      features: ["Custom Themes", "Plugin Development", "WordPress Optimization", "Migration Services"]
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Responsive UI/UX Design",
      description: "Creating beautiful, user-friendly interfaces that work seamlessly across all devices and screen sizes.",
      features: ["Mobile-First Design", "User Experience Optimization", "Modern UI Components", "Accessibility Compliance"]
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: "Backend Development",
      description: "Robust server-side development with secure APIs, database optimization, and scalable architecture.",
      features: ["RESTful APIs", "Database Optimization", "Server Configuration", "Security Implementation"]
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Performance Optimization",
      description: "Speed up your existing applications with code optimization, caching strategies, and performance tuning.",
      features: ["Code Optimization", "Database Tuning", "Caching Solutions", "Load Time Improvement"]
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, bug fixes, and technical support to keep your applications running smoothly.",
      features: ["Regular Updates", "Bug Fixes", "Security Patches", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/10">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development services to bring your ideas to life and grow your digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="project-card group">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-smooth">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's discuss how I can help bring your web development vision to life. From initial concept to final deployment, 
              I'll work with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-smooth shadow-button"
              >
                Get Started
              </a>
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-medium transition-smooth"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;