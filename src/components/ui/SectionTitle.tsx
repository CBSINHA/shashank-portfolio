interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

const SectionTitle = ({
  eyebrow,
  title,
  description,
}: Props) => {
  return (
    <div className="mb-14 max-w-3xl">
      {eyebrow && (
        <p
          className="
            mb-3
            text-sm
            font-medium
            uppercase
            tracking-[0.2em]
            text-indigo-500
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          leading-tight
          tracking-tight
        "
        style={{
          fontFamily: "Sora, sans-serif",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-5
            text-lg
            leading-relaxed
            text-slate-500
            dark:text-slate-400
          "
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;