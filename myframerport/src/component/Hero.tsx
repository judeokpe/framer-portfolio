import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import jude from '../assets/jude.jpg'
import resume from '../public/resume.pdf'
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariant = {
  hidden: { clipPath: "inset(0 50% 0 50%" },
  visible: {
    clipPath: "inset(0 0% 0 0%",
    transition: { duration: 2.0, ease: "easeInOut" },
  },
};
const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row justify-center text-white">
      <motion.div
        className="w-full md:w-1/2 p-8"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <motion.h1
          className="text-2xl md:text-3xl lg:text-5xl my-14"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          {HERO_CONTENT.greeting}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-4xl md-4"
          variants={textVariant}
        >
          {HERO_CONTENT.description}
        </motion.p>
        <motion.a className='bg-slate-50 text-stone-500 p-3 lg:p-4  mt-4 inline-block rounded-xl'
        href = {resume}
        download ='resume.pdf'
    
        variants = {textVariant}
        >
          {HERO_CONTENT.resumeLinkText}
        </motion.a>

       
      </motion.div>
      <motion.div className='w-full md:w-1/2 p-8'
        initial = 'hidden'
        animate = 'visible'
        variants = {imageVariant}
        >
          <img src={jude} alt='jason root' width={550} height={550}  className="rounded-md"/>
        </motion.div>
    </section>
  );
};

export default Hero;
