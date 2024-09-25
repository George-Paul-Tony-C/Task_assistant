export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen p-5">
     <div className="text-6xl">Dashboard Page</div>
     <div className="pt-10 text-4xl pb-4">Pages: </div>
     <div className="flex flex-col justify-start text-2xl text-blue-400">
      <a href="/calendar">Calendar</a>
      <a href="/remember">Remember</a>
      <a href="/settings">Settings</a>
      <a href="/tasks">Tasks</a>
      <a href="/notes">Notes</a>
      <a href="/workflow">Workflow Customization</a>
     </div>
    </div>
  );
}
