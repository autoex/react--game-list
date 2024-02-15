import React from 'react';

const SearchBar = () => {
  return (
    <form className='filter-form'>
      <input
        type='text'
        className='search-input'
        placeholder='Name...'
      />
      <label>
        <input
          type='checkbox'
          className='in-wish-list-checkbox'
        />
        Only on wish list
      </label>
    </form>
  );
};

export default SearchBar;
