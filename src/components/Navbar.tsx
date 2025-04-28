
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
          <img 
            src="/lovable-uploads/b020709c-b48d-47d5-bf31-7ecf5fb133a9.png" 
            alt="Туда-Сюда" 
            className="h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-tour-dark-blue hover:text-tour-blue transition-colors font-medium">
            Главная
          </Link>
          <Link to="/tours" className="text-tour-dark-blue hover:text-tour-blue transition-colors font-medium">
            Туры
          </Link>
          <Link to="/about" className="text-tour-dark-blue hover:text-tour-blue transition-colors font-medium">
            О нас
          </Link>
          <Link to="/contacts" className="text-tour-dark-blue hover:text-tour-blue transition-colors font-medium">
            Контакты
          </Link>
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
              className="text-tour-dark-blue hover:text-tour-blue transition-colors px-4 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/tours" 
              className="text-tour-dark-blue hover:text-tour-blue transition-colors px-4 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Туры
            </Link>
            <Link 
              to="/about" 
              className="text-tour-dark-blue hover:text-tour-blue transition-colors px-4 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contacts" 
              className="text-tour-dark-blue hover:text-tour-blue transition-colors px-4 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
