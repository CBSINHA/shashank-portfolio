import Section from "../components/layout/Section";

import SectionTitle from "../components/ui/SectionTitle";

import StatCard from "../components/ui/StatCard";

import { stats } from "../data/stats";

const StatsSection = () => {
  return (
    <Section className="pt-8">
      <SectionTitle
        eyebrow="Highlights"
        title="Building modern software experiences."
        description="Focused on scalable full stack applications, polished frontend experiences, backend engineering, and interactive Unity projects."
      />

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            description={
              stat.description
            }
          />
        ))}
      </div>
    </Section>
  );
};

export default StatsSection;