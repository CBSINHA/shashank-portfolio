import { motion } from "framer-motion";

import Section from "../components/layout/Section";

import SectionTitle from "../components/ui/SectionTitle";

const AboutSection = () => {
  return (
    <Section id="about">
      <SectionTitle
        eyebrow="About Me"
        title="Passionate about building scalable and interactive software."
        description="Focused on full stack development, backend engineering, modern frontend experiences, and interactive Unity projects."
      />

      <div
        className="
          grid
          lg:grid-cols-2
          gap-10
          items-start
        "
      >
        {/* LEFT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            space-y-6
          "
        >
          <p
            className="
              text-lg
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
          >
            I'm Shashank Sinha, a
            software developer currently
            focused on building scalable
            full stack applications using
            Java, Spring Boot, React, and
            modern web technologies.
          </p>

          <p
            className="
              text-lg
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
          >
            I enjoy creating polished user
            experiences, backend systems,
            and interactive projects that
            combine performance with clean
            design and maintainable
            architecture.
          </p>

          <p
            className="
              text-lg
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
          >
            Beyond full stack development,
            I also explore Unity game
            development and security-based
            tools, helping me develop a
            broader understanding of
            software engineering concepts.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            grid
            gap-6
            sm:grid-cols-2
          "
        >
          {/* CARD 1 */}

          <div
            className="
              rounded-3xl
              border
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
            "
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <h3
              className="
                text-xl
                font-semibold
              "
            >
              Education
            </h3>

            <p
              className="
                mt-4
                leading-relaxed
                text-slate-600
                dark:text-slate-400
              "
            >
              B.Tech CSE student at
              Lovely Professional
              University graduating in
              2027.
            </p>
          </div>

          {/* CARD 2 */}

          <div
            className="
              rounded-3xl
              border
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
            "
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <h3
              className="
                text-xl
                font-semibold
              "
            >
              Current Focus
            </h3>

            <p
              className="
                mt-4
                leading-relaxed
                text-slate-600
                dark:text-slate-400
              "
            >
              Java backend development,
              Spring Boot APIs, React,
              TypeScript, and scalable web
              architecture.
            </p>
          </div>

          {/* CARD 3 */}

          <div
            className="
              rounded-3xl
              border
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
            "
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <h3
              className="
                text-xl
                font-semibold
              "
            >
              Platforms
            </h3>

            <p
              className="
                mt-4
                leading-relaxed
                text-slate-600
                dark:text-slate-400
              "
            >
              Comfortable working across
              Windows and Linux
              environments with Git-based
              development workflows.
            </p>
          </div>

          {/* CARD 4 */}

          <div
            className="
              rounded-3xl
              border
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
            "
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <h3
              className="
                text-xl
                font-semibold
              "
            >
              Interests
            </h3>

            <p
              className="
                mt-4
                leading-relaxed
                text-slate-600
                dark:text-slate-400
              "
            >
              Full stack engineering,
              UI/UX design systems,
              deployment workflows, game
              development, and modern
              software architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;