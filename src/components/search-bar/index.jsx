import React from 'react';

const SearchBar = ({
  filterText,
  setFilterText,
  isWishListChecked,
  setIsWishListChecked,
}) => {
  const filterTextHandler = (e) => {
    e.preventDefault();
    setFilterText(e.target.value);
  };
  const isWishListCheckedHandler = (e) => {
    setIsWishListChecked((prev) => !prev);
  };
  return (
    <form className='filter-form'>
      <input
        type='text'
        className='search-input'
        placeholder='Name...'
        value={filterText}
        onChange={filterTextHandler}
      />
      <label onChange={isWishListCheckedHandler}>
        <input
          type='checkbox'
          className='in-wish-list-checkbox'
          value={isWishListChecked}
        />
        Only on wish list
      </label>
    </form>
  );
};

export default SearchBar;
