import { ChevronDown } from 'lucide-react';
import { getFlavors } from '../lib/utils.ts';

type FlavorSelectorProps = {
    category: string;
    flavor: string;
    subcategory: string;
    updateFlavor: (flavorOption: string) => void;
};

export const FlavorSelector = ({
    category,
    flavor,
    updateFlavor,
    subcategory,
}: FlavorSelectorProps) => {
    const flavors = getFlavors(category, subcategory);

    return (
        (category === 'cakes' ||
            category === 'bento' ||
            (category === 'desserts' && subcategory)) && (
            <div className="mb-8">
                <label className="block font-poppins font-semibold text-gray-800 mb-4 text-lg">
                    Вкус
                </label>

                {/* Desktop: Button grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {flavors.map(flavorOption => (
                        <button
                            key={flavorOption}
                            onClick={() => updateFlavor(flavorOption)}
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
                        onChange={e => updateFlavor(e.target.value)}
                        className="w-full px-4 py-4 pr-12 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white font-medium text-gray-800 appearance-none"
                    >
                        <option value="">Выберите вкус</option>
                        {flavors.map(flavorOption => (
                            <option key={flavorOption} value={flavorOption}>
                                {flavorOption}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                </div>
            </div>
        )
    );
};
