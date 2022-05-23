import { StarButton } from './StarButton';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { FavoritesContext } from '../store/FavoritesContext';

export const Crypto = ({
  id,
  name,
  icon,
  price,
  oneDayChange,
  oneDayVolume,
  sparkline,
}) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const isFavorite = favorites.find((f) => id === f.id);

  const favoriteHandler = () => {
    if (isFavorite) {
      const deleted = favorites.filter((f) => f.id !== id);
      setFavorites(deleted);
    } else {
      setFavorites((prev) => [
        ...prev,
        { id, name, icon, price, oneDayChange, oneDayVolume, sparkline },
      ]);
    }
  };

  return (
    <tr className="border-t-2 border-slate-300 align-middle">
      <td>
        {isFavorite ? (
          <StarButton starred onClick={favoriteHandler} />
        ) : (
          <StarButton onClick={favoriteHandler} />
        )}
      </td>
      <td>
        <div className="relative w-7 h-7">
          <Image src={icon} alt="btc" layout="fill" />
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{oneDayChange}</td>
      <td>{oneDayVolume}</td>
    </tr>
  );
};
