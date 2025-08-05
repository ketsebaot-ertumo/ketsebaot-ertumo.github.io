import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Ketsebaot Ertumo. Made with 
            <Heart className="h-4 w-4 text-primary" fill="currentColor" />
            and passion for great work.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
             Designed and developed with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;