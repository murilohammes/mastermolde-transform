import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "O curso serve para iniciantes?",
      answer: "Sim, o curso é do básico ao avançado, pode ser para alguém que não tenha nenhuma experiência ou alguém que quer se aperfeiçoar."
    },
    {
      question: "Preciso de muitos materiais?",
      answer: "Não, explicamos no curso os materiais para iniciar para que assim não haja gastos desnecessários."
    },
    {
      question: "Como recebo o certificado?",
      answer: "O certificado é liberado pela própria Hotmart com a finalização do curso completo."
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "Acesso vitalício - você pode ver o conteúdo quantas vezes quiser, quando quiser."
    },
    {
      question: "O curso é 100% online?",
      answer: "100% online, pode ser visto quantas vezes for necessário, no seu ritmo e horário."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="font-heading font-semibold text-lg text-left hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center bg-background p-8 rounded-xl shadow-md">
            <p className="font-body text-lg mb-6 text-foreground">
              Ainda com dúvidas? Fale com a Julia pelo WhatsApp.
            </p>
            <a href="https://wa.me/5553997105666" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
