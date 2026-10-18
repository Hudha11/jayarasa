import AnnouncementBar from "./components/layout/AnnouncementBar.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import HeritageSection from "./sections/HeritageSection.jsx";
import ProductsSection from "./sections/ProductsSection.jsx";
import StorySection from "./sections/StorySection.jsx";
import ValuesSection from "./sections/ValuesSection.jsx";
import CredentialsSection from "./sections/CredentialsSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import LocationsSection from "./sections/LocationsSection";

export default function App() {
  return (
    <div className="site-shell">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <HeritageSection />
        <ProductsSection />
        <LocationsSection />
        <StorySection />
        <ValuesSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
