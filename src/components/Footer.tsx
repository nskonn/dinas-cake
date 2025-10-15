import { Heart, Instagram, MessageCircle, Send, Phone, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <h3 className="font-playfair text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500 mb-4">
                            Сладкие Мечты
                        </h3>
                        <p className="font-poppins text-gray-300 mb-6 max-w-md">
                            Создаем красивые, вкусные индивидуальные торты и пирожные для самых
                            сладких моментов жизни. Сделано с любовью, натуральными ингредиентами и
                            вниманием к каждой детали.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/sweetdreamsbakery"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <a
                                href="https://t.me/sweetdreamsbakery"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <Send className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-playfair text-xl font-semibold mb-4">Быстрые ссылки</h4>
                        <ul className="font-poppins space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection('calculator')}
                                    className="text-gray-300 hover:text-rose-400 transition-colors duration-300"
                                >
                                    Калькулятор стоимости
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('products')}
                                    className="text-gray-300 hover:text-rose-400 transition-colors duration-300"
                                >
                                    Наши продукты
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('reviews')}
                                    className="text-gray-300 hover:text-rose-400 transition-colors duration-300"
                                >
                                    Отзывы клиентов
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('order-form')}
                                    className="text-gray-300 hover:text-rose-400 transition-colors duration-300"
                                >
                                    Заказать сейчас
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-playfair text-xl font-semibold mb-4">
                            Контактная информация
                        </h4>
                        <div className="font-poppins space-y-3">
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-2 text-gray-300 hover:text-rose-400 transition-colors duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                +7 (999) 123-45-67
                            </a>
                            <a
                                href="mailto:orders@sweetdreamsbakery.com"
                                className="flex items-center gap-2 text-gray-300 hover:text-rose-400 transition-colors duration-300"
                            >
                                <Mail className="w-4 h-4" />
                                orders@sweetdreamsbakery.com
                            </a>
                            <div className="text-gray-300 text-sm">
                                <p>Пн - Пт: 9:00 - 19:00</p>
                                <p>Суббота: 8:00 - 18:00</p>
                                <p>Воскресенье: 10:00 - 16:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 font-poppins text-gray-300">
                            <span>© {currentYear} Сладкие Мечты. Сделано с</span>
                            <Heart className="w-4 h-4 text-rose-400 fill-current" />
                            <span>для сладких торжеств.</span>
                        </div>

                        <div className="flex gap-6 font-poppins text-sm">
                            <a
                                href="#"
                                className="text-gray-300 hover:text-rose-400 transition-colors duration-300"
                            >
                                Политика конфиденциальности
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-rose-400 transition-colors duration-300"
                            >
                                Условия обслуживания
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-rose-400 transition-colors duration-300"
                            >
                                Политика cookie
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
