export default function Remember() {

  let remember = {
    "Remember_1": {
      name: "Birthday",
      date: "25-09-2024",
      content: "Buy gift for John's birthday"
    },
    "Remember_2": {
      name: "Appointment",
      date: "22-09-2024",
      content: "Doctor's appointment at 2 PM"
    },
    "Remember_3": {
      name: "Event",
      date: "25-09-2024",
      content: "Attend concert at 7 PM"
    },
    "Remember_4": {
      name: "Task",
      date: "25-09-2024",
      content: "Finish project report by end of day"
    },
    "Remember_5": {
      name: "Phone Call",
      date: "23-09-2024",
      content: "Call mom to catch up"
    },
    "Remember_6": {
      name: "Meeting",
      date: "23-09-2024",
      content: "Team meeting at 10 AM"
    },
    "Remember_7": {
      name: "Errand",
      date: "24-09-2024",
      content: "Pick up groceries"
    },
    "Remember_8": {
      name: "Bill Payment",
      date: "25-09-2024",
      content: "Pay electricity bill"
    },
    "Remember_9": {
      name: "Travel",
      date: "25-09-2024",
      content: "Book flight tickets for vacation"
    },
    "Remember_10": {
      name: "Gift",
      date: "25-09-2024",
      content: "Buy anniversary gift for Friend"
    }
  };

    return (
      <div className="w-screen min-h-screen p-12">
        <div className="grid grid-cols-3 grid-flow-dense gap-8 place-items-center items-start">
  
          {/* Looping with the provide format to render each note */}
          {/* This design is a work in progress template */}
          {/* Weird sizing is intenntional*/}
          {Object.keys(remember).map((key) => (
            <div key={key} className="flex w-80 min-h-32 items-center justify-center flex-col border-2 border-white p-5">
              <h2>{remember[key].name}</h2>
              <p>{remember[key].date}</p>
              <p>{remember[key].content}</p>
            </div>
          ))}
  
          {/* Needs to be offloaded to a secondary function*/}
  
        </div>
      </div>
    );
  }
  