import { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const products = [
    {
        category: 'Свадебные торты',
        description: 'Элегантные многоярусные торты для вашего идеального дня',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2689&q=80',
    },
    {
        category: 'Торты на день рождения',
        description: 'Индивидуальные дизайны, которые делают дни рождения незабываемыми',
        image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },
    {
        category: 'Капкейки',
        description: 'Индивидуальные лакомства, идеальные для любого мероприятия',
        image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    },
    {
        category: 'Пирожные',
        description: 'Изысканные французские пирожные и сезонные деликатесы',
        image: 'https://images.unsplash.com/photo-1555909114-f6ef0ba019d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },
    {
        category: 'Кейк-попсы',
        description: 'Веселые мини-десерты на палочке для вечеринок',
        image: 'https://images.unsplash.com/photo-1615375806617-b60a8a4b76e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },
    {
        category: 'Авторские десерты',
        description: 'Уникальные творения для тематических мероприятий и праздников',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
    },
];

export default function ProductsSection() {
    const [activeProduct, setActiveProduct] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            const newIndex = emblaApi.selectedScrollSnap();
            setSelectedIndex(newIndex);
            setActiveProduct(newIndex);
        };

        emblaApi.on('select', onSelect);
        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 5000);

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    // Sync embla with manual selection
    useEffect(() => {
        if (emblaApi && activeProduct !== selectedIndex) {
            emblaApi.scrollTo(activeProduct);
        }
    }, [activeProduct, emblaApi, selectedIndex]);

    return (
        <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Наши творения
                    </h2>
                    <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
                        От элегантных свадебных тортов до игривых угощений на день рождения — каждое
                        творение создается по индивидуальному дизайну из ингредиентов премиум-класса
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Slider with Stack Effect */}
                    <div className="relative">
                        <div className="embla overflow-hidden rounded-3xl" ref={emblaRef}>
                            <div className="embla__container flex">
                                {products.map((product, index) => (
                                    <div
                                        key={index}
                                        className="embla__slide flex-shrink-0 w-full relative"
                                    >
                                        <div className="relative group">
                                            {/* Background layers for stack effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl transform rotate-2 opacity-30 translate-x-4 translate-y-4"></div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl transform -rotate-1 opacity-40 translate-x-2 translate-y-2"></div>

                                            <img
                                                src={product.image}
                                                alt={product.category}
                                                className="relative rounded-3xl shadow-2xl w-full h-[500px] md:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
                                            />

                                            {/* Category label */}
                                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
                                                <span className="font-playfair font-bold text-gray-800 text-lg">
                                                    {product.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation buttons */}
                        <button
                            onClick={scrollPrev}
                            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>

                        {/* Dots indicator */}
                        <div className="flex justify-center mt-8 gap-3">
                            {products.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveProduct(index)}
                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                        index === activeProduct
                                            ? 'bg-rose-500 scale-125'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl pointer-events-none"></div>
                    </div>

                    {/* Categories */}
                    <div className="space-y-4">
                        {/* Desktop: Button list */}
                        <div className="hidden md:block space-y-4">
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                                        activeProduct === index
                                            ? 'bg-white shadow-lg scale-105 border-2 border-rose-200'
                                            : 'bg-white/50 hover:bg-white hover:shadow-md'
                                    }`}
                                    onClick={() => setActiveProduct(index)}
                                >
                                    <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-2">
                                        {product.category}
                                    </h3>
                                    <p className="font-poppins text-gray-600">
                                        {product.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Mobile: Select dropdown */}
                        <div className="md:hidden">
                            <label className="block font-poppins font-semibold text-gray-800 mb-4 text-lg">
                                Выберите категорию
                            </label>
                            <div className="relative mb-6">
                                <select
                                    value={activeProduct}
                                    onChange={e => setActiveProduct(parseInt(e.target.value))}
                                    className="w-full px-4 py-4 pr-12 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white font-medium text-gray-800 appearance-none"
                                >
                                    {products.map((product, index) => (
                                        <option key={index} value={index}>
                                            {product.category}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                            </div>

                            {/* Selected product description */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
                                <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-2">
                                    {products[activeProduct].category}
                                </h3>
                                <p className="font-poppins text-gray-600">
                                    {products[activeProduct].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
