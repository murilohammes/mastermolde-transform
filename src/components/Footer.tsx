import { Shield, CreditCard, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span className="font-body text-sm">Compra Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-6 h-6" />
              <span className="font-body text-sm">7 Dias de Garantia</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-6 h-6" />
              <span className="font-body text-sm">Pix e Cartão</span>
            </div>
          </div>

          <div className="text-center space-y-4 mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
            
            <p className="font-body text-sm">
              © 2025 Julia Mello Studio – Todos os direitos reservados.
            </p>
          </div>

          <div className="border-t border-background/20 pt-8">
            <p className="font-body text-xs text-background/70 leading-relaxed mb-4">
              Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site não é endossado pelo Facebook de qualquer maneira. FACEBOOK é uma marca comercial de FACEBOOK, Inc.
            </p>
            
            <p className="font-body text-xs text-background/70 leading-relaxed">
              Aviso: Qualquer menção ou informação referente a valores citada neste site e de seus produtos e serviços são somente ilustrativas não devem ser consideradas promessa de resultado ou ganho comum, exato ou promessa de renda no futuro. As dicas e sugestões das aulas contidas no site não garantem qualquer tipo de resultados, uma vez que isso depende exclusivamente do trabalho e dedicação individual de cada um. Todas as informações dos visitantes, como nome e e-mail são protegidas, e não serão compartilhadas, divulgadas, ou vendidas para terceiros. Ao se registrar nesse site, o usuário cadastrado poderá receber outras promoções de cursos sobre marketing digital, empreendedorismo e negócios.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
