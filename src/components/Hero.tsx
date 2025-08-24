import { Button } from './ui/button';
import { Download, Mail, Github, Linkedin, FileText } from 'lucide-react';
import heroIllustration from '../assets/hero-illustration.jpg';
import ashokProfile from '../assets/ashok-new-profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="space-y-2 mb-6">
            <p className="text-hero-muted text-lg">Hi There 👋</p>
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold text-hero-text">
                I'm <span className="text-gradient">Ashok Neupane</span>
              </h1>
              <p className="text-xl md:text-2xl text-hero-muted font-medium">
                I am a Full-Stack Web Developer
              </p>
            </div>
          </div>

          <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mb-8">
            Passionate web developer with 4+ years of experience in PHP (Laravel), React, and WordPress. 
            Master's in IT from Torrens University, Melbourne. I create scalable, user-friendly web solutions 
            that drive business growth.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com/ashokneupane" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/neupaneashok8115/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:neupaneashok8115@gmail.com"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Mail size={20} />
            </a>
            <a 
              href="#portfolio"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="relative">
            {/* Profile Image */}
            <div className="w-80 h-80 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-glow mb-8">
              <img 
                src={ashokProfile} 
                alt="Ashok Neupane" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Hero;