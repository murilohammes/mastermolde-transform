const PainSection = () => {
  return (
    <section className="py-10 md:py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-muted border border-border rounded-3xl p-6 md:p-10 shadow-lg mb-8">
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-center mb-4 text-foreground">
              Você quer aprender, mas sente que tudo parece complicado?
            </h2>
            
            <p className="font-body text-sm md:text-base text-center text-muted-foreground mb-0 max-w-3xl mx-auto leading-relaxed">
              Talvez você já tenha tentado aprender sozinha, assistido vídeos ou até comprado algum curso... mas tudo parecia <em className="italic not-italic">difícil</em>, confuso, caro ou demorado demais. O Master Molde foi criado justamente para mudar isso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md border border-border">
              <img 
                src="https://i.imgur.com/D7sF1SH.png" 
                alt="Unhas antes do curso"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-border">
              <img 
                src="https://i.imgur.com/D7sF1SH.png" 
                alt="Unhas depois do curso"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
