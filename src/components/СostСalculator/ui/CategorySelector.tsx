import { Cake, Cookie, Coffee } from 'lucide-react';

const categories = [
    { key: 'cakes', label: 'Торты', icon: Cake },
    { key: 'bento', label: 'Бенто-торты', icon: Cookie },
    { key: 'desserts', label: 'Десерты', icon: Coffee },
];

type CategorySelectorProps = {
    category: string;
    updateCategory: (category: string) => void;
}

export const CategorySelector = ({category, updateCategory}: CategorySelectorProps) => {
    return (
        <div className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
                {categories.map(({ key, label, icon: Icon }) => (
                    <button
                        key={key}
                        onClick={() => updateCategory(key)}
                        className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 font-medium transition-all duration-300 ${
                            category === key
                                ? 'border-rose-500 bg-rose-50 text-rose-700'
                                : 'border-gray-200 hover:border-rose-300'
                        }`}
                    >
                        <Icon className="w-5 h-5" />
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
};
