import React from 'react';
import Card from './Card';
import { SearchInput } from './SearchInput';
import Buttons from './Buttons';
export const Sidebar = () => {
  return (
    <div className='p-4 bg-gray-100 dark:bg-slate-100 flex flex-col gap-4 items-center rounded-xl text-black font-semibold'>
      <SearchInput />
      <section className=''>
        <Card />
      </section>
      <section className=''>
        <Buttons actionType='add' />
      </section>
    </div>
  );
};
