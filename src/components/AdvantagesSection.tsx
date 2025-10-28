import { useState, useEffect } from 'react';
import { Leaf, Palette, Truck, Camera } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const advantages = [
    {
        icon: Leaf,
        title: 'Только натуральные ингредиенты',
        description:
            'Мы используем органические ингредиенты премиум-класса, настоящее масло, свежие яйца и натуральную ваниль для превосходного вкуса и качества.',
    },
    {
        icon: Palette,
        title: 'Индивидуальный дизайн',
        description:
            'Каждый торт создается уникально в соответствии с вашим видением, темой и личным стилем с безграничными дизайнерскими возможностями.',
    },
    {
        icon: Truck,
        title: 'Доставка',
        description:
            'Профессиональная служба доставки гарантирует, что ваш торт прибудет в идеальном состоянии к месту проведения мероприятия.',
    },
    {
        icon: Camera,
        title: 'Воссоздание по фото',
        description:
            'Принесите нам ваши вдохновляющие фотографии, и мы воссоздадим любой дизайн с нашим художественным подходом и профессиональным мастерством.',
    },
];

export default function AdvantagesSection() {
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
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Почему выбирают нас
                    </h2>
                    <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Мы стремимся к совершенству во всех аспектах нашего мастерства — от
                        ингредиентов до финальной подачи
                    </p>
                </div>

                {/* Desktop: Grid layout */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className="group text-center p-8 rounded-3xl bg-gradient-to-br from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <advantage.icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                                {advantage.title}
                            </h3>

                            <p className="font-poppins text-gray-600 leading-relaxed">
                                {advantage.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile: Slider */}
                <div className="md:hidden">
                    <div className="embla overflow-hidden" ref={emblaRef}>
                        <div className="embla__container flex">
                            {advantages.map((advantage, index) => (
                                <div key={index} className="embla__slide flex-shrink-0 w-full px-4">
                                    <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-rose-50 to-pink-50 transition-all duration-300">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl mb-6 transition-transform duration-300">
                                            <advantage.icon className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                                            {advantage.title}
                                        </h3>

                                        <p className="font-poppins text-gray-600 leading-relaxed">
                                            {advantage.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-8 gap-3">
                        {advantages.map((_, index) => (
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
