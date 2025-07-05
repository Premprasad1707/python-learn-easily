import { Card } from "@/components/ui/card";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock = ({ code, language = "python", title }: CodeBlockProps) => {
  return (
    <Card className="bg-muted/30 border-border/50 overflow-hidden">
      {title && (
        <div className="bg-primary/10 px-4 py-2 border-b border-border/30">
          <h4 className="text-sm font-medium text-primary">{title}</h4>
        </div>
      )}
      <div className="p-4">
        <pre className="text-sm text-foreground overflow-x-auto">
          <code className="language-python">{code}</code>
        </pre>
      </div>
    </Card>
  );
};

export default CodeBlock;