import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const SolutionSection = () => {
  const benefits = [
    {
      title: "Método fácil e didático",
      description: "Sem termos técnicos difíceis."
    },
    {
      title: "Foco em resultado real",
      description: "Treine e veja melhora nas primeiras aulas."
    },
    {
      title: "Comece hoje",
      description: "Sem experiência ou grande investimento."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            A solução é simples: Master Molde.
          </h2>
          
          <p className="font-body text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            O curso Master Molde te ensina tudo para dominar a técnica Molde F1, mesmo sem experiência prévia.
            Você vai aprender o passo a passo pra criar unhas profissionais, rápidas e com resultado de salão.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
              >
                <CheckCircle2 className="text-primary w-12 h-12 mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img 
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXM4MGVvbXJidHl3Yzg4YmRxeTY1ZWVpZGV5NTI4bGkxM3FjaDdnaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qQjGcwQ6u03uO9MW1c/giphy.gif"
              alt="Área de membros do curso"
              className="w-full h-auto"
            />
          </div>

          <div className="text-center">
            <a href="https://pay.hotmart.com/J101764168H" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl" className="w-full md:w-auto">
                Quero aprender o método agora por R$ 197,00
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
