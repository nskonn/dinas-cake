import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { categories, productCategories } from '../model/data';
import type { CategoryKey } from '../model/types';
import { useProductsCarousel } from '../model/useProductsCarousel';

export function ProductsSection() {
    const {
        emblaRef,
        activeIndex,
        setActiveIndex,
        selectedIndex,
        currentCategory,
        setCurrentCategory,
        isDropdownOpen,
        setIsDropdownOpen,
        scrollPrev,
        scrollNext,
    } = useProductsCarousel('cake');

    return (
        <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Портфолио</h2>
                    <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        От элегантных свадебных тортов до игривых угощений на день рождения — каждое
                        творение создается по индивидуальному дизайну из натуральных ингредиентов
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-start">
                    {/*Mobile: Select dropdown */}
                    <div className="md:hidden">
                        <label className="block font-poppins font-semibold text-gray-800 mb-4 text-lg">
                            Выберите категорию
                        </label>

                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full bg-white border-2 border-gray-200 rounded-xl px-6 py-4 flex items-center justify-between text-left font-medium text-gray-800 hover:border-rose-300 focus:border-rose-500 focus:outline-none transition-all duration-300"
                            >
                                <span className="capitalize">
                                    {productCategories[currentCategory].title}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                                    {Object.entries(productCategories).map(([key, category]) => (
                                        <button
                                            key={key}
                                            onClick={() => {
                                                setCurrentCategory(key as CategoryKey);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full px-6 py-4 text-left hover:bg-rose-50 transition-colors duration-300 ${
                                                currentCategory === (key as CategoryKey)
                                                    ? 'bg-rose-50 text-rose-700'
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            <div className="font-medium">{category.title}</div>
                                            <div className="text-sm text-gray-500 mt-1">
                                                {category.description}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Image Slider */}
                    <div className="relative">
                        <div className="embla overflow-hidden rounded-3xl" ref={emblaRef}>
                            <div className="embla__container flex">
                                {productCategories[currentCategory].items.map((product, index) => (
                                    <div key={index} className="embla__slide flex-shrink-0 w-full relative">
                                        <div className="relative group">
                                            <img
                                                src={product.image}
                                                alt={product.label}
                                                className="relative rounded-3xl shadow-2xl w-full h-[500px] md:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
                                            />

                                            {/* Category label */}
                                            <div className="absolute bottom-6 left-6 bg-white/50 bg-opacity-20 border border-rose-200 backdrop-blur-sm rounded-2xl px-6 py-2 shadow-lg">
                                                <span className="font-nunito text-rose-950 text-md">
                                                    {product.label}
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
                            {productCategories[currentCategory].items.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === activeIndex
                                            ? 'bg-rose-500 scale-125'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="space-y-4">
                        {/* Desktop: Button list */}
                        <div className="hidden md:block space-y-4">
                            {categories.map(product => (
                                <div
                                    key={product.key}
                                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                                        currentCategory === product.key
                                            ? 'bg-white shadow-lg scale-105 border-2 border-rose-200'
                                            : 'bg-white/50 hover:bg-white hover:shadow-md'
                                    }`}
                                    onClick={() => setCurrentCategory(product.key)}
                                >
                                    <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-2">
                                        {product.category}
                                    </h3>
                                    <p className="font-poppins text-gray-600">{product.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


