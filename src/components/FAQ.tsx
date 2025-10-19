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
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-foreground">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4 mb-8 md:mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-secondary border border-border rounded-lg px-4 md:px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="font-heading font-semibold text-sm md:text-lg text-left hover:no-underline py-4 md:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-xs md:text-base text-muted-foreground pb-4 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center bg-secondary p-6 md:p-8 rounded-xl shadow-md">
            <p className="font-body text-base md:text-lg mb-4 md:mb-6 text-foreground">
              Ainda com dúvidas? Fale com a Julia pelo WhatsApp.
            </p>
            <a href="https://wa.me/5553997105666" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="default" className="gap-2 w-full md:w-auto">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
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
