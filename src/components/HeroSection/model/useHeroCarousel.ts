import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const useHeroCarousel = (autoplayDelay = 4000) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    // @ts-ignore
    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect();
        return () => emblaApi.off('select', onSelect);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const timer = setInterval(() => emblaApi.scrollNext(), autoplayDelay);
        return () => clearInterval(timer);
    }, [emblaApi, autoplayDelay]);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();
    const scrollTo = (index: number) => emblaApi?.scrollTo(index);

    return { emblaRef, emblaApi, selectedIndex, scrollPrev, scrollNext, scrollTo };
};
