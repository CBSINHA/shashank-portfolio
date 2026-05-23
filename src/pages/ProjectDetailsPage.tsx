import { useParams } from "react-router-dom";

import {
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { projects } from "../data/projects";

import Section from "../components/layout/Section";

import TechBadge from "../components/ui/TechBadge";
import Navbar from "../components/layout/Navbar";

import Footer from "../components/layout/Footer";

import { Link } from "react-router-dom";

const ProjectDetailsPage = () => {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-2xl
        "
      >
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen">
  <Navbar />
      {/* HERO */}

      <Section className="pt-16">
        <Link
  to="/projects"
          className="
            inline-flex
            items-center
            gap-2
            mb-10
            text-indigo-500
            font-medium
          "
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            items-center
          "
        >
          {/* LEFT */}

          <div>
            <div
              className="
                inline-flex
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
                mb-6
                bg-indigo-500/10
                text-indigo-500
              "
            >
              {project.category}
            </div>

            <h1
              className="
                text-5xl
                md:text-6xl
                font-bold
                tracking-tight
              "
              style={{
                fontFamily:
                  "Sora, sans-serif",
              }}
            >
              {project.title}
            </h1>

            <p
              className="
                mt-8
                text-lg
                leading-relaxed
                text-slate-600
                dark:text-slate-400
              "
            >
              {project.longDescription}
            </p>

            {/* TECH STACK */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-3
              "
            >
              {project.techStack.map(
                (tech) => (
                  <TechBadge
                    key={tech}
                    tech={tech}
                  />
                )
              )}
            </div>

            {/* LINKS */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-5
              "
            >
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    rounded-2xl
                    font-medium
                    text-white
                    bg-gradient-to-r
                    from-indigo-500
                    to-violet-500
                  "
                >
                  Live Demo

                  <ExternalLink
                    size={18}
                  />
                </a>
              )}

              {project.githubFrontend && (
                <a
                  href={
                    project.githubFrontend
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    rounded-2xl
                    border
                    font-medium
                  "
                  style={{
                    borderColor:
                      "var(--border)",
                  }}
                >
                  GitHub

                  <FaGithub
                    size={18}
                  />
                </a>
              )}
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              rounded-[2rem]
              overflow-hidden
              border
              aspect-video
              flex
              items-center
              justify-center
              text-slate-500
            "
            style={{
              borderColor:
                "var(--border)",
              background:
                "var(--card)",
            }}
          >
            Add project screenshots here
          </div>
        </div>
      </Section>

      {/* EXTRA DETAILS */}

      <Section className="pt-0">
        <div
          className="
            grid
            lg:grid-cols-2
            gap-8
          "
        >
          {/* Challenges */}

          <div
            className="
              rounded-3xl
              border
              p-8
            "
            style={{
              background: "var(--card)",
              borderColor:
                "var(--border)",
            }}
          >
            <h2
              className="
                text-3xl
                font-bold
              "
              style={{
                fontFamily:
                  "Sora, sans-serif",
              }}
            >
              Challenges
            </h2>

            <p
              className="
                mt-6
                leading-relaxed
                text-slate-600
                dark:text-slate-400
              "
            >
              Placeholder for challenges
              faced during development.
              Add architecture decisions,
              deployment issues,
              authentication flows, game
              mechanics, optimization, or
              debugging experiences here.
            </p>
          </div>

          {/* Learnings */}

          <div
            className="
              rounded-3xl
              border
              p-8
            "
            style={{
              background: "var(--card)",
              borderColor:
                "var(--border)",
            }}
          >
            <h2
              className="
                text-3xl
                font-bold
              "
              style={{
                fontFamily:
                  "Sora, sans-serif",
              }}
            >
              Learnings
            </h2>

            <p
              className="
                mt-6
                leading-relaxed
                text-slate-600
                dark:text-slate-400
              "
            >
              Placeholder for project
              learnings and takeaways.
              Discuss backend design,
              frontend architecture,
              security concepts, gameplay
              systems, deployment, or
              optimization learnings here.
            </p>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;