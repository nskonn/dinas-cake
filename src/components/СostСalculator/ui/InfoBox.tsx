type InfoBoxProps = {
    category: string;
};

export const InfoBox = ({ category }: InfoBoxProps) => {
    return (
        category === 'bento' && (
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400">
                <p className="font-poppins text-blue-800 text-sm">
                    💡 Цена включает любой цвет покрытия, надпись и небольшой рисунок. Сложный
                    дизайн, ягодное, шоколадное и ореховое оформление за доплату (+200-300 ₽).
                </p>
            </div>
        )
    );
};
