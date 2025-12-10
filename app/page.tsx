import Hero from '../components/Hero';
import Services from '../components/Services';
import PremiumService from '../components/PremiumService';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PremiumService />
      <Pricing />
      {/* <FAQ /> */}
      <ContactCTA />
    </>
  );
}
