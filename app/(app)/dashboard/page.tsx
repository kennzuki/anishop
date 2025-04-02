import Details from "@/app/components/Details";
import { Sidebar } from "@/app/components/Sidebar";

export default function Page() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 min-h-screen bg-gray-50 dark:bg-slate-900'>
      <Sidebar />
      <div className="col-span-2">
      <Details/>
      </div>

      
    </div>
  );
}
