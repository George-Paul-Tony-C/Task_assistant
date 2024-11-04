
import { PlusIcon, ArrowPathIcon, CheckIcon, EllipsisHorizontalIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import * as motion from "framer-motion/client"
import { ActivityChart } from "@/components/dashboard/graphs";


// Replace by Fetch after Designing Backend
import Task from "@/MockData/mocktasks.json"

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



export default function Home() {
  return (
    <div className="overflow-auto w-full h-screen">
      <DashWindow />
    </div>
  )
}


function Taskpane() {
  return (
    <div className="flex flex-col items-center lg:p-4 p-1 pt-2 bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible" className="flex flex-col items-center justify-evenly h-[18rem] lg:pl-2 pl-8 lg:pr-2">
        {Object.keys(Task).map((key) => (
          <motion.div key={key} variants={item} className="text-black rounded-sm bg-gradient-to-br from-neutral-50 via-neutral-50 to-blue-400 flex lg:w-[26rem] w-80 h-20 items-center justify-between ring-blue-200/50 ring-2 p-4">
            <div>
              <p className="lg:text-xl text-sm">{Task[key].date}</p>
              <h2 className="font-semibold lg:text-xl text-sm">{Task[key].name}</h2>
            </div>
            <div className="flex justify-end space-x-4">
              <button className="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-400 ring-2 flex justify-center items-center"><CheckIcon className="size-7 stroke-black" /></button>
              <button className="hover:bg-gray-100 rounded-sm w-10 h-10 flex justify-center items-center"><EllipsisHorizontalIcon className="size-7 stroke-black" /></button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 100, scale: 1 }} className="lg:w-[26rem] w-full flex justify-between lg:pl-0 pl-8 h-18">
        <button className="bg-gray-100 hover:bg-blue-200 transition-all duration-100 rounded-sm w-[48%] h-8 ring-blue-200/50 ring-2 flex justify-evenly items-center">
          <ArrowPathIcon className="size-6 stroke-black" />
        </button>
        <button className="bg-gray-100 hover:bg-blue-200 transition-all duration-100 rounded-sm w-[48%]  h-8 ring-blue-200/50 ring-2 flex justify-evenly items-center">
          <PlusIcon className="size-6 stroke-black" />
        </button>
      </motion.div>
    </div>
  )
}

function Overview_pane() {
  return (
    <>
      <div className=" lg:w-[45%] w-full h-[45%] border-2 bg-white lg:pl-5 pl-1 pr-5 pt-2 flex flex-col justify-start items-center">
        <div className="text-2xl text-black lg:w-[26rem] w-full pl-5 lg:pl-0 text-start">Today's overview</div>
        <Taskpane />
      </div>
    </>
  )
}

function Assistant_pane() {
  return (
    <>
      <div className="hidden w-full p-5 border-2 lg:flex flex-col justify-evenly items-center bg-neutral-100">
        <div className="flex justify-evenly w-full h-full">
          <div className="w-64 h-64 bg-blue-300 flex justify-center items-center rounded-full">
            <div className="w-48 h-48 bg-blue-200 rounded-full flex justify-center items-center">
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
  let Notes = {
    "Note_1": {
      name: "Meeting Agenda",
      desc: "Meeting agenda for Developer meeting regarding the product roadmap",
    },
    "Note_2": {
      name: "Exam Syllabus",
      desc: "",
    },
    "Note_3": {
      name: "Paper Research",
      desc: "Key points for paper research on an ideal task management system.",
    },
  };
  return (
    <div className="w-full h-screen border-2 bg-white pl-5 pr-5 pt-1 flex flex-col items-center">
      <div className="text-2xl text-black text-start pb-1">Memories and Notes</div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible" className="lg:pl-6 gap-2 w-full pt-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {Object.keys(Notes).map((key) => (
          <motion.div key={key} variants={item} className="lg:w-56 w-80 lg:h-48 h-64 bg-gradient-to-br from-cyan-50 via-sky-200 to-sky-300 hover:shadow-2xl hover:shadow-sky-600 transition-all duration-300 flex flex-col justify-start space-y-2 items-center p-4 ring-1 ring-blue-300/50">
            <div className="flex justify-around items-center w-full">
              <div className="w-48 pl-4">
                <h1 className="text-black text-xl font-semibold">{Notes[key].name}</h1>
                <h1 className="text-black text-xl">Notes</h1>
              </div>
              <div>
                <PaperClipIcon className="size-7 stroke-black" />
              </div>
            </div>
            <div className="text-black w-42 lg:pl-4 pl-8 flex justify-center">{Notes[key].desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function Brief_pane() {
  return (
    <>
      <div className="w-[80%] p-5 pt-1 h-full border-2 flex justify-center items-center flex-col">
      <div className="text-2xl text-black text-start pb-1">Your Statistics</div>
        <ActivityChart />
      </div>
    </>
  )
}

function DashWindow() {
  return (
    <div className='w-full h-fit overflow-y-auto bg-white'>
      <div className='lg:flex'>
        <Overview_pane />
        <Assistant_pane />
      </div>
      <div className='lg:flex h-[50%]'>
        <Notes_pane />
        <Brief_pane />
      </div>
    </div>
  )
}