import { useState } from "react";

import emailjs from "@emailjs/browser";

import toast from "react-hot-toast";

import { motion } from "framer-motion";

import {
  Mail,
  Send,
} from "lucide-react";

import Section from "../components/layout/Section";

import SectionTitle from "../components/ui/SectionTitle";

const ContactSection = () => {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:
            formData.name,

          from_email:
            formData.email,

          message:
            formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(
        "Message sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        "Failed to send message."
      );

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <SectionTitle
        eyebrow="Contact"
        title="Let’s build something meaningful together."
        description="Whether it’s a collaboration, internship opportunity, project discussion, or just a conversation about development and technology."
      />

      <div
        className="
          grid
          lg:grid-cols-2
          gap-10
          items-start
        "
      >
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            rounded-[2rem]
            border
            p-8
            backdrop-blur-xl
          "
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="
              w-16
              h-16
              rounded-2xl
              flex
              items-center
              justify-center
              bg-indigo-500/10
              text-indigo-500
            "
          >
            <Mail size={30} />
          </div>

          <h3
            className="
              mt-8
              text-3xl
              font-bold
            "
            style={{
              fontFamily:
                "Sora, sans-serif",
            }}
          >
            Let’s connect
          </h3>

          <p
            className="
              mt-5
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
          >
            Open to internships,
            development opportunities,
            collaborations, and software
            engineering discussions.
          </p>

          <div className="mt-10 space-y-4">
            <div>
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Email
              </p>

              <p className="font-medium">
                shashanksinha590@gmail.com
              </p>
            </div>

            <div>
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Location
              </p>

              <p className="font-medium">
                Punjab, India
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.form
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          onSubmit={handleSubmit}
          className="
            rounded-[2rem]
            border
            p-8
            backdrop-blur-xl
            space-y-6
          "
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          {/* NAME */}

          <div>
            <label
              className="
                block
                mb-3
                font-medium
              "
            >
              Name
            </label>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="
              focus:border-indigo-500
focus:ring-2
focus:ring-indigo-500/20
                w-full
                px-5
                py-4
                rounded-2xl
                border
                outline-none
                transition-all
                duration-300
              "
              style={{
                background:
                  "transparent",
                borderColor:
                  "var(--border)",
              }}
            />
          </div>

          {/* EMAIL */}

          <div>
            <label
              className="
                block
                mb-3
                font-medium
              "
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="
              focus:border-indigo-500
focus:ring-2
focus:ring-indigo-500/20
                w-full
                px-5
                py-4
                rounded-2xl
                border
                outline-none
                transition-all
                duration-300
              "
              style={{
                background:
                  "transparent",
                borderColor:
                  "var(--border)",
              }}
            />
          </div>

          {/* MESSAGE */}

          <div>
            <label
              className="
                block
                mb-3
                font-medium
              "
            >
              Message
            </label>

            <textarea
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="
              focus:border-indigo-500
focus:ring-2
focus:ring-indigo-500/20
                w-full
                px-5
                py-4
                rounded-2xl
                border
                outline-none
                resize-none
                transition-all
                duration-300
              "
              style={{
                background:
                  "transparent",
                borderColor:
                  "var(--border)",
              }}
            />
          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="
              inline-flex
              items-center
              gap-2
              px-8
              py-4
              rounded-2xl
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
              disabled:opacity-70
              bg-gradient-to-r
              from-indigo-500
              to-violet-500
            "
          >
            {loading
              ? "Sending..."
              : "Send Message"}

            <Send size={18} />
          </button>
        </motion.form>
      </div>
    </Section>
  );
};

export default ContactSection;