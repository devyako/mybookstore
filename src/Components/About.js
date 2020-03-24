import React, { Component } from "react";
import styled from "styled-components";
import Aux from "../UI/Auxiliary";
import Me from "../assets/me.png";

import Facebook from "../assets/social-media-logos/facebook.png";
import Gmail from "../assets/social-media-logos/gmail.jpg";
import LinkedIn from "../assets/social-media-logos/linkedin.png";

import BlogWeb from "../assets/blog-web.svg";
import BookWeb from "../assets/book-web.svg";

class About extends Component {
  render() {
    return (
      <Aux>
        <Backdrop onClick={this.props.clicked}></Backdrop>
        <LoginDiv>
          <div onClick={this.props.clicked} className="closer">
            x
          </div>
          <div className="about-dev">
            <div className="about">
              <div className="author-img">
                <img src={Me} />
              </div>
              Hello, My name is Yakhyo.
              <br />
              I am currently a second year computer science major at Sejong
              University in Seoul.
              <br />
              I really enjoy building web applications and designing user
              interfaces. I created this website using ReactJs and Styled
              Components. I reserched alot and uploaded very usefull books.
              Enjoy!!!
              <br />
              You can find more about me on this web site.
              <br />
              My other projects.
              <br />
              <img style={{ width: "200px" }} src={BlogWeb} />
              <img style={{ width: "200px" }} src={BookWeb} />
              <br />
              If you want to connect or contact me, the links are below.
              <br />
              <img style={{ width: "129px", height: "49px" }} src={Facebook} />
              <img style={{ width: "74px", height: "50px" }} src={Gmail} />
              <img style={{ width: "153px", height: "37px" }} src={LinkedIn} />
              <br />
              Thank you !
            </div>
          </div>
        </LoginDiv>
      </Aux>
    );
  }
}

export default About;

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
  background: linear-gradient(180.14deg, #ffffff 0.13%, #eeeeee 99.87%);
  width: 700px;
  z-index: 300;
  height: 700px;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .closer {
    background-color: white;
    opacity: 0.6;
    left: 0;
    top: 0;
    width: 15px;
    cursor: pointer;
    border: 1px solid grey;
  }

  .about-dev {
    align-items: center;
    .about {
      width: 100%;
      align-items: center;
    }
    .author-img {
      img {
        width: 20%;
        border-radius: 30px;
      }
    }
  }
`;
