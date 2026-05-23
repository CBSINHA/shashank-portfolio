const Footer = () => {
  return (
    <footer
      className="
        border-t
        py-10
        mt-24
      "
      style={{
        borderColor: "var(--border)",
      }}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        "
      >
        <p
          className="
            text-sm
            text-slate-500
          "
        >
          © 2026 Shashank Sinha.
          Built with React, TypeScript,
          and Tailwind CSS.
        </p>

        <div
          className="
            flex
            items-center
            gap-6
            text-sm
          "
        >
          <a href="#about"
          className="
  hover:text-indigo-500
  transition-colors
  duration-300
">
            About
          </a>

          <a href="#projects"
          className="
  hover:text-indigo-500
  transition-colors
  duration-300
">
            Projects
          </a>

          <a href="#contact"
          className="
  hover:text-indigo-500
  transition-colors
  duration-300
">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;