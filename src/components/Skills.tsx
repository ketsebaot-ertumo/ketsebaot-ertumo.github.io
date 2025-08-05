import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        'React.js', 'TypeScript', 'Next.js', 'Vue.js', 'JavaScript ES6+',
        'HTML5', 'CSS3', 'SASS/SCSS', 'Tailwind CSS', 'Chakra UI',
        'Material-UI', 'Ant Design', 'Bootstrap', 'Redux', 'React Query',
        'Apollo Client', 'WebSockets', 'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)', 'Responsive Design',
        'Cross-Browser Compatibility', 'Accessibility (WCAG)',
        'Performance Optimization'
      ]
    },
    {
      title: 'Mobile App Technologies',
      skills: [
        'React Native', 'Flutter', 'Dart', 'Expo', 'Redux',
        'React Query', 'Apollo Client', 'NativeBase', 'WebSockets',
        'Push Notifications', 'Camera Access', 'Offline Support',
        'Cross-Platform Compatibility', 'Performance Optimization'
      ]
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'Next.js', 'Python', 'Django', 
        'PostgreSQL/NewSQL', 'MongoDB/NoSQL', 'MariaDB/MySQL', 'Firebase', 
        'SQLite', 'Redis', 'GraphQL', 'REST APIs', 'Fast API', 'Authentication and Authiorization', 
        'Microservices', 'Serverless Architecture', 'OAuth2', 'JWT', 'WebSockets', 
        'Real-time Data Processing', 'Data Modeling', 'Database Design', 
        'API Design', 'API Rate Limiting', 'Caching Strategies',]
    },
    {
      title: 'DevOps & Tools',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub Actions', 
        'Linux', 'Nginx', 'Azure DevOps', 'Google Cloud Platform', 
        'Heroku', 'Vercel', 'Netlify', 'Jenkins', ]
    },
    {
      title: 'Testing & Quality Assurance',
      skills: [
        'Unit Testing', 'Integration Testing', 'End-to-End Testing',
        'Test-Driven Development (TDD)', 'Behavior-Driven Development (BDD)'
      ]
    },
    {
      title: 'Project Management',
      skills: ['Agile/Scrum', 'Kanban', 'Jira', 'Confluence', 'ClickUp', 'Slack', 'Notion', 'Risk Management', 'Team Leadership', 'Stakeholder Management', 'Budget Planning']
    }
  ];

  const MAX_VISIBLE_SKILLS = 12;
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const isExpanded = expanded[index];
            const visibleSkills = isExpanded
              ? category.skills
              : category.skills.slice(0, MAX_VISIBLE_SKILLS);

            return (
              <div
                key={category.title}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {visibleSkills.map(skill => (
                    <Badge key={skill} variant="outline" className="text-sm">
                    {/* <Badge key={skill} variant="secondary"  className="text-sm"> */}
                      {skill}
                    </Badge>
                  ))}
                  {category.skills.length > MAX_VISIBLE_SKILLS && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-xs text-primary hover:underline ml-1"
                    >
                      {isExpanded ? 'Show less' : `+${category.skills.length - MAX_VISIBLE_SKILLS} more`}
                    </button>
                  )}
                </div>
                </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border">
            <div className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">Always Learning:</span> Currently exploring AI/ML, Web3, and Advanced Cloud Architecture
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;