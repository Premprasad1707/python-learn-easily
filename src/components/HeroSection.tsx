import { Button } from "@/components/ui/button";
import pythonLogo from "@/assets/python-logo.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img 
            src={pythonLogo} 
            alt="Python Course" 
            className="h-32 w-32 object-contain animate-pulse"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Master Python Programming
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
          Learn Python from complete beginner to advanced developer with hands-on projects, 
          real-world examples, and industry best practices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="secondary" size="lg" className="min-w-48">
            🚀 Start Learning Now
          </Button>
          <Button variant="outline" size="lg" className="min-w-48 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            📚 View Course Outline
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-primary-foreground/80">Interactive Lessons</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">10+</div>
            <div className="text-primary-foreground/80">Real Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-primary-foreground/80">Self-Paced Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;