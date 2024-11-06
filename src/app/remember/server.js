'use server'

import data from '@/MockData/mockmemories.json'
import * as motion from "framer-motion/client"

export async function Render(){
    let remember = data;
    return(
        <>
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
              <p className="text-gray-400 text-xs">Disappears by {remember[key].date}</p>
            </div>
            <p className="max-w-sm text-gray-600 text-md mb-4">
              {remember[key].content}
            </p>
          </motion.div>
        ))}
        </>
    )
}