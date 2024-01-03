import React from 'react'
import logo from '/juice-assets/Logo.png'
import { IoCall } from 'react-icons/io5'
import { FiMail } from 'react-icons/fi'
import {FiFacebook, FiTwitter} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {CiYoutube} from 'react-icons/ci'
import { motion } from 'framer-motion'
const Footer = () => {
    const container = {
        show:{
          transition:{
            staggerChildren:0.2
          }
        }
      }
      const childc = {
        hidden: {y:100,opacity:0},
        show:{
          y:0,
          opacity:1,
          transition:{
            duration:1,
            ease:'easeInOut',
          }
        }
      }
      const childl = {
        hidden: {x:-100,opacity:0},
        show:{
          x:0,
          opacity:1,
          transition:{
            duration:1,
            ease:'easeInOut',
          }
        }
      }
      const childr = {
        hidden: {x:100,opacity:0},
        show:{
          x:0,
          opacity:1,
          transition:{
            duration:1,
            ease:'easeInOut',
          }
        }
      }
  return (
    <footer className='px-6 mt-36 py-4 md:px-[4.4rem] md:py-0 2xl:max-w-[1700px] 2xl:mx-auto'>
        <motion.div className='grid md:grid-cols-3 gap-x-20'
        initial={"hidden"}
        exit="exit"
        variants={container}
        whileInView={"show"}
        viewport={{once : false}}
        >
            <motion.div
            initial={"hidden"}
            exit="exit"
            variants={childl}
            whileInView={"show"}
            viewport={{once : false}}
            >
                <h1 className='text-[#473525E5] text-5xl font-bold'>Contact Us</h1>
                <p className='text-[#000000A6] mt-3 text-[18px] font-semibold'>Send us a message</p>
                <input type='text' placeholder='Full name' className='w-full mt-8 px-2 py-2 rounded-md bg-[#FFFFFF] outline-none'/>
                <input type='email' placeholder='Your email' className='w-full mt-4 px-2 py-2 rounded-md bg-[#FFFFFF] outline-none'/>
                <textarea placeholder='Your Message...' className='px-3 py-2 h-32 mt-3 rounded-md w-full'/>
                <button className='px-10 py-[0.5rem] rounded-md bg-[#FFA500] mt-3 font-semibold'>
                    Submit
                </button>
            </motion.div>
            <motion.div
            initial={"hidden"}
            exit="exit"
            variants={childc}
            whileInView={"show"}
            viewport={{once : false}}
            >
                <h1 className='text-[#473525E5] text-5xl font-bold'>Sitemap</h1>
                <p className='text-[#000000A6] mt-3 text-[18px] font-semibold'>All our pages</p>

                <ul className='mt-8 text-[#3A2818] leading-[48px] text-xl font-semibold'>
                    <li>- Home</li>
                    <li>- About Us</li>
                    <li>- Services</li>
                    <li>- Blog</li>
                    <li>- Contact Us</li>
                </ul>
            </motion.div>
            <motion.div className='text-[#3A2818]'
            initial={"hidden"}
            exit="exit"
            variants={childr}
            whileInView={"show"}
            viewport={{once : false}}
            >
                <img src={logo} alt=''/>
                <p className='text-xl flex items-center gap-x-3'>
                <IoCall className='rotate-180'/> (08) 400 2000
                </p>
                <p className='mt-6 text-xl flex gap-x-3 items-center'>
                  <FiMail/> <span className='-mt-1'>xyz@gmail.com</span>
                </p>
            </motion.div>
          
        </motion.div>
        <div className='mt-16 flex flex-col md:flex-row items-center gap-x-24 pb-4'>
        <div className='flex gap-x-10 items-center mb-4 md:mb-0'>
          <a href='https://facebook.com'>
            <div className='flex flex-col text-[#FFFFFF] items-center justify-center w-10 h-10 rounded-full bg-[#FF9900] transition-all duration-700 ease-in-out hover:bg-[#FF9900] hover:text-[#FFFFFF]'><FiFacebook/></div>
          </a>
          <a href='https://instagram.com'>
            <div className='flex flex-col text-[black] items-center justify-center w-10 h-10 rounded-full bg-[#EDFFEF] transition-all duration-700 ease-in-out hover:bg-[#FF9900]  hover:text-[#FFFFFF]'><FaInstagram/></div>
          </a>
          <a href='https://twitter.com'>
            <div className='flex flex-col text-[black] items-center justify-center w-10 h-10 rounded-full bg-[#EDFFEF] transition-all duration-700 ease-in-out hover:bg-[#FF9900] hover:text-[#FFFFFF]'><FiTwitter/></div>
          </a>
          <a href='https://youtube.com'>
            <div className='flex flex-col text-[black] items-center justify-center w-10 h-10 rounded-full bg-[#EDFFEF] transition-all duration-700 ease-in-out hover:bg-[#FF9900] hover:text-[#FFFFFF]'><CiYoutube/></div>
          </a>
        </div>
        <p>
        Copyright &copy; 2023 Dscode | All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer