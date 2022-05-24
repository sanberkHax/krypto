import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export const Search = () => {
  const [inputValue, setInputValue] = useState();
  const [searchData, setSearchData] = useState();

  const debounced = useDebouncedCallback((value) => {
    setInputValue(value);
  }, 700);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${inputValue}`
      );
      setSearchData(await response.json());
    };
    fetchSearchResults();
  }, [inputValue]);

  return (
    <>
      <input
        type="search"
        name="search"
        onChange={(e) => debounced(e.target.value)}
        id="search"
        className="border-black p-1 border-2 w-1/2 rounded-md"
        placeholder="Search"
      />
      {inputValue?.length > 0 && (
        <ul className="absolute top-8 border-2 z-10 border-slate-500 bg-white w-3/4 sm:w-1/2">
          {searchData?.coins.map((s) => (
            <li
              key={s.id}
              className="w-full h-full border-[1px] p-1 border-slate-500 hover:bg-slate-200"
            >
              <Link href={`/${s.id}`}>{s.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
