import { useState, useEffect } from 'react';
import { Calculator, Cake, Cookie, Coffee, ChevronDown } from 'lucide-react';

interface PriceData {
    [key: string]: number;
}

const cakePrices: PriceData = {
    CHUKEPC: 2000,
    'Вишневый ломтик': 2000,
    Ферреро: 2200,
    'Капитан Куки': 2200,
    'Фисташка-Малина': 2000,
    'Молочная девочка': 1900,
    'Ягодное облако': 1800,
    'Красный бархат': 1700,
    'Пряная морковь': 1800,
    МакЛимон: 1700,
};

const bentoPrices: PriceData = {
    CHUKEDC: 1400,
    'Красный бархат / Клубника': 1400,
    'Красный бархат / Манго-Маракуйя': 1400,
    МакЛимон: 1400,
    'Ваниль / Клубника': 1400,
    'Ваниль / Малина': 1400,
    'Вишневый ломтик': 1400,
};

const eskimoPrices: PriceData = {
    'Вишневый ломтик': 250,
    'Ваниль / Малина': 250,
    'Ваниль / Клубника': 250,
    'Красный бархат / Клубника': 250,
    'Красный бархат / Манго-Маракуйя': 250,
    МакЛимон: 250,
    CHUKEDC: 250,
};

const cakePopsPrices: PriceData = {
    Мак: 150,
    Ваниль: 150,
    Шоколад: 150,
};

const dessertPrices: PriceData = {
    'Шоколадный комбо': 200,
    'Шоколадная вишня': 200,
    'Лимон-Малина': 200,
    'Пряная морковь': 200,
    Сникерс: 250,
    'Вишневый ломтик': 250,
    МакЛимон: 250,
    'Ваниль-Малина': 250,
    'Ваниль-Клубника': 250,
};

export default function CostCalculator() {
    const [category, setCategory] = useState<string>('');
    const [subcategory, setSubcategory] = useState<string>('');
    const [flavor, setFlavor] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(1);
    const [complexDesign, setComplexDesign] = useState<boolean>(false);
    const [toppers, setToppers] = useState<boolean>(false);
    const [berryDecoration, setBerryDecoration] = useState<boolean>(false);
    const [totalCost, setTotalCost] = useState<number>(0);

    const scrollToOrder = () => {
        document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        setFlavor('');
        setSubcategory('');
    }, [category]);

    useEffect(() => {
        setFlavor('');
    }, [subcategory]);

    useEffect(() => {
        calculateTotal();
    }, [category, subcategory, flavor, quantity, complexDesign, toppers, berryDecoration]);

    const calculateTotal = () => {
        let baseCost = 0;
        let minQuantity = 1;

        if (category === 'cakes' && flavor) {
            baseCost = cakePrices[flavor] * quantity;
        } else if (category === 'bento' && flavor) {
            baseCost = bentoPrices[flavor] * quantity;
        } else if (category === 'desserts') {
            if (subcategory === 'eskimo' && flavor) {
                baseCost = eskimoPrices[flavor] * quantity;
                minQuantity = 4;
            } else if (subcategory === 'cakepops' && flavor) {
                baseCost = cakePopsPrices[flavor] * quantity;
                minQuantity = 4;
            } else if ((subcategory === 'cakes' || subcategory === 'trifles') && flavor) {
                baseCost = dessertPrices[flavor] * quantity;
                minQuantity = 4;
            }
        }

        let additionalCost = 0;
        if (complexDesign) {
            if (category === 'bento') {
                additionalCost += 250; // Fixed for bento cakes
            } else {
                additionalCost += 200; // For other categories
            }
        }
        if (toppers) additionalCost += 150;
        if (berryDecoration) {
            if (subcategory === 'eskimo' || subcategory === 'cakepops') {
                additionalCost += 50 * quantity; // Per piece for these categories
            } else {
                additionalCost += 50; // Fixed for others
            }
        }

        // Ensure minimum quantity
        if (quantity < minQuantity) {
            setQuantity(minQuantity);
            return;
        }

        setTotalCost(baseCost + additionalCost);
    };

    const getFlavors = () => {
        if (category === 'cakes') return Object.keys(cakePrices);
        if (category === 'bento') return Object.keys(bentoPrices);
        if (category === 'desserts') {
            if (subcategory === 'eskimo') return Object.keys(eskimoPrices);
            if (subcategory === 'cakepops') return Object.keys(cakePopsPrices);
            if (subcategory === 'cakes' || subcategory === 'trifles')
                return Object.keys(dessertPrices);
        }
        return [];
    };

    const getQuantityLabel = () => {
        if (category === 'cakes') return 'кг';
        return 'шт';
    };

    const getMinQuantity = () => {
        if (
            category === 'desserts' &&
            (subcategory === 'eskimo' ||
                subcategory === 'cakepops' ||
                subcategory === 'cakes' ||
                subcategory === 'trifles')
        ) {
            return 4;
        }
        return category === 'cakes' ? 1 : 1;
    };

    const getStep = () => {
        return category === 'cakes' ? 0.5 : 1;
    };

    return (
        <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Calculator className="w-8 h-8 text-rose-600" />
                        <h2 className="font-nunito text-4xl md:text-5xl font-bold text-gray-800">
                            Рассчитайте стоимость заказа
                        </h2>
                    </div>
                    <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
                        Выберите категорию, вкус и количество — калькулятор покажет примерную
                        стоимость
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
                    {/* Category Selection */}
                    <div className="mb-8">
                        <label className="block font-poppins font-semibold text-gray-800 mb-4 text-lg">
                            Категория продукта
                        </label>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { key: 'cakes', label: 'Торты', icon: Cake },
                                { key: 'bento', label: 'Бенто-торты', icon: Cookie },
                                { key: 'desserts', label: 'Десерты', icon: Coffee },
                            ].map(({ key, label, icon: Icon }) => (
                                <button
                                    key={key}
                                    onClick={() => setCategory(key)}
                                    className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 font-medium transition-all duration-300 ${
                                        category === key
                                            ? 'border-rose-500 bg-rose-50 text-rose-700'
                                            : 'border-gray-200 hover:border-rose-300 hover:bg-rose-25'
                                    }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dessert Subcategory */}
                    {category === 'desserts' && (
                        <div className="mb-8">
                            <label className="block font-poppins font-semibold text-gray-800 mb-4 text-lg">
                                Подкатегория десертов
                            </label>
                            <div className="grid md:grid-cols-4 gap-4">
                                {[
                                    { key: 'eskimo', label: 'Эскимо' },
                                    { key: 'cakepops', label: 'Кейк-попсы' },
                                    { key: 'cakes', label: 'Пирожные' },
                                    { key: 'trifles', label: 'Трайфлы' },
                                ].map(({ key, label }) => (
                                    <button
                                        key={key}
                                        onClick={() => setSubcategory(key)}
                                        className={`p-4 rounded-2xl border-2 font-medium transition-all duration-300 ${
                                            subcategory === key
                                                ? 'border-rose-500 bg-rose-50 text-rose-700'
                                                : 'border-gray-200 hover:border-rose-300 hover:bg-rose-25'
                                        }`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Flavor Selection */}
                    {(category === 'cakes' ||
                        category === 'bento' ||
                        (category === 'desserts' && subcategory)) && (
                        <div className="mb-8">
                            <label className="block font-poppins font-semibold text-gray-800 mb-4 text-lg">
                                Вкус
                            </label>

                            {/* Desktop: Button grid */}
                            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {getFlavors().map(flavorOption => (
                                    <button
                                        key={flavorOption}
                                        onClick={() => setFlavor(flavorOption)}
                                        className={`p-3 rounded-xl border-2 font-medium text-sm transition-all duration-300 ${
                                            flavor === flavorOption
                                                ? 'border-rose-500 bg-rose-50 text-rose-700'
                                                : 'border-gray-200 hover:border-rose-300 hover:bg-rose-25'
                                        }`}
                                    >
                                        {flavorOption}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile: Select dropdown */}
                            <div className="md:hidden relative">
                                <select
                                    value={flavor}
                                    onChange={e => setFlavor(e.target.value)}
                                    className="w-full px-4 py-4 pr-12 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white font-medium text-gray-800 appearance-none"
                                >
                                    <option value="">Выберите вкус</option>
                                    {getFlavors().map(flavorOption => (
                                        <option key={flavorOption} value={flavorOption}>
                                            {flavorOption}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                            </div>
                        </div>
                    )}

                    {/* Quantity */}
                    {flavor && (
                        <div className="mb-8">
                            <label className="block font-poppins font-semibold text-gray-800 mb-4 text-lg">
                                Количество ({getQuantityLabel()})
                            </label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="number"
                                    min={getMinQuantity()}
                                    step={getStep()}
                                    value={quantity}
                                    onChange={e =>
                                        setQuantity(
                                            Math.max(
                                                getMinQuantity(),
                                                parseFloat(e.target.value) || getMinQuantity(),
                                            ),
                                        )
                                    }
                                    className="w-32 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent text-lg font-semibold"
                                />
                                <span className="font-poppins text-gray-600">
                                    {category === 'desserts' &&
                                    (subcategory === 'eskimo' ||
                                        subcategory === 'cakepops' ||
                                        subcategory === 'cakes' ||
                                        subcategory === 'trifles')
                                        ? 'Минимум 4 штуки'
                                        : category === 'cakes'
                                          ? 'От 1 кг, шаг 0.5'
                                          : ''}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Additional Options */}
                    {flavor && (
                        <div className="mb-8">
                            <label className="block font-poppins font-semibold text-gray-800 mb-4 text-lg">
                                Дополнительные опции
                            </label>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={complexDesign}
                                        onChange={e => setComplexDesign(e.target.checked)}
                                        className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500"
                                    />
                                    <span className="font-poppins">
                                        Сложный дизайн / ягодное оформление
                                        <span className="text-rose-600 font-semibold">
                                            +{category === 'bento' ? '250' : '200'} ₽
                                        </span>
                                    </span>
                                </label>

                                <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toppers}
                                        onChange={e => setToppers(e.target.checked)}
                                        className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500"
                                    />
                                    <span className="font-poppins">
                                        Топперы / сахарная картинка
                                        <span className="text-rose-600 font-semibold">+150 ₽</span>
                                    </span>
                                </label>

                                {(subcategory === 'eskimo' || subcategory === 'cakepops') && (
                                    <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={berryDecoration}
                                            onChange={e => setBerryDecoration(e.target.checked)}
                                            className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500"
                                        />
                                        <span className="font-poppins">
                                            Ягодное оформление
                                            <span className="text-rose-600 font-semibold">
                                                +50 ₽/штука
                                            </span>
                                        </span>
                                    </label>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Total Cost */}
                    {totalCost > 0 && (
                        <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-6 text-white text-center mb-6">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-2xl">💰</span>
                                <h3 className="font-playfair text-2xl font-bold">
                                    Общая стоимость: {totalCost.toLocaleString()} ₽
                                </h3>
                            </div>
                            <p className="font-poppins text-rose-100 text-sm">
                                (Указанная цена приблизительная, финальная стоимость подтверждается
                                при оформлении заказа)
                            </p>
                        </div>
                    )}

                    {/* Order Button */}
                    {totalCost > 0 && (
                        <button
                            onClick={scrollToOrder}
                            className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            Оформить заказ
                        </button>
                    )}

                    {/* Additional Info */}
                    {category === 'bento' && (
                        <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400">
                            <p className="font-poppins text-blue-800 text-sm">
                                💡 Цена включает любой цвет покрытия, надпись и небольшой рисунок.
                                Сложный дизайн, ягодное, шоколадное и ореховое оформление за доплату
                                (+200-300 ₽).
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
