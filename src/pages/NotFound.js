import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Go to homepage {`>>`}</Link>
      </div>
    </Layout>
  );
}

export default NotFound;
