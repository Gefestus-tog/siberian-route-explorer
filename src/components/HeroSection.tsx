
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-tour-dark-blue text-white">
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Бизнес-туры по Транссибирской магистрали
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Инвестиции в будущее, богатое опытом
          </p>
          <p className="text-lg mb-8 max-w-2xl">
            Откройте для себя уникальные возможности в деловых турах от Москвы до Владивостока. 
            Совместите бизнес с культурным обогащением на самом длинном железнодорожном маршруте мира.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-tour-gold hover:bg-tour-red text-white">
              <Link to="/tours/siberian-horizons">
                Узнать больше
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-tour-dark-blue">
              <Link to="/contacts">
                Связаться с нами
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
