import React, { Component } from "react";
import { Link } from "react-router-dom";
import Firebase from "../../../firebase";


class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // event.target.value

    let value = event.target.value; //input value
    let name = event.target.name; //name  //email or password

    this.setState({
      [name]: value, //storing email & password 
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    //firebase email pass login function
    Firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(async (userCredentials) => {
        //success
        console.log(userCredentials);
      })
      .catch((error) => {
        //error
        
        alert(error.code); //popup
      });
  }

  render() {
    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange} //
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/" className="formFieldLink">
              Create an account
            </Link>
          </div>

          <div className="error_response">{this.state.error}</div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
