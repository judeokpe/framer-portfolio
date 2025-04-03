import {motion} from 'framer-motion'
import { EXPERIENCES } from '../constants'

const ContainerVariants = {
    hidden: {opacity: 0, y:70},
    visible: {
        opacity: 1, y:0,
        transition: {
            duration: 1.0, 
            ease: 'easeOut',
            staggerChildren: 0.4
        }
    }
}
const childrenVariant = {
    hidden: {opacity: 0, x:50},
    visible:{
        opacity:1,
        x:0,
        
        transition:{
            duration:0.8,
            ease: 'easeOut'
        }
    }
}
const Experience = () => {
  return (
   <section className="px-5 py-10 " id='experience'>
    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        Work Experieince
    </h2>
    <div className='h-1 w-20 mb-10 bg-white' />

    <motion.div className='space-y-10'
    initial ='hidden'
    whileInView='visible'
    viewport={{once:true, amount:0.3}}
    variants={ContainerVariants}
    >
        {EXPERIENCES.map((experience, index)=>(
            <motion.div key={index} 
            variants = {childrenVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}

            >
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div className="text-sm md:w-1/4 mb-2 md:mb-0 p-4">
                    {experience.yearRange}
                    </div>
                    <div className="md:w-3/4 mb:10">
                    <div className="max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/30 rounded-lg">
                        <h2 className="text-xl mb-2 italic">{experience.title}</h2>
                        <p className="text-sm italic">{experience.location}</p>

                        <ul className="list-disc list-outside space-y-2 px-6">
                        {experience.description.map((desc, index)=>(
                            <li key={index}>
                                {desc}
                            </li>
                        ))}


                        </ul>
                    </div>
                    </div>
                </div>
            </motion.div>
        ))}
    </motion.div>
   </section>
  )
}

export default Experience
