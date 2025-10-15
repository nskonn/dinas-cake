import { heroSlides } from '../model/heroSlides';
import { useHeroCarousel } from '../model/useHeroCarousel';
import { HeroSlide } from './HeroSlide';
import { HeroNavigation } from './HeroNavigation';
import { HeroDots } from './HeroDots';
import { HeroTextBlock } from './HeroTextBlock';

export const HeroSection = () => {
    const { emblaRef, selectedIndex, scrollPrev, scrollNext, scrollTo } = useHeroCarousel();

    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-rose-50 to-pink-100 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
                <HeroTextBlock />
                <div className="relative">
                    <div className="absolute h-[400px] inset-0 bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl transform rotate-3 opacity-50"></div>
                    <div className="embla overflow-hidden rounded-3xl" ref={emblaRef}>
                        <div className="embla__container flex">
                            {heroSlides.map((slide, i) => (
                                <HeroSlide key={i} {...slide} />
                            ))}
                        </div>
                    </div>
                    <HeroNavigation onPrev={scrollPrev} onNext={scrollNext} />
                    <HeroDots
                        count={heroSlides.length}
                        activeIndex={selectedIndex}
                        onSelect={scrollTo}
                    />
                    <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-bounce">
                        <span className="text-2xl">🎂</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
