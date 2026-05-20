import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({
  children,
  className = "",
}: Props) => {
  return (
    <div
      className={`
        w-full
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;