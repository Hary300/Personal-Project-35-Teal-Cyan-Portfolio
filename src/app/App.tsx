import Footer from '@/components/layouts/Footer';
import TickerBanner from '@/components/shadcn-space/marquee/marquee-02';
import HeroSection from '@/sections/01-hero';
import AboutSection from '@/sections/02-about';
import SkillSection from '@/sections/03-skill';
import WhyMeSection from '@/sections/04-whyMe';
import PortfolioSection from '@/sections/05-portfolio';
import ExperienceSection from '@/sections/06-experience';
import TestimonySection from '@/sections/07-testimony';
import FaqSection from '@/sections/08-faq';
import ContactSection from '@/sections/09-contact';

function App() {
  return (
    <>
      <HeroSection />
      <TickerBanner />
      <AboutSection />
      <SkillSection />
      <WhyMeSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonySection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
