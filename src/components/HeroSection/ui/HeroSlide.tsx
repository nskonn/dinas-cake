type HeroSlideProps = {
    image: string;
    alt: string;
    label: string;
    className?: string;
    labelClassName?: string;
};

export const HeroSlide = ({ image, alt, label, className = '', labelClassName = '' }: HeroSlideProps) => (
    <div className={`embla__slide flex-shrink-0 w-full relative ${className}`}>
        <div className="relative group">
            <img
                src={image}
                alt={alt}
                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
                className={`absolute bottom-4 left-4 bg-white/30 bg-opacity-20 border border-rose-200 backdrop-blur-sm rounded-2xl px-4 py-1 shadow-lg ${labelClassName}`}
            >
                <span className="font-nunito text-rose-950 text-md">{label}</span>
            </div>
        </div>
    </div>
);
