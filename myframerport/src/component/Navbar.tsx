import { useState } from "react"
import {LINKS} from '../constants'
import { LuSquareMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5"
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
  return (
 <nav className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg">
            <div className="text-white font-semibold text-lg uppercase">
                SmartDev
            </div>
            <div className="hidden md:flex space-x-5">
            {LINKS.map((link, index)=>(
               <a href={link.href} key={index} className="text-white text-2xl hover:text-stone-400 transition duration-300
               ">{link.label}</a>
            ))}
            </div>
            <div className="md:hidden">
                <button onClick={()=>setMenuOpen(!menuOpen)}>
               {menuOpen ? <IoClose size={32} />: <LuSquareMenu size={32}  /> }   
               </button> 

               <div className="">
                {menuOpen && (
                    <div className="bg-stone-950/30 md:hidden space-y-4  w-full backdrop-blur-lg p-4 shadow-md absolute top-14 left-0 rounded-xl flex-col max-w-6xl mx-auto flex ">

                        {LINKS.map((link, index)=>(
                            <a href={link.href} key={index} className="text-white hover:text-stone-400 transition duration-300">{link.label}</a>
                        ))}
                    </div>
                )}
                </div>            
            </div>
        </div>
 </nav>
  )
}

export default Navbar
