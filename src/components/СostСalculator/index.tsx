import { useCostCalculator } from './model/hooks';
import { CategorySelector } from './ui/CategorySelector';
import { DessertSubcategory } from './ui/DessertSubcategory';
import { FlavorSelector } from './ui/FlavorSelector';
import { QuantityInput } from './ui/QuantityInput.tsx';
import { TotalCost } from './ui/TotalCost.tsx';
import { OrderButton } from './ui/OrderButton.tsx';
import { InfoBox } from './ui/InfoBox.tsx';

export const CostCalculator = () => {
    const state = useCostCalculator();

    return (
        <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <h2 className="font-bold text-4xl text-gray-800">
                            Рассчитайте стоимость заказа
                        </h2>
                    </div>
                    <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Выберите категорию, вкус и количество — калькулятор покажет примерную
                        стоимость
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
                    <CategorySelector
                        category={state.category}
                        updateCategory={state.setCategory}
                    />
                    <DessertSubcategory
                        category={state.category}
                        subcategory={state.subcategory}
                        updateSubcategory={state.setSubcategory}
                    />
                    <FlavorSelector
                        category={state.category}
                        flavor={state.flavor}
                        updateFlavor={state.setFlavor}
                        subcategory={state.subcategory}
                    />
                    <QuantityInput
                        category={state.category}
                        updateQuantity={state.setQuantity}
                        quantity={state.quantity}
                        flavor={state.flavor}
                        subcategory={state.subcategory}
                    />
                    {/*<AdditionalOptions />*/}
                    <TotalCost totalCost={state.totalCost} />
                    <OrderButton totalCost={state.totalCost} />
                    <InfoBox category={state.category} />
                    {/* Остальные UI-компоненты аналогично */}
                </div>
            </div>
        </section>
    );
};
