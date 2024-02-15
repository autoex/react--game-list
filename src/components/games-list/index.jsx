import { useQuery } from '@tanstack/react-query';
import GameCategoryRow from '../game-category-row';
import GameRow from '../game-row';

const GamesList = () => {
  const rows = [];
  let lastCategory = '';
  const { isPending, error, data } = useQuery({
    queryKey: ['gamesData'],
    queryFn: () =>
      fetch('https://games-list-mock-api.onrender.com/api/games').then((res) =>
        res.json(),
      ),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;
  data.forEach((game) => {
    if (game.category !== lastCategory) {
      rows.push(
        <GameCategoryRow
          category={game.category}
          key={game.category}
        />,
      );
    }
    rows.push(
      <GameRow
        {...game}
        key={game.name}
      />,
    );
    lastCategory = game.category;
  });
  return <ul className='game-list'>{rows}</ul>;
};

export default GamesList;
