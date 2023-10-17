import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../atoms/Title';
import NavLinks from '../../atoms/NavLinks';
import './Header.css';
import Hamburger from '../../atoms/Hamburger';
import LanguageToggleButton from '../../atoms/LanguageToggleButton';

function Header() {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState({
    isOpenSubMenu: false,
    id: NaN,
  });
  const { navs } = NavLinks();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log(showMenu);
  return (
    <header className="mobile:-mx-16 mobile:mt-4 mobile:pl-4 flex justify-around mt-8 mx-28 text-gray-800 z-10">
      <Link to="/">
        <Title addClass="mobile:text-[0.7rem] " />
      </Link>

      <nav className={` z-20 text-sm relative`}>
        <Hamburger showMenu={showMenu} toggleMenu={toggleMenu} />
        <ul
          className={`flex list-none justify-end items-start flex-1 mobile:fixed  mobile:flex-col  mobile:-top-2 mobile:-right-0 mobile:bg-gray-50 mobile:h-screen mobile:justify-start mobile:items-start  mobile:pt-10  transition-right duration-500 ease-out  z-10   ${
            !showMenu && ' mobile:right-[-10rem] '
          }`}
        >
          {' '}
          {navs.map((navLink) => (
            <li
              className="text-sm ml-12 relative flex justify-center mobile:text-[0.7rem] mobile:mt-4 mobile:ml-0 mobile:py-2 mobile:hover:bg-gray-100 mobile:w-full mobile:justify-start mobile:px-4 mobile:overflow-hidden mobile:transition-all mobile:duration-300 mobile:ease-in-out"
              key={navLink.id}
            >
              <div
                className="cursor-pointer"
                onMouseEnter={() =>
                  setIsOpenSubMenu({
                    isOpenSubMenu: true,
                    id: navLink.id,
                  })
                }
                onMouseLeave={() =>
                  setIsOpenSubMenu({
                    isOpenSubMenu: false,
                    id: navLink.id,
                  })
                }
              >
                {navLink.name}
                {isOpenSubMenu.isOpenSubMenu &&
                  isOpenSubMenu.id === navLink.id && (
                    <ul
                      className={`subNav bg-gray-50 w-full flex flex-col items-center mobile:items-start absolute mobile:relative mobile:h-full mobile:bg-gray-100 mobile:hover:bg-gray-150 ${
                        isOpenSubMenu.isOpenSubMenu &&
                        isOpenSubMenu.id === navLink.id
                          ? 'open'
                          : ''
                      }`}
                    >
                      {navLink.subNav?.map((subLink, i) => (
                        <li
                          key={i}
                          className="w-full text-center py-2 text-[0.7rem] text-gray-500 hover:bg-gray-100 mobile:text-left mobile:py-1 mobile:px-4 mobile:hover:bg-gray-150 mobile:text-[0.6rem]"
                        >
                          <span className="hidden mobile:block">- </span>
                          <Link to={subLink.href}>{subLink.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            </li>
          ))}
          <LanguageToggleButton
            styles={`${
              showMenu
                ? 'right-28 transition-right duration-700 ease-out  z-10 bottom-4'
                : 'mobile:-right-32 mobile:transition-right mobile:duration-700 mobile:ease-out  mobile:z-10'
            }`}
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
