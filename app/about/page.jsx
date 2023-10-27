import RootLayout from "../layout";
import Header from "../_components/_ReusableComponents/Header";
import Footer from "../_components/_ReusableComponents/Footer";
import AboutHeroSection from "../_components/_AboutPageSections/AboutHeroSection";
import HeroSection from "../_components/_HomePageSections/HeroSection";

export default function About() {
  return (
    <RootLayout >
      <Header />
      <AboutHeroSection />
      <Footer />
    </RootLayout>
  );
}
