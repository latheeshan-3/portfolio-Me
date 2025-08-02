import { Button } from '@/components/ui/button';
import { Code2, Github, Linkedin, Heart, ArrowUp, X } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/latheeshan-3', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/latheeshan-t-7b503a245/', label: 'LinkedIn' },
    { icon: X, href: 'https://x.com/Latheeshan_me', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Back to Top Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          variant="hero"
          size="icon"
          className="rounded-full shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold hero-gradient">Latheeshan</span>
            </div>
            <p className="text-portfolio-text-dim mb-6 max-w-md">
              Full Stack Developer crafting exceptional digital experiences through 
              clean code and innovative solutions. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover-lift"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
              {footerLinks.slice(0, 3).map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-portfolio-text-dim hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">More</h3>
            <div className="space-y-3">
              {footerLinks.slice(3).map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-portfolio-text-dim hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-portfolio-text-dim mb-4 md:mb-0">
              
            </div>
            <div className="text-portfolio-text-dim text-sm center" style={{ marginRight: '40%' }}>
              © {currentYear} Latheeshan.T_ All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;