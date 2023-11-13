import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../../context/LanguageContext';
import { rightNavs } from '../../../utils/rightNavs';
import Title from '../../atoms/Title';
import NavLinks from '../../atoms/NavLinks';
import './Header.css';
import Hamburger from '../../atoms/Hamburger';
import SideNav from '../SideNav';
import SideNavLinks from '../../atoms/SideNavLinks';

function Header() {
  // const [isOpenSubMenu, setIsOpenSubMenu] = useState({
  //   isOpenSubMenu: false,
  //   id: NaN,
  // });
  const { navs } = NavLinks();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { navs: leftNavs } = SideNavLinks();

  const { i18n } = useTranslation();
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    changeLanguage(lng);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log(showMenu);
  return (
    <header className="mobile:-mx-16 mobile:mt-4 mobile:pl-4 flex justify-around mt-8 mx-28 text-gray-800 z-10">
      <Link to="/">
        <Title addClass="mobile:text-[0.7rem] " />
      </Link>

      <nav className={` z-20 text-sm relative `}>
        <Hamburger showMenu={showMenu} toggleMenu={toggleMenu} />
        <ul
          className={`flex list-none justify-end items-start flex-1 mobile:fixed  mobile:flex-col  mobile:-top-2 mobile:-right-0 mobile:bg-gray-50 mobile:h-screen mobile:justify-start mobile:items-start  mobile:pt-10  transition-right duration-500 ease-out  z-10  whitespace-pre-wrap  mobile:max-w-[160px] ${
            !showMenu && ' mobile:right-[-14rem] '
          }`}
          // Adjust the max width to your desired value
        >
          {' '}
          {navs.map((navLink) => (
            <li
              className="text-[0.95rem] ml-12 relative flex justify-center items-center mobile:text-[0.7rem] mobile:mt-4 mobile:ml-0 mobile:py-2 mobile:hover:bg-gray-100 mobile:w-full mobile:justify-start mobile:px-4 mobile:overflow-hidden mobile:transition-all mobile:duration-300 mobile:ease-in-out whitespace-pre-wrap px-2"
              key={navLink.id}
            >
              <div
                className="cursor-pointer group text-gray-600 transition duration-300"
                // onMouseEnter={() =>
                //   setIsOpenSubMenu({
                //     isOpenSubMenu: true,
                //     id: navLink.id,
                //   })
                // }
                // onMouseLeave={() =>
                //   setIsOpenSubMenu({
                //     isOpenSubMenu: false,
                //     id: navLink.id,
                //   })
                // }
              >
                {navLink.name}

                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-600"></span>

                {/* {isOpenSubMenu.isOpenSubMenu &&
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
                  )} */}
              </div>
            </li>
          ))}{' '}
          <div className="mt-10 border-t-4 w-full hidden mobile:block mobile:text-[0.7rem] relative">
            <SideNav
              navs={leftNavs}
              styles="mobile:flex  "
              liStyles="py-4 mobile:hover:bg-gray-100 w-[100%] pl-4"
            >
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-600 "></span>
            </SideNav>
          </div>
          <div className="relative h-full w-full hidden mobile:block mobile:text-[0.6rem]">
            <SideNav
              navs={rightNavs}
              styles=" mobile:flex absolute bottom-24  pl-4"
              liStyles="w-[100%] "
              language={language}
              handleClick={() =>
                handleLanguageChange(language === 'en' ? 'es' : 'en')
              }
            />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
