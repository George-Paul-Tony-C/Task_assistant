'use client'

import React, { useState } from 'react';


export function Calendar() {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [monthInput, setMonthInput] = useState("");
  
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    React.useEffect(() => {
      setMonthInput(monthNames[currentMonth]);
    }, [currentMonth]);

    const getDaysInMonth = (month, year) => {
      return new Date(year, month + 1, 0).getDate();
    };
  
    const renderCalendarDays = () => {
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const daysInMonth = getDaysInMonth(currentMonth, currentYear);
      const today = new Date();
  
      const calendarDays = [];
      let dayCount = 1;
  
      for (let i = 0; i < firstDay; i++) {
        calendarDays.push(<td key={`empty-${i}`} className="p-4 text-gray-400"></td>);
      }
  
      for (let i = firstDay; i < 42; i++) {
        if (dayCount <= daysInMonth) {
          const isday =
            dayCount === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();
          calendarDays.push(
            <td
              key={`day-${dayCount}`}
              className={`p-4 ${isday ? 'hover:bg-blue-100 bg-indigo-100 hover:backdrop-blur-2xl hover:shadow-2xl hover:shadow-blue-700' : 'hover:bg-blue-100 hover:backdrop-blur-2xl hover:shadow-2xl hover:shadow-blue-700'}`}
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

  
    const handleMonthInput = (e) => {
      const inputMonth = e.target.value.trim(); 
      setMonthInput(inputMonth);
  
      const monthIndex = monthNames.findIndex(
        month => month.toLowerCase().startsWith(inputMonth.toLowerCase())
      );
  
      if (monthIndex !== -1) {
        setCurrentMonth(monthIndex);
      }
    };
  
    const handleYearInput = (e) => {
      const year = parseInt(e.target.value);
      if (!isNaN(year)) {
        setCurrentYear(year);
      }
    };

    const years = [];
    for (let i = today.getFullYear() - 50; i <= today.getFullYear() + 50; i++) {
      years.push(i);
    }

    const incrementMonth = () => {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    };
  
    const decrementMonth = () => {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    };
  
    const incrementYear = () => {
      setCurrentYear(currentYear + 1);
    };
  
    const decrementYear = () => {
      setCurrentYear(currentYear - 1);
    };
    return (
      <div className="p-5 w-[30%] border-r-2 border-gray-200 text-black">
      <div className="text-3xl text-black mb-4">Calendar Page</div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-4">
          {/* Month toggle and input */}
          <div className="flex items-center">
            <button
              onClick={decrementMonth}
              className="p-2 bg-blue-200 rounded-md mr-2"
            >
              {'<'}
            </button>
            <input
              type="text"
              value={monthInput}  // Month input field is controlled
              onChange={handleMonthInput}
              className="p-2 w-28 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Month"
            />
            <button
              onClick={incrementMonth}
              className="p-2 bg-blue-200 rounded-md ml-2"
            >
              {'>'}
            </button>
          </div>

          {/* Year toggle and input */}
          <div className="flex items-center">
            <button
              onClick={decrementYear}
              className="p-2 bg-blue-200 rounded-md mr-2"
            >
              {'<'}
            </button>
            <input
              type="text"
              value={currentYear !== '' ? currentYear : ''}
              onChange={handleYearInput}
              className="p-2 w-16 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="YYYY"
            />
            <button
              onClick={incrementYear}
              className="p-2 bg-blue-200 rounded-md ml-2"
            >
              {'>'}
            </button>
          </div>
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
    );
  }