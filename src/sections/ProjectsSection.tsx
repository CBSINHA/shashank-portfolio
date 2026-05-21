import Section from "../components/layout/Section";

import SectionTitle from "../components/ui/SectionTitle";

import ProjectCard from "../components/ui/ProjectCard";

import { projects } from "../data/projects";

const ProjectsSection = () => {
  const featuredProjects =
    projects.filter(
      (project) => project.featured
    );

  return (
    <Section id="projects">
      <SectionTitle
        eyebrow="Projects"
        title="Featured software and development projects."
        description="A collection of full stack applications, Unity projects, and development-focused tools showcasing backend systems, frontend experiences, and interactive gameplay mechanics."
      />

      <div
        className="
          grid
          gap-8
        "
      >
        {featuredProjects.map(
          (project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          )
        )}
      </div>
    </Section>
  );
};

export default ProjectsSection;