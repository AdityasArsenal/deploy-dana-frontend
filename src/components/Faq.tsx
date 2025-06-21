import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/accordion";
  import { MessageSquare, ShieldCheck, Zap } from 'lucide-react';
  
  const Faq = () => {
    return (
      <section id="faq" className="py-20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Frequently Asked</span> Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We've got answers. If you can't find what you're looking for, feel free to reach out.
            </p>
          </div>
  
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover-neon">
              <AccordionTrigger className="p-6 text-lg font-semibold text-foreground hover:no-underline">
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-primary mr-3" />
                  What is ESGai?
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-muted-foreground">
                ESGai is an advanced AI-powered platform that analyzes ESG (Environmental, Social, and Governance) data from over 1,000 companies. It uses a Retrieval-Augmented Generation (RAG) framework to provide precise, context-rich insights from complex datasets like NSE's BRSR and XBRL reports.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-2" className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover-neon">
              <AccordionTrigger className="p-6 text-lg font-semibold text-foreground hover:no-underline">
                <div className="flex items-center">
                  <ShieldCheck className="w-5 h-5 text-primary mr-3" />
                  How does the AI work?
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-muted-foreground">
                Our system uses a multi-agent approach—Manager, Worker, and Director—to break down your queries, retrieve relevant information from a vast database of ESG reports, and synthesize clear, actionable answers. This ensures both accuracy and depth in the insights provided.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-3" className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover-neon">
              <AccordionTrigger className="p-6 text-lg font-semibold text-foreground hover:no-underline">
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-primary mr-3" />
                  Can I integrate the data with other tools?
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-muted-foreground">
                Yes! ESGai is designed for seamless integration with tools like Power BI and Azure. You can export data and visualizations to fit your existing workflow, enabling real-time trend analysis and reporting.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    );
  };
  
  export default Faq;
