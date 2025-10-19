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
    <section className="py-8 md:py-16 bg-secondary">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Aceite o processo...
          </h2>
          
          <p className="font-body text-sm md:text-xl text-center text-foreground/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            Não vou mentir pra você que tudo aconteceu da noite pro dia, eu errei, testei, treinei... Mas mesmo ainda nova eu consegui as coisas que tenho hoje através do meu trabalho, se não fosse o primeiro espaço lá na casa da minha mãe, e depois todas as pessoas que conheci ao longo dessa trajetória nada disso seria possível, então aceite o processo, porque é possível.
          </p>

          <div className="mb-8">
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl mb-3">
              <img 
                src="https://i.imgur.com/yz126LZ.png" 
                alt="Primeiro espaço de atendimento"
                className="w-full h-auto"
              />
            </div>
            <p className="font-body text-xs md:text-sm text-center text-muted-foreground italic">
              Esse foi o espaço que eu fiz meus primeiros atendimentos, montei na casa da minha mãe em São Lourenço do Sul.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="bg-primary/5 p-4 md:p-6 rounded-xl text-center border border-primary/20"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="font-body text-xs md:text-sm font-semibold text-foreground">
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
