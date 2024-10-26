'use client'

import { AnimatePresence, motion } from 'framer-motion';


export default function Notes() {

    // Temporary data for notes: API will be availible soon.
    // These are some test values 
    let notes = {
      "Notes_1": {
        name: "Math Formulae",
        date: "25-09-2024",
        content: "Formulae for upcoming test: Quadratic formula, Pythagorean theorem, Trigonometric identities..."
      },
      "Notes_2": {
        name: "Shopping List",
        date: "22-09-2024",
        content: "Pens, Notebooks, Calculator, Highlighters, Sticky notes, Water bottle..."
      },
      "Notes_3": {
        name: "Daily Tasks",
        date: "25-09-2024",
        content: "- Complete homework: Math problems, Science project, English essay\n- Study for test: Review notes, Practice problems\n- Read chapter 5: Take notes, Summarize key points"
      },
      "Notes_4": {
        name: "Long-term Goals",
        date: "25-09-2024",
        content: "- Get good grades: Focus on studying, Attend tutoring sessions\n- Join a club: Research options, Attend meetings\n- Volunteer: Find opportunities, Schedule events"
      },
      "Notes_5": {
        name: "Meeting Notes",
        date: "23-09-2024",
        content: "Discussed group project with team: Assigned tasks, Set deadlines, Discussed goals"
      },
      "Notes_6": {
        name: "Brainstorming",
        date: "23-09-2024",
        content: "Ideas for science project: Topic 1: Renewable energy, Topic 2: Robotics, Topic 3: Environmental conservation"
      },
      "Notes_7": {
        name: "Daily Reflection",
        date: "24-09-2024",
        content: "What did I learn today?: Importance of time management, How to prioritize tasks, Benefits of self-care"
      },
      "Notes_8": {
        name: "Short-term Goals",
        date: "25-09-2024",
        content: "- Finish homework: Complete tasks, Review notes\n- Study for quiz: Focus on weak areas, Practice problems"
      },
      "Notes_9": {
        name: "Study Material",
        date: "25-09-2024",
        content: "Notes for history test: Key dates, Important events, Causes and effects"
      },
      "Notes_10": {
        name: "Personal Growth",
        date: "25-09-2024",
        content: "Things to work on: Procrastination, Time management, Self-care, Goal setting"
      }
    };
  
  
  
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
  