import { Button } from "@/components/ui/button";
import { Shield, CreditCard } from "lucide-react";

const InvestmentSection = () => {
  return (
    <section className="py-10 md:py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-center mb-10 text-foreground">
            Comece hoje por um valor especial
          </h2>
          
          <div className="bg-muted border border-border p-6 md:p-10 rounded-3xl shadow-xl mb-6">
            <p className="text-[10px] md:text-xs font-body text-muted-foreground text-center mb-6 uppercase tracking-wider">
              Para as 100 primeiras alunas
            </p>
            
            <div className="mb-8">
              <div className="text-center">
                <p className="text-6xl md:text-8xl font-heading font-bold text-foreground mb-3 leading-none">
                  R$ 197
                </p>
                <p className="text-sm md:text-base font-body text-muted-foreground">
                  Pagamento único
                </p>
              </div>
            </div>

            <div className="max-w-md mx-auto mb-6">
              <a href="https://pay.hotmart.com/J101764168H" target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg" className="w-full text-sm md:text-base px-6 py-6 md:py-7">
                  Quero garantir minha vaga por R$ 197
                </Button>
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
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

          <p className="font-body text-xs md:text-sm text-center text-muted-foreground">
            Pagamento único e acesso imediato. Garantia de 7 dias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
