import { Sidebar } from "@/app/components/Sidebar";

export default function Page() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 min-h-screen bg-gray-50 dark:bg-slate-900'>
      <Sidebar />
      <section className='col-span-2 bg-blue-500'>more</section>
    </div>
  );
}
