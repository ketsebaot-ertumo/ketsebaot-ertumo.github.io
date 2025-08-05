import { Calendar, MapPin, Building } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer & Project Manager',
      company: 'Phoenixopia Solution',
      location: 'Addis Ababa, Ethiopia',
      period: '2025 - present',
      type: 'Full-time',
      description: 'Lead a team of more than 20 developers in building scalable web applications. Manage project timelines, coordinate with stakeholders, and ensure delivery of high-quality software solutions.',
      achievements: [
        'Increased team productivity by 40% through implementation of agile methodologies',
        'Successfully delivered more than 12 major projects on time and within budget',
        'Reduced application load times by 60% through performance optimization',
        'Mentored more than 20 developers and established coding standards'
      ]
    },
    {
      title: 'Full-Stack Developer & Project Manager',
      company: 'TechEthio IT Solution',
      location: 'Addis Ababa, Ethiopia',
      period: '2023 - 2025',
      type: 'Full-time',
      description: 'Developed and maintained multiple web applications using javascript framworks. Collaborated with cross-functional teams to deliver feature-rich applications.',
      achievements: [
        'Built and deployed more than 8 production applications serving 10K+ users',
        'Implemented automated testing reducing bugs by 50%',
        'Designed and developed RESTful APIs used by mobile applications',
        'Led migration from legacy systems to modern tech stack'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2022 - present',
      type: 'Contract',
      description: 'Focused on creating responsive, user-friendly web interfaces. Worked on backend developments to implement pixel-perfect designs.',
      achievements: [
        'Improved user engagement by 35% through UI/UX enhancements',
        'Developed reusable component library adopted company-wide',
        'Optimized website performance achieving 95+ Lighthouse scores',
        'Collaborated with international team across 3 time zones'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A track record of delivering exceptional results and leading successful projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />

          {experiences.map((exp, index) => (
            <div key={exp.title} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-background" />
              
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <Card className="p-6 hover-scale transition-smooth border-border bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border">
            <div className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">Open to new opportunities:</span> Looking for challenging roles that combine technical leadership with project management
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;