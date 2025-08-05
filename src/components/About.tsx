import { Code, Users, Lightbulb, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in React, Node.js, TypeScript, and modern web technologies'
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'Agile methodologies, team leadership, and cross-functional collaboration'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Creative solutions for complex technical and business challenges'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focus on delivering high-quality products that exceed expectations'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* <img
    src="/me.jpg"
    alt="Ketsebaot Ertumo"
    className="w-40 h-40 mx-auto rounded-full object-cover border border-border shadow-md"
  /> */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software developer and project manager who bridges the gap between 
            technical excellence and business strategy. With experience leading development teams 
            and shipping products used by thousands of users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="p-6 hover-scale transition-smooth border-border bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my career as a frontend developer, building responsive web applications 
                and learning the fundamentals of user experience design. My curiosity led me to 
                explore backend technologies and database design.
              </p>
              <p>
                Transitioned into full-stack development, working with teams to deliver complete 
                web applications. Discovered my passion for organizing projects and coordinating 
                between different stakeholders.
              </p>
              <p>
                Now I combine my technical expertise with project management skills to lead 
                development teams, ensuring we deliver high-quality software on time and within budget.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border">
              <div className="text-3xl font-bold text-accent mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Team Members Led</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;