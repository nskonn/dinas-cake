import { ArrowDown } from 'lucide-react';

export const HeroTextBlock = () => {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <div className="relative z-10">
            <h1 className="font-nunito text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Авторские десерты
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600 block">
                    на любой случай
                </span>
            </h1>

            <p className="font-inter text-xl text-gray-600 mb-8 max-w-xl">
                Вкусные, красивые торты, сделанные с любовью из натуральных ингредиентов по
                индивидуальному дизайну
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => scrollTo('calculator')}
                    className="group bg-gradient-to-r from-rose-500 to-pink-600 text-white px-7 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                    Рассчитать стоимость
                    <ArrowDown className="w-5 h-5 duration-300" />
                </button>

                <button
                    onClick={() => scrollTo('order-form')}
                    className="group border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white px-7 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                    Заказать десерт
                </button>
            </div>
        </div>
    );
};
