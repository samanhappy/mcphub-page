import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is MCPHub?",
    answer: "MCPHub is a unified hub server that consolidates multiple MCP (Model Context Protocol) servers into a single SSE endpoint. It streamlines service management by offering a centralized interface for all your MCP server needs.",
    value: "item-1",
  },
  {
    question: "How do I connect my applications to MCPHub?",
    answer: "You can connect your host applications (e.g., Claude Desktop, Cursor, Cherry Studio, etc.) to the MCPHub SSE endpoint at http://localhost:3000/sse.",
    value: "item-2",
  },
  {
    question: "Can I add or remove MCP servers without restarting MCPHub?",
    answer: "Yes, MCPHub supports dynamic server management. You can add, remove, or reconfigure MCP servers without restarting the hub through the dashboard UI.",
    value: "item-3",
  },
  {
    question: "What MCP protocols does MCPHub support?",
    answer: "MCPHub works seamlessly with both stdio and SSE MCP protocols.",
    value: "item-4",
  },
  {
    question: "How do I customize my MCP server settings?",
    answer: "You can customize your MCP server settings by editing the mcp_settings.json file. Check the documentation for details and examples.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
