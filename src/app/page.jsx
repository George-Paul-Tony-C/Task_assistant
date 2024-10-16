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
      <motion.div initial={{ scale: 0.7, opacity: 0,zIndex: 0 }} animate={{scale: 1, opacity: 100, zIndex: 0}} className="z-0 w-[70%] h-[32rem] bg-gray-300 border-2"></motion.div>
    </>
  )
}

function Assistant_pane() {
  return (
    <>
      <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{scale: 1, opacity: 100}} className="w-full h-[32rem] bg-gray-600 border-2"></motion.div>
    </>
  )
}

function Notes_pane() {
  return (
    <>
      <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{scale: 1, opacity: 100}} className="w-[140%] h-[20rem] bg-gray-400 border-2"></motion.div>
    </>
  )
}

function Brief_pane() {
  return (
    <>
      <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{scale: 1, opacity: 100}} className="w-full h-[20rem] bg-gray-500 border-2"></motion.div>
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