import { FavoritedCrypto } from './FavoritedCrypto';
import { SelectedStarIcon } from './SelectedStarIcon';
import { useContext } from 'react';
import { FavoritesContext } from '../store/FavoritesContext';

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex gap-2 justify-center items-center">
        <SelectedStarIcon />
        <h1 className="font-bold">Favorites</h1>
      </div>
      <div className="w-full text-sm flex justify-center border-2 border-solid border-black rounded-lg p-1">
        <table className="table-auto w-full text-center border-collapse">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Coin</th>
              <th>Price</th>
              <th>24h</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((f) => (
              <FavoritedCrypto
                id={f.id}
                key={f.id}
                icon={f.icon}
                price={f.price}
                oneDayChange={f.oneDayChange}
                name={f.name}
                sparkline={f.sparkline}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
