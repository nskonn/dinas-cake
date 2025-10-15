import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Phone, MessageCircle } from 'lucide-react';

interface OrderFormData {
    name: string;
    phone: string;
    email: string;
    eventDate: string;
    eventType: string;
    servings: string;
    description: string;
    budget: string;
    preferredContact: string;
}

export default function OrderForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<OrderFormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = async (data: OrderFormData) => {
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Order submitted:', data);
        setIsSubmitted(true);
        setIsSubmitting(false);
        reset();

        // Reset success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const openWhatsApp = () => {
        const message = encodeURIComponent(
            'Привет! Я хотел бы заказать индивидуальный торт. Можете помочь мне с деталями?',
        );
        window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
    };

    const openTelegram = () => {
        const message = encodeURIComponent(
            'Привет! Я хотел бы заказать индивидуальный торт. Можете помочь мне с деталями?',
        );
        window.open(`https://t.me/sweetdreamsbakery?text=${message}`, '_blank');
    };

    return (
        <section id="order-form" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Закажите торт мечты
                    </h2>
                    <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
                        Расскажите нам о вашем видении, и мы создадим что-то действительно особенное
                        для вашего мероприятия
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-2xl p-8">
                            {isSubmitted && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl">
                                    <p className="text-green-800 font-medium">
                                        Спасибо! Ваш заказ отправлен. Мы свяжемся с вами в течение
                                        24 часов.
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-poppins font-medium text-gray-700 mb-2">
                                            Полное имя *
                                        </label>
                                        <input
                                            type="text"
                                            {...register('name', { required: 'Имя обязательно' })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Ваше полное имя"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block font-poppins font-medium text-gray-700 mb-2">
                                            Номер телефона *
                                        </label>
                                        <input
                                            type="tel"
                                            {...register('phone', {
                                                required: 'Номер телефона обязателен',
                                            })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                            placeholder="+7 (999) 123-45-67"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.phone.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-poppins font-medium text-gray-700 mb-2">
                                        Адрес электронной почты
                                    </label>
                                    <input
                                        type="email"
                                        {...register('email')}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-poppins font-medium text-gray-700 mb-2">
                                            Дата мероприятия *
                                        </label>
                                        <input
                                            type="date"
                                            {...register('eventDate', {
                                                required: 'Дата мероприятия обязательна',
                                            })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        />
                                        {errors.eventDate && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.eventDate.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block font-poppins font-medium text-gray-700 mb-2">
                                            Тип мероприятия
                                        </label>
                                        <select
                                            {...register('eventType')}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        >
                                            <option value="">Выберите тип мероприятия</option>
                                            <option value="birthday">День рождения</option>
                                            <option value="wedding">Свадьба</option>
                                            <option value="anniversary">Годовщина</option>
                                            <option value="graduation">Выпускной</option>
                                            <option value="corporate">
                                                Корпоративное мероприятие
                                            </option>
                                            <option value="other">Другое</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-poppins font-medium text-gray-700 mb-2">
                                            Количество порций
                                        </label>
                                        <select
                                            {...register('servings')}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        >
                                            <option value="">Выберите размер порции</option>
                                            <option value="8-12">8-12 человек</option>
                                            <option value="15-20">15-20 человек</option>
                                            <option value="25-30">25-30 человек</option>
                                            <option value="35-50">35-50 человек</option>
                                            <option value="50+">50+ человек</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block font-poppins font-medium text-gray-700 mb-2">
                                            Бюджет
                                        </label>
                                        <select
                                            {...register('budget')}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        >
                                            <option value="">Выберите диапазон бюджета</option>
                                            <option value="2000-4000">2 000 - 4 000 ₽</option>
                                            <option value="4000-8000">4 000 - 8 000 ₽</option>
                                            <option value="8000-15000">8 000 - 15 000 ₽</option>
                                            <option value="15000-25000">15 000 - 25 000 ₽</option>
                                            <option value="25000+">25 000+ ₽</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-poppins font-medium text-gray-700 mb-2">
                                        Описание торта и особые пожелания *
                                    </label>
                                    <textarea
                                        {...register('description', {
                                            required: 'Пожалуйста, опишите ваше видение торта',
                                        })}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Опишите торт вашей мечты... цвета, вкусы, темы, украшения, вдохновляющие фотографии и т.д."
                                    />
                                    {errors.description && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.description.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block font-poppins font-medium text-gray-700 mb-2">
                                        Предпочтительный способ связи
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                value="phone"
                                                {...register('preferredContact')}
                                                className="mr-2 text-rose-500"
                                            />
                                            <span className="font-poppins">Телефон</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                value="email"
                                                {...register('preferredContact')}
                                                className="mr-2 text-rose-500"
                                            />
                                            <span className="font-poppins">Email</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                value="whatsapp"
                                                {...register('preferredContact')}
                                                className="mr-2 text-rose-500"
                                            />
                                            <span className="font-poppins">WhatsApp</span>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Отправить заказ
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl shadow-2xl p-6">
                            <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-4">
                                Быстрая связь
                            </h3>
                            <p className="font-poppins text-gray-600 mb-6">
                                Предпочитаете общаться напрямую? Свяжитесь с нами удобным способом.
                            </p>

                            <div className="space-y-4">
                                <button
                                    onClick={openWhatsApp}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp
                                </button>

                                <button
                                    onClick={openTelegram}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Telegram
                                </button>

                                <a
                                    href="tel:+1234567890"
                                    className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    Позвонить
                                </a>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-6">
                            <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                                Сроки заказа
                            </h3>
                            <ul className="font-poppins text-sm text-gray-600 space-y-2">
                                <li>• Индивидуальные торты: за 1-2 недели</li>
                                <li>• Простые дизайны: за 3-5 дней</li>
                                <li>• Большие заказы: за 2-3 недели</li>
                                <li>• Срочные заказы: дополнительная плата</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
