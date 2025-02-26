export default function Page() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-4'>
      <section className='col-span-1 bg-red-300'>sidebar</section>
      <section className='col-span-2 bg-blue-500'>more</section>
    </div>
  );
}
