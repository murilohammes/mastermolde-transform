import { Gift, Instagram, ShoppingBag, Calendar, Users, Award } from "lucide-react";

const BonusSection = () => {
  const benefits = [
    {
      icon: Calendar,
      text: "1 ano de acesso ao conteúdo"
    },
    {
      icon: Award,
      text: "Certificado digital de conclusão"
    },
    {
      icon: Users,
      text: "Grupo exclusivo de alunas"
    },
    {
      icon: Gift,
      text: "Atualizações gratuitas"
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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Benefícios exclusivos para alunas do curso
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="bg-secondary p-6 rounded-xl text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <p className="font-body text-sm font-semibold text-foreground">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://i.imgur.com/QjEB47c.png"
                alt="Benefícios do curso"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12 rounded-2xl border-2 border-primary/20">
            <div className="text-center mb-8">
              <Gift className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                2 Bônus Exclusivos
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {bonuses.map((bonus, index) => {
                const Icon = bonus.icon;
                return (
                  <div 
                    key={index}
                    className="bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <Icon className="w-12 h-12 mb-4 text-primary" />
                    <h4 className="font-heading text-lg font-bold text-primary mb-2">
                      {bonus.title}
                    </h4>
                    <p className="font-body text-foreground">
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
