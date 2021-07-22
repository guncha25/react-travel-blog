import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Search from "../Search";
import Subscribe from "../Subscribe";
import style from "./Header.module.scss";
import SearchIcon from "../../assets/icons/SearchIcon";
import { useTheme } from "../../util/hooks/Theme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const [menuIsOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuIsOpen);
  };
  const [searchIsOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!searchIsOpen);
  };
  const [subscribeIsOpen, setSubscribeIsOpen] = useState(false);
  const toggleSubscribe = () => {
    setSubscribeIsOpen(!subscribeIsOpen);
  };
  const { isDark, toggleTheme } = useTheme();

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (menuIsOpen && touchEnd - touchStart < -50) {
      setMenuOpen(false);
    }
  };

  return (
    <header>
      <Container>
        <div
          className={[style.header, menuIsOpen ? style.open : null].join(" ")}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <span className={style.close_menu} onClick={toggleMenu}>
            Close
          </span>
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
              <div className={style.dark_toggle} onClick={toggleTheme}>
                {isDark ? `Light` : `Dark`}
              </div>
              <div className="subscribe-toggle" onClick={toggleSubscribe}>
                Subscribe
              </div>
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
        {subscribeIsOpen && (
          <Subscribe
            onClick={toggleSubscribe}
            onSubmit={(text) => toast(text)}
          />
        )}
        <ToastContainer position="bottom-right" />
      </Container>
    </header>
  );
}

export default Header;
