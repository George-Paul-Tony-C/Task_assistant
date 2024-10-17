import { PlusIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import * as motion from "framer-motion/client"

export default function Home() {
  return (
    <>
      <DashWindow />
    </>
  )
}

function Overview_pane() {
  return (
    <>
      <div className="p-5 w-[70%] h-[32rem] border-2 bg-neutral-200">
        <div className="text-2xl text-black">Today's overview</div>
        <Taskpane/>
      </div>
    </>
  )
}

function Taskpane(){
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  let Task = {
    "Task_1": {
      name: "Meeting with Developers",
      date: "11:00 AM - 12:00 PM",
    },
    "Task_2": {
      name: "Lunch at the Emporium",
      date: "12:00 PM - 01:00 PM",
    },
    "Task_3": {
      name: "Exam Preparation - Phase 1",
      date: "01:00 PM - 02:30 PM",
    },
  };

  return (
    <>
    <div className="h-4"></div>
    <motion.div
    variants={container}
    initial="hidden"
    animate="visible" className="flex flex-col items-center justify-evenly h-[24rem]">
    {Object.keys(Task).map((key) => (
      <motion.div key={key} variants={item} className="text-black flex w-full h-28 items-center justify-center flex-col ring-neutral-300 ring-2 p-5">
        <p>{Task[key].date}</p>
        <h2>{Task[key].name}</h2>
      </motion.div>
    ))}
    </motion.div>
    <motion.div initial={{ opacity: 0, scale:0.5 }} animate={{opacity: 100, scale: 1}} className="flex justify-between">
      <button className="hover:bg-gray-100 rounded-sm w-[48%] h-12 ring-neutral-300 ring-2 flex justify-evenly items-center">
        <ArrowPathIcon className="size-8 stroke-black"/>
      </button>
      <button className="hover:bg-gray-100 rounded-sm w-[48%] h-12 ring-neutral-300 ring-2 flex justify-evenly items-center">
        <PlusIcon className="size-8 stroke-black"/>
      </button>
    </motion.div>
    </>
  )
}

function Assistant_pane() {
  return (
    <>
      <div className="w-full h-[32rem] bg-gray-600 border-2"></div>
    </>
  )
}

function Notes_pane() {
  return (
    <>
      <div className="w-[140%] h-[20rem] bg-gray-400 border-2"></div>
    </>
  )
}

function Brief_pane() {
  return (
    <>
      <div className="w-full h-[20rem] bg-gray-500 border-2"></div>
    </>
  )
}

function DashWindow() {
  return (
    <div className='w-full h-fit bg-slate-200'>
      <div className='flex'>
        <Overview_pane />
        <Assistant_pane />
      </div>
      <div className='flex'>
        <Notes_pane />
        <Brief_pane />
      </div>
    </div>
  )
}