import style from "./Container.module.scss";

const Container = (props) => (
  <div className={[style.container, props.className].join(" ")}>
    {props.children}
  </div>
);

export default Container;
