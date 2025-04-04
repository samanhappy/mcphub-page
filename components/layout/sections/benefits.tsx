import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Workflow",
    title: "Simplified Workflow",
    description:
      "Reduce complexity by managing all your MCP servers through a single interface, saving time and reducing operational overhead.",
  },
  {
    icon: "LineChart",
    title: "Improved Performance",
    description:
      "Monitor and optimize performance across all your MCP servers from one central dashboard.",
  },
  {
    icon: "Settings2",
    title: "Easy Configuration",
    description:
      "Configure and manage MCP servers with minimal effort. Add new servers without restarting the hub.",
  },
  {
    icon: "ArrowRightLeft",
    title: "Seamless Integration",
    description:
      "Connect your host applications to a single endpoint. Works with Claude Desktop, Cursor, Cherry Studio and more.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Streamline Your MCP Server Management
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            MCPHub simplifies how you interact with multiple MCP servers, allowing you to focus on creating amazing AI applications instead of managing infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
