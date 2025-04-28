
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Деловые встречи",
    description: "Встречи с региональными властями и бизнес-элитой",
    icon: "🤝"
  },
  {
    title: "Бизнес и культура",
    description: "Уникальный микс бизнеса и культуры: от Уральских заводов до Байкала",
    icon: "🏛️"
  },
  {
    title: "Премиум размещение",
    description: "Проживание в отелях 5* с SPA и конференц-залами",
    icon: "🏨"
  },
  {
    title: "Комфортный транспорт",
    description: "Комфортабельные поезда и перелеты бизнес-класса",
    icon: "✈️"
  }
];

const TourFeatures = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-tour-dark-blue">
          Ключевые преимущества тура
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border-t-4 border-tour-gold hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-tour-blue">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourFeatures;
