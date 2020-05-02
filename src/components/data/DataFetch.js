import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function DataFetch() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("react hooks");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  var serachRef = useRef();

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
    setLoading(true);
    try {
      var data = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setArticles(data.data.hits);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  const handleClear = (event) => {
    setQuery("");
    console.log(serachRef.current);
    serachRef.current.focus();
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
          ref={serachRef}
          onChange={(event) => setQuery(event.target.value)}
        />

        <button type="submit">Search</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
      {loading ? (
        <div>
          <h2>Loading data ----</h2>
        </div>
      ) : (
        <ul>
          {articles.map((art) => (
            <li key={art.objectID}>
              <a href={art.url}>{art.title}</a>
            </li>
          ))}
        </ul>
      )}

      {error && <div>{error.message}</div>}
    </div>
  );
}
