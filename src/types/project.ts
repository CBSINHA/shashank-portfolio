export interface Project {
  title: string;

  slug: string;

  description: string;

  longDescription: string;

  techStack: string[];

  githubFrontend?: string;

  githubBackend?: string;

  liveLink?: string;

  apiLink?: string;

  swaggerLink?: string;

  image: string;

  featured: boolean;

  category:
    | "Full Stack"
    | "Game Dev"
    | "Security";
}