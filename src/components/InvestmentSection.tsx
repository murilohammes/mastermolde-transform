import { Button } from "@/components/ui/button";
import { Shield, CreditCard } from "lucide-react";

const InvestmentSection = () => {
  return (
    <section className="py-8 md:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6 md:mb-12">
            Garanta agora seu acesso ao curso Master Molde
          </h2>
          
          <div className="bg-primary-foreground text-foreground p-6 md:p-12 rounded-xl md:rounded-2xl shadow-2xl mb-6 md:mb-8">
            <p className="text-xs md:text-sm font-body text-muted-foreground mb-4">
              Esse valor será válido para as 100 primeiras alunas, depois o valor será R$ 297
            </p>
            
            <div className="mb-6 md:mb-8">
              <div className="inline-block">
                <p className="text-5xl md:text-8xl font-heading font-extrabold text-primary mb-2">
                  R$ 197
                </p>
                <p className="text-base md:text-lg font-body text-muted-foreground">
                  Pagamento único
                </p>
              </div>
            </div>

            <a href="https://pay.hotmart.com/J101764168H" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg" className="w-full md:w-auto mb-4 md:mb-6 text-base md:text-lg">
                Quero garantir minha vaga por R$ 197,00
              </Button>
            </a>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>

          <p className="font-body text-xs md:text-sm opacity-90 px-2">
            Pagamento único e acesso imediato. Garantia de 7 dias — se não amar o curso, devolvemos seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
