import { useMemo } from 'react';
import { ExternalLink, Github, Plus, Folder } from 'lucide-react';
import { Button } from './ui/button';
import { useQuery } from '@tanstack/react-query';
import { fetchPortfolio } from '@/lib/api';

const FEATURED_PROJECTS = [
  {
    id: 'power-bi-dashboard',
    title: 'Recording Equipment Sales Dashboard',
    description:
      'Interactive Power BI dashboard analyzing equipment sales data for 2022–2023. Features revenue trends, country breakdowns, and discount band analysis for the QuadCast S product line.',
    technologies: ['Power BI', 'Data Analytics', 'Business Intelligence'],
    liveUrl:
      'https://app.powerbi.com/links/UnT2ciOPpw?ctid=0765532a-06c1-4f0f-9f39-394689f5f8fe&pbi_source=linkShare',
    imageUrl: '/images/powerbi-dashboard.png',
  },
  {
    id: 'savanna-spice',
    title: 'Savanna Spice',
    description:
      'A modern African fusion restaurant website with responsive layout, menu showcase, gallery, and table reservation. Celebrates East, West, and Southern African culinary traditions.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://emmanuel-haro.github.io/FUTURE_FS_03/',
    githubUrl: 'https://github.com/emmanuel-haro/FUTURE_FS_03',
    imageUrl: '/images/savanna-spice.png',
  },
];

const mapApiProject = (item) => ({
  id: item.id || item._id,
  title: item.title,
  description: item.description,
  technologies: item.technologies?.length ? item.technologies : item.tags || [],
  liveUrl: item.liveUrl,
  githubUrl: item.githubUrl,
  imageUrl: item.imageUrl,
});

const ProjectCard = ({ project }) => (
  <div className="glass-card-hover rounded-2xl overflow-hidden group">
    <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 relative overflow-hidden">
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <Folder size={48} className="text-primary/50" />
        </div>
      )}

      <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
        {project.liveUrl && project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
            aria-label={`Open ${project.title} live project`}
          >
            <ExternalLink size={20} />
          </a>
        )}
        {project.githubUrl && project.githubUrl !== '#' && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-foreground hover:scale-110 transition-transform"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={20} />
          </a>
        )}
      </div>
    </div>

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
      {project.liveUrl && project.liveUrl !== '#' && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-sm mt-4"
        >
          <ExternalLink size={16} />
          View Live Project
        </a>
      )}
    </div>
  </div>
);

const ProjectsSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['portfolio'],
    queryFn: fetchPortfolio,
    staleTime: 1000 * 60,
    retry: 1,
  });

  const projects = useMemo(() => {
    const apiProjects = isError || !data ? [] : data.map(mapApiProject);

    const missingFeatured = FEATURED_PROJECTS.filter(
      (featured) =>
        !apiProjects.some(
          (p) =>
            p.id === featured.id ||
            p.liveUrl === featured.liveUrl ||
            p.title?.toLowerCase() === featured.title.toLowerCase()
        )
    );

    return [...missingFeatured, ...apiProjects];
  }, [data, isError]);

  return (
    <section id="projects" className="py-32 relative">
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
            <p className="text-sm text-muted-foreground mt-3">
              Showing featured projects while the API is unavailable.
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

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
