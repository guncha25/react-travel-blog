import { useState } from "react";
import style from "./ArticleList.module.scss";
import Data from "../../util/Data";

function ArticleList(props) {
  const [listCount, setListCount] = useState(props.item_count);

  const loadMore = () => {
    setListCount(listCount + parseInt(props.item_count));
  };

  console.log(listCount);
  return (
    <>
      <div className={style.article_list}>
        {Data.slice(0, listCount).map((article) => (
          <article key={article.id}>
            <div className={style.article_media}>
              <img
                className={style.article_image}
                src={`/images/${article.id}.jpg`}
                alt={article.title}
              />
            </div>
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
          </article>
        ))}
      </div>
      {listCount < Data.length && (
        <div className={style.footer}>
          <button className={style.load_more} onClick={loadMore}>
            Load more
          </button>
        </div>
      )}
    </>
  );
}

export default ArticleList;
