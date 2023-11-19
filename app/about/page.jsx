import RootLayout from "../layout";
import Header from "../_components/_ReusableComponents/Header";
import Footer from "../_components/_ReusableComponents/Footer";
import AboutHeroSection from "../_components/_AboutPageSections/AboutHeroSection";
import TimeLine from "../_components/_AboutPageSections/TimelineSection";


export default function About() {
  return (
    <RootLayout >
      <Header />
      <AboutHeroSection />
      <TimeLine />
      <Footer />
    </RootLayout>
  );
}
