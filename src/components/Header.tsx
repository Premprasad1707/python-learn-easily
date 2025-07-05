import { Button } from "@/components/ui/button";
import pythonLogo from "@/assets/python-logo.png";

const Header = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground py-6 px-4 shadow-card">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src={pythonLogo} 
            alt="Python Logo" 
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="text-2xl font-bold">Python Full Course</h1>
            <p className="text-primary-foreground/80 text-sm">Master Python from Basics to Advanced</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#introduction" className="hover:text-secondary transition-smooth">Introduction</a>
          <a href="#basics" className="hover:text-secondary transition-smooth">Basics</a>
          <a href="#advanced" className="hover:text-secondary transition-smooth">Advanced</a>
          <a href="#projects" className="hover:text-secondary transition-smooth">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;