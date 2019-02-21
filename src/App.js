import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebaseServer from "./config/fire"
import Login from './Components/Login';
import Home from './Components/Home';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    this.authListener();
  }
    authListener () {
      firebaseServer.auth().onAuthStateChanged((user) => {
        console.log(user)
        if(user){
          this.setState({user});
          localStorage.setItem('user', user.uid);
        }else {
          this.setState({user: null})
        }
      })
    }
  render() {
    return (
      <div className="App">
        {this.state.user ? <Home /> : <Login /> }

      </div>
    );
  }
}

export default App;
