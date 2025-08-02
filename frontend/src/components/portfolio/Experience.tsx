import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2, Award } from 'lucide-react';
import { px } from 'framer-motion';

// ...imports remain unchanged

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'WENEED Federation',
      position: 'Web Developer & IT Administrator',
      location: 'Sri Lanka',
      period: '2023 - 2025',
      type: 'Full-time',
      description:
        'Managed and developed IT infrastructure and web platforms for a national NGO. Supported operations through digital transformation initiatives.',
      achievements: [
        'Built and maintained organizational websites and portals',
        'Implemented internal IT support and automation tools',
        'Optimized data workflows across departments',
        'Led IT strategy and security planning'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress', 'MySQL'],
      current: true,
      country: 'LK',
    },
    {
      id: 2,
      company: 'EV Stop (YouTube Channel)',
      position: 'YouTube Manager & Web Developer',
      location: 'Remote (USA-based)',
      period: '2021 - 2023',
      type: 'Remote',
      description:
        'Managed content strategy, video publishing, and channel analytics while also handling the web presence of EV Stop.',
      achievements: [
        'Increased subscriber base through SEO and engagement tactics',
        'Built and maintained official website and blog',
        'Automated upload workflows and analytics dashboards',
        'Collaborated with international teams on content planning'
      ],
      technologies: ['YouTube Studio', 'SEO Tools', 'HTML', 'CSS', 'JavaScript', 'WordPress'],
      current: false,
      country: 'US',
    },
    {
      id: 3,
      company: 'Georgia IT Inc.',
      position: 'Talent Consultant / Recruitment Pool Specialist',
      location: 'Remote (USA-based)',
      period: '2021 - 2022',
      type: 'Remote',
      description:
        'Specialized in technical and non-technical talent acquisition for a US-based IT staffing firm. Built pipelines and managed candidate experiences.',
      achievements: [
        'Sourced and placed high-quality IT candidates',
        'Streamlined candidate onboarding process',
        'Maintained and grew recruitment database',
        'Collaborated across international HR teams'
      ],
      technologies: ['LinkedIn Recruiter', 'ATS Systems', 'Excel', 'CRM Tools'],
      current: false,
      country: 'US',
    }
  ];

  const education = [
    {
      institution: 'University of Moratuwa, Sri Lanka',
      degree: 'BSc (Hons) in Information Technology and Management (Ongoing)',
      period: '2023 - Expected 2027',
      achievements: ['Currently enrolled', 'Faculty of Information Technology']
    },
    {
      institution: 'Highlands National College, Sri Lanka',
      degree: 'GCE A/L – Biological Science Stream',
      period: 'Completed in 2020',
      achievements: ['Completed High School', 'Sat for national A/L exams']
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', year: '2022' },
    { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: '2022' },
    { name: 'MongoDB Certified Developer', issuer: 'MongoDB', year: '2021' }
  ];

  // ...return and JSX rendering stays the same

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
<span className="text-lg font-medium text-accent">
  {exp.company}
  {exp.country && (
    <img
      src={`src/assets/${exp.country}.png`}
      alt={`${exp.country} flag`}
      className="inline-block w-7 h-5 ml-2"
    />
  )}
</span>


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
                <Card key={index} className="card-gradient p-6" style={{ marginBottom: '30px' }}>
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
                  <span className="font-semibold text-primary">3+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-portfolio-text-dim">Projects Completed</span>
                  <span className="font-semibold text-primary">10+</span>
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