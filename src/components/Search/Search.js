import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import style from "./Search.module.scss";

const ARTICLES = [
  {
    id: "1",
    title: "Justo Fusce Ridiculus",
  },
  {
    id: "2",
    title: "Pharetra Dapibus Sollicitudin Elit Amet",
  },
  {
    id: "3",
    title: "Lorem Pellentesque Malesuada",
  },
  {
    id: "4",
    title: "Justo Nibh Porta",
  },
  {
    id: "5",
    title: "Euismod Risus Nibh Quam Sollicitudin",
  },
  {
    id: "6",
    title: "Cras Ultricies Elit Risus Fusce",
  },
  {
    id: "7",
    title: "Kas a blanka ko taks kola",
  },
  {
    id: "8",
    title: "Cool tas nu gan ir kkas you.",
  },
];

function Search(props) {
  const [results, setResults] = useState([]);
  const searchRef = useRef();

  const searchResults = (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    const data =
      searchValue === ""
        ? []
        : ARTICLES.filter((article) => {
            return article.title
              .toLowerCase()
              .includes(searchRef.current.value.toLowerCase());
          });
    setResults(data.slice(0, 3));
  };
  return (
    <div className={style.search_overlay}>
      <Container>
        <span className={style.close_search} onClick={props.onClick}>
          Close
        </span>
        <form onSubmit={searchResults}>
          <input
            className={style.search_input}
            placeholder="Type to Search"
            type="search"
            ref={searchRef}
            onChange={searchResults}
          />
        </form>
        <div className={style.search_results}>
          {results &&
            results.map((result) => (
              <h2 key={result.id} className={style.search_item}>
                <Link onClick={props.onClick} to="/">
                  {result.title}
                </Link>
              </h2>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default Search;
