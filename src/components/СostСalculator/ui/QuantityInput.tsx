import { getMinQuantity, getQuantityLabel, getStep } from '../lib/utils.ts';

type QuantityInputProps = {
    category: string;
    subcategory: string;
    flavor: string;
    quantity: number;
    updateQuantity: (quantity: number) => void;
};

export const QuantityInput = ({
    category,
    subcategory,
    flavor,
    updateQuantity,
    quantity,
}: QuantityInputProps) => {
    const minQuantity = getMinQuantity(category, subcategory);
    const step = getStep(category);

    return (
        flavor && (
            <div className="mb-8">
                <label className="block font-poppins font-semibold text-gray-800 mb-4 text-lg">
                    Количество ({getQuantityLabel(category)})
                </label>
                <div className="flex items-center gap-4">
                    <input
                        type="number"
                        min={minQuantity}
                        step={step}
                        value={quantity}
                        onChange={e =>
                            updateQuantity(
                                Math.max(minQuantity, parseFloat(e.target.value) || minQuantity),
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
        )
    );
};
