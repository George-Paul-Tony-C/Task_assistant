'use client';  // Required for client-side functionality in Next.js

import React, { useState } from 'react';

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Array of month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Function to get number of days in a month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to render the calendar days
  const renderCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const today = new Date();

    const calendarDays = [];
    let dayCount = 1;

    // Add empty cells before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<td key={`empty-${i}`} className="p-4 text-gray-400"></td>);
    }

    // Add actual calendar days
    for (let i = firstDay; i < 42; i++) {
      if (dayCount <= daysInMonth) {
        const isday =
          dayCount === today.getDate() &&
          currentMonth === today.getMonth() &&
          currentYear === today.getFullYear();
        calendarDays.push(
          <td
            key={`day-${dayCount}`}
            className={`p-4 ${isday ? 'bg-indigo-100 ring-2 ring-indigo-400 text-black flex backdrop-blur-2xl shadow-2xl shadow-indigo-700' : 'hover:bg-blue-100 hover:backdrop-blur-2xl hover:shadow-2xl hover:shadow-blue-700'}`}
          >
            <div className='flex justify-center items-center '>
              {dayCount}
            </div>
          </td>
        );
        dayCount++;
      } else {
        calendarDays.push(<td key={`empty-${i}`} className="p-4 text-gray-400"></td>);
      }
    }

    return calendarDays;
  };

  // Handler for changing the month
  const handleMonthChange = (e) => {
    setCurrentMonth(parseInt(e.target.value));
  };

  // Handler for changing the year
  const handleYearChange = (e) => {
    setCurrentYear(parseInt(e.target.value));
  };

  // Generate years for the dropdown (e.g., from 1950 to 2050)
  const years = [];
  for (let i = today.getFullYear() - 50; i <= today.getFullYear() + 50; i++) {
    years.push(i);
  }

  return (
    <div className='flex justify-evenly w-screen'>
    <div className="p-5 w-[30%] border-r-2 border-gray-200 text-black">
      <div className="text-3xl text-black mb-4">Calendar Page</div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-4">
          {/* Month dropdown */}
          <select
            value={currentMonth}
            onChange={handleMonthChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {monthNames.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>

          {/* Year dropdown */}
          <select
            value={currentYear}
            onChange={handleYearChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <table className="w-full table-fixed">
          <thead>
            <tr>
              <th className="w-1/7 p-2 text-center">Sun</th>
              <th className="w-1/7 p-2 text-center">Mon</th>
              <th className="w-1/7 p-2 text-center">Tue</th>
              <th className="w-1/7 p-2 text-center">Wed</th>
              <th className="w-1/7 p-2 text-center">Thu</th>
              <th className="w-1/7 p-2 text-center">Fri</th>
              <th className="w-1/7 p-2 text-center">Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>{renderCalendarDays().slice(0, 7)}</tr>
            <tr>{renderCalendarDays().slice(7, 14)}</tr>
            <tr>{renderCalendarDays().slice(14, 21)}</tr>
            <tr>{renderCalendarDays().slice(21, 28)}</tr>
            <tr>{renderCalendarDays().slice(28, 35)}</tr>
            <tr>{renderCalendarDays().slice(35, 42)}</tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className='p-5 w-[70%]'>
      <div className='flex justify-between p-2 items-center'>
        <h1 className='text-xl text-black'>Schedule for date: {today.getDate()}/{currentMonth}/{currentYear}</h1>
        <h1 className='text-xl text-black'>View: Single Day</h1>
      </div>
          <HoursGrid/>

    </div>
    </div>
  );
}

function HoursGrid() {
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
    <div className="grid grid-cols-2 gap-1 h-screen text-black overflow-y-auto">
      {hours.map((hour, i) => (
        <div key={i} className="bg-blue-100 p-8 w-full text-center">
          <p>{hour.hour}:00 {hour.ampm}</p>
          <p className="text-lg">{hour.tasks()}</p>
        </div>
      ))}
      <div className='h-32'></div>
    </div>
  );
}


