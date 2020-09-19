import React, { Component } from "react";
import { Context } from "./Accp";

class X extends Component {
  render() {
    return <div>{this.context.count}</div>;
  }
}
// class定义的组件通过设置组件的contextType属性
X.contextType = Context;
export default X;
