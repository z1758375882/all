import React, { useContext } from "react";
import { Context } from "./Accp";

function Favs() {
  // useContext之后就可一获取到provider中提供的数据
  const c = useContext(Context); //使用useContext把当前项目中的上下文数据在当前组件中进行使用
  console.log(c);
  return <div>当前收藏值为{c.count}</div>;
}

export default Favs;
