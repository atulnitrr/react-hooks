import React, { useState, useEffect } from "react";
import axios from "axios";
import { getDefaultNormalizer } from "@testing-library/react";

export default function DataFetch() {
  const [articles, setArticles] = useState([]);

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

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    var data = await axios.get(
      "http://hn.algolia.com/api/v1/search?query=reacthooks"
    );
    setArticles(data.data.hits);
  };

  // we need to put [] as it will run only in case of mount and unmount otherwise it will be infinte loop
  return (
    <div>
      <h2>Data fetch</h2>
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
