
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const featuredTours = [
  {
    id: "siberian-horizons",
    title: "Сибирские Горизонты",
    description: "7-дневный бизнес-тур по Транссибирской магистрали для инвесторов и предпринимателей",
    image: "https://images.unsplash.com/photo-1520254268439-36951222e541?auto=format&fit=crop&q=80",
    price: "от 350 000 ₽"
  },
  {
    id: "golden-ring",
    title: "Золотое кольцо",
    description: "5-дневный тур по историческим городам центральной России с фокусом на культурное наследие",
    image: "https://images.unsplash.com/photo-1577629325142-3f11de95a5e9?auto=format&fit=crop&q=80",
    price: "от 120 000 ₽"
  },
  {
    id: "northern-lights",
    title: "Северное сияние",
    description: "6-дневный тур на Кольский полуостров с наблюдением за северным сиянием и деловыми встречами",
    image: "https://images.unsplash.com/photo-1577655195796-5d0d6507022d?auto=format&fit=crop&q=80",
    price: "от 230 000 ₽"
  }
];

const testimonials = [
  {
    text: "Тур превзошел все мои ожидания. Прекрасная организация, интересные деловые встречи и возможность увидеть настоящую Россию.",
    author: "Алексей Петров",
    company: "Генеральный директор, АО \"ТехноИнвест\""
  },
  {
    text: "Уникальное сочетание бизнеса и культуры. Нам удалось заключить несколько важных контрактов и насладиться красотой Байкала.",
    author: "Елена Смирнова",
    company: "Финансовый директор, ООО \"Восток-Запад\""
  }
];

const Index = () => {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Featured Tours */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-tour-dark-blue">
              Популярные туры
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTours.map((tour) => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-tour-blue">{tour.title}</h3>
                    <p className="text-gray-600 mb-4">{tour.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-tour-gold font-bold">{tour.price}</span>
                      <Button asChild className="bg-tour-blue hover:bg-tour-dark-blue">
                        <Link to={`/tours/${tour.id}`}>Подробнее</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* About Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1603224288850-e6aabe36b5c5?auto=format&fit=crop&q=80" 
                  alt="О нашей компании" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-tour-dark-blue">О компании "Туда-Сюда"</h2>
                <p className="text-gray-700 mb-4">
                  Мы специализируемся на организации премиальных деловых туров по России, 
                  сочетающих бизнес-возможности с культурным обогащением. Наши маршруты 
                  проходят по самым интересным и перспективным регионам страны.
                </p>
                <p className="text-gray-700 mb-6">
                  Все туры разработаны с учетом потребностей делового человека: 
                  комфортное размещение, продуманная логистика, интересные встречи 
                  и возможность увидеть уникальные места.
                </p>
                <Button asChild className="bg-tour-gold hover:bg-tour-red">
                  <Link to="/about">Узнать больше о нас</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-tour-dark-blue text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <p className="italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-300">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-tour-gold text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы открыть для себя новые горизонты?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Забронируйте свой премиальный бизнес-тур уже сегодня и откройте 
              для себя уникальные возможности российских регионов.
            </p>
            <Button asChild size="lg" className="bg-white text-tour-gold hover:bg-tour-dark-blue hover:text-white">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
