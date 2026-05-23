import { motion } from "framer-motion";

import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        sticky
        top-0
        z-50
        border-b
        backdrop-blur-xl
        supports-[backdrop-filter]:bg-black/10
        shadow-sm
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
          h-20
          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}

        <a
          href="/"
          className="
            text-xl
            font-bold
            tracking-tight
            transition-colors
            duration-300
            hover:text-indigo-500
          "
          style={{
            fontFamily:
              "Sora, sans-serif",
          }}
        >
          Shashank.
        </a>

        {/* NAV LINKS */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-sm
            font-medium
          "
        >
          <a
            href="#about"
            className="
              hover:text-indigo-500
              transition-colors
              duration-300
            "
          >
            About
          </a>

          <a
            href="#skills"
            className="
              hover:text-indigo-500
              transition-colors
              duration-300
            "
          >
            Skills
          </a>

          <a
            href="#projects"
            className="
              hover:text-indigo-500
              transition-colors
              duration-300
            "
          >
            Projects
          </a>

          <a
            href="#contact"
            className="
              hover:text-indigo-500
              transition-colors
              duration-300
            "
          >
            Contact
          </a>
        </div>

        {/* THEME TOGGLE */}

        <ThemeToggle />
      </div>
    </motion.header>
  );
};

export default Navbar;