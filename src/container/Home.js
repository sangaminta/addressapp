import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/home.scss";
export default class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          {/* <Link to={"/"} className="home">
            Home
          </Link> */}
          <Link to={"/"} className="userlist">
            UserList
          </Link>
        </nav>
        <h1>Hello From Home Page...</h1>
      </div>
    );
  }
}
