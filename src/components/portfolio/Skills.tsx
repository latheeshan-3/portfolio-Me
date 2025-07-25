import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  GitBranch,
  Server,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'SCSS'],
      color: 'text-primary'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs', 'GraphQL'],
      color: 'text-accent'
    },
    {
      icon: Database,
      title: 'Database & Storage',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase', 'MySQL'],
      color: 'text-primary-glow'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Vercel', 'GitHub Actions', 'Terraform'],
      color: 'text-accent-glow'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA', 'Ionic'],
      color: 'text-primary'
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Framer', 'Principle', 'Sketch'],
      color: 'text-accent'
    },
    {
      icon: GitBranch,
      title: 'Development Tools',
      skills: ['Git', 'VS Code', 'Webpack', 'Vite', 'Jest', 'Cypress'],
      color: 'text-primary-glow'
    },
    {
      icon: Layers,
      title: 'Frameworks & Libraries',
      skills: ['Three.js', 'D3.js', 'Socket.io', 'Prisma', 'Zustand', 'React Query'],
      color: 'text-accent-glow'
    }
  ];

  const proficiencyLevels = [
    { skill: 'JavaScript/TypeScript', level: 95 },
    { skill: 'React/Next.js', level: 92 },
    { skill: 'Node.js', level: 88 },
    { skill: 'Python', level: 85 },
    { skill: 'Database Design', level: 82 },
    { skill: 'Cloud Architecture', level: 79 }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-primary/20" />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category) => (
            <Card key={category.title} className="card-gradient p-6 hover-lift group">
              <div className="flex items-center mb-4">
                <category.icon className={`h-8 w-8 ${category.color} mr-3 group-hover:scale-110 transition-transform`} />
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="mr-2 mb-2 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Proficiency Chart */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Core Proficiencies
          </h3>
          <Card className="card-gradient p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {proficiencyLevels.map((item) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{item.skill}</span>
                    <span className="text-portfolio-text-dim text-sm">{item.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-gradient-primary h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Technologies Marquee */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            Technologies I Work With
          </h3>
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Next.js', 'Tailwind'].map((tech) => (
                <Badge key={tech} variant="outline" className="mx-4 px-6 py-3 text-lg font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;