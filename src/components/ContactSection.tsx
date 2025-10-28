import { Phone, Mail, MapPin, Instagram, MessageCircle, Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Контакты
                    </h2>
                    <p className="font-poppins text-lg md:text-xl  text-gray-600 max-w-2xl mx-auto">
                        Готовы создать что-то сладкое вместе? Мы здесь, чтобы помочь сделать ваше
                        торжество идеальным
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-start w-[400px] gap-4 p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                                    Телефон
                                </h3>
                                <a
                                    href="tel:89185471409"
                                    className="font-poppins font-medium text-rose-600 hover:text-rose-700 transition-colors"
                                >
                                    +7 (918) 547-14-09
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start w-[400px] gap-4 p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                                <Send className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                                    Телеграм
                                </h3>
                                <a
                                    href="https://t.me/Dinas_cake"
                                    className="font-poppins font-medium text-rose-600 hover:text-rose-700 transition-colors"
                                >
                                    Dina`s cake
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}
