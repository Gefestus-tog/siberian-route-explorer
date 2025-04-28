
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TransSibRoute from "@/components/TransSibRoute";
import TourFeatures from "@/components/TourFeatures";

const TourDetail = () => {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Banner */}
        <div className="relative h-96">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1615816098896-2f6fd34a4f5a?auto=format&fit=crop&q=80')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-tour-dark-blue/80 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Бизнес-тур "Сибирский путь к успеху"</h1>
              <p className="text-xl mb-2">7 дней | Москва - Владивосток</p>
              <p className="text-xl font-bold text-tour-gold">от 350 000 ₽</p>
            </div>
          </div>
        </div>
        
        {/* Tour Summary */}
        <div className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2 text-tour-dark-blue">Целевая аудитория</h3>
                <p>Инвесторы, бизнесмены, представители крупных компаний</p>
              </Card>
              
              <Card className="p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2 text-tour-dark-blue">Слоган</h3>
                <p>Инвестиции в будущее, богатое опытом</p>
              </Card>
              
              <Card className="p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2 text-tour-dark-blue">Продолжительность</h3>
                <p>7 дней / 6 ночей</p>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Tour Description */}
        <div className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-tour-dark-blue">Описание тура</h2>
              <p className="text-lg mb-4">
                Уникальный бизнес-тур "Сибирский путь к успеху" – это поездка по Транссибирской 
                магистрали, созданная специально для деловых людей, инвесторов и представителей 
                крупных компаний. В течение 7 дней вы пересечете всю Россию от Москвы до 
                Владивостока, посетив ключевые экономические и культурные центры.
              </p>
              <p className="text-lg mb-4">
                В каждом городе вас ждут встречи с представителями региональных властей и 
                бизнес-сообщества, экскурсии по знаковым местам и размещение в лучших отелях.
                Это уникальная возможность наладить деловые связи, изучить инвестиционный 
                потенциал регионов и насладиться культурным разнообразием России.
              </p>
            </div>
          </div>
        </div>
        
        {/* Interactive Route Map */}
        <TransSibRoute />
        
        {/* Tour Features */}
        <TourFeatures />
        
        {/* Contact Information */}
        <div className="py-16 bg-tour-dark-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Для получения дополнительной информации</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Для уточнения деталей тура "Сибирский путь к успеху" свяжитесь с нашими менеджерами.
              Мы также можем адаптировать программу под ваши индивидуальные потребности.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

import { Card } from "@/components/ui/card";

export default TourDetail;
