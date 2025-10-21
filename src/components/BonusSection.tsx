import { Gift, Instagram, ShoppingBag, Calendar, Users, Award } from "lucide-react";

const BonusSection = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "1 ano de acesso ao conteúdo",
      description: "Assista quando quiser"
    },
    {
      icon: Award,
      title: "Certificado digital de conclusão",
      description: "Reconhecimento oficial"
    },
    {
      icon: Gift,
      title: "Atualizações gratuitas",
      description: "Sempre atualizado"
    },
    {
      icon: Users,
      title: "Todos os formatos de unhas",
      description: "Passo a passo completo"
    }
  ];

  const bonuses = [
    {
      icon: Instagram,
      title: "BÔNUS 1",
      description: "Guia Básico de Instagram e Captação de Clientes"
    },
    {
      icon: ShoppingBag,
      title: "BÔNUS 2",
      description: "Lista com os Produtos que Você Precisa pra Começar (com links)"
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-center mb-10 text-foreground">
            Benefícios exclusivos para alunas do curso
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center mb-10 md:mb-16">
            <div className="grid grid-cols-2 gap-3 md:gap-4 order-2 md:order-1">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card p-4 md:p-5 rounded-2xl border border-border hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 mb-2 text-primary" />
                    <h4 className="font-body text-xs md:text-sm font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="font-body text-[10px] md:text-xs text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-xl border border-border order-1 md:order-2">
              <img 
                src="https://i.imgur.com/QjEB47c.png"
                alt="Benefícios do curso"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-card border border-border p-6 md:p-10 rounded-3xl shadow-lg">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-primary/20 rounded-full mb-3">
                <Gift className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                2 Bônus Exclusivos
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
              {bonuses.map((bonus, index) => {
                const Icon = bonus.icon;
                return (
                  <div 
                    key={index}
                    className="bg-muted p-5 md:p-6 rounded-2xl border border-border hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 mb-3 text-primary" />
                    <h4 className="font-body text-xs md:text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                      {bonus.title}
                    </h4>
                    <p className="font-body text-xs md:text-sm text-foreground">
                      {bonus.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;