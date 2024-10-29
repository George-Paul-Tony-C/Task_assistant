'use client'

import React, { useState } from 'react';


export function HoursOverview() {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const hours = Array(24).fill('').map((_, i) => ({ 
      hour: String(i % 12 || 12).padStart(2, '0'), 
      ampm: (i >= 12 ? 'PM' : 'AM'), 
      tasks: () => {
        if (i<6) return 'Sleep Time';
        else if (i % 7 === 0) return 'Task 1';
        else if (i % 3 === 0) return 'Task 2';
        else if (i % 5 === 0) return 'Task 3';
        else return '+';
      } 
    }));
  
    return (
      <div className='p-5 w-[70%]'>
        <div className='flex justify-between p-2 items-center'>
          <h1 className='text-xl text-black'>Schedule for date: {today.getDate()}/{currentMonth}/{currentYear}</h1>
          <h1 className='text-xl text-black'>View: Single Day</h1>
        </div>
        <div className="grid grid-cols-2 gap-1 h-screen text-black overflow-y-auto">
        {hours.map((hour, i) => (
          <div key={i} className="bg-blue-100 p-8 w-full text-center">
            <p>{hour.hour}:00 {hour.ampm}</p>
            <p className="text-lg">{hour.tasks()}</p>
          </div>
        ))}
        <div className='h-32'></div>
      </div>
      </div>
      
    );
  }