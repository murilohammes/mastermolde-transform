const PainSection = () => {
  return (
    <section className="py-8 md:py-16 bg-secondary">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-center mb-6 text-foreground leading-tight">
            Você quer aprender, mas sente que tudo parece complicado?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <p className="font-body text-sm md:text-lg text-foreground/90 leading-relaxed">
                Talvez você já tenha tentado aprender sozinha, assistido vídeos ou até comprado algum curso... mas tudo parecia difícil, confuso, caro ou demorado demais.
              </p>
              
              <p className="font-body text-sm md:text-lg text-foreground/90 leading-relaxed">
                O Master Molde foi criado justamente para mudar isso. Ele te mostra o passo a passo real — simples, direto e possível — para transformar sua paixão por unhas em uma profissão rentável.
              </p>
            </div>
            
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <img 
                src="https://i.imgur.com/D7sF1SH.png" 
                alt="Antes e depois - transformação de unhas"
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
