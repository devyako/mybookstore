import React from "react";
import styled from "styled-components";

const recommendation = props => {
  return (
    <Container>
      <div className="txt-img">
        <img src={props.img} />
        <div className="buttons">
          <button>Download</button>
          <button className="amazon">Amazon</button>
        </div>
      </div>
    </Container>
  );
};

export default recommendation;

const Container = styled.div`
  .txt-img {
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
  }

  img {
    width: 125px;
    margin-bottom: 10px;
    box-sizing: border-box;
    -webkit-box-shadow: 10px 10px 10px 0px rgba(110, 102, 110, 0.52);
    -moz-box-shadow: 10px 10px 10px 0px rgba(110, 102, 110, 0.52);
    box-shadow: 10px 10px 10px 0px rgba(110, 102, 110, 0.52);

    transition: 0.4s;
    :hover {
      transition: 0.3s;
      cursor: pointer;
      transform: scale(1.2);
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    button {
      font-family: "Raleway", sans-serif;
      cursor: pointer;
      background: linear-gradient(90deg, #ef9d23 -0.77%, #f05959 97.68%);
      border-radius: 4px;
      border: transparent;
      padding: 5px;
      color: white;
      margin-left: 5px;

      :hover {
        background: linear-gradient(90deg, #f05959 -0.77%, #ef9d23 97.68%);
      }
    }
    .amazon {
      cursor: pointer;
      background: linear-gradient(90deg, #f05959 -0.77%, #ef9d23 97.68%);
      border-radius: 4px;
      border: transparent;
      padding: 5px;
      color: white;
      margin-left: 5px;

      :hover {
        background: linear-gradient(90deg, #ef9d23 -0.77%, #f05959 97.68%);
      }
    }
  }
`;
