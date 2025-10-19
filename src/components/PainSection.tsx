const PainSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
            Você quer aprender, mas sente que tudo parece complicado?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-body text-lg text-foreground/90 leading-relaxed">
                Talvez você já tenha tentado aprender sozinha, assistido vídeos ou até comprado algum curso... mas tudo parecia difícil, confuso, caro ou demorado demais.
              </p>
              
              <p className="font-body text-lg text-foreground/90 leading-relaxed">
                O Master Molde foi criado justamente para mudar isso. Ele te mostra o passo a passo real — simples, direto e possível — para transformar sua paixão por unhas em uma profissão rentável.
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl">
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
