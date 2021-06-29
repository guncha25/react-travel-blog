import { Link } from "react-router-dom";
import Container from "../Container";
import style from "./Footer.module.scss";
import Mail from "../../assets/icons/Mail";
import Linkedin from "../../assets/icons/Linkedin";
import Facebook from "../../assets/icons/Facebook";

function Footer() {
  return (
    <footer>
      <Container className={style.footer}>
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
        <nav>
          <ul className={style.social_menu}>
            <li>
              <a href="mailto:guntis.jakovins@gmail.com">
                <Mail className={style.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <Linkedin className={style.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com">
                <Facebook className={style.icon} />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
