import { useState, useEffect, useCallback } from "react";
import style from "./Carousel.module.scss";
import Left from "../../assets/icons/Left";
import Right from "../../assets/icons/Right";
import Data from "../../util/Data";

function Carousel() {
  const [index, setIndex] = useState(0);

  const nextIndex = useCallback(() => {
    setIndex(index + 1 > Data.length - 1 ? 0 : index + 1);
  }, [index]);

  const prevIndex = () => {
    setIndex(index - 1 < 0 ? Data.length - 1 : index - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextIndex();
    }, 5000);

    return () => clearTimeout(timer);
  }, [index, nextIndex]);

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {Data.map((article, key) => (
          <div
            className={[
              style.article,
              index === key ? style.current : null,
            ].join(" ")}
            key={article.id}
          >
            <img
              className={style.article_image}
              src={`${process.env.PUBLIC_URL}/images/${article.id}.jpg`}
              alt={article.title}
            />
            <div className={style.article_content}>
              <h2>{article.title}</h2>
              <div className={style.article_author}>
                <div className={style.avatar}>
                  <img
                    width="30px"
                    height="30px"
                    src={`${process.env.PUBLIC_URL}/images/${article.avatar}`}
                    alt=""
                  />
                </div>
                <span>{article.author}</span>
              </div>
              <div className={style.article_ingress}>{article.ingress}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.control}>
        <span onClick={prevIndex}>
          <Left className={style.control_arrow} />
        </span>
        <span onClick={nextIndex}>
          <Right className={style.control_arrow} />
        </span>
      </div>
    </div>
  );
}

export default Carousel;
