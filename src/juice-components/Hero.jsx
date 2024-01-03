import React from 'react'
import orange from '/juice-assets/orange.png'
import { motion } from 'framer-motion'
const Hero = () => {
    const container = {
        show:{
          transition:{
            staggerChildren:0.2
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
    <section className='px-6 mt-16 py-4 md:px-[4.4rem] md:py-0 2xl:max-w-[1700px] 2xl:mx-auto'>
       <motion.div className='flex justify-between items-center'
       initial={"hidden"}
       exit="exit"
       variants={child}
       whileInView={"show"}
       viewport={{once : false}}
       >
       <div>
            <h1 className='text-6xl text-[#473525E5] font-bold leading-[68px]'>
            Revitalize Your Routine, 
            <br/>Fresh, Fruity, Fantastic!
            </h1>
            <p className='mt-4 leading-[34px] text-[18px]'>
            "Savor the Symphony of Flavors, with Nature's Sweetness & deliciousness.
            <br/>Get the best variety of juices here!”
            </p>
            <div className='mt-5 flex gap-x-5 items-center'>
                <button className='px-4 py-3 text-[#FFFFFF] rounded-[5px] bg-[#473525C7]'>View Menu</button>
                <button className='px-4 py-[10px] font-bold text-[#473525C7] rounded-[5px] border-2 border-[#473525C7]'>Discount</button>
            </div>
        </div>
        <div>
            <img src={orange} alt='' width={420}/>
        </div>
       </motion.div>
    </section>
  )
}

export default Hero