import Section from "../components/layout/Section";

import SectionTitle from "../components/ui/SectionTitle";

import PlatformCard from "../components/ui/PlatformCard";

import { platforms } from "../data/platforms";

const CodingProfilesSection = () => {
  const featuredPlatforms =
    platforms.filter(
      (platform) => platform.featured
    );

  return (
    <Section id="coding-profiles">
      <SectionTitle
        eyebrow="Coding Profiles"
        title="Consistent learning and problem solving."
        description="Platforms showcasing projects, problem solving practice, certifications, and development activity."
      />

      <div
        className="
          grid
          gap-8
          lg:grid-cols-3
        "
      >
        {featuredPlatforms.map(
          (platform) => (
            <PlatformCard
              key={platform.name}
              platform={platform}
            />
          )
        )}
      </div>
    </Section>
  );
};

export default CodingProfilesSection;