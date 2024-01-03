import React from 'react'
import pineapple from '/juice-assets/Pineapple.png'
import grape from '/juice-assets/Grapes.png'
import { motion } from 'framer-motion'

const WhyUs = () => {
    const container = {
        hidden: {opacity:0},
        show:{
          opacity:1,
          transition:{
            staggerDirection: 0.5,
            delayChildren:1,
          }
        }
      }
      const child = {
        hidden: {x:100,opacity:0, scale:0.1},
        show:{
          x:[0],
          opacity:1,
          scale:[0.2,0.3,0.5,1],
          rotate:[0,0,270,270,0],
          transition:{
            duration:1.6,
            ease:'easeInOut',
          }
        }
      }
      const childs = {
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
  return (
    <section className='px-6 mt-20 py-4 md:px-[4.4rem] md:py-0 2xl:max-w-[1700px] 2xl:mx-auto'>
       <div className='grid grid-cols-4'>
            <motion.div className='col-span-1'
                  initial={"hidden"}
                  exit="exit"
                  variants={childs}
                  whileInView={"show"}
                  viewport={{once : false}}
            
            >
                <h1 className='text-[#473525E5] font-bold text-5xl leading-[56px]'> Why we <br/> are better <br/> than others</h1>
                <p className='text-[#473525E5] text-[18px] leading-[28px] mt-3 max-w-[14rem]'>
                Our commitment to excellence in the realm of juices sets us apart from the competition.
                </p>
            </motion.div>
            <motion.div className='col-span-3 gap-x-10 grid grid-cols-3'
                initial={"hidden"}
                exit="exit"
                variants={container}
                whileInView={"show"}
                viewport={{once : false}}
            >
                <motion.div className='col-span-1 px-5 py-3 flex flex-col justify-center items-center rounded-[26px] bg-gradient-to-b from-[#FFE2C8] to-[#FEBA44]'
                 initial={"hidden"}
                 exit="exit"
                 variants={child}
                 whileInView={"show"}
                 viewport={{once : false}}
                >
                    <img src={pineapple} alt=''/>
                </motion.div>
                <motion.div className='col-span-1 px-5 py-3  mt-16 -mb-10  flex flex-col justify-center items-center rounded-[26px] bg-gradient-to-b from-[#FFE2C8] to-[#FEBA44]'
                initial={"hidden"}
                exit="exit"
                variants={child}
                whileInView={"show"}
                viewport={{once : false}}
                >
                    <img src={grape} alt=''/>
                </motion.div>
                <motion.div className='col-span-1 px-5 py-3 flex flex-col justify-center items-center rounded-[26px] bg-gradient-to-b from-[#FFE2C8] to-[#FEBA44]'
                initial={"hidden"}
                exit="exit"
                variants={child}
                whileInView={"show"}
                viewport={{once : false}}
                >
                    <img src={pineapple} alt=''/>
                </motion.div>
               
            </motion.div>
       </div>
    </section>
  )
}

export default WhyUs