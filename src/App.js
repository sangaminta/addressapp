import React, { Component } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Home from './container/Home' ;
import UserList from './container/UserList';
import User from './container/User'
import {BrowserRouter as Router, Route} from 'react-router-dom'
class App extends Component {
  render() {
  return (
    <div>
    <Router>
       <Route exact path="/" component={Home}/>
       <Route exact path="/userlist" component={UserList} />
       <Route exact path="/userlist/user" component={User} />
    </Router>
  </div>
  )};
}

export default App;




