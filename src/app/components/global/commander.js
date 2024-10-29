'use client'

import { motion } from "framer-motion"
import { useState, useEffect } from 'react';

export function Commander({ onEnter, onSearch }) {

  const [showPrompt, setShowPrompt] = useState(false);
  const [feedback, setfeedback] = useState('');
  const [command, setCommand] = useState('');
  const [mode, setmode] = useState('Enter');
  const [cmdcolor, setcmdcolor] = useState('text-black')


  const handleKeyPress = (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === '/') {
      setShowPrompt(true);
    } else if ([13, 'Escape'].includes(event.keyCode)) {
      if (event.metaKey || event.ctrlKey) return;
      setShowPrompt(false);
    }
  };


  const cmdparser = (input) => {
    setCommand(input);
    if (input.startsWith('>')) {
      setmode('Execute')

    } else if (input.startsWith('?')) {
      setmode('Ask')

    } else if (input.startsWith('/')) {
      if (input.includes(' ')) {
        setcmdcolor('text-red-500');
        setfeedback('// Goto cannot contain spaces')
      } else {

        setcmdcolor('text-black')
        setfeedback('')
      }
      setmode('Go To')

    } else {
      setmode('Search')

    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);


  return (
    <div>
      {showPrompt ? (
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed z-10 inset-y-0 left-0 w-full backdrop-blur-sm bg-black/40 text-gray-800 flex justify-center pt-32"
        >
          <div className='relative w-[50%] items-center'>
            <motion.input
              initial={{ opacity: 0, translateY: -74 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.2 }}
              type="text"
              value={command}
              onChange={(event) => cmdparser(event.target.value)}
              autoFocus
              placeholder=' > Enter Command or / perform a search'
              className={`w-full h-16 px-4 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500 absolute left-0 ${cmdcolor} `}
            ></motion.input>
            <div className='absolute right-5 p-4 text-right text-red-700 flex items-center text-lg'>{feedback}</div>
          </div>

          <motion.button
            initial={{ opacity: 0, translateY: -74 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              onEnter(command);
              setShowPrompt(false);
              setCommand('');
            }}
            className="bg-blue-500 h-16 w-24 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {mode}
          </motion.button>
        </motion.div>
      ) : null}
    </div>

  );
};
