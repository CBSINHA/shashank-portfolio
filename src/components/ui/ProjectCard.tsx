import { motion } from "framer-motion";

import { ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";

import type { Project } from "../../types/project";

interface Props {
  project: Project;
}

const ProjectCard = ({
  project,
}: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        backdrop-blur-xl
        shadow-lg
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      {/* IMAGE */}

      <div
        className="
          h-64
          overflow-hidden
          border-b
          flex
          items-center
          justify-center
          text-slate-500
        "
        style={{
          borderColor: "var(--border)",
        }}
      >
        {/* PLACEHOLDER */}

        Add project image here
      </div>

      {/* CONTENT */}

      <div className="p-8">
        {/* CATEGORY */}

        <div
          className="
            inline-flex
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            mb-5
            bg-indigo-500/10
            text-indigo-500
          "
        >
          {project.category}
        </div>

        {/* TITLE */}

        <h3
          className="
            text-3xl
            font-bold
          "
          style={{
            fontFamily:
              "Sora, sans-serif",
          }}
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-5
            leading-relaxed
            text-slate-600
            dark:text-slate-400
          "
        >
          {project.description}
        </p>

        {/* TECH STACK */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-2
          "
        >
          {project.techStack.map(
            (tech) => (
              <span
                key={tech}
                className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  border
                "
                style={{
                  borderColor:
                    "var(--border)",
                }}
              >
                {tech}
              </span>
            )
          )}
        </div>

        {/* ACTIONS */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-5
          "
        >
          <Link
            to={`/projects/${project.slug}`}
            className="
              inline-flex
              items-center
              gap-2
              font-medium
              text-indigo-500
              transition-colors
              duration-300
              hover:text-violet-500
            "
          >
            View Details
          </Link>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                font-medium
                transition-colors
                duration-300
                hover:text-indigo-500
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
                font-medium
                transition-colors
                duration-300
                hover:text-indigo-500
              "
            >
              GitHub

              <FaGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;