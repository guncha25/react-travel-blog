import Layout from "../components/Layout";
import { useParams, Redirect } from "react-router-dom";
import Data from "../util/Data";
import style from "./Blog.module.scss";
import ArticleList from "../components/ArticleList";

function Blog() {
  const { id } = useParams();
  const article = Data.find((item) => item.id === id);
  if (!article) {
    return <Redirect to="/404" />;
  }
  return (
    <Layout>
      <div className={style.header}>
        <div className={style.part}>
          <img
            className={style.article_image}
            src={`${process.env.PUBLIC_URL}/images/${article.id}.jpg`}
            alt={article.title}
          />
        </div>
        <div className={style.part}>
          <div className={style.meta}>
            <span>Travel</span>
            <span>Summer</span>
          </div>
          <h1>{article.title}</h1>
          <div className={style.date_read}>
            <span>{new Date().toDateString()}</span> - <span>2 min read</span>
          </div>
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
        </div>
      </div>
      <div className={style.main}>
        {[...Array(5)].map(() => (
          <p>
            {article.ingress} {article.ingress} {article.ingress}
          </p>
        ))}
      </div>

      <section className={style.more}>
        <h2>Similar posts</h2>
        <ArticleList item_count="3" />
      </section>
    </Layout>
  );
}

export default Blog;
