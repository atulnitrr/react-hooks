import React, { useState, useEffect } from "react";
import axios from "axios";
import { getDefaultNormalizer } from "@testing-library/react";

export default function DataFetch() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("react hooks");

  // useEffect(async () => {
  //   // async await method
  //   // dont do like this
  //   const data = await axios.get(
  //     "http://hn.algolia.com/api/v1/search?query=reacthooks"
  //   );
  //   setArticles(data.data.hits);

  //   /*
  //   // normal promise method
  //   axios
  //     .get("http://hn.algolia.com/api/v1/search?query=reacthooks")
  //     .then((value) => {
  //       // console.log(value.data);
  //       setArticles(value.data.hits);
  //     });

  //     */
  // }, []);

  // we need to put [] as it will run only in case of mount and unmount otherwise it will be infinte loop

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    var data = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${query}`
    );
    setArticles(data.data.hits);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  return (
    <div>
      {/* <h2>Data fetch</h2> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="query"
          placeholder="seach...."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {articles.map((art) => (
          <li key={art.objectID}>
            <a href={art.url}>{art.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
