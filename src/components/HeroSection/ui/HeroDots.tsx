type HeroDotsProps = {
    count: number;
    activeIndex: number;
    onSelect: (index: number) => void;
};

export const HeroDots = ({ count, activeIndex, onSelect }: HeroDotsProps) => (
    <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: count }).map((_, i) => (
            <button
                key={i}
                onClick={() => onSelect(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-rose-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
        ))}
    </div>
);
