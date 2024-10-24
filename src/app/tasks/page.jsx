'use client'

import React, { useState } from 'react';

export default function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('Easy');
  const [context, setContext] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');
  const [dateAndTime, setDateAndTime] = useState('');

  const handleAddTask = () => {
    if (taskName && description) {
      const newTask = {
        taskName,
        description,
        difficultyLevel,
        context,
        priority,
        dueDate: dateAndTime ? dateAndTime : new Date().toISOString(),
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskName('');
      setDescription('');
      setDifficultyLevel('Easy');
      setContext('');
      setPriority('Low');
    }
  };

  const handleDueDateChange = (e) => {
    setDateAndTime(e.target.value);
  };

  return (
    <div className="flex h-screen w-full p-4 pt-2 text-black">
      {/* Task Adding Form */}
      <div className="basis-1/3 bg-white rounded-md shadow-md p-4 flex flex-col justify-start items-center">
        <h2 className="text-lg font-bold">Add Task</h2>
        <form className="flex flex-col w-full gap-4">
          <h3 className="text-sm font-bold">Task Name</h3>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task Name"
            className="block p-2 text-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
          />
          <h3 className="text-sm font-bold">Description</h3>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="block w-full p-2 text-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-md h-12"
          />
          <h3 className="text-sm font-bold">Difficulty</h3>
          <select
            value={difficultyLevel}
            onChange={(e) => setDifficultyLevel(e.target.value)}
            className="block p-2 text-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <h3 className="text-sm font-bold">Context</h3>
          <input
            type="text"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Context"
            className="block p-2 text-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
          />
          <h3 className="text-sm font-bold">Priority</h3>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="block p-2 text-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <h3 className="text-sm font-bold">Date and Time</h3>
          <input
            type="datetime-local"
            value={dateAndTime}
            onChange={handleDueDateChange}
            className="block p-2 text-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
          />
          <button
            type="button"
            onClick={handleAddTask}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Task
          </button>
        </form>
      </div>

      {/* Today's Tasks */}
      <div className="basis-1/3 bg-white rounded-md shadow-md p-4 flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold mb-4">Today</h2>
        {tasks.filter((task) => new Date(task.dueDate).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)).map((task) => (
          <p key={task.taskName}>
            {task.taskName} ({task.difficultyLevel})
            <span className="text-right">({task.priority})</span>
          </p>
        ))}
      </div>

      {/* Tomorrow's Tasks */}
      <div className="basis-1/3 bg-white rounded-md shadow-md p-4 flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold mb-4">Tomorrow</h2>
        {tasks.filter((task) => new Date(task.dueDate).setHours(0, 0, 0, 0) === new Date(new Date().getTime() + 86400000).setHours(0, 0, 0, 0)).map((task) => (
          <p key={task.taskName}>
            {task.taskName} ({task.difficultyLevel})
            <span className="text-right">({task.priority})</span>
          </p>
        ))}
      </div>

      {/* This Week's Tasks */}
      <div className="basis-1/3 bg-white rounded-md shadow-md p-4 flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold mb-4">This Week</h2>
        {tasks.filter((task) => new Date(task.dueDate).setHours(0, 0, 0, 0) >= new Date(new Date().getTime() + 86400000)).map((task) => (
          <p key={task.taskName}>
            {task.taskName} ({task.difficultyLevel})
            <span className="text-right">({task.priority})</span>
          </p>
        ))}
      </div>
    </div>
 );
}