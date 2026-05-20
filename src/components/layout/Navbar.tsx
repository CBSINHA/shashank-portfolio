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
        backdrop-blur-xl
        border-b
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
        <div
          className="
            text-xl
            font-bold
            tracking-tight
          "
          style={{
            fontFamily:
              "Sora, sans-serif",
          }}
        >
          Shashank.
        </div>

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
          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>
        </div>

        <ThemeToggle />
      </div>
    </motion.header>
  );
};

export default Navbar;