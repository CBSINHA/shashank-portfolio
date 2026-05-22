import Navbar from "../components/layout/Navbar";

import HeroSection from "../sections/HeroSection";
import StatsSection from "../sections/StatsSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import CertificatesSection from "../sections/CertificatesSection";
import CodingProfilesSection from "../sections/CodingProfilesSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <CodingProfilesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;