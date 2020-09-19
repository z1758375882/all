import React, { useState } from "react";
// 在 react中实现跨组件传参可以使用一个api叫context上下文
import C from "./components/Counter";
import "./App.css";
import Movies from "./components/Movies";
import Ball from "./components/Ball";
import Favs from "./components/Favs";
import X from "./components/X";
import MoviesC from "./components/MoviesC";

function App() {
  const [color, setcolor] = useState("deeppink");
  return (
    <div className="App">
      {/* <Favs />
      <hr />
      <C step={2} />
      <hr />
      <C step={3} />
      <hr />
      <Movies />
      <Ball v={color} />
      <hr />
      <button onClick={() => setcolor("red")}>红色</button>
      <button onClick={() => setcolor("blue")}>蓝色</button>
      <button onClick={() => setcolor("yellow")}>黄色</button>
      <hr />
      <X /> */}
      <MoviesC />
    </div>
  );
}

export default App;
