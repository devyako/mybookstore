import React, { Component } from "react";
import styled from "styled-components";
import loginPic from "../assets/login.png";
import Aux from "../UI/Auxiliary";

class Login extends Component {
  render() {
    return (
      <Aux>
        <Backdrop onClick={this.props.clicked}></Backdrop>
        <LoginDiv>
          <div onClick={this.props.clicked} className="closer">
            x
          </div>
          <br />
          <br />
          <input type="text" placeholder="E-mail" />
          <br />
          <input type="text" placeholder="Password" />
          <div className="submit">
            <button>Submit</button>
          </div>
        </LoginDiv>
      </Aux>
    );
  }
}

export default Login;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const LoginDiv = styled.div`
  font-family: "Raleway", sans-serif;
  position: fixed;
  background-image: url(${loginPic});
  width: 550px;
  z-index: 300;
  height: 550px;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  overflow: hidden;
  padding: 25px;

  .closer {
    background-color: white;
    opacity: 0.6;
    left: 0;
    top: 0;
    width: 15px;
    cursor: pointer;
    border: 1px solid grey;
  }

  .mail {
    position: center bottom;
    font-size: 17px;
    padding: 5px;
  }

  .social {
    position: center bottom;
    font-size: 15px;
    padding: 5px;
  }

  input {
    padding: 5px;
    border: 1px solid #aaaaaa;
    border-radius: 5px;
    margin-bottom: 5px;
    width: 200px;
  }
  .submit {
    padding: 5px;
  }

  button {
    cursor: pointer;
    padding: 7px;
    width: 100px;
    background: rgb(149, 132, 255);
    background: linear-gradient(
      90deg,
      rgba(149, 132, 255, 1) 0%,
      rgba(255, 102, 196, 1) 100%
    );
    color: white;
    box-sizing: border-box;
    border: 2px solid white;
    border-radius: 20px;
  }

  button:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 102, 196, 1) 0%,
      rgba(149, 132, 255, 1) 100%
    );
  }

  .social-networks {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .facebook {
    width: 70px;
    border: 1px solid black;
    padding: 5px;
    border-right: none;
    background-color: #6077a8;
    color: white;
  }

  .google {
    width: 70px;
    border: 1px solid black;
    padding: 5px;
  }
`;
