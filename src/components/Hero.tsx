import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-background py-10 md:py-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-radial-hero)' }} />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="font-heading text-[clamp(2.125rem,5vw,3.5rem)] md:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground mb-4 leading-tight">
              Domine o Molde F1.<br />De verdade.
            </h1>
            
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-[60ch] mx-auto md:mx-0 mb-6 font-medium">
              Aprenda o método mais simples e lucrativo para criar unhas perfeitas, mesmo começando do zero.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://i.imgur.com/xbf6XeF.png" 
              alt="Julia Mello"
              className="w-full max-w-[280px] md:max-w-[360px] h-auto drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(30, 80, 71, 0.4))' }}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-6">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/BHqWph3kTKM"
              title="Vídeo de Vendas - Master Molde"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="max-w-md mx-auto text-center space-y-3">
          <a href="https://pay.hotmart.com/J101764168H" target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg" className="w-full text-sm md:text-base px-6 py-6 md:py-7">
              Quero começar agora por R$ 197
            </Button>
          </a>
          
          <p className="text-xs md:text-sm text-muted-foreground font-body">
            Valor especial de lançamento para as primeiras 100 alunas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
