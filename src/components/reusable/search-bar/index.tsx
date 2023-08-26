import React from 'react';

import { pokeballImage } from 'components/assets';

const SearchBar = () => {
  return (
    <div className="relative flex h-16 items-center gap-x-4 rounded-lg bg-white px-5 py-3 shadow-3">
      <input className="flex-1 text-p1 outline-none" placeholder="Search your Pokemon!" />
      <div className="grid h-8 w-8 items-center justify-center rounded-lg bg-main-primary shadow-red-1">
        <img src={pokeballImage} alt="search" width={20} height={20} />
      </div>
    </div>
  );
};

export default SearchBar;
