import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
  href?: string;
}

const SecondaryButton = ({
  children,
  href,
}: Props) => {
  return (
    <a
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        px-6
        py-3
        rounded-2xl
        border
        backdrop-blur-xl
        font-medium
        transition-all
        duration-300
        hover:scale-[1.03]
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      {children}
    </a>
  );
};

export default SecondaryButton;