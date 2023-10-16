import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../atoms/Title';
import { navLinks } from '../../../utils/navLinks';
import './Header.css';
import Hamburger from '../../atoms/Hamburger';

function Header() {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState({
    isOpenSubMenu: false,
    id: NaN,
  });

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log(showMenu);
  return (
    <header className="mobile:-mx-16 mobile:mt-4 mobile:pl-4 flex justify-around mt-8 mx-28 text-gray-800 z-10">
      <Link to="/">
        <Title addClass="mobile:text-[0.6rem] " />
      </Link>

      <nav className={` z-20 text-sm relative`}>
        {/* <button
          className={`hidden mr-4 mobile:block ${
            showMenu === 'close' && 'mobile:block'
          }`}
          onClick={openMenu}
        >
          open
        </button>
        <button
          className={`hidden z-50  w-10 closeButton absolute right-8 top-4  ${
            showMenu && 'mobile:block'
          }`}
          onClick={closeMenu}
        >
          close
        </button> */}

        <Hamburger showMenu={showMenu} toggleMenu={toggleMenu} />
        <ul
          className={`flex list-none justify-end items-start flex-1 mobile:fixed  mobile:flex-col  mobile:-top-2 mobile:-right-0 mobile:bg-gray-50 mobile:h-screen mobile:justify-start mobile:items-start  mobile:pt-10  transition-right duration-500 ease-out  z-10   ${
            !showMenu && ' mobile:right-[-10rem] '
          }`}
        >
          {' '}
          {navLinks.map((navLink) => (
            <li
              className="text-sm ml-12 relative flex justify-center mobile:text-[0.7rem] mobile:ml-0 mobile:py-2 mobile:hover:bg-gray-100 mobile:w-full mobile:justify-start mobile:px-4 mobile:overflow-hidden mobile:transition-all mobile:duration-300 mobile:ease-in-out"
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;