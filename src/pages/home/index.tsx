import React from 'react';

import Filter from 'components/pages/home/filter';
import List from 'components/pages/home/list';
import Preview from 'components/pages/home/preview';
import Header from 'components/reusable/header';
import SearchBar from 'components/reusable/search-bar';

const Home = () => {
  return (
    // layout
    <div className="min-h-screen bg-main-lighter">
      {/* wrapper */}
      <div className="mx-auto flex max-w-[1444px] flex-col gap-y-10 px-10 py-8">
        <Header />
        <main className="flex flex-col mobileL:flex-row">
          {/* handler and content */}
          <section className="flex flex-1 flex-col gap-y-7 bg-amber-400">
            {/* search bar */}
            <SearchBar />
            {/* filter section */}
            <Filter />
            {/* list of content */}
            <List />
          </section>
          {/* detail item */}
          <section className="flex w-80 bg-amber-500">
            <Preview />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
