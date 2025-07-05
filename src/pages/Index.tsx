import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import CodeBlock from "@/components/CodeBlock";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const courseModules = [
    {
      title: "Python Fundamentals",
      description: "Start your Python journey with variables, data types, and basic operations.",
      duration: "8 hours",
      difficulty: "Beginner" as const,
      topics: ["Variables", "Data Types", "Operators", "Input/Output", "Comments"]
    },
    {
      title: "Control Structures",
      description: "Master decision making and loops to control program flow.",
      duration: "10 hours", 
      difficulty: "Beginner" as const,
      topics: ["If/Else", "For Loops", "While Loops", "Break/Continue", "Nested Loops"]
    },
    {
      title: "Functions & Modules",
      description: "Write reusable code with functions and organize it with modules.",
      duration: "12 hours",
      difficulty: "Intermediate" as const,
      topics: ["Functions", "Parameters", "Return Values", "Scope", "Modules", "Packages"]
    },
    {
      title: "Data Structures",
      description: "Work with lists, dictionaries, sets, and tuples effectively.",
      duration: "15 hours",
      difficulty: "Intermediate" as const,
      topics: ["Lists", "Dictionaries", "Sets", "Tuples", "List Comprehensions"]
    },
    {
      title: "Object-Oriented Programming",
      description: "Build robust applications using classes, objects, and inheritance.",
      duration: "18 hours",
      difficulty: "Advanced" as const,
      topics: ["Classes", "Objects", "Inheritance", "Polymorphism", "Encapsulation"]
    },
    {
      title: "File Handling & APIs",
      description: "Read/write files and interact with web APIs and databases.",
      duration: "14 hours",
      difficulty: "Advanced" as const,
      topics: ["File I/O", "JSON", "APIs", "Requests", "Error Handling"]
    }
  ];

  const handleStartCourse = (courseTitle: string) => {
    toast({
      title: "Course Started! 🎉",
      description: `You've started "${courseTitle}". Happy learning!`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />

      {/* Course Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Course Modules</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive Python course is divided into progressive modules, 
              each building upon the previous to ensure solid understanding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module, index) => (
              <CourseCard
                key={index}
                title={module.title}
                description={module.description}
                duration={module.duration}
                difficulty={module.difficulty}
                topics={module.topics}
                onStart={() => handleStartCourse(module.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Preview */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Learn by Doing</h2>
            <p className="text-xl text-muted-foreground">
              Every lesson includes hands-on coding examples and exercises
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Your First Python Program</h3>
              <CodeBlock
                title="hello_world.py"
                code={`# Welcome to Python!
print("Hello, World!")
print("Welcome to Python programming!")

# Variables and data types
name = "Python Learner"
age = 25
is_learning = True

print(f"Hello {name}, you are {age} years old!")
print(f"Currently learning Python: {is_learning}")`}
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Working with Functions</h3>
              <CodeBlock
                title="functions.py"
                code={`def calculate_area(length, width):
    """Calculate the area of a rectangle"""
    area = length * width
    return area

def greet_user(name, greeting="Hello"):
    """Greet a user with a custom message"""
    return f"{greeting}, {name}!"

# Using the functions
room_area = calculate_area(10, 12)
message = greet_user("Alice", "Welcome")

print(f"Room area: {room_area} sq ft")
print(message)`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Our Course?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Interactive Coding</h3>
              <p className="text-muted-foreground">Practice coding with our interactive editor and instant feedback</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Real Projects</h3>
              <p className="text-muted-foreground">Build actual applications and add them to your portfolio</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Progress Tracking</h3>
              <p className="text-muted-foreground">Monitor your learning progress with visual dashboards</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Expert Support</h3>
              <p className="text-muted-foreground">Get help from experienced Python developers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Python Journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of students who have successfully learned Python with our course
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
            🚀 Enroll Now - It's Free!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Python Full Course. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
