import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'TechFlow Solutions',
      position: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Lead development of enterprise web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led migration to microservices architecture',
        'Mentored 5 junior developers',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker', 'TypeScript'],
      current: true
    },
    {
      id: 2,
      company: 'StartupLab Inc.',
      position: 'Full Stack Developer',
      location: 'Remote',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed MVP for fintech startup from ground up. Built scalable backend APIs and responsive frontend applications.',
      achievements: [
        'Built product from MVP to 10K+ active users',
        'Integrated payment processing systems',
        'Achieved 99.9% uptime',
        'Implemented real-time features using WebSockets'
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis', 'Stripe API'],
      current: false
    },
    {
      id: 3,
      company: 'Digital Innovations',
      position: 'Frontend Developer',
      location: 'New York, NY',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Focused on creating exceptional user experiences for e-commerce platforms. Collaborated with UX/UI designers to implement pixel-perfect designs.',
      achievements: [
        'Improved user engagement by 35%',
        'Implemented responsive designs for mobile-first approach',
        'Optimized Core Web Vitals scores',
        'Built reusable component library'
      ],
      technologies: ['React', 'SCSS', 'JavaScript', 'Webpack', 'Jest', 'Figma'],
      current: false
    },
    {
      id: 4,
      company: 'Freelance',
      position: 'Web Developer',
      location: 'Remote',
      period: '2018 - 2019',
      type: 'Freelance',
      description: 'Worked with various clients to build custom web solutions. Managed entire project lifecycle from requirements gathering to deployment.',
      achievements: [
        'Completed 15+ successful projects',
        'Maintained 5-star client rating',
        'Built e-commerce, portfolio, and business websites',
        'Established long-term client relationships'
      ],
      technologies: ['WordPress', 'JavaScript', 'PHP', 'MySQL', 'HTML/CSS'],
      current: false
    }
  ];

  const education = [
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      period: '2014 - 2018',
      achievements: ['Graduated Magna Cum Laude', 'Dean\'s List (6 semesters)', 'CS Honor Society']
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', year: '2022' },
    { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: '2022' },
    { name: 'MongoDB Certified Developer', issuer: 'MongoDB', year: '2021' }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-gradient">Experience & Education</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-2xl mx-auto">
            Building expertise through diverse challenges and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Building2 className="h-6 w-6 text-primary mr-3" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={exp.id} className="card-gradient p-6 hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-semibold text-foreground">{exp.position}</h4>
                        {exp.current && (
                          <Badge className="bg-primary/20 text-primary">Current</Badge>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <span className="text-lg font-medium text-accent">{exp.company}</span>
                        <div className="flex items-center gap-4 text-sm text-portfolio-text-dim">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-portfolio-text-dim mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-portfolio-text-dim">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                Education
              </h3>
              {education.map((edu, index) => (
                <Card key={index} className="card-gradient p-6">
                  <h4 className="font-semibold text-foreground mb-2">{edu.degree}</h4>
                  <p className="text-accent mb-2">{edu.institution}</p>
                  <p className="text-sm text-portfolio-text-dim mb-3">{edu.period}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-portfolio-text-dim">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="card-gradient p-4">
                    <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                    <p className="text-xs text-portfolio-text-dim">{cert.issuer}</p>
                    <p className="text-xs text-primary mt-1">{cert.year}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="card-gradient p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-portfolio-text-dim">Years of Experience</span>
                  <span className="font-semibold text-primary">5+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-portfolio-text-dim">Projects Completed</span>
                  <span className="font-semibold text-primary">200+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-portfolio-text-dim">Technologies Used</span>
                  <span className="font-semibold text-primary">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-portfolio-text-dim">Client Satisfaction</span>
                  <span className="font-semibold text-primary">99%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;