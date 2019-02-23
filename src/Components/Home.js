import React, { Component } from 'react'
import firebaseServer from '../config/fire';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userid: "",
      email: ""
    }
  }
  Logout = (e) => {
    firebaseServer.auth().signOut();
  }
  async componentDidMount() {
    const db = firebaseServer.firestore();

    firebaseServer.auth().onAuthStateChanged((user) => {

      var docRef = db.collection("users").doc(user.uid);
      docRef.get().then(function (doc) {
        if (doc.exists) {
          let email = doc.data().email
          return email
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).then((response) => {
        console.log("this is the result :" + response)
        this.setState({
          email: response
        })
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });


    })


  }
  render() {
    return (
      <div>
        <h3>This is home {this.state.email}</h3>
        <button onClick={this.Logout}>Log out</button>
      </div>
    )
  }
}
