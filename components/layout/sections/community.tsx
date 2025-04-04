import GithubIcon from "@/components/icons/github-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section id="development" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[80%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <GithubIcon />
                <div className="mt-4">
                  Local
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Development
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              <div className="text-left space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Clone the Repository</h3>
                  <pre className="p-3 bg-black/80 text-white rounded-md overflow-x-auto">
                    <code>git clone https://github.com/samanhappy/mcphub.git</code>
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">Optional Configuration</h3>
                  <p className="mb-2">Customize your MCP server settings by editing the mcp_settings.json file:</p>
                  <pre className="p-3 bg-black/80 text-white rounded-md overflow-x-auto">
                    <code>{`{
  "mcpServers": {
    "time-mcp": {
      "command": "npx",
      "args": ["-y", "time-mcp"]
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}`}</code>
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">Start the Development Server</h3>
                  <pre className="p-3 bg-black/80 text-white rounded-md overflow-x-auto">
                    <code>cd mcphub && pnpm install && pnpm dev</code>
                  </pre>
                </div>
              </div>
            </CardContent>

            <CardFooter className="mt-4">
              <Button asChild>
                <a href="https://github.com/samanhappy/mcphub" target="_blank">
                  View on GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
