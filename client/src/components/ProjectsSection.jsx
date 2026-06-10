import { useMemo } from 'react';
import { ExternalLink, Github, Plus, Folder } from 'lucide-react';
import { Button } from './ui/button';
import { useQuery } from '@tanstack/react-query';
import { fetchPortfolio } from '@/lib/api';

const fallbackProjects = [
  {
    id: 'seed-0',
    title: 'Recording Equipment Sales Dashboard',
    description:
      'Interactive Power BI dashboard analyzing equipment sales data for 2022-2023. Features real-time visualizations, trend analysis, and performance metrics across different countries and product categories.',
    technologies: ['Power BI', 'Data Analytics', 'Business Intelligence'],
    liveUrl: 'https://app.powerbi.com/links/UnT2ciOPpw?ctid=0765532a-06c1-4f0f-9f39-394689f5f8fe&pbi_source=linkShare',
    isEmbedded: true,
    embedUrl: 'https://app.powerbi.com/links/UnT2ciOPpw?ctid=0765532a-06c1-4f0f-9f39-394689f5f8fe&pbi_source=linkShare',
    imageUrl: '/images/powerbi-dashboard.png',
  },
  {
    id: 'seed-1',
    title: 'Portfolio Website',
    description:
      'A cinematic personal portfolio built with React, TypeScript, and Tailwind CSS showcasing my skills and projects.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'seed-2',
    title: 'Coming Soon',
    description:
      "More exciting projects are in development. Check back soon to see what I'm building next!",
    technologies: ['MERN Stack', 'Coming Soon'],
  },
];

const ProjectCard = ({ project, isEmbedded }) => {
  if (isEmbedded) {
    return (
      <div className="glass-card-hover rounded-2xl overflow-hidden group md:col-span-2 lg:col-span-3">
        {/* Dashboard Preview Image and Embed */}
        <div className="grid md:grid-cols-2 gap-4 p-4">
          {/* Image Preview */}
          {project.imageUrl && (
            <div className="relative overflow-hidden rounded-xl h-96">
              <img 
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}
          
          {/* Power BI Embed */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative w-full h-96">
              <iframe
                src={project.embedUrl}
                title={project.title}
                allowFullScreen
                className="w-full h-full border-0 rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
            >
              <ExternalLink size={16} />
              View Full Report
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card-hover rounded-2xl overflow-hidden group">
      {/* Project image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Folder size={48} className="text-primary/50" />
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-foreground hover:scale-110 transition-transform"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['portfolio'],
    queryFn: fetchPortfolio,
    staleTime: 1000 * 60,
    retry: 1,
  });

  const projects = useMemo(() => {
    if (isError || !data) return fallbackProjects;
    return data.map((item) => ({
      id: item.id || item._id,
      title: item.title,
      description: item.description,
      technologies: item.technologies?.length ? item.technologies : item.tags || [],
      liveUrl: item.liveUrl,
      githubUrl: item.githubUrl,
      imageUrl: item.imageUrl,
      isEmbedded: item.isEmbedded,
      embedUrl: item.embedUrl,
    }));
  }, [data, isError]);

  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-1/2 h-96 bg-primary/5 rounded-l-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block uppercase tracking-widest text-sm">
            My Work
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of my latest projects and applications. Each project
            represents my commitment to quality and innovation.
          </p>
          {isError && (
            <p className="text-sm text-destructive mt-3">
              Could not load live projects, showing fallback items.
            </p>
          )}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isEmbedded={project.isEmbedded}
            />
          ))}

          {/* Add project placeholder */}
          <div className="glass-card border-2 border-dashed border-border hover:border-primary/50 rounded-2xl flex flex-col items-center justify-center p-8 transition-all duration-300 group cursor-pointer min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Plus size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">
              {isLoading ? 'Loading...' : 'Add New Project'}
            </h3>
            <p className="text-muted-foreground text-sm text-center">
              {isLoading
                ? 'Fetching your latest work'
                : 'More projects coming soon as I build and learn'}
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero-outline" size="lg" asChild>
            <a href="https://github.com/emmanuel-haro" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
