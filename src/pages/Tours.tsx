
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const tours = [
  {
    id: "siberian-horizons",
    title: "Сибирские Горизонты",
    subtitle: "Бизнес-тур по Транссибу",
    description: "7-дневный бизнес-тур по Транссибирской магистрали для инвесторов и предпринимателей с посещением 6 крупнейших городов России",
    image: "https://images.unsplash.com/photo-1520254268439-36951222e541?auto=format&fit=crop&q=80",
    price: "от 350 000 ₽",
    days: 7,
    cities: ["Москва", "Екатеринбург", "Новосибирск", "Иркутск", "Хабаровск", "Владивосток"]
  },
  {
    id: "golden-ring",
    title: "Золотое кольцо",
    subtitle: "Бизнес и история",
    description: "5-дневный тур по историческим городам центральной России с фокусом на культурное наследие и деловые возможности региона",
    image: "https://images.unsplash.com/photo-1577629325142-3f11de95a5e9?auto=format&fit=crop&q=80",
    price: "от 120 000 ₽",
    days: 5,
    cities: ["Москва", "Владимир", "Суздаль", "Ярославль", "Сергиев Посад"]
  },
  {
    id: "northern-lights",
    title: "Северное сияние",
    subtitle: "Деловой тур на Север",
    description: "6-дневный тур на Кольский полуостров с наблюдением за северным сиянием и деловыми встречами в регионе",
    image: "https://images.unsplash.com/photo-1577655195796-5d0d6507022d?auto=format&fit=crop&q=80",
    price: "от 230 000 ₽",
    days: 6,
    cities: ["Мурманск", "Териберка", "Кировск", "Апатиты"]
  },
  {
    id: "caucasus-business",
    title: "Деловой Кавказ",
    subtitle: "Бизнес в горах",
    description: "8-дневный тур по Северному Кавказу с акцентом на инвестиционные возможности и культурное разнообразие региона",
    image: "https://images.unsplash.com/photo-1634279048415-a191996e5731?auto=format&fit=crop&q=80",
    price: "от 280 000 ₽",
    days: 8,
    cities: ["Пятигорск", "Кисловодск", "Сочи", "Грозный", "Владикавказ"]
  },
];

const Tours = () => {
  return (
    <>
      <Navbar />
      
      <div className="bg-tour-dark-blue text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Наши туры</h1>
          <p className="text-xl">Бизнес-туры премиум-класса по уникальным маршрутам России</p>
        </div>
      </div>
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 mb-12">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-64 md:h-auto">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h2 className="text-2xl font-bold text-tour-dark-blue">{tour.title}</h2>
                          <p className="text-tour-blue">{tour.subtitle}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-500">{tour.days} дней</p>
                          <p className="text-tour-gold font-bold">{tour.price}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{tour.description}</p>
                      <div className="mb-4">
                        <p className="font-medium text-tour-blue mb-1">Города:</p>
                        <div className="flex flex-wrap gap-2">
                          {tour.cities.map((city) => (
                            <span key={city} className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button asChild className="bg-tour-gold hover:bg-tour-dark-blue text-white">
                        <Link to={`/tours/${tour.id}`}>Подробнее</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-tour-dark-blue">Не нашли подходящий тур?</h2>
            <p className="text-lg mb-6">
              Мы можем разработать индивидуальный маршрут с учетом ваших бизнес-потребностей
            </p>
            <Button asChild className="bg-tour-blue hover:bg-tour-dark-blue">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Tours;
