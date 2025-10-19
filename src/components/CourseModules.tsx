import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CourseModules = () => {
  const modules = [
    "https://i.imgur.com/V5ko7mM.png",
    "https://i.imgur.com/x2BZeo9.png",
    "https://i.imgur.com/NeCrbRY.png",
    "https://i.imgur.com/HAnUa3D.png",
    "https://i.imgur.com/Gud2ozW.png",
    "https://i.imgur.com/rQttn16.png",
    "https://i.imgur.com/YY93NBy.png",
    "https://i.imgur.com/DCulIeI.png",
    "https://i.imgur.com/AodMbXn.png",
    "https://i.imgur.com/WugT4rE.png",
    "https://i.imgur.com/NMq8Vi2.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % modules.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, modules.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + modules.length) % modules.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % modules.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Tudo o que você precisa para dominar o Molde F1
          </h2>
          
          <p className="font-body text-sm md:text-lg text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Você terá acesso ao material completo, organizado na melhor sequência para o seu aprendizado
          </p>

          <div className="relative max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl bg-white">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {modules.map((module, index) => (
                  <div key={index} className="min-w-full">
                    <img 
                      src={module}
                      alt={`Módulo ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>

              <Button
                variant="secondary"
                size="icon"
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg w-8 h-8 md:w-10 md:h-10"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </Button>

              <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg w-8 h-8 md:w-10 md:h-10"
                onClick={goToNext}
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </Button>
            </div>

            <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6">
              {modules.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-6 md:w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir para módulo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseModules;
