import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden sm:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Ketsebaot Ertumo</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            Senior Software Developer & Project Manager
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting innovative digital solutions with 4+ years of experience in full-stack development 
            and agile project management. Passionate about creating efficient, scalable applications.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/ketsebaot-ertumo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="hover-scale glow-primary">
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="https://linkedin.com/in/ketsebaot-ertumo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="hover-scale glow-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="mailto:ertumoketsebaot@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="hover-scale glow-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary hover-scale text-lg px-8 py-6"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 hover-scale"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full hover:bg-muted/20 transition-smooth"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full floating-animation opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full floating-animation opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full floating-animation opacity-50" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;