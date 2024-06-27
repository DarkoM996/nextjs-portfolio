"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    // The supposed fix works 60% of the time. So its debatable whether to even have left to work (need to be set with wait). Probably should disable it with initial={false}
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen">
        <motion.div
          className="h-screen w-screen fixed bg-black z-40"
          initial="false"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 left-0 right-0 bottom-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        {/* Spacing between navbar and rest of the body. It was originally set at h-24, but I removed it so the picture in the case studies could expand on the entire screen and the padding between the nav and the body kinda didnt allow that. */}
        <div className="h-fit">
          <Navbar />
        </div>
        {/* Note: Don't give space when writing custom height in tailwind. BTW this motion.div is done from my own findings, not by the tutorial. It works on load.. even without initial={false} */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.75 }}
          className="h-screen"
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;

{
  /* <motion.div className="h-screen w-screen fixed bg-black z-30" initial={{height:"140vh"}} animate={{height:"0vh", transition:{delay:0.5}}} /> */
}
