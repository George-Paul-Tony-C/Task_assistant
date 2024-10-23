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
      <div className="w-screen min-h-screen p-12 overflow-auto">
        <div className="grid grid-cols-auto grid-flow-row gap-8 place-items-center items-start">
  
          {/* Looping with the provide format to render each note */}
          {/* This design is a work in progress template */}
          {/* Weird sizing is intenntional*/}
          {Object.keys(notes).map((key) => (
            <div key={key} className="text-black flex w-max min-h-32 items-center justify-center flex-col border-2 border-black p-5">
              <h2>{notes[key].name}</h2>
              <p>{notes[key].date}</p>
              <p>{notes[key].content}</p>
            </div>
          ))}
  
          {/* Needs to be offloaded to a secondary function*/}
  
        </div>
      </div>
    );
  }
  