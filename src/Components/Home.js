import React, { Component } from 'react'
import firebaseServer from '../config/fire';

export default class Home extends Component {
  Logout = (e) => {
    firebaseServer.auth().signOut();
  }
  render() {
    return (
      <div>
        <h3>This is home</h3>
        <button onClick={this.Logout}>Log out</button>
      </div>
    )
  }
}
