import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Sparkles } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-center mb-4 text-foreground">
            A solução é simples: Master Molde.
          </h2>
          
          <p className="font-body text-sm md:text-lg text-center text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            O curso Master Molde te ensina tudo para dominar a técnica Molde F1, mesmo sem experiência prévia.
            Você vai aprender o passo a passo pra criar unhas profissionais, rápidas e com resultado de salão.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10">
            <div className="bg-card p-5 md:p-6 rounded-2xl shadow-md border border-border hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-body text-sm md:text-base font-semibold mb-1 text-foreground">
                Método fácil e didático
              </h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground">
                Sem termos técnicos difíceis
              </p>
            </div>

            <div className="bg-card p-5 md:p-6 rounded-2xl shadow-md border border-border hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-body text-sm md:text-base font-semibold mb-1 text-foreground">
                Foco em resultado real
              </h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground">
                Treine e veja melhora nas primeiras aulas
              </p>
            </div>

            <div className="bg-card p-5 md:p-6 rounded-2xl shadow-md border border-border hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-body text-sm md:text-base font-semibold mb-1 text-foreground">
                Comece hoje
              </h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground">
                Sem experiência ou grande investimento
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-10">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img 
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXM4MGVvbXJidHl3Yzg4YmRxeTY1ZWVpZGV5NTI4bGkxM3FjaDdnaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qQjGcwQ6u03uO9MW1c/giphy.gif" 
                alt="Área de membros do curso"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="max-w-md mx-auto text-center">
            <a href="https://pay.hotmart.com/J101764168H" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg" className="w-full text-sm md:text-base px-6 py-6 md:py-7">
                Quero aprender o método agora por R$ 197
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
