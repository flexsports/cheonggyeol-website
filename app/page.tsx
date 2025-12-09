import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PremiumService from '../components/PremiumService';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className='min-h-screen bg-white'>
      <Header />
      <Hero />
      <Services />
      <PremiumService />
      <Pricing />
      <Footer />
    </main>
  );
}
