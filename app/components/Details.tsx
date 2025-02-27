import Image from 'next/image';
export default async function Details() {
  return (
    <div className=' p-12  space-y-8 '>
      <section className='flex gap-4 justify-between place-items-center p-4'>
        {/* 1 */}
        <article className='flex gap-4 place-items-center'>
          <Image
            className='w-[65px] h-[65px] rounded-full bg-gray-400 p-4'
            src=''
            width={45}
            height={45}
            alt='image'
          />
          <h2 className='text-lg font-bold'>ken</h2>
        </article>

        <article className=' flex place-items-center gap-4 [&_button]:py-3 [&_button]:px-6 [&_button]:bg-black [&_button]:text-white [&_button]:rounded-full'>
          <button className=''>Edit</button>
          <button className=''>Checkout</button>
        </article>
      </section>
      {/* 2 */}
      <section className='flex gap-4 justify-between place-items-center p-8'>
        <p className='flex flex-col gap-3'>
          Owner Name<span className=''>Benjamin</span>
        </p>
        <p className='flex flex-col gap-3'>
          Age<span className=''>2</span>
        </p>
      </section>
      {/* 3 */}
      <section className=' text-center'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis magni
        illum totam suscipit, aliquam mollitia nihil sit porro aliquid veniam.
        Omnis, illo cum!
      </section>
    </div>
  );
}
