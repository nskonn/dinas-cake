
type TotalCostProps = {
    totalCost: number;
};

export const TotalCost = ({ totalCost }: TotalCostProps) => {
    return (
        totalCost > 0 && (
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-6 text-white text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">💰</span>
                    <h3 className="font-playfair text-2xl font-bold">
                        Общая стоимость: {totalCost.toLocaleString()} ₽
                    </h3>
                </div>
                <p className="font-poppins text-rose-100 text-sm">
                    (Указанная цена приблизительная, финальная стоимость подтверждается при
                    оформлении заказа)
                </p>
            </div>
        )
    );
};
