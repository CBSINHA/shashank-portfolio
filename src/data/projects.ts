import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Expense Tracker",

    slug: "expense-tracker",

    description:
      "A full stack expense management application with secure authentication, REST APIs, dashboard analytics, and responsive UI.",

    longDescription:
      "A modern full stack expense tracking platform built using Spring Boot and React. Includes authentication, JWT security, responsive dashboard UI, expense categorization, API integration, and scalable backend architecture.",

    techStack: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Java",
      "JWT",
      "MySQL",
      "Tailwind CSS",
      "REST API",
    ],

    githubFrontend:
      "https://github.com/CBSINHA/expense-tracker-frontend",

    githubBackend:
      "https://github.com/CBSINHA/Expense-Tracker",

    liveLink:
      "https://expense-tracker-frontend-brown-xi.vercel.app/",

    apiLink:
      "https://expense-tracker-ojay.onrender.com",

    swaggerLink:
      "https://expense-tracker-ojay.onrender.com/swagger-ui/index.html",

    image:
      "/project-placeholders/expense-tracker.png",

    featured: true,

    category: "Full Stack",
  },

  {
    title: "Precision Aim 3D",

    slug: "precision-aim-3d",

    description:
      "A Unity-based 3D precision target shooting game focused on gameplay mechanics and interaction systems.",

    longDescription:
      "A 3D Unity game project focused on aiming mechanics, shooting systems, interactive gameplay loops, and polished player interactions using Unity and C#.",

    techStack: [
      "Unity",
      "C#",
      "Game Development",
      "3D Physics",
      "UI Systems",
    ],

    githubFrontend:
      "https://github.com/CBSINHA/Precision-Aim-3D",

    liveLink:
      "https://cbsinha.itch.io/precision-aim-3d",

    image:
      "/project-placeholders/precision-aim.png",

    featured: true,

    category: "Game Dev",
  },

  {
    title: "Pop Em Alien Shooter",

    slug: "pop-em-alien-shooter",

    description:
      "A 2D Unity space shooter game featuring enemy waves, shooting systems, and score mechanics.",

    longDescription:
      "A fast-paced 2D Unity shooter project focused on gameplay systems, collision mechanics, enemy spawning, scoring systems, and player controls.",

    techStack: [
      "Unity",
      "C#",
      "2D Game Development",
      "Gameplay Systems",
    ],

    githubFrontend:
      "https://github.com/CBSINHA/Pop-Em-2D-Alien-Shooter",

    liveLink:
      "https://cbsinha.itch.io/pop-em-alien-shooter",

    image:
      "/project-placeholders/pop-em.png",

    featured: true,

    category: "Game Dev",
  },

  {
    title: "Encryp70r",

    slug: "encryp70r",

    description:
      "A secure Java CLI encryption/decryption tool built using AES-GCM and PBKDF2.",

    longDescription:
      "A command-line encryption utility focused on secure file encryption and decryption using AES-GCM and PBKDF2-based key derivation mechanisms.",

    techStack: [
      "Java",
      "AES-GCM",
      "PBKDF2",
      "CLI",
      "Security",
    ],

    githubFrontend:
      "https://github.com/CBSINHA/Encryp70r",

    image:
      "/project-placeholders/encryp70r.png",

    featured: true,

    category: "Security",
  },
];