
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
      <div className="w-[70%] h-[32rem] bg-gray-300 border-2"></div>
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
      <div className="w-[140%] h-[24rem] bg-gray-400 border-2"></div>
    </>
  )
}

function Brief_pane() {
  return (
    <>
      <div className="w-full h-[24rem] bg-gray-500 border-2"></div>
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