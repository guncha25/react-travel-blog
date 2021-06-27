import { useState, useEffect, useCallback } from "react";
import style from "./Carousel.module.scss";

const ARTICLES = [
  {
    id: "1",
    title: "Maecenas sed diam eget risus varius blandit sit amet non magna.",
    author: "John Doe",
    avatar: "avatar-boy.jpg",
    ingress:
      "Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.",
  },
  {
    id: "2",
    title: "Vestibulum id ligula porta felis euismod semper.",
    author: "Jane Doe",
    avatar: "avatar-girl.jpg",
    ingress:
      "Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
  },
];

function Carousel() {
  const [index, setIndex] = useState(0);

  const nextIndex = useCallback(() => {
    setIndex(index + 1 > ARTICLES.length - 1 ? 0 : index + 1);
  }, [index]);

  const prevIndex = () => {
    setIndex(index - 1 < 0 ? ARTICLES.length - 1 : index - 1);
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
        {ARTICLES.map((article, key) => (
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
        <span onClick={prevIndex}>Previous</span>
        <span onClick={nextIndex}>Next</span>
      </div>
    </div>
  );
}

export default Carousel;
