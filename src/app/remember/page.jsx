'use client'

import { AnimatePresence, motion } from 'framer-motion';


export default function Remember() {

  let remember = {
    "remember_1": {
      name: "Birthday",
      date: "25-09-2024",
      content: "Buy gift for John's birthday"
    },
    "remember_2": {
      name: "Appointment",
      date: "22-09-2024",
      content: "Doctor's appointment at 2 PM"
    },
    "remember_3": {
      name: "Event",
      date: "25-09-2024",
      content: "Attend concert at 7 PM"
    },
    "remember_4": {
      name: "Task",
      date: "25-09-2024",
      content: "Finish project report by end of day"
    },
    "remember_5": {
      name: "Phone Call",
      date: "23-09-2024",
      content: "Call mom to catch up"
    },
    "remember_6": {
      name: "Meeting",
      date: "23-09-2024",
      content: "Team meeting at 10 AM"
    },
    "remember_7": {
      name: "Errand",
      date: "24-09-2024",
      content: "Pick up groceries"
    },
    "remember_8": {
      name: "Bill Payment",
      date: "25-09-2024",
      content: "Pay electricity bill"
    },
    "remember_9": {
      name: "Travel",
      date: "25-09-2024",
      content: "Book flight tickets for vacation"
    },
    "remember_10": {
      name: "Gift",
      date: "25-09-2024",
      content: "Buy anniversary gift for Friend"
    }
  };

    return (
      <>
      <div className="w-screen min-h-screen bg-gray-100 p-12 overflow-auto grid grid-cols-2 gap-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-black font-bold text-3xl">Remember Page</h2>
      </div>
      <p className="max-w-sm text-gray-600 text-md mb-4">
      </p>
      <AnimatePresence>
        {Object.keys(remember).map((key) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-md rounded-lg p-5 mb-4"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-gray-800 font-bold">{remember[key].name}</h2>
              <p className="text-gray-400 text-xs">Added on {remember[key].date}</p>
            </div>
            <p className="max-w-sm text-gray-600 text-md mb-4">
            {remember[key].content}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    </>
    );
  }
  