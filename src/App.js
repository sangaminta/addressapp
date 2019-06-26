import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import UserList from "./container/UserList";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          
          <Route exact path="/" component={UserList} />
        
        </Router>
      </div>
    );
  }
}

export default App;
