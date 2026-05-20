const BackgroundGrid = () => {
  return (
    <div
      className="
        absolute
        inset-0
        -z-10
        overflow-hidden
        pointer-events-none
      "
    >
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          dark:opacity-[0.06]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, #6366f1 1px, transparent 1px),
            linear-gradient(to bottom, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          blur-3xl
          opacity-20
          bg-gradient-to-r
          from-indigo-500
          to-violet-500
        "
      />
    </div>
  );
};

export default BackgroundGrid;