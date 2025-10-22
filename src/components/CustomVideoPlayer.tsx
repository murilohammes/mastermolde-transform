import { useState, useEffect } from "react";
import { Play } from "lucide-react";

interface CustomVideoPlayerProps {
  videoId: string;
  title?: string;
}

const CustomVideoPlayer = ({ videoId, title = "Vídeo" }: CustomVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    // Simula carregamento falso tipo VTurb
    // Inicia em 70%
    setProgress(70);

    // Move até 90% em 1.5s
    const timer1 = setTimeout(() => {
      setProgress(90);
    }, 100);

    // Pausa um pouco em 90%
    const timer2 = setTimeout(() => {
      setProgress(95);
    }, 1800);

    // Completa para 100% e mostra o vídeo
    const timer3 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsPlaying(true);
        setIsLoading(false);
      }, 300);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isLoading]);

  const handlePlayClick = () => {
    setIsLoading(true);
  };

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border group cursor-pointer">
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />

      {/* Botão de Play */}
      {!isLoading && (
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center transition-transform hover:scale-105"
          aria-label="Reproduzir vídeo"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl" />
            <div className="relative bg-primary/80 hover:bg-primary/90 rounded-full p-6 md:p-8 transition-all shadow-2xl backdrop-blur-sm">
              <Play className="w-12 h-12 md:w-16 md:h-16 text-white fill-white" />
            </div>
          </div>
        </button>
      )}

      {/* Barra de carregamento falsa */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4/5 max-w-md">
            <div className="bg-black/60 backdrop-blur-sm rounded-full p-3">
              <div className="relative h-2 bg-muted/50 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary-hover rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </div>
              </div>
              <p className="text-white/90 text-xs md:text-sm text-center mt-2 font-medium">
                Carregando vídeo... {progress}%
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
