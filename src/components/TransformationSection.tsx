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
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8">
            Aceite o processo...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <p className="font-body text-lg leading-relaxed opacity-95">
                Não vou mentir pra você que tudo aconteceu da noite pro dia, eu errei, testei, treinei... Mas mesmo ainda nova eu consegui as coisas que tenho hoje através do meu trabalho.
              </p>
              
              <p className="font-body text-lg leading-relaxed opacity-95">
                Se não fosse o primeiro espaço lá na casa da minha mãe, e depois todas as pessoas que conheci ao longo dessa trajetória nada disso seria possível, então aceite o processo, porque é possível.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.imgur.com/yz126LZ.png"
                  alt="Primeiro espaço de atendimento"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm italic opacity-90 font-body text-center">
                Esse foi o espaço que eu fiz meus primeiros atendimentos, montei na casa da minha mãe em São Lourenço do Sul.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-primary-foreground/20 transition-colors duration-300"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <p className="font-body font-semibold">
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
