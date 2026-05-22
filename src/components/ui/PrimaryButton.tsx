import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

const PrimaryButton = ({
  children,
  href,
  onClick,
}: Props) => {
  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    px-6
    py-3
    rounded-2xl
    font-medium
    text-white
    transition-all
    duration-300
    hover:scale-[1.03]
    active:scale-[0.98]
    hover:shadow-indigo-500/25
    hover:shadow-2xl
    focus:outline-none
    focus:ring-2
    focus:ring-indigo-500/30
  `;

  const style = {
    background:
      "linear-gradient(to right, #6366f1, #8b5cf6)",
  };

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      style={style}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;