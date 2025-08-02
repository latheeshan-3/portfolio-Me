import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web App', 'Mobile', 'API', 'Open Source'];

  const projects = [
    {
      id: 1,
      title: 'Evaluno AI Recrutment Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      image: 'src/assets/evaluno-ai.png',
      category: 'Web App',
      technologies: ['NEXT JS', 'Fast API', 'Mongodp', 'Stripe', 'Redis'],
      liveUrl: '',
      githubUrl: 'https://github.com/latheeshan-3/Evaluno_AI.git',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management API',
      description: 'RESTful API with authentication, real-time updates, and comprehensive documentation.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&crop=center',
      category: 'API',
      technologies: ['Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Swagger'],
      liveUrl: '',
      githubUrl: '',
      featured: false
    },
    {
      id: 3,
      title: 'Plasticle PTE Bottle Tracking App',
      description: 'Cross-platform mobile app for workout tracking with social features and progress analytics.',
      image: 'src/assets/plasticle.jpg',
      category: 'Mobile + Web',
      technologies: ['React Native', 'NEXt JS', 'Node js', 'socket.io', 'Chart.js', 'Redux'],
      liveUrl: '',
      githubUrl: 'https://github.com/latheeshan-3/Plasticle.git',
      featured: true
    },
    {
      id: 4,
      title: 'React Component Library',
      description: 'Open-source component library with TypeScript support, Storybook documentation, and automated testing.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop&crop=center',
      category: 'Open Source',
      technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup'],
      liveUrl: '',
      githubUrl: '',
      featured: false
    },
    {
      id: 5,
      title: 'Ev-Charger E-commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center',
      category: 'Web App',
      technologies: ['React', 'TypeScript', 'spring', 'PostgreSQL', 'D3.js'],
      liveUrl: 'https://grizzl-e.com/',
      githubUrl: '',
      featured: true,
      client: 'UNITED CHARGERS INC. CANADA'
    },
    {
      id: 6,
      title: 'DevOps Monitoring Tool',
      description: 'Infrastructure monitoring solution with custom metrics, alerting, and beautiful dashboards.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center',
      category: 'Web App',
      technologies: ['Next.js', 'Go', 'InfluxDB', 'Grafana', 'Docker'],
      liveUrl: '',
      githubUrl: '',
      featured: false
    }
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence
          </p>
        </div>

        {/* Spotlight Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Spotlight Projects</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project) => (
              <Card key={project.id} className="card-gradient overflow-hidden hover-lift group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="hero">
                            <Play className="h-4 w-4 mr-1" />
                            Demo
                          </Button>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="portfolio">
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge className="bg-primary/20 text-primary">Featured</Badge>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{project.title}</h4>
                  <p className="text-portfolio-text-dim mb-2">{project.description}</p>

                  {/* Only show for project id 5 */}
                  {project.id === 5 && project.client && (
                    <p className="text-sm text-muted-foreground italic mb-4 flex items-center gap-2">
                      <img
                        src="https://flagcdn.com/ca.svg"
                        alt="Canada flag"
                        className="w-5 h-4 rounded-sm object-cover"
                      />
                      Client: {project.client}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="ghost" size="sm" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'hero' : 'ghost'}
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-300"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="card-gradient overflow-hidden hover-lift group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
                <p className="text-portfolio-text-dim text-sm mb-2">{project.description}</p>

                {/* Only show for project id 5 */}
                {project.id === 5 && project.client && (
                  <p className="text-sm text-muted-foreground italic mb-4 flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/ca.svg"
                      alt="Canada flag"
                      className="w-5 h-4 rounded-sm object-cover"
                    />
                    Client: {project.client}
                  </p>
                )}

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="ghost" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call To Action */}
        <div className="text-center">
          <Card className="card-gradient p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to see more projects?
            </h3>
            <p className="text-portfolio-text-dim mb-6">
              Check out my GitHub for more open-source contributions and experimental projects.
            </p>
            <a href="https://github.com/latheeshan-3" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">
                View GitHub Profile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
