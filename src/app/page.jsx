'use client'

import { Cog6ToothIcon, CalendarDaysIcon, BellSlashIcon, MapIcon, UserIcon, RocketLaunchIcon, ArrowRightEndOnRectangleIcon, RectangleGroupIcon, RectangleStackIcon, PencilSquareIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';

export default function Home() {
  return (
    <>
      <div className="bg-white w-screen min-h-screen">
        <Nav />
        <div className='w-screen h-20'></div>
        <div className="flex">
          <SideNav />
          <div className='h-screen w-24 pl-4'></div>
        </div>
      </div>
    </>
  )
}

function Nav() {
  return (
    <nav className="bg-white fixed w-screen h-20 flex border-b-2 border-neutral-200">
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
    <sidenav className={`fixed bg-white h-screen w-64 transition-all duration-300 ${open ? 'w-64' : 'w-16 pr-4'}`}>
      <div className={`border-r-2 border-neutral-200 pt-2 relative flex flex-col justify-start space-y-4 items-center h-[92svh] pl-4 transition-all duration-300 ${open ? 'w-64' : 'w-16 pr-4'}`}>
        <button className="h-12 w-64 flex justify-evenly items-center text-2xl text-black">
          <h2 className={`w-36 text-start transition-all delay-800 ${open ? '':'hidden'}`}>Dashboard</h2> <RectangleGroupIcon className="size-8 stroke-black" />
        </button>
        <button className="h-12 w-64 flex justify-evenly items-center text-2xl text-black">
          <h2 className={`w-36 text-start transition-all duration-300 ${open ? '':'hidden'}`}>Tasks</h2> <ClipboardDocumentCheckIcon className="size-8 stroke-black" />
        </button>
        <button className="h-12 w-64 flex justify-evenly items-center text-2xl text-black">
          <h2 className={`w-36 text-start transition-all duration-300 ${open ? '':'hidden'}`}>Notes</h2> <PencilSquareIcon className="size-8 stroke-black" />
        </button>
        <button className="h-12 w-64  flex justify-evenly items-center text-2xl text-black">
          <h2 className={`w-36 text-start transition-all duration-300 ${open ? '':'hidden'}`}>Calendar</h2> <CalendarDaysIcon className="size-8 stroke-black" />
        </button>
        <button className="h-12 w-64 flex justify-evenly items-center text-2xl text-black">
          <h2 className={`w-36 text-start transition-all duration-300 ${open ? 'translate-x-0':'hidden -translate-x-28'}`}>Remember</h2> <RectangleStackIcon className="size-8 stroke-black" />
        </button>
        <button className="h-12 w-64 flex justify-evenly items-center text-2xl text-black">
          <h2 className={`w-36 text-start transition-all duration-300 ${open ? '':'hidden'}`}>Workflow</h2> <RocketLaunchIcon className="size-8 stroke-black" />
        </button>
        <button
          className="h-12 w-64 flex justify-evenly items-center text-2xl text-black absolute bottom-12"
          onClick={handleToggle}>
          <h2 className={`w-36 text-start ${open ? '':'hidden'}`}>Hide Menu</h2> <ArrowRightEndOnRectangleIcon className={`size-8 stroke-black transition-all duration-800 ${open ? 'rotate-180' : '-rotate-0'}`} />
        </button>
      </div>
    </sidenav>
  )
}

function Overview_pane(){
  return(
    <>
      <div className="w-[60%] h-96 bg-gray-500"></div>
    </>
  )
}

function Assistant_pane(){
  return(
    <>
      <div className="w-full h-96 bg-gray-300"></div>
    </>
  )
}