import React from 'react'
import mango from '/juice-assets/MANGO.png'
import raspberyy from '/juice-assets/raspberyy.png'
import kiwi from '/juice-assets/kiwi.png'
import { TiHeartOutline } from 'react-icons/ti'
import { motion } from 'framer-motion'
const Menu = () => {
    const container = {
        show:{
          transition:{
            staggerChildren:0.5
          }
        }
      }
      const child = {
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
  return (
    <motion.section className='px-6 mt-20 py-4 md:px-[4.4rem] md:py-0 2xl:max-w-[1700px] 2xl:mx-auto'
    initial={"hidden"}
    exit="exit"
    variants={container}
    whileInView={"show"}
    viewport={{once : false}}
    >
        <motion.div
        
        >
            <h1 className='text-5xl text-[#473525E5] leading-[54px] font-bold'>Explore best <br/>menu selections</h1> 
            <motion.div className='mt-10 grid grid-cols-3 gap-x-20'
            initial={"hidden"}
            exit="exit"
            variants={child}
            whileInView={"show"}
            viewport={{once : false}}
            >
               <div className='relative shadow-md shadow-[gray] px-5 py-3 flex flex-col rounded-[26px] bg-gradient-to-b from-[#FFE2C8] to-[#FEBA44]'>
                    <img src={mango} alt='mango' width={220} className='flex mx-auto h-[220px]'/>
                    <div>
                        <h2 className='text-[#473525E5] font-bold text-xl'>Mango Bliss Burst</h2>
                        <p className='text-sm text-[#555555]'>Description of the item</p>

                        <p className='mt-4 pb-5 text-[#FF3D00] text-[11px] font-bold '>$<span className='text-[16px] text-[#473525E5] font-bold'>10</span> </p>
                    </div>
                    <div className='absolute top-0 rounded-tr-[26px] rounded-bl-[26px] right-0 bg-[#FF9900] text-[#FFFFFF] px-5 py-3'>
                        <TiHeartOutline size={24}/>
                    </div>
                </div>
                <div className='relative shadow-md shadow-[gray] px-5 py-3 flex flex-col rounded-[26px] bg-gradient-to-b from-[#FFE2C8] to-[#FEBA44]'>
                    <img src={kiwi} alt='kiwi' width={220} className='h-[220px] object-contain flex mx-auto'/>
                    <div>
                        <h2 className='text-[#473525E5] font-bold text-xl'>Pure Kiwi Joy</h2>
                        <p className='text-sm text-[#555555]'>Description of the item</p>

                        <p className='mt-4 pb-5 text-[#FF3D00] text-[11px] font-bold '>$<span className='text-[16px] text-[#473525E5] font-bold'>8</span> </p>
                    </div>
                    <div className='absolute top-0 rounded-tr-[26px] rounded-bl-[26px] right-0 bg-[#FF9900] text-[#FFFFFF] px-5 py-3'>
                        <TiHeartOutline size={24}/>
                    </div>
                </div>
                <div className='relative shadow-md shadow-[gray] px-5 py-3 flex flex-col rounded-[26px] bg-gradient-to-b from-[#FFE2C8] to-[#FEBA44]'>
                    <img src={raspberyy} alt='raspberry' width={220} className='flex mx-auto h-[220px]'/>
                    <div>
                        <h2 className='text-[#473525E5] font-bold text-xl'>Berry Burst Bliss</h2>
                        <p className='text-sm text-[#555555]'>Description of the item</p>

                        <p className='mt-4 pb-5 text-[#FF3D00] text-[11px] font-bold '>$<span className='text-[16px] text-[#473525E5] font-bold'>11</span> </p>
                    </div>
                    <div className='absolute top-0 rounded-tr-[26px] rounded-bl-[26px] right-0 bg-[#FF9900] text-[#FFFFFF] px-5 py-3'>
                        <TiHeartOutline size={24}/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default Menu