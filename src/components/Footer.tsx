
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tour-dark-blue text-white pt-10 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Туда-Сюда</h3>
            <p className="text-gray-300 mb-4">
              Ваш премиальный тур-оператор для деловых и люксовых путешествий по России. 
              Мы создаем уникальные маршруты для тех, кто ценит комфорт и новые возможности.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-gray-300 mb-2">Адрес: г. Москва, ул. Тверская, 1</p>
            <p className="text-gray-300 mb-2">Телефон: +7 (495) 123-45-67</p>
            <p className="text-gray-300 mb-2">Email: info@tuda-suda.ru</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-tour-gold transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-tour-gold transition-colors">
                  Туры
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tour-gold transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-tour-gold transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} Туда-Сюда. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
