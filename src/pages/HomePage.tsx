import Navbar from "../components/layout/Navbar";

import HeroSection from "../sections/HeroSection";
import StatsSection from "../sections/StatsSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection />
      <StatsSection />
    </div>
  );
};

export default HomePage;