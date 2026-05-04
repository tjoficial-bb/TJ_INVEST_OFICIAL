import { Layout } from '../components/Layout';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';

export const TestimonialsPage = () => {
    return (
        <Layout>
            <div className="py-20">
                <TestimonialsCarousel />
            </div>
        </Layout>
    );
};
