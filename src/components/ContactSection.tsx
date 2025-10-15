import { Phone, Mail, MapPin, Instagram, MessageCircle, Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Свяжитесь с нами
                    </h2>
                    <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
                        Готовы создать что-то сладкое вместе? Мы здесь, чтобы помочь сделать ваше
                        торжество идеальным
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                                    Телефон
                                </h3>
                                <p className="font-poppins text-gray-600 mb-2">
                                    Позвоните нам для немедленной помощи
                                </p>
                                <a
                                    href="tel:+1234567890"
                                    className="font-poppins font-medium text-rose-600 hover:text-rose-700 transition-colors"
                                >
                                    +7 (999) 123-45-67
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                                    Email
                                </h3>
                                <p className="font-poppins text-gray-600 mb-2">
                                    Пришлите нам ваши идеи для торта
                                </p>
                                <a
                                    href="mailto:orders@sweetdreamsbakery.com"
                                    className="font-poppins font-medium text-rose-600 hover:text-rose-700 transition-colors"
                                >
                                    orders@sweetdreamsbakery.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                                    Местоположение
                                </h3>
                                <p className="font-poppins text-gray-600 mb-2">
                                    Доступен самовывоз и доставка
                                </p>
                                <p className="font-poppins font-medium text-gray-700">
                                    Кондитерский район центра
                                    <br />
                                    Обслуживаем весь мегаполис
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white">
                            <h3 className="font-playfair text-xl font-semibold mb-4">
                                Подписывайтесь на нас
                            </h3>
                            <p className="font-poppins text-gray-300 mb-6">
                                Следите за нашими последними творениями и специальными предложениями
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://instagram.com/sweetdreamsbakery"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                                >
                                    <Instagram className="w-5 h-5" />
                                    Instagram
                                </a>
                                <a
                                    href="https://wa.me/1234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp
                                </a>
                                <a
                                    href="https://t.me/sweetdreamsbakery"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                                >
                                    <Send className="w-5 h-5" />
                                    Telegram
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8">
                        <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-6">
                            Часы работы
                        </h3>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center py-2 border-b border-rose-200">
                                <span className="font-poppins font-medium text-gray-700">
                                    Понедельник - Пятница
                                </span>
                                <span className="font-poppins text-gray-600">9:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-rose-200">
                                <span className="font-poppins font-medium text-gray-700">
                                    Суббота
                                </span>
                                <span className="font-poppins text-gray-600">8:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-rose-200">
                                <span className="font-poppins font-medium text-gray-700">
                                    Воскресенье
                                </span>
                                <span className="font-poppins text-gray-600">10:00 - 16:00</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6">
                            <h4 className="font-playfair text-lg font-semibold text-gray-800 mb-3">
                                Зоны доставки
                            </h4>
                            <ul className="font-poppins text-gray-600 space-y-2">
                                <li>• Центр города (бесплатная доставка)</li>
                                <li>• Пригородные районы (доставка 500 ₽)</li>
                                <li>• Расширенный мегаполис (доставка 750 ₽)</li>
                                <li>• Специальные мероприятия (индивидуальная цена)</li>
                            </ul>
                            <p className="font-poppins text-sm text-gray-500 mt-4">
                                * Доставка бесплатна при заказе от 7500 ₽
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
