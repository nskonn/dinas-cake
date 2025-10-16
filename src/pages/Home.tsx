import { HeroSection } from 'components/HeroSection/index.ts';
import { CostCalculator } from 'components/СostСalculator';
import ProductsSection from 'components/ProductsSection';
import AdvantagesSection from 'components/AdvantagesSection';
import ReviewsSection from 'components/ReviewsSection';
import ProcessSection from 'components/ProcessSection';
import OrderForm from 'components/OrderForm';
import ContactSection from 'components/ContactSection';
import Footer from 'components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <div id="calculator">
                <CostCalculator />
            </div>
            <div id="products">
                <ProductsSection />
            </div>
            <AdvantagesSection />
            <div id="reviews">
                <ReviewsSection />
            </div>
            <ProcessSection />
            <OrderForm />
            <ContactSection />
            <Footer />
        </div>
    );
}
