import React, { Component } from "react";
import styled from "styled-components";
import Recommendation from "./Recomendation";
import Artifical from "../../assets/elon-books/artificial.jpg";
import Einstain from "../../assets/elon-books/einstain.jpg";
import Foundation from "../../assets/elon-books/foundation.jpg";
import TheLord from "../../assets/elon-books/thelord.jpg";
import ElonImage from "../../assets/elon-books/elon.jpeg";

class ElonRecommendations extends Component {
  render() {
    return (
      <Container>
        <div className="bill">
          <div className="bill-img">
            <img src={ElonImage} />
          </div>
          <div className="title">
            <a style={{ fontSize: "30px", marginBottom: "25px" }}>
              Book Recommendations From Elon Musk That Will Advance Your
              Knowledge
            </a>
            <a style={{ fontSize: "17px" }}>
              Elon Musk, the mastermind behind SpaceX, Tesla, and Paypal is also
              passionate about reading. He credits most of his success to the
              books he read as both a child and as an adult. His family says
              that as a kid, he always had a book with him where ever he went.
              His mother told Tad Friend of The New Yorker, “Elon would
              accompany me to dinner parties if I didn’t have a date. I’d bring
              him to meet some interesting adults, and he’d hide a book under
              the table to read if they weren’t interesting enough.” His brother
              had a similar anecdote recalling that Musk would read up to two
              books in a day. Take it from one of the most successful people in
              tech and add these books Musk’s recommends to your Goodreads’
              list.
            </a>
          </div>
        </div>
        <div className="recommendations">
          <Recommendation img={Artifical} />
          <Recommendation img={Einstain} />
          <Recommendation img={Foundation} />
          <Recommendation img={TheLord} />
        </div>
      </Container>
    );
  }
}
export default ElonRecommendations;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;

  font-family: "Raleway", sans-serif;

  .bill {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 50px 30px;
    box-sizing: border-box;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    .bill-img {
      width: 30%;
      @media (max-width: 768px) {
        width: 80%;
      }

      img {
        width: 100%;
        border-top-left-radius: 30px;
        border-bottom-right-radius: 30px;
      }
    }
    .title {
      width: 60%;
      display: flex;
      flex-direction: column;
      @media (max-width: 768px) {
        width: 80%;
      }
    }
  }
  .recommendations {
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
`;
