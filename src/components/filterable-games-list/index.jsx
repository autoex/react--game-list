import SearchBar from '../search-bar';
import GamesList from '../games-list';
import { useState } from 'react';

const FilterableGamesList = () => {
  const [filterText, setFilterText] = useState('');
  const [isWishListChecked, setIsWishListChecked] = useState(false);
  return (
    <div className='filterable-game-list'>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        isWishListChecked={isWishListChecked}
        setIsWishListChecked={setIsWishListChecked}
      />
      <GamesList
        filterText={filterText}
        isWishListChecked={isWishListChecked}
      />
    </div>
  );
};

export default FilterableGamesList;
