import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  topics: string[];
  onStart: () => void;
}

const CourseCard = ({ title, description, duration, difficulty, topics, onStart }: CourseCardProps) => {
  const difficultyColors = {
    Beginner: "bg-success text-success-foreground",
    Intermediate: "bg-warning text-warning-foreground", 
    Advanced: "bg-destructive text-destructive-foreground"
  };

  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-smooth border border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-card-foreground">{title}</CardTitle>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>⏱️ Duration: {duration}</span>
          </div>
          <div>
            <h4 className="font-medium text-card-foreground mb-2">Topics covered:</h4>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, index) => (
                <span key={index} className="bg-accent/20 text-accent-foreground px-2 py-1 rounded-md text-xs">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="hero" size="lg" onClick={onStart} className="w-full">
          Start Learning
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;