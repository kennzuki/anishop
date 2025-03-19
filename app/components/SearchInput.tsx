'use client';

import { useSearchContext } from '../app/dashboard/hooks';

export const SearchInput = () => {
  const { searchQuery, handleChangeSearchQuery } = useSearchContext();
  return (
    <>
      <section className='mb-4'>
        <input
          className='p-2 cursor-pointer border rounded-xl'
          type='search'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => handleChangeSearchQuery(e.target.value)}
        />
      </section>
    </>
  );
};
