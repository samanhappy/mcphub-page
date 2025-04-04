import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "LayoutDashboard",
    title: "Intuitive Dashboard UI",
    description:
      "Monitor server status and manage servers dynamically via a user-friendly web interface.",
  },
  {
    icon: "Network",
    title: "Centralized Management",
    description:
      "Oversee multiple MCP servers from one convenient hub. Simplify your workflow with a single control point.",
  },
  {
    icon: "Webhook",
    title: "Broad Protocol Support",
    description:
      "Works seamlessly with both stdio and SSE MCP protocols, ensuring compatibility with your existing setup.",
  },
  {
    icon: "ServerCog",
    title: "Flexible Server Management",
    description:
      "Add, remove, or reconfigure MCP servers without restarting the hub. Dynamic management at your fingertips.",
  },
  {
    icon: "Layers",
    title: "Single SSE Endpoint",
    description:
      "Connect all your applications to one unified endpoint, simplifying your architecture and reducing complexity.",
  },
  {
    icon: "MonitorCheck",
    title: "Real-time Monitoring",
    description:
      "Keep an eye on the status of all MCP servers with instant status updates and health checks.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Why Choose MCPHub
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        MCPHub simplifies your MCP server management with powerful features designed for efficiency and ease of use.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
