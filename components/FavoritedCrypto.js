import Image from 'next/image';
import { StarButton } from './StarButton';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { useContext } from 'react';
import { FavoritesContext } from '../store/FavoritesContext';

export const FavoritedCrypto = ({
  id,
  icon,
  name,
  price,
  oneDayChange,
  sparkline,
}) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const favoriteHandler = () => {
    const deleted = favorites.filter((f) => f.id !== id);
    setFavorites(deleted);
  };

  return (
    <tr className="border-t-2 border-slate-300 align-middle">
      <td>
        <StarButton starred onClick={favoriteHandler} />
      </td>
      <td>
        <div className="relative w-7 h-7">
          <Image src={icon} alt="btc" layout="fill" />
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{oneDayChange}</td>
      <td>
        <div className="flex justify-center items-center">
          <Sparklines data={sparkline} svgWidth={150} svgHeight={30}>
            <SparklinesLine color="#253e56" />
          </Sparklines>
        </div>
        {/* <Image src={sparkline} alt="sparkline" width="120px" height="30px" /> */}
      </td>
    </tr>
  );
};
