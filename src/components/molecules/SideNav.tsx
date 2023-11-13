interface SideNavLinks {
  id: number;
  name: string;
  language?: string;
}

function SideNav({
  navs,
  styles,
  handleClick,
  language,
  liStyles,
  children = null,
}: {
  navs: SideNavLinks[];
  styles?: string;
  handleClick?: () => void;
  language?: string;
  liStyles?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`text-gray-700 hover:cursor-pointer ${styles} `}>
      <ul className="w-full">
        {navs.map((navLink, i) => (
          <li
            key={navLink.id || i}
            onClick={handleClick}
            className={`${
              language === navLink.language && language
                ? 'underline'
                : language
                ? 'text-gray-300'
                : ''
            } ${liStyles} mt-1`}
          >
            {navLink.name}
            {children}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
