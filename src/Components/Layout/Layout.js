import React from "react";
import "./Layout.css";
import Girl from "../../assets/drawing.svg";
import Login from "./Login";
import TypingComponent from "../../UI/Typing/Typing";
import Navigation from "../../UI/Navigation";

class Layout extends React.Component {
  state = {
    show: false
  };

  backdropOff = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="background">
        <Navigation />

        <div className="flex-container">
          <div className="typing">
            <TypingComponent />
          </div>

          <div className="girl">
            <img className="vert-move" src={Girl} />
          </div>
        </div>

        <div className="login-container">
          {this.state.show ? <Login clicked={this.backdropOff} /> : null}
        </div>

        <div className="login-btn">
          <button onClick={() => this.setState({ show: true })}>Log IN</button>
          <button>Sign Up Now</button>
        </div>

        <div className="girl">
          <img className="vert-move" src={Girl} />
        </div>

        <div className="store-btn-div">
          <a href="#books">
            <button className="store-btn">BOOK STORE</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Layout;
