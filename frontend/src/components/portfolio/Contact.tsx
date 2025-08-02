import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  X,
  Calendar,
  Clock,
  Globe
} from 'lucide-react';

 const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

   

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});


      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Failed to send message.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'latheeshan.t@gmail.com',
      href: 'mailto:latheeshan.t@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 0789414128',
      href: 'tel:+94 0789414128'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'colombo, srilanka',
      href: 'https://www.google.com/maps/place/Colombo',
    },
        {
      icon: Globe,
      label: 'Website',
      value: 'latheeshan.dev',
      href: 'https://latheeshan.dev'
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', href: 'https://github.com/latheeshan-3', username: 'Latheeshan' },
    { icon: Linkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/latheeshan-t-7b503a245/', username: 'Latheeshan' },
    { icon: X, name: 'X', href: 'https://x.com/Latheeshan_me', username: 'latheeshan_me' }
  ];

  const availability = [
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
    { icon: Calendar, label: 'Availability', value: 'Open for new projects' },
    { icon: Globe, label: 'Time Zone', value: 'SLST, UTC+05:30' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-gradient">Let's Work Together</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-gradient p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Send me a message</h3>
                <p className="text-portfolio-text-dim">
                  Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-background border-border"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background border-border resize-none"
                    placeholder="Tell me about your project, timeline, and budget..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            <Card className="card-gradient p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/20 transition-colors group"
                  >
                    <item.icon className="h-5 w-5 text-primary group-hover:text-primary-glow transition-colors" />
                    <div>
                      <p className="text-sm text-portfolio-text-dim">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="card-gradient p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Availability</h3>
              <div className="space-y-4">
                {availability.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-portfolio-text-dim">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="card-gradient p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/20 transition-colors group"
                  >
                    <social.icon className="h-5 w-5 text-primary group-hover:text-primary-glow transition-colors" />
                    <div>
                      <p className="text-foreground font-medium">{social.name}</p>
                      <p className="text-sm text-portfolio-text-dim">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="card-gradient p-6 text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Prefer a quick call?
              </h3>
              <p className="text-portfolio-text-dim text-sm mb-4">
                Schedule a free 30-minute consultation to discuss your project
              </p>
              <Button variant="accent" size="sm" className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
