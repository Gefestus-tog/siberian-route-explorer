
import { useState } from 'react';
import { Card } from "@/components/ui/card";

// Типы данных для городов и транспорта
type City = {
  name: string;
  activities: string[];
  accommodation: string;
  image: string;
};

type Transport = {
  from: string;
  to: string;
  type: string;
  details: string;
  duration: string;
  image: string;
};

const cities: City[] = [
  {
    name: "Москва",
    activities: [
      "Встреча с экспертами по инвестициям",
      "Презентация потенциала регионов Транссиба",
      "Обед в ресторане Ruski (Москва-Сити)",
      "Ужин с представителями российских компаний",
      "Экскурсия по Красной площади и Кремлю"
    ],
    accommodation: "Отель RODINA Grand Hotel & SPA",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80"
  },
  {
    name: "Екатеринбург",
    activities: [
      "Обзорная экскурсия по Екатеринбургу (3 часа)",
      "Посещение музея истории Урала",
      "Встреча с правительством Урала",
      "Обед в ресторане Зверобой (уральская кухня)",
      "Экскурсия к Храму-на-Крови"
    ],
    accommodation: "Hyatt Regency Ekaterinburg 5*",
    image: "https://images.unsplash.com/photo-1594397394907-096148b9d1c9?auto=format&fit=crop&q=80"
  },
  {
    name: "Новосибирск",
    activities: [
      "Встреча с представителями Академгородка",
      "Посещение Новосибирского госуниверситета",
      "Ужин с местными предпринимателями",
      "Спектакль в Театре оперы и балета"
    ],
    accommodation: "Grand Autograph Hotel Novosibirsk",
    image: "https://images.unsplash.com/photo-1589122758779-0df750e72d2c?auto=format&fit=crop&q=80"
  },
  {
    name: "Иркутск",
    activities: [
      "Экскурсия на Байкал (Листвянка, музей, катер)",
      "Обед в ресторане Легенда Байкала",
      "Посещение Иркутского художественного музея"
    ],
    accommodation: "RODINA Grand Hotel & SPA Irkutsk",
    image: "https://images.unsplash.com/photo-1551845041-63e8e76836ce?auto=format&fit=crop&q=80"
  },
  {
    name: "Хабаровск",
    activities: [
      "Экскурсия по Хабаровску",
      "Музей им. Гродекова",
      "Музей Амурского моста",
      "Ужин в ресторане Амур"
    ],
    accommodation: "Отель RUMA",
    image: "https://images.unsplash.com/photo-1544985361-b420d7a77043?auto=format&fit=crop&q=80"
  },
  {
    name: "Владивосток",
    activities: [
      "Экскурсия \"Встретимся у вокзала Владивостока\"",
      "Ужин в ресторане Uliss Asia",
      "Встреча с администрацией Приморья",
      "Посещение свободного порта",
      "Шоппинг или экскурсия на Русский мост"
    ],
    accommodation: "VLADIVOSTOK Grand Hotel & SPA",
    image: "https://images.unsplash.com/photo-1627843240167-b1f9309c4ecb?auto=format&fit=crop&q=80"
  }
];

const transports: Transport[] = [
  {
    from: "Москва",
    to: "Екатеринбург",
    type: "Самолет",
    details: "Авиаперелет бизнес-классом из аэропорта Домодедово",
    duration: "2 часа",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80"
  },
  {
    from: "Екатеринбург",
    to: "Новосибирск",
    type: "Поезд",
    details: "Поезд 056М, купе повышенной комфортности",
    duration: "22 часа",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&q=80"
  },
  {
    from: "Новосибирск",
    to: "Иркутск",
    type: "Поезд",
    details: "Поезд 002Э, купе повышенной комфортности",
    duration: "31 час",
    image: "https://images.unsplash.com/photo-1516550893885-985c87f37b4a?auto=format&fit=crop&q=80"
  },
  {
    from: "Иркутск",
    to: "Хабаровск",
    type: "Поезд",
    details: "Поезд 002Э, купе повышенной комфортности",
    duration: "55 часов",
    image: "https://images.unsplash.com/photo-1553522151-f1a8ff3e2b38?auto=format&fit=crop&q=80"
  },
  {
    from: "Хабаровск",
    to: "Владивосток",
    type: "Поезд",
    details: "Поезд 006Э \"Океан\", СВ",
    duration: "12 часов",
    image: "https://images.unsplash.com/photo-1553616382-a686c2d82e2f?auto=format&fit=crop&q=80"
  }
];

const TransSibRoute = () => {
  const [activeCity, setActiveCity] = useState<City>(cities[0]);
  const [activeTransport, setActiveTransport] = useState<Transport | null>(null);
  const [showTransportInfo, setShowTransportInfo] = useState(false);

  const handleCityClick = (city: City) => {
    setActiveCity(city);
    setShowTransportInfo(false);
  };

  const handleTransportClick = (transport: Transport) => {
    setActiveTransport(transport);
    setShowTransportInfo(true);
  };

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-tour-dark-blue">
        Маршрут бизнес-тура "Сибирский путь к успеху"
      </h2>
      
      <div className="mb-12">
        <div className="route-map flex items-center justify-between max-w-4xl mx-auto px-4">
          {cities.map((city, index) => (
            <div key={city.name} className="flex items-center">
              <div 
                className={`route-dot ${city.name === activeCity.name ? 'active' : ''}`} 
                onClick={() => handleCityClick(city)}
                title={city.name}
              >
                <div className="city-label absolute -bottom-7 text-center w-20 -left-7 text-sm font-medium text-tour-dark-blue">
                  {city.name}
                </div>
              </div>
              
              {index < cities.length - 1 && (
                <div 
                  className="route-arrow"
                  onClick={() => handleTransportClick(transports[index])}
                  title={`${city.name} → ${cities[index + 1].name}`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="route-info text-center mb-8">
        <p className="text-xl font-medium text-tour-dark-blue">
          От столицы России до берегов Тихого океана
        </p>
      </div>
      
      <div className="content-area mt-14">
        <Card className="p-6 md:p-8 max-w-4xl mx-auto shadow-lg">
          {!showTransportInfo ? (
            <div className="city-info animate-fade-in">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-tour-dark-blue mb-4">{activeCity.name}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-tour-blue mb-2">Проживание:</h4>
                    <p>{activeCity.accommodation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tour-blue mb-2">Программа:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {activeCity.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={activeCity.image} 
                    alt={activeCity.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="transport-info animate-fade-in">
              {activeTransport && (
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-tour-dark-blue mb-4">
                      {activeTransport.from} → {activeTransport.to}
                    </h3>
                    <div className="mb-4">
                      <h4 className="font-semibold text-tour-blue mb-2">Транспорт:</h4>
                      <p className="font-medium">{activeTransport.type}</p>
                      <p>{activeTransport.details}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-tour-blue mb-2">Время в пути:</h4>
                      <p>{activeTransport.duration}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src={activeTransport.image} 
                      alt={`Транспорт ${activeTransport.from} - ${activeTransport.to}`} 
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default TransSibRoute;
