import React, { Component } from "react";
import { loadlist } from "../services/movies";

export default class MoviesC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      page: 1,
    };
  }
  componentDidMount() {
    // loadlist(this.state.page).then((res) => {
    //   this.setState({ list: res.data.data.list, page: this.state.page + 1 });
    // });
    this.loaddata();
  }
  loaddata() {
    loadlist(this.state.page).then((res) => {
      this.setState({
        list: [...this.state.list, ...res.data.data.list],
        page: this.state.page + 1,
      });
    });
  }
  render() {
    return (
      <ul>
        {this.state.list.map((item) => (
          <li key={item.albumId}>{item.name}</li>
        ))}
        <li>
          <button
            onClick={() => {
              // loadlist(this.state.page).then((res) => {
              //   this.setState({
              //     list: [...this.state.list, ...res.data.data.list],
              //     page: this.state.page + 1,
              //   });
              // });
              this.loaddata();
            }}
          >
            加载更多
          </button>
        </li>
      </ul>
    );
  }
}
