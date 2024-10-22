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
      calendarDays.push(<td key={`empty-${i}`} className="border p-4 text-gray-400"></td>);
    }

    // Add actual calendar days
    for (let i = firstDay; i < 42; i++) {
      if (dayCount <= daysInMonth) {
        const isToday =
          dayCount === today.getDate() &&
          currentMonth === today.getMonth() &&
          currentYear === today.getFullYear();
        calendarDays.push(
          <td
            key={`day-${dayCount}`}
            className={`border p-4 ${isToday ? 'bg-blue-500 text-white rounded-full' : ''}`}
          >
            {dayCount}
          </td>
        );
        dayCount++;
      } else {
        calendarDays.push(<td key={`empty-${i}`} className="border p-4 text-gray-400"></td>);
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
    <div className="p-5">
      <div className="text-3xl text-black mb-4">Calendar Page</div>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
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
  );
}
