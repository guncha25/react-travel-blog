import { useRef } from "react";
import Container from "../Container";
import style from "./Subscribe.module.scss";

function Search(props) {
  const emailRef = useRef();

  const handleSubscribe = (e) => {
    e.preventDefault();
    props.onSubmit(`${emailRef.current.value} subscribed to mailing list!`);
    props.onClick();
  };

  return (
    <div className={style.search_overlay}>
      <Container>
        <form className={style.form} onSubmit={handleSubscribe}>
          <span className={style.close_search} onClick={props.onClick}>
            Close
          </span>
          <div className={style.info}>Subscribe to newsletters.</div>
          <div className={style.form_control}>
            <label htmlFor="email">E-mail</label>
            <input
              className={style.search_input}
              required
              placeholder="name@mail.com"
              type="email"
              id="email"
              ref={emailRef}
            />
          </div>
          <div className={style.form_control}>
            <input type="submit" className={style.btn} value="Subscribe" />
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Search;
