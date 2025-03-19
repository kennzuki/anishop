import React from 'react';
import Card from './Card';
import{ SearchInput} from './SearchInput';

export const Sidebar = () => {
  return (
    <div className='p-4 bg-gray-100 dark:bg-slate-100 flex flex-col gap-4 items-center rounded-xl text-black font-semibold'>
      <SearchInput />
      <section className=''>
        <Card />
      </section>
      <section className=''>
        <button className='bg-black text-white text-3xl font-bold rounded-full px-4 py-2 md:translate-x-40'>
          +
        </button>
      </section>
    </div>
  );
};
