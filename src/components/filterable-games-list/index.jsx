
import SearchBar from '../search-bar';
import GamesList from '../games-list';

const FilterableGamesList = () => {
  return (
    <div className='filterable-game-list'>
      <SearchBar />
      <GamesList />
    </div>
  );
};

export default FilterableGamesList;
