import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

interface QuickStartProps {
  title: string;
  description: string;
  code?: string;
  isHighlighted?: boolean;
}

const quickStartList: QuickStartProps[] = [
  {
    title: "Using Docker",
    description: "Run the following command to quickly launch MCPHub:",
    code: "docker run -p 3000:3000 samanhappy/mcphub",
    isHighlighted: true,
  },
  {
    title: "Dashboard Access",
    description: "Open your web browser and navigate to: http://localhost:3000",
  },
  {
    title: "Real-Time Monitoring",
    description: "Keep an eye on the status of all MCP servers from the dashboard.",
  },
  {
    title: "SSE Endpoint",
    description: "Connect your host applications to the MCPHub SSE endpoint at: http://localhost:3000/sse",
    isHighlighted: true,
  },
];

export const ServicesSection = () => {
  return (
    <section id="quickstart" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Quick Start
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Get Started in Minutes
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        MCPHub is designed to be easy to install and use. Follow these simple steps to get up and running quickly.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[80%] mx-auto">
        {quickStartList.map(({ title, description, code, isHighlighted }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            {code && (
              <CardContent>
                <pre className="p-3 bg-black/80 text-white rounded-md overflow-x-auto">
                  <code>{code}</code>
                </pre>
              </CardContent>
            )}
            {isHighlighted && (
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-3"
              >
                KEY
              </Badge>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
