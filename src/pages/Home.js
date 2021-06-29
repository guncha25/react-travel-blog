import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import ArticleList from "../components/ArticleList";

function Home() {
  return (
    <Layout>
      <Carousel />
      <ArticleList item_count="6" />
    </Layout>
  );
}

export default Home;
