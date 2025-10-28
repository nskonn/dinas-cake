import { MessageCircle, Send, Phone, Mail } from 'lucide-react';

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
                            Dina`s cake
                        </h3>
                        <p className="font-poppins text-gray-300 mb-6 max-w-md">
                            Создаем красивые, вкусные индивидуальные торты и пирожные для самых
                            сладких моментов жизни. Сделано из натуральных ингредиентов и с
                            вниманием к каждой детали.
                        </p>
                        <div className="flex gap-4">
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
                        <h4 className="text-xl font-semibold mb-4">Быстрые ссылки</h4>
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
                                    Портфолио
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
                        <h4 className="text-xl font-semibold mb-4">
                            Контактная информация
                        </h4>
                        <div className="font-poppins space-y-3">
                            <a
                                href="tel:+79185471409"
                                className="flex items-center gap-2 text-gray-300 hover:text-rose-400 transition-colors duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                +7 (918) 547-14-09
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 font-poppins text-gray-300">
                            <span>© {currentYear} Dina`s cake</span>
                        </div>

                        {/*<div className="flex gap-6 font-poppins text-sm">*/}
                        {/*    <a*/}
                        {/*        href="#"*/}
                        {/*        className="text-gray-300 hover:text-rose-400 transition-colors duration-300"*/}
                        {/*    >*/}
                        {/*        Политика конфиденциальности*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </footer>
    );
}
