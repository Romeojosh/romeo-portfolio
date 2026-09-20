import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Code2, Mail, MapPin, UserRound } from "lucide-react";
import { TextScramble } from "../components/effects/TextScramble";

const CONTACT_EMAIL = "romeojoshrequiron@gmail.com";
const GITHUB_URL = "https://github.com/Romeojosh";
const LINKEDIN_URL = "https://www.linkedin.com/in/romeojosh/";

const contactDetails = [
  {
    label: "EMAIL",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GITHUB",
    value: "github.com/Romeojosh",
    href: GITHUB_URL,
    icon: Code2,
    external: true,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/romeojosh/",
    href: LINKEDIN_URL,
    icon: UserRound,
    external: true,
  },
  {
    label: "LOCATION",
    value: "Iloilo City, Philippines",
    icon: MapPin,
    external: false,
  },
];

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const transition = {
    duration: shouldReduceMotion ? 0 : 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      id="contact"
      aria-label="Initiate connection"
      className="relative overflow-hidden border-t border-[rgba(255,255,255,0.08)] bg-[#111214] px-4 py-20 scroll-mt-24 sm:px-6 sm:py-24 md:scroll-mt-28 md:py-32 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/4 h-[32rem] w-[32rem] rounded-full bg-[#E69A3A]/[0.07] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#A86F2C]/[0.06] blur-[150px]"
      />

      <div className="portfolio-container relative z-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-12 flex items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-5 text-xs font-mono uppercase tracking-[0.18em] sm:mb-16"
        >
          <span className="text-[#E69A3A]">[ 05 ]</span>
          <span className="h-px w-8 bg-[#E69A3A]/60" aria-hidden="true" />
          <TextScramble text="Initiate Connection" trigger="view" className="text-[#74787F]" />
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.08 }}
            >
              <h2 className="m-0 max-w-3xl font-display text-[clamp(3rem,7vw,6.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.055em] text-[#F3F2EE]">
                <span className="block">LET&apos;S BUILD</span>
                <span className="text-gradient-amber-lemon block">SOMETHING.</span>
              </h2>
            </motion.div>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.16 }}
              className="mt-8 max-w-2xl text-base leading-[1.8] text-[#A6A8AD] sm:text-lg"
            >
              Open to collaborations, student projects, opportunities, or just a good conversation. If you&apos;d like to work together or talk about technology, running, or something worth building, feel free to reach out.
            </motion.p>

            <motion.a
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.28 }}
              href={`mailto:${CONTACT_EMAIL}`}
              data-cursor="link"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#E69A3A] px-6 py-3.5 font-display text-sm font-bold tracking-wide text-[#111214] shadow-[0_0_25px_rgba(230,154,58,0.2)] transition-all duration-200 hover:bg-[#F6B85F] hover:shadow-[0_0_35px_rgba(246,184,95,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E69A3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111214] sm:px-7"
              aria-label="Start a conversation by email"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </motion.a>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <div className="border-t border-[rgba(255,255,255,0.08)]">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                const content = (
                  <>
                    <Icon className="h-4 w-4 shrink-0 text-[#A86F2C]" aria-hidden="true" />
                    <span className="w-24 shrink-0 text-[10px] font-mono tracking-[0.16em] text-[#74787F]">
                      {detail.label}
                    </span>
                    <span className="min-w-0 break-all text-sm text-[#F3F2EE] sm:text-base">
                      {detail.value}
                    </span>
                    {detail.href && <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#E69A3A]" aria-hidden="true" />}
                  </>
                );

                return (
                  <motion.div
                    key={detail.label}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.12 + index * 0.06 }}
                    className="flex min-w-0 items-center gap-3 border-b border-[rgba(255,255,255,0.08)] py-5"
                  >
                    {detail.href ? (
                      <a
                        href={detail.href}
                        data-cursor="link"
                        {...(detail.external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="flex min-w-0 flex-1 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E69A3A]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex min-w-0 flex-1 items-center gap-3">{content}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.4 }}
              className="mt-12 border-l-2 border-[#A86F2C] pl-5"
            >
              <span className="flex items-center gap-2 text-sm font-display font-semibold uppercase tracking-[0.12em] text-[#F3F2EE]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E69A3A]" aria-hidden="true" />
                Romeo Josh C. Requiron
              </span>
              <span className="mt-2 block text-xs font-mono uppercase tracking-[0.14em] text-[#74787F]">
                Developer • Student • Athlete
              </span>
            </motion.div>

            <p className="mt-12 text-xs font-mono uppercase tracking-[0.2em] text-[#A86F2C]">
              Code. Run. Repeat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
