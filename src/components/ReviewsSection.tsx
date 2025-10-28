import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        name: 'Елена Иванова',
        rating: 5,
        text: 'Дина создала самый красивый свадебный торт для нашего особенного дня! Он был не только потрясающе красивым, но и невероятно вкусным. Все гости спрашивали рецепт!',
        image: 'https://images.unsplash.com/photo-1594736797933-d0d5e7298a80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2689&q=80',
        occasion: 'Свадебный торт',
    },
    {
        name: 'Михаил Петров',
        rating: 5,
        text: 'Торт на 5-летие моей дочери был идеальным! Дина воплотила именно то, что мы представляли — торт-замок принцессы, который осуществил мечты нашей малышки.',
        image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
        occasion: 'Торт на день рождения',
    },
    {
        name: 'Анна Родригес',
        rating: 5,
        text: 'Я заказала капкейки для корпоративной вечеринки, и они имели огромный успех! Красивая подача и невероятные вкусы. Обязательно закажу снова!',
        image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
        occasion: 'Корпоративное мероприятие',
    },
    {
        name: 'Дмитрий Смирнов',
        rating: 5,
        text: 'Потрясающий торт на годовщину! Дина работала с нами, чтобы создать что-то действительно особенное. Внимание к деталям и вкусовые сочетания были выдающимися.',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2689&q=80',
        occasion: 'Торт на годовщину',
    },
];

export default function ReviewsSection() {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentReview(prev => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextReview = () => {
        setCurrentReview(prev => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview(prev => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Довольные клиенты
                    </h2>
                    <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Посмотрите, что говорят наши клиенты о своих сладких впечатлениях от работы
                        с нами
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 to-pink-600"></div>

                        <div className="grid md:grid-cols-3 gap-8 items-center">
                            <div className="md:col-span-1">
                                <img
                                    src={reviews[currentReview].image}
                                    alt={reviews[currentReview].occasion}
                                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <div className="flex items-center mb-4">
                                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-yellow-400 fill-current"
                                        />
                                    ))}
                                </div>

                                <p className="font-poppins text-lg text-gray-700 mb-6 leading-relaxed italic">
                                    "{reviews[currentReview].text}"
                                </p>

                                <div>
                                    <p className="font-playfair text-xl font-semibold text-gray-800">
                                        {reviews[currentReview].name}
                                    </p>
                                    <p className="font-poppins text-rose-600 text-sm">
                                        {reviews[currentReview].occasion}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={prevReview}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <button
                        onClick={nextReview}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>

                    <div className="flex justify-center mt-8 space-x-2">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentReview(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    currentReview === index
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
