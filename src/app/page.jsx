import { PlusIcon, ArrowPathIcon, CheckIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import * as motion from "framer-motion/client"

export default function Home() {
  return (
    <>
      <DashWindow />
    </>
  )
}


function Taskpane() {
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
    <div className="flex flex-col items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible" className="flex flex-col items-center justify-evenly h-[20rem] pl-2 pr-2">
        {Object.keys(Task).map((key) => (
          <motion.div key={key} variants={item} className="text-black bg-neutral-300 flex w-[26rem] h-18 items-center justify-between ring-neutral-300 ring-2 p-5">
            <div>
              <p className="text-xl">{Task[key].date}</p>
              <h2 className="font-semibold text-xl">{Task[key].name}</h2>
            </div>
            <div className="flex justify-end space-x-4">
              <button className="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-400 ring-2 flex justify-center items-center"><CheckIcon className="size-7 stroke-black" /></button>
              <button className="hover:bg-gray-100 rounded-sm w-10 h-10 flex justify-center items-center"><EllipsisHorizontalIcon className="size-7 stroke-black" /></button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 100, scale: 1 }} className="flex justify-between w-[26rem] h-18">
        <button className="hover:bg-gray-100 rounded-sm w-[48%] bg-neutral-300 h-8 ring-neutral-300 ring-2 flex justify-evenly items-center">
          <ArrowPathIcon className="size-6 stroke-black" />
        </button>
        <button className="hover:bg-gray-100 rounded-sm w-[48%] bg-neutral-300 h-8 ring-neutral-300 ring-2 flex justify-evenly items-center">
          <PlusIcon className="size-6 stroke-black" />
        </button>
      </motion.div>
    </div>
  )
}

function Overview_pane() {
  return (
    <>
      <div className="w-[45%] h-[25rem] border-2 bg-neutral-200 pl-5 pr-5 pt-2 flex flex-col items-center">
        <div className="text-2xl text-black w-[26rem] text-start">Today's overview</div>
        <Taskpane />
      </div>
    </>
  )
}

function Assistant_pane() {
  return (
    <>
      <div className="w-full h-[25rem] border-2 flex flex-col justify-evenly items-center bg-neutral-100">
        <div className="flex justify-evenly w-full">
          <div className="w-64 h-64 bg-neutral-400 flex justify-center items-center rounded-full">
            <div className="w-48 h-48 bg-neutral-300 rounded-full flex justify-center items-center">
              <PlayIcon className="size-24 fill-black" />
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <h1 className="text-3xl text-neutral-900">Meeting with Developers</h1>
            <h1 className="text-3xl text-black">45:00 Minutes</h1>
            <h1 className="text-2xl text-neutral-700">15:00 Minutes</h1>
            <div className="h-12"></div>
            <h1 className="text-2xl text-neutral-700">Next: Lunch at the Emporium</h1>
            <h1 className="text-2xl text-neutral-700">Begins exactly after one hour.</h1>
          </div>
        </div>
        <h1 className="text-3xl text-neutral-800">Begin the timer Whenever you are ready.</h1>
      </div>
    </>
  )
}

function Notes_pane() {
  return (
    <>
      <div className="w-[140%] h-[16rem] bg-gray-400 border-2"></div>
    </>
  )
}

function Brief_pane() {
  return (
    <>
      <div className="w-full h-[16rem] bg-gray-500 border-2"></div>
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