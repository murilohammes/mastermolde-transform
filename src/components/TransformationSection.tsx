import { Sparkles, TrendingUp, Clock } from "lucide-react";

const TransformationSection = () => {
  const highlights = [
    {
      icon: Sparkles,
      text: "Técnica fácil e rápida para iniciantes"
    },
    {
      icon: TrendingUp,
      text: "Lucro real com atendimentos profissionais"
    },
    {
      icon: Clock,
      text: "Unhas perfeitas em até 2 horas"
    }
  ];

  return (
    <section className="py-10 md:py-20 relative overflow-hidden" style={{ background: 'var(--gradient-vertical)' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-center mb-4 text-foreground">
            Aceite o processo...
          </h2>
          
          <p className="font-body text-sm md:text-base text-center text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Não vou mentir pra você que tudo aconteceu da noite pro dia, eu <em className="italic">errei</em>, testei, treinei... Mas mesmo ainda nova eu consegui as coisas que tenho hoje através do meu trabalho. Se não fosse o <em className="italic">primeiro espaço</em> lá na casa da minha mãe, nada disso seria possível.
          </p>

          <div className="mb-8">
            <div className="rounded-3xl overflow-hidden shadow-xl mb-3 border border-border">
              <img 
                src="https://i.imgur.com/yz126LZ.png" 
                alt="Primeiro espaço de atendimento"
                className="w-full h-auto"
              />
            </div>
            <p className="font-body text-xs md:text-sm text-center text-muted-foreground italic">
              Meu primeiro espaço de atendimento, na casa da minha mãe (São Lourenço do Sul).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-5">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm p-4 md:p-5 rounded-2xl text-center border border-border"
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-primary/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <Icon className="w-5 h-5 md:w-5 md:h-5 text-primary" />
                  </div>
                  <p className="font-body text-xs md:text-sm font-medium text-foreground">
                    {highlight.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
