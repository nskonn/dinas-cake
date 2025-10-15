import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroNavigation = ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => (
    <>
        <button
            onClick={onPrev}
            className="absolute right-24 bottom-5 transform -translate-y-1/2 bg-white/40 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/60 transition-all duration-300 hover:scale-110"
        >
            <ChevronLeft className="w-5 h-5 text-rose-950" />
        </button>
        <button
            onClick={onNext}
            className="absolute right-4 bottom-5 transform -translate-y-1/2 bg-white/40 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/60 transition-all duration-300 hover:scale-110"
        >
            <ChevronRight className="w-5 h-5 text-rose-950" />
        </button>
    </>
);
