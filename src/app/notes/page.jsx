'use client'

import { AnimatePresence, motion } from 'framer-motion';

// Replace by Fetch after Designing Backend
import notes from '@/MockData/mocknotes.json'

export default function Notes() {
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-100 p-12 overflow-auto grid grid-cols-2 gap-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-black font-bold text-3xl">Notes Page</h2>
        </div>
        <p className="max-w-sm text-gray-600 text-md mb-4">
        </p>
        <AnimatePresence>
          {Object.keys(notes).map((key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md rounded-lg p-5 mb-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-gray-800 font-bold">{notes[key].name}</h2>
                <p className="text-gray-400 text-xs">Added on {notes[key].date}</p>
              </div>
              <p className="max-w-sm text-gray-600 text-md mb-4">
                {notes[key].content}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>


  );
}
