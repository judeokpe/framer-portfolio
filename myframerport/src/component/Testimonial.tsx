import { motion } from "framer-motion";
import { TESTIMONIALS } from "../constants";
const childrenVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.7,
    },
  }),
};
const Testimonial = () => {
  return (
    <section id="testimonials" className="px-6 py-10 min-h-screen ">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        What People are Saying!
      </h1>
      <div className="h-1 w-20 bg-white mb-10 " />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-3 gap-4">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/30"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={childrenVariant}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
                loading="lazy"
              />
              <div className="">
                <h2 className="text-lg font-bold">{testimonial.name}</h2>
                <p className="text-sm font-medium ">{testimonial.title}</p>
              </div>
            </div>
            <p className="leading-relaxed">{testimonial.feedback}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
