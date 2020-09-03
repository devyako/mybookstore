import React from "react";
import "./Layout.css";
import Girl from "../../assets/drawing.svg";
import Login from "../Login";
import TypingComponent from "../../UI/Typing/Typing";
import Navigation from "../../UI/Navigation";
import SignUp from "../SignUp";
import About from "../About";
import { Link as Scroll } from "react-scroll";

class Layout extends React.Component {
  state = {
    showLogin: false,
    showSignUp: false,
    showAbout: false,
  };

  backdropOff = () => {
    this.setState({ showLogin: false, showSignUp: false, showAbout: false });
  };

  render() {
    return (
      <div className="background">
        <Navigation aboutClicked={() => this.setState({ showAbout: true })} />

        <div className="flex-container">
          <div className="typing">
            <TypingComponent />
          </div>

          <div className="girl">
            <img className="vert-move" src={Girl} />
          </div>
        </div>

        <div className="login-container">
          {this.state.showLogin ? <Login clicked={this.backdropOff} /> : null}
        </div>

        <div className="login-container">
          {this.state.showSignUp ? <SignUp clicked={this.backdropOff} /> : null}
        </div>

        <div className="login-container">
          {this.state.showAbout ? <About clicked={this.backdropOff} /> : null}
        </div>

        <div className="login-btn">
          <button onClick={() => this.setState({ showLogin: true })}>
            Log IN
          </button>
          <button onClick={() => this.setState({ showSignUp: true })}>
            Sign Up
          </button>
        </div>

        <div className="girl">
          <img className="vert-move" src={Girl} />
        </div>

        <Scroll to="books" smooth={true} duration={1000} className="link">
          <div className="store-btn-div">
            <button className="store-btn">BOOK STORE</button>
          </div>
        </Scroll>
      </div>
    );
  }
}

export default Layout;
