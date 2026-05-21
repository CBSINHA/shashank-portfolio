interface Props {
  skill: string;
}

const SkillBadge = ({
  skill,
}: Props) => {
  return (
    <div
      className="
        px-4
        py-2
        rounded-2xl
        border
        text-sm
        font-medium
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-lg
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      {skill}
    </div>
  );
};

export default SkillBadge;