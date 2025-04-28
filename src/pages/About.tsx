
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const team = [
  {
    name: "Александр Иванов",
    position: "Генеральный директор",
    bio: "Более 15 лет опыта в туристической индустрии. Эксперт по деловому туризму.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
  },
  {
    name: "Екатерина Смирнова",
    position: "Руководитель направления премиум-туров",
    bio: "Специалист по организации VIP-путешествий и бизнес-туров.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    name: "Дмитрий Петров",
    position: "Менеджер по работе с корпоративными клиентами",
    bio: "Эксперт по организации деловых мероприятий и бизнес-встреч.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80"
  }
];

const About = () => {
  return (
    <>
      <Navbar />
      
      <div className="bg-tour-dark-blue text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">О нас</h1>
          <p className="text-xl">Знакомьтесь с командой тур агентства "Туда-Сюда"</p>
        </div>
      </div>
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-tour-dark-blue">Наша история</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4">
                  Тур агентство "Туда-Сюда" было основано в 2015 году с целью создания уникальных 
                  деловых туров по России. Мы начинали с небольших корпоративных поездок, но быстро 
                  выросли до организации полномасштабных бизнес-туров премиум-класса.
                </p>
                <p className="text-lg mb-4">
                  Наша компания специализируется на создании туристических маршрутов, которые 
                  сочетают деловые возможности с культурным обогащением. Мы работаем с крупными 
                  корпоративными клиентами, инвесторами и предпринимателями, которые ищут 
                  новые бизнес-горизонты в регионах России.
                </p>
                <p className="text-lg">
                  За годы работы мы установили прочные связи с региональными администрациями, 
                  бизнес-сообществами и лучшими отелями по всей стране, что позволяет нам 
                  организовывать по-настоящему эксклюзивные и полезные деловые поездки.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1577396682505-40f8119385a2?auto=format&fit=crop&q=80" 
                  alt="История компании" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-tour-dark-blue">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border-t-4 border-tour-gold">
                <h3 className="text-xl font-bold mb-3 text-tour-blue">Качество</h3>
                <p>
                  Мы уделяем особое внимание каждой детали, чтобы обеспечить максимальный 
                  комфорт и пользу от каждой поездки.
                </p>
              </Card>
              <Card className="p-6 border-t-4 border-tour-gold">
                <h3 className="text-xl font-bold mb-3 text-tour-blue">Индивидуальный подход</h3>
                <p>
                  Каждый тур может быть адаптирован под конкретные бизнес-потребности и 
                  интересы клиента.
                </p>
              </Card>
              <Card className="p-6 border-t-4 border-tour-gold">
                <h3 className="text-xl font-bold mb-3 text-tour-blue">Надежность</h3>
                <p>
                  Мы гарантируем полное соблюдение программы тура и высокий уровень 
                  организации на каждом этапе.
                </p>
              </Card>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold mb-8 text-tour-dark-blue text-center">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-tour-dark-blue">{member.name}</h3>
                    <p className="text-tour-blue mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
