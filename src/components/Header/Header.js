import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Search from "../Search";
import style from "./Header.module.scss";
import SearchIcon from "../../assets/icons/SearchIcon";
import { useTheme } from "../../util/hooks/Theme";

function Header() {
  const [menuIsOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuIsOpen);
  };
  const [searchIsOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!searchIsOpen);
  };
  const { isDark, toggleTheme } = useTheme();
  return (
    <header>
      <Container>
        <div
          className={[style.header, menuIsOpen ? style.open : null].join(" ")}
        >
          {menuIsOpen && (
            <span className={style.close_menu} onClick={toggleMenu}>
              Close
            </span>
          )}
          <div className={style.header_main}>
            <div className={style.header_title}>
              <h1>
                <Link to="/">Travel</Link>
              </h1>
            </div>
            <nav>
              <ul className={style.menu}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog/1">Blog</Link>
                </li>
                <li>
                  <Link to="/404">404</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-secondary">
            <div className={style.header_tools}>
              <a href="/#" className="sign-in">
                Sign in
              </a>
              <div className={style.dark_toggle} onClick={toggleTheme}>
                {isDark ? `Light` : `Dark`}
              </div>
              <a href="/#" className="subscribe-toggle">
                Subscribe
              </a>
              <SearchIcon
                className={style.search_icon}
                onClick={toggleSearch}
              />
            </div>
          </div>
        </div>
        <div className={style.header_mobile}>
          <div onClick={toggleMenu} className={style.burger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={style.header_title}>
            <h1>Travel</h1>
          </div>
          <SearchIcon className={style.search_icon} onClick={toggleSearch} />
        </div>
        {menuIsOpen && (
          <div className={style.menu_overlay} onClick={toggleMenu}></div>
        )}
        {searchIsOpen && <Search onClick={toggleSearch} />}
      </Container>
    </header>
  );
}

export default Header;
