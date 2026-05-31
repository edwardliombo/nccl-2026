import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX, BsList } from "react-icons/bs";
import { motion } from 'framer-motion';
import Logo from '../assets/logo.webp'

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const socialIcons = [FaFacebook, BsTwitterX, FaInstagramSquare, FaLinkedin];
    const links = ["https://www.facebook.com/profile.php?id=61590284373595", "https://x.com/ConsultNear", "https://www.instagram.com/nccl_consult?igsh=bm94aTJ4a215NTEw", "https://www.linkedin.com/in/near-consult-bb8281409?utm_source=share_via&utm_content=profile&utm_medium=member_android"];

    const togglerHandler = () => {
        setToggle(!toggle); 
    }


    
    return(
        <>
        <section className='flex bg-blue-950 justify-between p-2 items-center '>
                <h1 className='text-sm font-bold text-white px-8 max-sm:px-2 max-sm:text-sm'>Near Consult & Co.Ltd</h1>
                <div className="flex justify-end items-center ">
                    {
                        socialIcons.map((Icon, index) => (
                            <a className="text-white border-l px-4 max-sm:px-2 max-sm:text-sm hover:text-amber-400 text-center border-white" href={links[index]} target="_blank" rel="noopener noreferrer" key={index}>
                                <Icon />
                            </a>
                        ))
                    }

                </div>
            </section>
            <header className="grid md:grid-cols-2 sm:grid-cols-1  shadow-md">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeInOut" }}
                className='flex items-center max-sm:justify-between gap-6 max-sm:text-blue-950 p-4 px-8'>
                    <img className=' w-20 max-sm:25' src={Logo} alt='logo' />
                    <BsList onClick={togglerHandler} className='text-blue-950 md:hidden text-5xl cursor-pointer hover:text-red-600' />
                </motion.div>

                {toggle && (
                    <ul className="grid md:grid-cols-6 md:hidden max-sm:transition-all max-sm:duration-300 items-center max-sm:text-lg text-blue-950 justify-center max-sm:bg-blue-950 text-center max-sm:text-left max-sm:place-items-start max-sm:text-neutral-400 max-sm:p-8  max-sm:justify-start">
                        <li className="hover:bg-amber-400 hover:font-bold pl-2 w-24 text-white  hover:p-1 cursor-pointer"><Link to="/">Home</Link></li>
                        <li className="hover:bg-amber-400 text-white  hover:font-bold pl-2 w-24 hover:p-1 cursor-pointer"><Link to="/about">About</Link></li>
                        <li className="hover:bg-amber-400 text-white  hover:font-bold pl-2 w-24 hover:p-1 cursor-pointer"><Link to="/experience">Experience</Link></li>
                        <li className="hover:bg-amber-400 hover:font-bold pl-2 w-24 text-white  hover:p-1 cursor-pointer"><Link to="/team">Team</Link></li>
                        <li className="hover:bg-amber-400 text-white  hover:font-bold pl-2 w-24 hover:p-1 cursor-pointer"><Link to="/project">Project</Link></li>
                        <li className="hover:bg-amber-400 hover:font-bold pl-2 w-24 text-white  hover:p-1 cursor-pointer"><Link to="/contact">Contact</Link></li>
                    </ul>
                )}

                <ul className=" grid md:grid-cols-6 max-sm:hidden  max-sm:transition-all max-sm:duration-300 items-center max-sm:text-lg text-blue-950 justify-center max-sm:bg-blue-950 text-center max-sm:text-left max-sm:place-items-start max-sm:text-neutral-400 max-sm:p-8  max-sm:justify-start">
                        <li className="hover:bg-amber-400 hover:font-bold pl-2 w-24 md:text-blue-950  hover:p-1 cursor-pointer"><Link to="/">Home</Link></li>
                        <li className="hover:bg-amber-400 md:text-blue-950  hover:font-bold pl-2 w-24 hover:p-1 cursor-pointer"><Link to="/about">About</Link></li>
                        <li className="hover:bg-amber-400 md:text-blue-950  hover:font-bold pl-2 w-24 hover:p-1 cursor-pointer"><Link to="/experience">Experience</Link></li>
                        <li className="hover:bg-amber-400 hover:font-bold pl-2 w-24 md:text-blue-950  hover:p-1 cursor-pointer"><Link to="/team">Team</Link></li>
                        <li className="hover:bg-amber-400 md:text-blue-950  hover:font-bold pl-2 w-24 hover:p-1 cursor-pointer"><Link to="/project">Project</Link></li>
                        <li className="hover:bg-amber-400 hover:font-bold pl-2 w-24 md:text-blue-950  hover:p-1 cursor-pointer"><Link to="/contact">Contact</Link></li>
                    </ul>

               
            </header>  
            </>  
    )
}

export default Header;