import { Link } from "react-router-dom";
import Container from "../Container";
import style from "./Header.module.scss";

function Header() {
  return (
    <header>
      <Container>
        <div className={style.header}>
          <div className={style.header_main}>
            <div className={style.header_title}>
              <h1>Korima</h1>
            </div>
            <nav>
              <ul className={style.menu}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
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
              <a href="/#" className="darkmode-toggle">
                Dark|Light
              </a>
              <a href="/#" className="subscribe-toggle">
                Subscribe
              </a>
              <a href="/#" className="search-toggle">
                Search
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
