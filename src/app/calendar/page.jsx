import { Calendar } from '@/components/calendar/calendar';
import { HoursOverview } from '@/components/calendar/taskOverview';


export default function calendar_page(){
  return(
    <div className='flex justify-evenly w-screen'>
      <Calendar className="w-[30%]"/>
      <HoursOverview className="w-[70%]"/>
    </div>
  )
}




