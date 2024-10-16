'use client'

import { Cog6ToothIcon, CalendarDaysIcon, BellSlashIcon, MapIcon, UserIcon, RocketLaunchIcon, ArrowRightEndOnRectangleIcon, RectangleGroupIcon, RectangleStackIcon, PencilSquareIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';

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
        <SideNav />
      </div>
    </>
  )
}

function Nav() {
  return (
    <nav className="w-screen h-20 flex border-b-2 border-neutral-200">
      <div className="w-[15%] flex justify-start pl-8 items-center text-3xl font-semibold text-black">
        Task Assistant
      </div>
      <div className="w-[15%] flex justify-center items-center text-xl text-black">
        October 16 2024
      </div>
      <div className="w-[40%] p-4 flex justify-center items-center">
        <input type="text" className="w-full h-12 ring-neutral-300 ring-2 pl-4 pr-4 text-lg text-black" placeholder=" 🔍  Search for anything " />
      </div>
      <div className="w-[30%] flex justify-evenly items-center">
        <button className="w-12 h-12 ring-neutral-300 ring-2 flex justify-center items-center"><Cog6ToothIcon className="size-8 stroke-black" /></button>
        <button className="w-12 h-12 ring-neutral-300 ring-2 flex justify-center items-center"><CalendarDaysIcon className="size-8 stroke-black" /></button>
        <button className="w-12 h-12 ring-neutral-300 ring-2 flex justify-center items-center"><BellSlashIcon className="size-8 stroke-black" /></button>
        <button className="w-36 h-12 ring-neutral-300 ring-2 flex justify-evenly items-center">
          <h2 className="text-2xl text-black">Timeline</h2>
          <MapIcon className="size-8 stroke-black" />
        </button>
        <button className="w-12 h-12 ring-neutral-300 ring-2 flex justify-center items-center"><UserIcon className="size-8 stroke-black" /></button>
      </div>
    </nav>
  )
}

function SideNav() {

  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <sidenav className="h-screen w-72 transition-all duration-300">
      <div className={`border-r-2 border-neutral-200 pt-2 relative flex flex-col justify-start space-y-4 items-center h-[92svh] w-64 pl-4 transition-all duration-300 ${open ? 'translate-x-0' : '-translate-x-44'}`}>
        <button className="h-12 w-64 flex justify-evenly items-center text-2xl text-black">
          <h2 className="w-36 text-start">Dashboard</h2> <RectangleGroupIcon className="size-8 stroke-black" />
        </button>
        <button className="h-12 w-64 flex justify-evenly items-center text-2xl text-black">
          <h2 className="w-36 text-start">Tasks</h2> <ClipboardDocumentCheckIcon className="size-8 stroke-black" />
        </button>
        <button className="h-12 w-64 flex justify-evenly items-center text-2xl text-black">
          <h2 className="w-36 text-start">Notes</h2> <PencilSquareIcon className="size-8 stroke-black" />
        </button>
        <button className="h-12 w-64  flex justify-evenly items-center text-2xl text-black">
          <h2 className="w-36 text-start">Calendar</h2> <CalendarDaysIcon className="size-8 stroke-black" />
        </button>
        <button className="h-12 w-64 flex justify-evenly items-center text-2xl text-black">
          <h2 className="w-36 text-start">Remember</h2> <RectangleStackIcon className="size-8 stroke-black" />
        </button>
        <button className="h-12 w-64 flex justify-evenly items-center text-2xl text-black">
          <h2 className="w-36 text-start">Workflow</h2> <RocketLaunchIcon className="size-8 stroke-black" />
        </button>
        <button
          className="h-12 w-64 flex justify-evenly items-center text-2xl text-black absolute bottom-12"
          onClick={handleToggle}>
          <h2 className="w-36 text-start">Hide Menu</h2> <ArrowRightEndOnRectangleIcon className={`size-8 stroke-black transition-all duration-800 ${open ? 'rotate-180' : '-rotate-0'}`} />
        </button>
      </div>
    </sidenav>
  )
}