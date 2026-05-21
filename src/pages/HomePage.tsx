import Navbar from "../components/layout/Navbar";

import HeroSection from "../sections/HeroSection";
import StatsSection from "../sections/StatsSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import CertificatesSection from "../sections/CertificatesSection";

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
    </div>
  );
};

export default HomePage;