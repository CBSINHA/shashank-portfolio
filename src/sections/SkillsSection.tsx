import { motion } from "framer-motion";

import Section from "../components/layout/Section";

import SectionTitle from "../components/ui/SectionTitle";

import SkillBadge from "../components/ui/SkillBadge";

import { skillCategories } from "../data/skills";

const SkillsSection = () => {
  return (
    <Section id="skills">
      <SectionTitle
        eyebrow="Skills & Technologies"
        title="Modern technologies for building scalable software."
        description="Focused on backend engineering, frontend development, deployment workflows, and interactive application experiences."
      />

      <div
        className="
          grid
          gap-6
          lg:grid-cols-2
        "
      >
        {skillCategories.map(
          (category, index) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                p-8
                backdrop-blur-xl
              "
              style={{
                background:
                  "var(--card)",
                borderColor:
                  "var(--border)",
              }}
            >
              {/* Glow */}

              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-32
                  h-32
                  rounded-full
                  blur-3xl
                  opacity-10
                  bg-gradient-to-r
                  from-indigo-500
                  to-violet-500
                "
              />

              <div className="relative z-10">
                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                  style={{
                    fontFamily:
                      "Sora, sans-serif",
                  }}
                >
                  {category.title}
                </h3>

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {category.skills.map(
                    (skill) => (
                      <SkillBadge
                        key={skill}
                        skill={skill}
                      />
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </Section>
  );
};

export default SkillsSection;