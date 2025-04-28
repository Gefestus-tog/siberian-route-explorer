
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-tour-dark-blue text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Связаться с нами</h1>
          <p className="text-xl">Мы готовы ответить на ваши вопросы и помочь с организацией тура</p>
        </div>
      </div>
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-tour-dark-blue">Наши контакты</h2>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-bold text-tour-blue">Адрес</h3>
                  <p>г. Москва, ул. Тверская, 1</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-tour-blue">Телефон</h3>
                  <p>+7 (495) 123-45-67</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-tour-blue">Email</h3>
                  <p>info@tuda-suda.ru</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-tour-blue">Часы работы</h3>
                  <p>Пн-Пт: 9:00 - 20:00</p>
                  <p>Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-tour-dark-blue">Как нас найти</h3>
                <div className="rounded-lg overflow-hidden h-64 shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.397087831824!2d37.59856937680372!3d55.76807997346455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4c9a359dd3%3A0x628904c029ba3b94!2z0YPQuy4g0KLQstC10YDRgdC60LDRjywgMSwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEyNTAwOQ!5e0!3m2!1sru!2s!4v1719611045598!5m2!1sru!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 text-tour-dark-blue">Отправить сообщение</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1 text-tour-blue">
                    Ваше имя
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-medium mb-1 text-tour-blue">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-medium mb-1 text-tour-blue">
                    Телефон
                  </label>
                  <Input 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-medium mb-1 text-tour-blue">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="w-full h-32"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-tour-gold hover:bg-tour-red">
                  Отправить
                </Button>
              </form>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-tour-dark-blue">Нужна консультация?</h3>
                <p className="mb-4">
                  Если у вас есть вопросы о наших турах или вы хотите получить индивидуальное 
                  предложение, позвоните нам или оставьте свои контакты, и мы перезвоним вам.
                </p>
                <div className="text-xl font-bold text-tour-gold">+7 (495) 123-45-67</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Contacts;
