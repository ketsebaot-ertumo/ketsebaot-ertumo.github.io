import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Custom ERP System',
      description: 'Fully modular ERP solution with role-based access, inventory, HR, sales, and finance. Includes custom module development targeted to client workflows.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'TailwindCSS'],
      image: 'https://res.cloudinary.com/dq6mvqivd/image/upload/v1754304064/blendBoard_7_ir7gqj.png',
      // image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Custom Web App Deployment Platform',
      description: 'Intermediate PaaS system that allows users to deploy containerized applications, manage domains, and automate SSL — similar to Heroku or Render.',
      technologies: ['Docker', 'Node.js', 'Nginx', 'DigitalOcean API', 'PostgreSQL'],
      // image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      image: 'https://res.cloudinary.com/dq6mvqivd/image/upload/v1754380036/ChatGPT_Image_Aug_5_2025_10_26_45_AM_pcevsh.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Construction & Project Management SaaS',
      description: 'SaaS platform for managing construction projects, budgeting, procurement, timelines, site tracking, and stakeholder collaboration.',
      technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript', 'TailwindCSS'],
      // image: 'https://res.cloudinary.com/dq6mvqivd/image/upload/v1754050185/photo_5794289660221050807_x_lntm3r.jpg',
      image: 'https://res.cloudinary.com/dq6mvqivd/image/upload/v1754050388/photo_5794289660221050686_w_1_nv1mth.jpg',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'SaaS Marketplace for Cooperatives',
      description: 'Multi-tenant marketplace builder designed for cooperatives and local businesses to create their own e-commerce storefronts.',
      technologies: ['Next.js', 'MongoDB', 'Stripe', 'Vercel', 'TailwindCSS'],
      image: 'https://your-image-link.com/marketplace-saas.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Chatbot Builder Platform for Social Media',
      description: 'Drag-and-drop chatbot builder for social media like Telegram and WhatsApp with flows, analytics, and multilingual support. Built for non-tech users.',
      technologies: ['Next.js', 'Node.js', 'Telegram Bot API', 'WhatsApp Cloud API'],
      // image: 'https://your-image-link.com/chatbot.png',
      image: 'https://res.cloudinary.com/dq6mvqivd/image/upload/v1754039062/photo_5794289660221050672_w_rb5oxi.jpg',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: true
    },
    //     {
    //   title: 'E-Commerce Platform',
    //   description: 'Full-stack e-commerce application integrating payment gateways and inventory management, offering a seamless shopping experience.',
    //   technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    //   image: 'https://your-image-link.com/ecommerce.png',
    //   github: 'https://github.com/ketsebaot-ertumo',
    //   live: 'https://example.com',
    //   featured: false
    // },
    {
      title: 'ERP System for Kenema Pharmacy Enterprise',
      description: 'Led the implementation of an ERP system to streamline pharmacy operations, including training, coding, and testing for optimized inventory and service delivery.',
      technologies: ['Frappe', 'Python', 'MariaDB', 'JavaScript', 'Next.js'],
      image: 'https://your-image-link.com/kenema-erp.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'E-Learning Platform',
      description:'Developed a comprehensive e-learning platform featuring course management, user authentication, real-time collaboration, interactive quizzes, progress tracking, and automated certification upon course completion.',
      technologies: ['Next.js', 'TailwindCSS', 'ShadCN', 'Python', 'Fast API', 'MariaDB'],
      image: 'https://your-image-link.com/e-learning.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Amazon Scraping Web App',
      description: 'Web app for scraping Amazon product data, enabling price comparison and product tracking.',
      technologies: ['Python', 'BeautifulSoup', 'Flask'],
      image: 'https://your-image-link.com/amazon-scraper.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Weeding and Event Gallery',
      description: 'Platform is a secure and easy-to-use web platform designed to help you upload, store, and share precious photos and memories from all your special life events — including weddings, shimgilina ceremonies, engagements, and more.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'JavaScript', 'TailwindCSS'],
      image: 'https://your-image-link.com/construction-saas.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.comhttps://forever-captured.vercel.app/',
      featured: false
    },
    {
      title: 'Quiz App',
      description: 'Interactive quiz application designed with gamified learning for enhanced user engagement.',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'GraphQL', 'MariaDB', 'Docker'],
      image: 'https://your-image-link.com/quiz-app.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Fitness App',
      description: 'Mobile app for personalized workout plans, nutrition tracking, and progress monitoring.',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'GraphQL', 'MariaDB', 'Docker'],
      image: 'https://your-image-link.com/fitness-app.png',
      github: 'https://gitlab.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence with real-time data visualization, custom reports, and automated insights generation.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Custom Content Management Websites for Different Offices',
      description: 'Developed multiple content management websites for private offices to boost their online presence and user engagement.',
      technologies: ['Next.js', 'TailwindCSS', 'Node.js', 'Express.js'],
      image: 'https://your-image-link.com/cms-sites.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'SmartSync for ERP',
      description: 'Built a connector service for ERP to fetch transactional and master data (such as sales, inventory, and customer records), transform it as needed, and store it in a structured database for reporting and integration with external services. Supports authentication, scheduling, and real-time sync extensions.',
      technologies: ['Next.js', 'Tailwind Css', 'Node.js', 'PostgreSQL', 'Redis', 'REST API'],
      image: 'https://your-image-link.com/datahub.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Bible App',
      description: 'Mobile app offering access to scripture, study tools, and social features for the Christian community.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'REST API', 'MariaDB', 'Docker'],
      image: 'https://your-image-link.com/bible-app.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Personal Portfolio',
      description: 'Responsive portfolio showcasing full-stack development skills, project highlights, and professional journey.',
      technologies: ['React', 'Vite', 'Typescript', 'TailwindCSS', 'shadcn-ui'],
      // image: 'https://your-image-link.com/portfolio.png',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://ketsebaot-ertumo.github.io',
      featured: false
    },
    {
      title: 'Data-Hub System',
      description: 'Engineered a centralized data management system for seamless data integration and reporting, enabling better decision-making.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'TailwindCSS'],
      image: 'https://your-image-link.com/datahub.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'TechEthio Website & Admin Portal',
      description: 'Developed company website and integrated admin management portal to improve UX and operational control.',
      technologies: ['Next.js', 'TailwindCSS', 'Express.js','Node.js', 'PostgreSQL'],
      image: 'https://your-image-link.com/techethio.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Task Management System',
      description: 'Built a task manager for project tracking, team collaboration, and progress visualization.',
      technologies: ['Vue.js', 'Nest.js', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'GraphQL'],
      image: 'https://your-image-link.com/task-manager.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'User-friendly blog platform for creating and publishing content with a modern UI and simple content management.',
      technologies: ['React', 'MongoDB', 'Node.js', 'Express.js'],
      image: 'https://your-image-link.com/blog-platform.png',
      github: 'https://github.com/ketsebaot-ertumo',
      live: 'https://example.com',
      featured: false
    },
  ];


  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating full-stack development skills and project management expertise
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden group hover-scale transition-smooth border-border bg-card/50 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56  transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    
                    <Link
                      to={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="flex items-center gap-2 gradient-primary">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Other Notable Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={project.title} className="p-6 hover-scale transition-smooth border-border bg-card/30 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    // <Badge key={tech} variant="secondary" className="text-xs">
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    // <Badge variant="secondary" className="text-xs">
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                   <Link
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm" className="p-2">
                        <Github className="h-4 w-4" />
                      </Button>
                    </Link>
                    
                    <Link
                      to={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm" className="p-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="https://github.com/ketsebaot-ertumo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="hover-scale">
              View All Projects on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
