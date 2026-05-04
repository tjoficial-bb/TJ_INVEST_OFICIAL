import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CalculadoraPage } from './pages/CalculadoraPage';
import { Home } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { SpecialtyPage } from './pages/SpecialtyPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { TestimonialsPage } from './pages/TestimonialsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/como-funciona" element={<HowItWorksPage />} />
        <Route path="/especialidade" element={<SpecialtyPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/depoimentos" element={<TestimonialsPage />} />
        <Route path="/calculadora" element={<CalculadoraPage />} />
      </Routes>
    </BrowserRouter>
  );
}
