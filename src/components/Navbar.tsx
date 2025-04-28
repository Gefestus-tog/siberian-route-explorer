
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-3">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-tour-dark-blue">
            <span className="text-tour-red">Туда</span>-<span className="text-tour-gold">Сюда</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-tour-blue hover:text-tour-gold transition-colors font-medium">
            Главная
          </Link>
          <Link to="/tours" className="text-tour-blue hover:text-tour-gold transition-colors font-medium">
            Туры
          </Link>
          <Link to="/about" className="text-tour-blue hover:text-tour-gold transition-colors font-medium">
            О нас
          </Link>
          <Link to="/contacts" className="text-tour-blue hover:text-tour-gold transition-colors font-medium">
            Контакты
          </Link>
          <Button className="bg-tour-gold hover:bg-tour-dark-blue text-white">
            Забронировать
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 z-50 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-tour-blue hover:text-tour-gold transition-colors px-4 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/tours" 
              className="text-tour-blue hover:text-tour-gold transition-colors px-4 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Туры
            </Link>
            <Link 
              to="/about" 
              className="text-tour-blue hover:text-tour-gold transition-colors px-4 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contacts" 
              className="text-tour-blue hover:text-tour-gold transition-colors px-4 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
            <Button 
              className="bg-tour-gold hover:bg-tour-dark-blue text-white w-full mt-2"
              onClick={() => setIsOpen(false)}
            >
              Забронировать
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
