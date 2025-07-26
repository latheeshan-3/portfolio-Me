import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Coffee, Heart, Zap } from 'lucide-react';
import avatar from '@/assets/real.jpg';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    { icon: Code2, label: '2+ Years Experience', description: 'Building web applications' },
    { icon: Coffee, label: '20+ Projects', description: 'Successfully delivered' },
    { icon: Heart, label: 'Startups', description: 'Powering Two Tech Startups' },
    { icon: Zap, label: 'Fast Learner', description: 'Adapting to new tech' },
  ];

  const interests = [
    'AI/ML',
    'Cloud Computing',
    'DevOps',
    'Enterprise Applications Development',
    'Web /Mobile Development',
    'UI/UX Design',
    'Open Source',
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-gradient">About Me</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-2xl mx-auto">
            Passionate developer Finding Happiness through convert Emontions to creating meaningful
            digital experiences
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Image and Stats */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            {/* Profile Image */}
            <div className="relative mx-auto lg:mx-0 w-80 h-80">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 animate-glow" />
              <img
                src={avatar}
                alt="Latheeshan"
                className="relative z-10 w-full h-full object-cover rounded-3xl border-4 border-border shadow-card hover-lift"
              />
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <motion.div key={item.label} variants={fadeInUp}>
                  <Card className="card-gradient p-6 text-center hover-lift">
                    <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                    <p className="text-sm text-portfolio-text-dim">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Building the Future, One Line at a Time
              </h3>

              <div className="space-y-4 text-lg text-portfolio-text-dim leading-relaxed">
                <p>
                  Hi! I'm Latheeshan, a passionate Machine Learning Engineer based in Colombo
                  Sri Lanka. I specialize in creating robust, scalable AI-powered applications that
                  solve real-world problems.
                </p>

                <p>
                  My journey in tech started over 5 years ago, and I've had the privilege of working
                  with startups and established companies, helping them bring their digital visions
                  to life.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Interests */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                What I'm Passionate About
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <Badge
                    key={interest}
                    variant="secondary"
                    className="px-4 py-2 text-sm hover-lift"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div variants={fadeInUp}>
              <Card className="card-gradient p-6 border-l-4 border-l-primary">
                <blockquote className="text-lg italic text-portfolio-text-dim">
                  "The best way to predict the future is to create it. Every line of code is a step
                  towards tomorrow."
                </blockquote>
                <cite className="block mt-4 text-sm text-primary font-medium">
                  - My Development Philosophy
                </cite>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
