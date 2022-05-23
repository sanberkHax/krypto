import { useState, useEffect } from 'react';
import { SelectedStarIcon } from './SelectedStarIcon';
import { UnselectedStarIcon } from './UnselectedStarIcon';

export const StarButton = ({ onClick, starred }) => {
  const [isStarred, setIsStarred] = useState(starred);

  useEffect(() => {
    setIsStarred(starred);
  }, [starred]);

  const clickHandler = () => {
    onClick();
    setIsStarred((prev) => !prev);
  };
  return (
    <button onClick={clickHandler} className="flex justify-center items-center">
      {isStarred ? <SelectedStarIcon /> : <UnselectedStarIcon />}
    </button>
  );
};
