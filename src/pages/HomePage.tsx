import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { AboutSection } from '../components/AboutSection';
import { ProcessSection } from '../components/ProcessSection';
import { SpecialtySection } from '../components/SpecialtySection';
import { JuridicalAssistance } from '../components/JuridicalAssistance';
import { FAQSection } from '../components/FAQSection';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { FinalCTA } from '../components/FinalCTA';

export const Home = () => {
  return (
    <Layout>
        <Hero />
        <StatsBar />
        <AboutSection />
        <ProcessSection />
        <SpecialtySection />
        <JuridicalAssistance />
        <FAQSection />
        <TestimonialsCarousel />
        <FinalCTA />
    </Layout>
  );
};
