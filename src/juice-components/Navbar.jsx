import React from 'react'
import logo from '/juice-assets/Logo.png'
import { motion } from 'framer-motion'
const Navbar = () => {
    const container = {
        show:{
          transition:{
            staggerChildren:0.2
          }
        }
      }
      const child = {
        hidden: {y:-100,opacity:0},
        show:{
          y:0,
          opacity:1,
          transition:{
            duration:1,
            ease:'easeInOut',
          }
        }
      }
  return (
    <motion.header className='px-6 py-4 md:px-[3.3rem] md:py-0 2xl:max-w-[1700px] 2xl:mx-auto'>
        <motion.nav className='flex justify-between items-center'
        initial={"hidden"}
        exit="exit"
        variants={child}
        whileInView={"show"}
        viewport={{once : false}}
        >
            <img src={logo} alt='logo' width={165}/>
            <ul className='flex items-center mr-16 md:text-[20px] gap-x-10 font-bold text-[#000000] '>
                <li>Home</li>
                <li>Features</li>
                <li>Menu</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
            <button className='px-6 py-2 mr-16 font-bold text-[#000000] rounded-[5px] border-2 border-[#000000]'>
                Sign Up
            </button>
        </motion.nav>
    </motion.header>
  )
}

export default Navbar