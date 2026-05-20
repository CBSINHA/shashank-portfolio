import type { ReactNode } from "react";import Container from "./Container";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({
  children,
  className = "",
  id,
}: Props) => {
  return (
    <section
      id={id}
      className={`
        py-24
        relative
        ${className}
      `}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;