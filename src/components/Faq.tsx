import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/accordion";
  import { MessageSquare } from 'lucide-react';
  
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
                  <MessageSquare className="w-5 h-5 text-primary mr-3" />
                  What is ESGai.Space?
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-muted-foreground">
              ESGai.Space is an AI-powered ESG tool that automates ESG reporting and analysis for 1000+ Indian listed companies, helping businesses and consultants make smarter sustainability decisions.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-2" className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover-neon">
              <AccordionTrigger className="p-6 text-lg font-semibold text-foreground hover:no-underline">
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-primary mr-3" />
                  How does ESGai.Space work?
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-muted-foreground">
              The platform uses advanced AI agents to scan and analyze thousands of ESG reports, instantly delivering accurate, data-driven ESG insights tailored for Indian markets.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-3" className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover-neon">
              <AccordionTrigger className="p-6 text-lg font-semibold text-foreground hover:no-underline">
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-primary mr-3" />
                  What are the key features of ESGai.Space?
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-muted-foreground">
              Main features include automated ESG data extraction, real-time benchmarking, KPI comparison, and visual reporting—designed specifically for Indian companies and ESG consultants.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover-neon">
              <AccordionTrigger className="p-6 text-lg font-semibold text-foreground hover:no-underline">
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-primary mr-3" />
                  Who should use ESGai.Space?
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-muted-foreground">
              ESGai.Space is perfect for ESG consultants, sustainability teams, and Indian organizations seeking fast, reliable ESG research and compliance across 1000+ listed companies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover-neon">
                <AccordionTrigger className="p-6 text-lg font-semibold text-foreground hover:no-underline">
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-primary mr-3" />
                    How does ESGai.Space ensure data accuracy?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-muted-foreground">
                The tool leverages Microsoft Azure’s secure cloud, combining keyword and vector search to deliver up-to-date, trustworthy ESG data from verified Indian company reports.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover-neon">
                <AccordionTrigger className="p-6 text-lg font-semibold text-foreground hover:no-underline">
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-primary mr-3" />
                    Is ESGai.Space free to use?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-muted-foreground">
                Yes, ESGai.Space is currently free. You can access and use the AI ESG consultant for Indian listed companies at no cost.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  </section>
    );
  };
  
  export default Faq;
