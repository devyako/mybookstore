import React, { Component } from "react";
import styled from "styled-components";
import Recommendation from "./Recomendation";
import WhyWeSleep from "../../assets/bill-books/whywesleep.jpg";
import TheseTruth from "../../assets/bill-books/thesetruths.jpg";
import Prepared from "../../assets/bill-books/prepared.jpg";
import American from "../../assets/bill-books/american.jpg";
import BillImage from "../../assets/bill.jpg";

class BillRecommendations extends Component {
  render() {
    return (
      <Container id="books">
        <div className="bill">
          <div className="bill-img">
            <img src={BillImage} />
          </div>
          <div className="title">
            <a style={{ fontSize: "30px", marginBottom: "25px" }}>
              Bill Gates: Read These 5 Books to Get 2020 Off to a Good Start
            </a>
            <a style={{ fontSize: "17px" }}>
              For a healthier, smarter, and richer 2020, Bill Gates is
              recommending five books on topics including history, education,
              and personal health. The 64-year-old billionaire philanthropist
              posted his year-end book list on his blog, GatesNotes, earlier
              this month. In recommending Matthew Walker’s book, Why We Sleep,
              Gates says: “Walker has persuaded me to change my bedtime habits
              to up my chances. If your New Year’s resolution is to be healthier
              in 2020, his advice is a good place to start.” Gates, who has a
              net worth of $108.3 billion by Forbes’ real-time estimates, has
              been a voracious reader from a young age. He reads about 50 books
              a year and frequently updates his book reviews on his blog.
            </a>
          </div>
        </div>
        <div className="recommendations">
          <Recommendation img={WhyWeSleep} />
          <Recommendation img={TheseTruth} />
          <Recommendation img={Prepared} />
          <Recommendation img={American} />
        </div>
      </Container>
    );
  }
}
export default BillRecommendations;

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
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
`;
