"use client"
import {motion} from "framer-motion";

const page = () => {
  return (
    <motion.div className="h-full" initial={{y:"-140vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="grid md:grid-cols-2 xl:grid-cols-3 h-full w-full gap-4 px-4 py-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 max-w-[1920px] mx-auto lg:h-full">
      <div className="p-4 bg-teal-500">1</div>
      <div className="p-4 bg-teal-500">2</div>
      <div className="p-4 bg-teal-500">3</div>
      <div className="p-4 bg-teal-500">4</div>
      <div className="p-4 bg-teal-500">5</div>
      <div className="p-4 bg-teal-500">6</div>
      
    </div>
    </motion.div>
  )
}

export default page