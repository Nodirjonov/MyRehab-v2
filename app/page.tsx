import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Pipeline from '../components/Pipeline';
import Specialties from '../components/Specialties';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Problem />
      <Pipeline />
      <Specialties />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
