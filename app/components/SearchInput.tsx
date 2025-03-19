'use client'

import {useState} from 'react';

export const SearchInput = () => {

  return (
    <>
      <section className='mb-4'>
        <input
          className='p-2 cursor-pointer border rounded-xl'
          type='search'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) =>setSearchQuery(e.target.value)}
        />
      </section>
    </>
  );
};
