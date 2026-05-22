import {
  ExternalLink,
  Code2,
} from "lucide-react";

import type { Platform } from "../../types/platform";

interface Props {
  platform: Platform;
}

const PlatformCard = ({
  platform,
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
      {/* Glow */}

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
        <div
          className="
            w-14
            h-14
            rounded-2xl
            flex
            items-center
            justify-center
            bg-indigo-500/10
            text-indigo-500
          "
        >
          <Code2 size={28} />
        </div>

        <h3
          className="
            mt-6
            text-3xl
            font-bold
          "
          style={{
            fontFamily:
              "Sora, sans-serif",
          }}
        >
          {platform.name}
        </h3>

        <p
          className="
            mt-3
            text-indigo-500
            font-medium
          "
        >
          @{platform.username}
        </p>

        <p
          className="
            mt-5
            leading-relaxed
            text-slate-600
            dark:text-slate-400
          "
        >
          {platform.description}
        </p>

        <p
          className="
            mt-5
            text-sm
            font-medium
            text-slate-500
          "
        >
          {platform.stats}
        </p>

        <a
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            text-indigo-500
            font-medium
          "
        >
          Visit Profile

          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
};

export default PlatformCard;