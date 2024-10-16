import { Cog6ToothIcon, CalendarDaysIcon, BellSlashIcon, MapIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    /*<div className="flex flex-col justify-center h-screen p-5">
     <div className="text-6xl">Dashboard Page</div>
     <div className="pt-10 text-4xl pb-4">Pages: </div>
     <div className="flex flex-col justify-start text-2xl text-blue-400">
      <a href="/calendar">Calendar</a>
      <a href="/remember">Remember</a>
      <a href="/settings">Settings</a>
      <a href="/tasks">Tasks</a>
      <a href="/notes">Notes</a>
      <a href="/workflow">Workflow Customization</a>
     </div>
    </div>
  );*/
    <>
      <div className="bg-white w-screen min-h-screen">
        <Nav />
      </div>
    </>
  )
}

function Nav() {
  return (
    <nav className="w-screen h-20 flex">
      <div className="w-[15%] flex justify-center items-center text-3xl font-semibold text-black">
        Task Assistant
      </div>
      <div className="w-[15%] flex justify-center items-center text-xl text-black">
        October 16 2024
      </div>
      <div className="w-[40%] p-4 flex justify-center items-center">
        <input type="text" className="w-full h-12 ring-neutral-300 ring-2 pl-4 pr-4 text-lg text-black" placeholder=" 🔍  Search for anything " />
      </div>
      <div className="w-[30%] flex justify-evenly items-center">
        <div className="w-12 h-12 ring-neutral-300 ring-2 flex justify-center items-center"><Cog6ToothIcon className="size-8 stroke-black" /></div>
        <div className="w-12 h-12 ring-neutral-300 ring-2 flex justify-center items-center"><CalendarDaysIcon className="size-8 stroke-black" /></div>
        <div className="w-12 h-12 ring-neutral-300 ring-2 flex justify-center items-center"><BellSlashIcon className="size-8 stroke-black" /></div>
        <div className="w-36 h-12 ring-neutral-300 ring-2 flex justify-evenly items-center">
          <h2 className="text-2xl text-black">Timeline</h2>
          <MapIcon className="size-8 stroke-black" />
        </div>
        <div className="w-12 h-12 ring-neutral-300 ring-2 flex justify-center items-center"><UserIcon className="size-8 stroke-black" /></div>
      </div>
    </nav>
  )
}
