import React from 'react';

import { useLocation } from 'react-router-dom';

import menus from './menus';

const Header = () => {
  const location = useLocation();
  return (
    <div className="hide-scrollbar scroll-box flex h-14 flex-nowrap gap-x-6 overflow-x-scroll rounded-lg bg-white px-8 shadow-3 mobileL:h-20 laptop:h-20 laptopL:justify-around">
      {menus.map(item => {
        const Icon = item?.icon;
        const isActive = item?.to === location.pathname;
        return (
          <div
            key={item?.label}
            className={`flex cursor-pointer items-center justify-between gap-x-3 border-b-3 transition-all ease-in-out ${
              isActive ? 'border-main-primary text-main-primary' : 'border-transparent text-dark-3'
            } hover:border-main-primary hover:text-main-primary`}
          >
            <Icon className="h-4 w-4 fill-current mobileL:h-6 mobileL:w-6 laptop:h-7 laptop:w-7" />
            <span className="whitespace-nowrap text-p1 font-semibold laptop:text-h6">{item?.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
