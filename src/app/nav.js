'use client'

import { Cog6ToothIcon, CalendarDaysIcon, BellSlashIcon, MapIcon, UserIcon, RocketLaunchIcon, ArrowRightEndOnRectangleIcon, RectangleGroupIcon, RectangleStackIcon, PencilSquareIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import moment from 'moment';


export function Nav() {
    const router = useRouter();
    const currentDate = new Date();
    const formattedDate_mdy = moment(currentDate).format('MMMM D YYYY');
    const formattedDate_dmys = moment(currentDate).format('DD / MM / YYYY ');
    const [date_view, set_date_view] = useState(formattedDate_mdy);
    const switchdate = () => {
        if (date_view == formattedDate_mdy) {
            set_date_view(formattedDate_dmys);
        } else {
            set_date_view(formattedDate_mdy);
        }
    };
    return (
        <>
            <nav className="bg-white fixed w-screen h-16 flex border-b-2 border-neutral-200">
                <div className="w-[15%] flex justify-start pl-8 items-center text-2xl font-semibold text-black">
                    Task Assistant
                </div>
                <button className="w-[15%] flex justify-center items-center text-xl text-black" onClick={switchdate}>
                    {date_view}
                </button>
                <div className="w-[40%] p-4 flex justify-center items-center">
                    <input type="text" className="rounded-sm w-full h-10 ring-neutral-300 ring-2 pl-4 pr-4 text-lg text-black" placeholder=" 🔍  Search for anything " />
                </div>
                <div className="w-[30%] flex justify-evenly items-center">
                    <button onClick={() => router.push('/settings')} className="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"><Cog6ToothIcon className="size-7 stroke-black" /></button>
                    <button onClick={() => router.push('/calendar')} className="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"><CalendarDaysIcon className="size-7 stroke-black" /></button>
                    <button className="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"><BellSlashIcon className="size-7 stroke-black" /></button>
                    <button onClick={() => router.push('/timeline')} className="hover:bg-gray-100 rounded-sm w-36 h-10 ring-neutral-300 ring-2 flex justify-evenly items-center">
                        <h2 className="text-xl text-black">Timeline</h2>
                        <MapIcon className="size-7 stroke-black" />
                    </button>
                    <button onClick={() => router.push('/user')} className="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"><UserIcon className="size-7 stroke-black" /></button>
                </div>
            </nav>
            <div className='w-screen h-16'></div>
        </>
    )
}

export function SideNav() {

    const [open, setOpen] = useState(false);
    const router = useRouter();
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <sidenav className={`fixed bg-white transition-all duration-300 ${open ? 'w-56' : 'w-16'}`}>
                <div className={`border-r-2 border-neutral-200 relative flex flex-col justify-start items-center h-[92svh] transition-all duration-300 ${open ? 'w-56' : 'w-16'}`}>
                    <button className="pl-2 pt-6 pb-7 hover:bg-gray-200 h-12 w-full flex justify-evenly items-center text-xl text-black" onClick={() => router.push('/')}>
                        <h2 className={`w-36 text-start transition ease-in-out duration-300 ${open ? 'opacity-100' : 'opacity-50 hidden'}`}>Dashboard</h2> <RectangleGroupIcon className="size-7 stroke-black" />
                    </button>
                    <button className="pl-2 pt-6 pb-7 hover:bg-gray-200 h-12 w-full flex justify-evenly items-center text-xl text-black" onClick={() => router.push('/tasks')}>
                        <h2 className={`w-36 text-start transition ease-in-out duration-300 ${open ? '' : 'hidden'}`}>Tasks</h2> <ClipboardDocumentCheckIcon className="size-7 stroke-black" />
                    </button>
                    <button className="pl-2 pt-6 pb-7 hover:bg-gray-200 h-12 w-full flex justify-evenly items-center text-xl text-black" onClick={() => router.push('/notes')}>
                        <h2 className={`w-36 text-start transition ease-in-out duration-300 ${open ? '' : 'hidden'}`}>Notes</h2> <PencilSquareIcon className="size-7 stroke-black" />
                    </button>
                    <button className="pl-2 pt-6 pb-7 hover:bg-gray-200 h-12 w-full  flex justify-evenly items-center text-xl text-black" onClick={() => router.push('/calendar')}>
                        <h2 className={`w-36 text-start transition ease-in-out duration-300 ${open ? '' : 'hidden'}`}>Calendar</h2> <CalendarDaysIcon className="size-7 stroke-black" />
                    </button>
                    <button className="pl-2 pt-6 pb-7 hover:bg-gray-200 h-12 w-full flex justify-evenly items-center text-xl text-black" onClick={() => router.push('/remember')}>
                        <h2 className={`w-36 text-start transition ease-in-out duration-300 ${open ? 'translate-x-0' : 'hidden -translate-x-28'}`}>Remember</h2> <RectangleStackIcon className="size-7 stroke-black" />
                    </button>
                    <button className="pl-2 pt-6 pb-7 hover:bg-gray-200 h-12 w-full flex justify-evenly items-center text-xl text-black" onClick={() => router.push('/workflow')}>
                        <h2 className={`w-36 text-start transition ease-in-out duration-300 ${open ? '' : 'hidden'}`}>Workflow</h2> <RocketLaunchIcon className="size-7 stroke-black" />
                    </button>
                    <button
                        className="pl-2 pt-6 pb-7 hover:bg-gray-200 h-12 w-full flex justify-evenly items-center text-xl text-black absolute bottom-12"
                        onClick={handleToggle}>
                        <h2 className={`w-36 text-start transition ease-in-out delay-300 ${open ? '' : 'hidden'}`}>Hide Menu</h2> <ArrowRightEndOnRectangleIcon className={`size-7 stroke-black transition-all duration-800 ${open ? 'rotate-180' : '-rotate-0'}`} />
                    </button>
                </div>
            </sidenav>
            <div className={`h-screen transition-all duration-200 ${open ? 'w-64' : 'w-16 pl-4'}`}></div>
        </>
    )
}
