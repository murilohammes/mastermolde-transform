import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-background py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 tracking-tight">
            MASTER MOLDE
          </h1>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Domine a Técnica Molde F1 e Construa Sua Carreira na Beleza
          </h2>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprenda o método mais simples e lucrativo para criar unhas perfeitas, mesmo começando do zero.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/BHqWph3kTKM"
              title="Vídeo de Vendas - Master Molde"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-4">
          <a href="https://pay.hotmart.com/J101764168H" target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="xl" className="w-full md:w-auto">
              Quero Começar agora por R$ 197
            </Button>
          </a>
          
          <p className="text-sm text-muted-foreground font-body">
            Aproveite o valor especial de lançamento disponível para as primeiras 100 alunas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
