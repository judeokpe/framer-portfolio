import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const projectVariant = {
  hidden: { opacity: 0, y: 40, rotate: -50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 },
  },
};
const Projects = () => {
  return (
    <section id="work" className="px-5 py-10">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-2">
        Work
      </h1>

      <div className="h-1 w-20 mb-8 bg-white"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      {PROJECTS.map((project, index) => (
        <motion.div 
        key={index}
          className="relative rounded-lg overflow-hidden h-[400px] transition group transform "
          initial="hidden"
          whileInView="visible"
          variants={projectVariant}
          viewport={{once:true}}
        >
                <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"/>

                <div className="relative hidden group-hover:flex z-30 p-6 flex-col justify-between h-full group-hover:bg-black group-hover:opacity-80 text-white">
                <h2 className="text-2xl font-medium mb-4">
                    {project.name}
                </h2>
                <p className="mb-4 flex-grow text-2xl">{project.description}</p>

                <a href={project.link} className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center font-bold ">
                    View On Github
                </a>
                </div>
        </motion.div>
      ))}
      </div>
    </section>
  );
};

export default Projects;
