interface Props {
  tech: string;
}

const TechBadge = ({
  tech,
}: Props) => {
  return (
    <div
      className="
        px-4
        py-2
        rounded-full
        border
        text-sm
        font-medium
      "
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      {tech}
    </div>
  );
};

export default TechBadge;