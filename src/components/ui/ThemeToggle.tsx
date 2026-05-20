import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } =
    useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="
        flex
        items-center
        justify-center
        w-11
        h-11
        rounded-full
        border
        backdrop-blur-md
        transition-all
        duration-300
        hover:scale-105
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
};

export default ThemeToggle;