import { scrollToOrder } from '../lib/utils.ts';

type OrderButtonProps = {
    totalCost: number;
};

export const OrderButton = ({ totalCost }: OrderButtonProps) => {
    return (
        totalCost > 0 && (
            <button
                onClick={scrollToOrder}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
                Оформить заказ
            </button>
        )
    );
};
