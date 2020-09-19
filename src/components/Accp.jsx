import React, { createContext, useState } from "react";

export const Context = createContext(); //创建一个上下文对象
const { Provider } = Context; //Provider叫数据提供者

// 高阶组件||组件封装
const Accp = (props) => {
  const { children } = props;
  const [count, setCount] = useState(2);
  return <Provider value={{ count, sc: setCount }}>{children}</Provider>;
};

export default Accp;
