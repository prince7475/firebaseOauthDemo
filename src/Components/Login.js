import React, { Component } from 'react'
import firebaseServer from '../config/fire';
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  onChangeHandler = (e) => {
    console.log("this is event name:", e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  SignUpHandler = (e) => {
    e.preventDefault();
    const db = firebaseServer.firestore();

    firebaseServer.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((response) => {
      db.collection("users").doc(response.user.uid).set({
        email: this.state.email
      })
    }).catch((e) => {
      console.log("error : ", e.message)
    })
  }

  LoginHandler = (e) => {
    firebaseServer.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((response) => {
      console.log("response", response)
    }).catch((e) => {
      console.log("error: ", e.message)
    })
    e.preventDefault();
    console.log("already a  user and loging in", this.state)
  }

  render() {
    return (
      <div>
        <p>Email : </p>
        <input name="email" type="email" placeholder="type your email here" onChange={this.onChangeHandler} value={this.state.email} />

        <p>Password : </p>
        <input name="password" type="email" placeholder="type your password here" onChange={this.onChangeHandler} value={this.state.passoword} />

        <div>
          <button onClick={this.LoginHandler}>Login</button>
        </div>

        <div>
          <button onClick={this.SignUpHandler}>Sign Up</button>
        </div>
      </div>
    )
  }
}
