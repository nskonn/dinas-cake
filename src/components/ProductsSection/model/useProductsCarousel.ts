import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { CategoryKey } from './types';

export function useProductsCarousel(initialCategory: CategoryKey = 'cake') {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [currentCategory, setCurrentCategory] = useState<CategoryKey>(initialCategory);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            const newIndex = emblaApi.selectedScrollSnap();
            setSelectedIndex(newIndex);
            setActiveIndex(newIndex);
        };

        emblaApi.on('select', onSelect);
        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 5000);
        return () => clearInterval(autoplay);
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi && activeIndex !== selectedIndex) {
            emblaApi.scrollTo(activeIndex);
        }
    }, [activeIndex, emblaApi, selectedIndex]);

    return {
        emblaRef,
        activeIndex,
        setActiveIndex,
        selectedIndex,
        currentCategory,
        setCurrentCategory,
        isDropdownOpen,
        setIsDropdownOpen,
        scrollPrev,
        scrollNext,
    };
}


