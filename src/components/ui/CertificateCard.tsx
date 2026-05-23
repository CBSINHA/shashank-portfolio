import {
  ExternalLink,
  Award,
} from "lucide-react";

import type { Certificate } from "../../types/certificate";

interface Props {
  certificate: Certificate;
}

const CertificateCard = ({
  certificate,
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
        shadow-lg
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

      <div className="relative z-10 ">
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
          <Award size={28} />
        </div>

        <h3
          className="
            mt-6
            text-2xl
            font-bold
            
          "
          style={{
            fontFamily:
              "Sora, sans-serif",
          }}
        >
          {certificate.title}
        </h3>

        <p
          className="
            mt-3
            text-indigo-500
            font-medium
            
          "
        >
          {certificate.issuer}
        </p>

        <p
          className="
            mt-5
            leading-relaxed
            text-slate-600
            dark:text-slate-400
            
          "
        >
          {certificate.description}
        </p>

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            
          "
        >
          <span
            className="
              text-sm
              text-slate-500
              
            "
          >
            {certificate.issueDate}
          </span>

          <a
            href={
              certificate.verificationLink
            }
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              text-indigo-500
              font-medium
              
            "
          >
            Verify

            <ExternalLink
              size={18}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;