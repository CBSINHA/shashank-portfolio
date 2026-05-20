import {
  Mail,
  ExternalLink,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import Section from "../components/layout/Section";

import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
import BackgroundGrid from "../components/ui/BackgroundGrid";

const HeroSection = () => {
  return (
    <Section className="pt-16 md:pt-24">
      <BackgroundGrid />
      <div
        className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* LEFT SIDE */}

        <div>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              font-medium
              text-indigo-500
              mb-6
            "
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
              tracking-tight
            "
            style={{
              fontFamily:
                "Sora, sans-serif",
            }}
          >
            Shashank{" "}
            <span
              className="
                bg-gradient-to-r
                from-indigo-500
                to-violet-500
                bg-clip-text
                text-transparent
              "
            >
              Sinha
            </span>
          </motion.h1>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mt-6
              text-2xl
              md:text-3xl
              font-semibold
              h-16
            "
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,

                "Java Backend Developer",
                2000,

                "React Developer",
                2000,

                "Unity Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              mt-6
              text-lg
              leading-relaxed
              max-w-2xl
              text-slate-600
              dark:text-slate-400
            "
          >
            Passionate software developer
            focused on building scalable
            full stack applications,
            interactive experiences, and
            polished digital products with
            modern technologies.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >
            <PrimaryButton href="#projects">
              View Projects
            </PrimaryButton>

            <SecondaryButton href="https://drive.google.com/drive/folders/13X4kUfNrGw41LrPWrhpiEG_tQgL6SEfl?usp=sharing">
              Resume
            </SecondaryButton>
          </motion.div>

          {/* SOCIALS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
className="
  mt-10
  flex
  items-center
  gap-4
"
          >
            <a
  className="
    w-11
    h-11
    rounded-full
    border
    flex
    items-center
    justify-center
    backdrop-blur-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
  "
  style={{
    background: "var(--card)",
    borderColor: "var(--border)",
  }}
              href="https://github.com/CBSINHA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={22} />
            </a>

            <a
  className="
    w-11
    h-11
    rounded-full
    border
    flex
    items-center
    justify-center
    backdrop-blur-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
  "
  style={{
    background: "var(--card)",
    borderColor: "var(--border)",
  }}
              href="https://www.linkedin.com/in/cbsinha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={22} />
            </a>

            <a
  className="
    w-11
    h-11
    rounded-full
    border
    flex
    items-center
    justify-center
    backdrop-blur-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
  "
  style={{
    background: "var(--card)",
    borderColor: "var(--border)",
  }}
              href="mailto:shashanksinha590@gmail.com"
            >
              <Mail size={22} />
            </a>

            <a
  className="
    w-11
    h-11
    rounded-full
    border
    flex
    items-center
    justify-center
    backdrop-blur-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
  "
  style={{
    background: "var(--card)",
    borderColor: "var(--border)",
  }}
              href="https://leetcode.com/u/CBSINHA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode size={22} />
            </a>

            <a
  className="
    w-11
    h-11
    rounded-full
    border
    flex
    items-center
    justify-center
    backdrop-blur-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
  "
  style={{
    background: "var(--card)",
    borderColor: "var(--border)",
  }}
              href="https://cbsinha.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={22} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            flex
            justify-center
          "
        >
          {/* GLOW */}

          <div
            className="
              absolute
              w-72
              h-72
              rounded-full
              blur-3xl
              opacity-30
              bg-gradient-to-r
              from-indigo-500
              to-violet-500
            "
          />

          {/* IMAGE CARD */}

          <div
            className="
              relative
              w-[320px]
              h-[420px]
              rounded-[2rem]
              border
              overflow-hidden
              backdrop-blur-xl
              shadow-2xl
            "
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="
                w-full
                h-full
                flex
                items-center
                justify-center
                text-center
                text-slate-500
                p-6
              "
            >
              Add your portrait image here
            </div>
          </div>

          {/* FLOATING CARD 1 */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            hover:scale-105
transition-all
duration-300
              absolute
              top-10
              -left-8
              px-5
              py-4
              rounded-2xl
              border
              backdrop-blur-xl
              shadow-xl
            "
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            Backend Engineering
          </motion.div>

          {/* FLOATING CARD 2 */}

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            hover:scale-105
transition-all
duration-300
              absolute
              bottom-10
              -right-8
              px-5
              py-4
              rounded-2xl
              border
              backdrop-blur-xl
              shadow-xl
            "
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            Modern Frontend
          </motion.div>
        </motion.div>
      </div>
      <motion.div
  animate={{
    y: [0, 10, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="
    absolute
    bottom-6
    left-1/2
    -translate-x-1/2
    hidden
    md:flex
    flex-col
    items-center
    text-sm
    text-slate-500
  "
>
  <span>Scroll</span>

  <div
    className="
      mt-2
      w-[2px]
      h-10
      rounded-full
      bg-gradient-to-b
      from-indigo-500
      to-transparent
    "
  />
</motion.div>
    </Section>
  );
};

export default HeroSection;