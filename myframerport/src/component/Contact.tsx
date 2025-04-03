import { CONTACT_CONTENT } from "../constants";
import { motion } from "framer-motion";
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay,
    },
  }),
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay,
    },
  }),
};
const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center px-4 md:px-10"
    >
      <h2 className="text-4xl md:text-6xl font-bold-tracking-tight mb-4">
        Contact US
      </h2>
      <div className="h-1 w-20 bg-white mb-10" />

      <motion.h3
        className="text-4xl md:text-6xl leading-none"
        initial="hidden"
        whileInView="visible"
        custom={0.4}
        varaints={textVariant}
      >
        {CONTACT_CONTENT.headline}
      </motion.h3>

      <motion.p
        className="text-lg md:text-2xl mt-6 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        varaints={textVariant}
      ></motion.p>

      <motion.a
        href={"mailto:${CONTACT_CONTENT.email}"}
        className="text-2xl md:text-3xl font-medium mt-8"
        initial="hidden"
        whileInView="visible"
        custom={0.8}
        varaints={textVariant}
      >
        {CONTACT_CONTENT.email}
      </motion.a>
      <div className="flex space-x-6 mt-6">
      {CONTACT_CONTENT.socialLinks.map(({ url, icon: Icon, ariaLabel }, index) => (
  <motion.a
    key={index}
    href={url}
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
    initial="hidden"
    whileInView="visible"
    custom={index * 0.2}
    variants={iconVariant}
    className="text-white text-3xl hover:text-gray-400 transition"
  >
    <Icon />
  </motion.a>
))}

      </div>
    </section>
  );
};

export default Contact;
