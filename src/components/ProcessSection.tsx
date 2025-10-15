import { useState, useEffect } from 'react';
import { MessageCircle, Palette, CreditCard, Gift } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const steps = [
    {
        icon: MessageCircle,
        title: 'Отправьте заявку',
        description:
            'Свяжитесь с нами через форму заказа, WhatsApp или Telegram с вашей идеей торта и деталями мероприятия.',
    },
    {
        icon: Palette,
        title: 'Консультация по дизайну',
        description:
            'Мы обсудим ваше видение, предпочтения по дизайну, вкусы и любые особые требования к вашему торту.',
    },
    {
        icon: CreditCard,
        title: 'Подтверждение и оплата',
        description:
            'Просмотрите финальный дизайн и внесите безопасный депозит для подтверждения заказа и бронирования даты.',
    },
    {
        icon: Gift,
        title: 'Получите ваш торт',
        description:
            'Ваш индивидуальный торт будет готов вовремя, доставлен свежим и красиво оформленным.',
    },
];

export default function ProcessSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);
        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Как сделать заказ
                    </h2>
                    <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
                        Наш простой 4-шаговый процесс гарантирует, что вы получите именно тот торт,
                        о котором мечтаете
                    </p>
                </div>

                {/* Desktop: Grid layout */}
                <div className="hidden md:grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative text-center group">
                            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 hover:from-rose-100 hover:to-pink-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>

                                <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-rose-200">
                                    <span className="font-bold text-rose-600">{index + 1}</span>
                                </div>

                                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                                    {step.title}
                                </h3>

                                <p className="font-poppins text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                    <div className="w-8 h-0.5 bg-gradient-to-r from-rose-300 to-pink-300"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile: Slider */}
                <div className="md:hidden">
                    <div className="embla overflow-hidden" ref={emblaRef}>
                        <div className="embla__container flex">
                            {steps.map((step, index) => (
                                <div key={index} className="embla__slide flex-shrink-0 w-full px-4">
                                    <div className="relative text-center group">
                                        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 transition-all duration-300">
                                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl mb-6 transition-transform duration-300">
                                                <step.icon className="w-8 h-8 text-white" />
                                            </div>

                                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-rose-200">
                                                <span className="font-bold text-rose-600">
                                                    {index + 1}
                                                </span>
                                            </div>

                                            <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                                                {step.title}
                                            </h3>

                                            <p className="font-poppins text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-8 gap-3">
                        {steps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                    index === selectedIndex
                                        ? 'bg-rose-500 scale-125'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
