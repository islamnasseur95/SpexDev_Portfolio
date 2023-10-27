import RootLayout from "./layout";
import Header from "./_components/_ReusableComponents/Header";
import HeroSection from "./_components/_HomePageSections/HeroSection";
import Services from "./_components/_HomePageSections/Services";
import Projects from "./_components/_HomePageSections/Projects";
import Skills from "./_components/_HomePageSections/Skills";
import Testimonials from "./_components/_HomePageSections/Testimonials";
import Footer from "./_components/_ReusableComponents/Footer";
import Technologies from "./_components/_HomePageSections/Technologies";


export default function Home() {
return (
<RootLayout>
  <Header />
  <HeroSection />
  <Services />
  <div className="py-12 skills-section-background">
  <Projects />
  <Skills />
  </div>
  <Testimonials />
  <div className="py-12 skills-section-background">
  <Technologies />
  </div>
  <Footer />
</RootLayout>
);
}