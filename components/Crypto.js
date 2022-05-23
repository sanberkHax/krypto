import { StarButton } from './StarButton';
import Image from 'next/image';

export const Crypto = ({ name, icon, price, oneDayChange, oneDayVolume }) => {
  return (
    <tr className="border-t-2 border-slate-300 align-middle">
      <td>
        <StarButton />
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
