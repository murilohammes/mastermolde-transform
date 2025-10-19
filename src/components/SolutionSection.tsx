import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Sparkles } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-center mb-4 text-foreground">
            A solução é simples: Master Molde.
          </h2>
          
          <p className="font-body text-sm md:text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            O curso Master Molde te ensina tudo para dominar a técnica Molde F1, mesmo sem experiência prévia.
            Você vai aprender o passo a passo pra criar unhas profissionais, rápidas e com resultado de salão.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-8">
            <div className="bg-card p-4 md:p-6 rounded-xl shadow-md border border-primary/10 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-heading text-base md:text-lg font-bold text-center mb-2 text-foreground">
                Método fácil e didático
              </h3>
              <p className="font-body text-xs md:text-sm text-center text-muted-foreground">
                Sem termos técnicos difíceis
              </p>
            </div>

            <div className="bg-card p-4 md:p-6 rounded-xl shadow-md border border-primary/10 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-heading text-base md:text-lg font-bold text-center mb-2 text-foreground">
                Foco em resultado real
              </h3>
              <p className="font-body text-xs md:text-sm text-center text-muted-foreground">
                Treine e veja melhora nas primeiras aulas
              </p>
            </div>

            <div className="bg-card p-4 md:p-6 rounded-xl shadow-md border border-primary/10 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-heading text-base md:text-lg font-bold text-center mb-2 text-foreground">
                Comece hoje
              </h3>
              <p className="font-body text-xs md:text-sm text-center text-muted-foreground">
                Sem experiência ou grande investimento
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXM4MGVvbXJidHl3Yzg4YmRxeTY1ZWVpZGV5NTI4bGkxM3FjaDdnaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qQjGcwQ6u03uO9MW1c/giphy.gif" 
                alt="Área de membros do curso"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center">
            <a href="https://pay.hotmart.com/J101764168H" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg" className="w-full md:w-auto text-base md:text-lg">
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
