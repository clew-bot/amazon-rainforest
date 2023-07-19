import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LearnItemProps {
    selectedTab: string
}
const LearnItem = ({ selectedTab}: LearnItemProps) => {
  return (
    <div className="right-0 absolute w-1/2 border-4 border-black rounded-md h-full font-display">
    <div className="bg-black">
      <h2 className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-slate-100 shadow-md text-left text-4xl underline ">Discover</h2>
    </div>
</div>
  )
}

export default LearnItem