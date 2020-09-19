import React, { useState, useEffect, useContext } from "react";
import { Context } from "./Accp";
import { loadlist } from "../services/movies.js";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const c = useContext(Context);
  // useEffect 当第二个参数的值发生改变之后回调函数会再次执行
  useEffect(() => {
    loadlist(page).then((res) => {
      setMovies([...movies, ...res.data.data.list]);
    });
  }, [page]);
  const loadmore = () => {
    setPage(page + 1);
  };
  return (
    <ul>
      <li onClick={() => c.sc(c.count + 1)}>当前收藏数量为{c.count}</li>
      {movies.map((item) => (
        <li key={item.albumId}>{item.name}</li>
      ))}
      <li>
        <button onClick={loadmore}>加载更多</button>
      </li>
    </ul>
  );
}

export default Movies;
