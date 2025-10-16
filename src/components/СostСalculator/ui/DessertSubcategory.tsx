type DessertSubcategoryProps = {
    category: string;
    subcategory: string;
    updateSubcategory: (subcategory: string) => void;
};

export const DessertSubcategory = ({
    category,
    subcategory,
    updateSubcategory,
}: DessertSubcategoryProps) => {
    return (
        category === 'desserts' && (
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
                            onClick={() => updateSubcategory(key)}
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
        )
    );
};
