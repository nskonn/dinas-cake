import { useCostCalculator } from '../model/hooks.ts';

export const AdditionalOptions = () => {
    const {
        subcategory,
        flavor,
        category,
        complexDesign,
        setComplexDesign,
        toppers,
        setToppers,
        berryDecoration,
        setBerryDecoration,
    } = useCostCalculator();

    return (
        flavor && (
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
                                <span className="text-rose-600 font-semibold">+50 ₽/штука</span>
                            </span>
                        </label>
                    )}
                </div>
            </div>
        )
    );
};
