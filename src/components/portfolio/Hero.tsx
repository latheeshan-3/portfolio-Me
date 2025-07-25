import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Greeting */}
          <p className="text-lg text-portfolio-text-dim mb-4 animate-fade-in">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="hero-gradient">Alex Johnson</span>
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Full Stack Developer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-portfolio-text-dim max-w-3xl mx-auto mb-8 leading-relaxed">
            I craft exceptional digital experiences through clean code and innovative solutions. 
            Specializing in React, Node.js, and modern web technologies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="portfolio" size="xl">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <Button variant="ghost" size="icon" className="hover-lift">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full border border-border hover:border-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6 text-portfolio-text-dim" />
        </button>
      </div>
    </section>
  );
};

export default Hero;