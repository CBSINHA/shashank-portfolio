interface Props {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

const StatCard = ({
  value,
  suffix,
  label,
  description,
}: Props) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="
          absolute
          top-0
          right-0
          w-32
          h-32
          rounded-full
          blur-3xl
          opacity-10
          bg-gradient-to-r
          from-indigo-500
          to-violet-500
        "
      />

      <div className="relative z-10">
        <h3
          className="
            text-5xl
            font-bold
            tracking-tight
          "
          style={{
            fontFamily:
              "Sora, sans-serif",
          }}
        >
          {value}
          {suffix}
        </h3>

        <p
          className="
            mt-4
            text-xl
            font-semibold
          "
        >
          {label}
        </p>

        <p
          className="
            mt-3
            leading-relaxed
            text-slate-600
            dark:text-slate-400
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatCard;