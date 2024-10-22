'use client'

import {CheckIcon,EllipsisHorizontalIcon ,Cog6ToothIcon, CalendarDaysIcon, BellSlashIcon, MapIcon, UserIcon, RocketLaunchIcon, ArrowRightEndOnRectangleIcon, RectangleGroupIcon, RectangleStackIcon, PencilSquareIcon, ClipboardDocumentCheckIcon, BellAlertIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import toast from 'react-hot-toast';
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
import moment from 'moment';
import { Toaster } from 'react-hot-toast';


export function Nav() {
  const router = useRouter();
  const currentDate = new Date();
  const formattedDate_mdy = moment(currentDate).format('MMMM D YYYY');
  const formattedDate_dmys = moment(currentDate).format('DD / MM / YYYY ');
  const [date_view, set_date_view] = useState(formattedDate_mdy);
  const [notif, set_notif] = useState(false);
  const switchdate = () => {
    if (date_view == formattedDate_mdy) {
      set_date_view(formattedDate_dmys);
    } else {
      set_date_view(formattedDate_mdy);
    }
  };

  const switchNotif = () => {
    set_notif(!notif);
    if (notif) {
      toast("Notification Turned on", { icon: '🔔' });
    } else {
      toast("Notification Turned off", { icon: '🔕' });
    }
  }

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <nav className="bg-white fixed w-screen h-16 flex border-b-2 border-neutral-200">
        <div className="lg:w-[15%] w-[70%] flex justify-start pl-5 items-center text-2xl font-semibold text-black">
          Task Assistant
        </div>
        <button className="lg:w-[15%] lg:flex hidden justify-center items-center text-xl text-black" onClick={switchdate}>
          {date_view}
        </button>
        <div className="lg:w-[40%] p-4 lg:flex hidden justify-center items-center">
          <input type="text" className="rounded-sm w-full h-10 ring-neutral-300 ring-2 pl-4 pr-4 text-lg text-black" placeholder=" 🔍  Search for anything " />
        </div>
        <div className="lg:w-[30%] w-[70%] flex justify-evenly items-center">
          <button onClick={() => router.push('/settings')} className="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"><Cog6ToothIcon className="size-7 stroke-black" /></button>
          <button onClick={() => router.push('/calendar')} className="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"><CalendarDaysIcon className="size-7 stroke-black" /></button>
          <button onClick={switchNotif} className="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 lg:flex hidden justify-center items-center">{notif ? <BellSlashIcon className="size-7 stroke-black" /> : <BellAlertIcon className="size-7 stroke-black" />}</button>
          <button onClick={() => router.push('/timeline')} className="hover:bg-gray-100 rounded-sm w-36 h-10 ring-neutral-300 ring-2 lg:flex hidden justify-evenly items-center">
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
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <sidenav className={`fixed bg-white transition-all duration-300 ${open ? 'w-56' : 'w-16'}`}>
        <div className={`border-r-2 border-neutral-200 relative flex flex-col justify-start items-center h-[92svh] transition-all duration-300 ${open ? 'w-56' : 'w-16'}`}>
          <Side_nav_component name={'Dashboard'} route={"/"} open={open}><RectangleGroupIcon className="size-7 stroke-black" /></Side_nav_component>
          <Side_nav_component name={'Tasks'} route={"/tasks"} open={open}><ClipboardDocumentCheckIcon className="size-7 stroke-black" /></Side_nav_component>
          <Side_nav_component name={'Notes'} route={"/notes"} open={open}><PencilSquareIcon className="size-7 stroke-black" /></Side_nav_component>
          <Side_nav_component name={'Calendar'} route={"/calendar"} open={open}><CalendarDaysIcon className="size-7 stroke-black" /></Side_nav_component>
          <Side_nav_component name={'Memories'} route={"/memories"} open={open}><RectangleStackIcon className="size-7 stroke-black" /></Side_nav_component>
          <Side_nav_component name={'Workflow'} route={"/workflow"} open={open}><RocketLaunchIcon className="size-7 stroke-black" /></Side_nav_component>
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

export function Side_nav_component({name,route, open, children}){
  const router = useRouter();
  return(
    <button className="pl-2 pt-6 pb-7 hover:bg-gray-200 h-12 w-full flex justify-evenly items-center text-xl text-black" onClick={() => router.push(route)}>
      <h2 className={`w-36 text-start transition ease-in-out duration-300 ${open ? 'opacity-100' : 'opacity-50 hidden'}`}>{name}</h2> {children}
    </button>
  )
}

export const ActivityChart = () => {
  const [data, setData] = useState({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Tasks Per day',
        data: [1, 4, 2, 3, 1, 0, 3],
        backgroundColor: 'rgba(0, 155, 0, 1)',
        borderColor: 'rgba(0, 155, 0, 1)',
        borderWidth: 2,
      },
      {
        label: 'Productivity Hours',
        data: [2, 3, 3, 4, 2, 1, 5],
        backgroundColor: 'rgba(155, 0, 0, 1)',
        borderColor: 'rgba(155, 0, 0, 1)',
        borderWidth: 2,
      }
    ],
  });

  return (
    <div className='h-[14rem] w-full flex justify-center items-center'>
      <Line
        data={data}
        options={{
          title: {
            display: true,
            text: 'Daily Activity (past 7 days)',
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Activity Units',
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Day of Week',
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export function Tasks({task,time, variants}) {
  return (
    <motion.div variants={variants} className="text-black bg-neutral-300 flex lg:w-[26rem] w-64 h-18 items-center justify-between ring-neutral-300 ring-2 p-5">
      <div>
        <p className="lg:text-xl text-sm">{time}</p>
        <h2 className="font-semibold lg:text-xl text-sm">{task}</h2>
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={() => { toast("hello") }} className="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-400 ring-2 flex justify-center items-center"><CheckIcon className="size-7 stroke-black" /></button>
        <button className="hover:bg-gray-100 rounded-sm w-10 h-10 flex justify-center items-center"><EllipsisHorizontalIcon className="size-7 stroke-black" /></button>
      </div>
    </motion.div>
  )
}