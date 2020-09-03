import React from "react";
import styled from "styled-components";

const recommendation = (props) => {
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
    box-shadow: 0px 0px 10px 5px rgba(112, 112, 112, 0.25);
    
    transition: 0.4s;
    :hover {
      transition: 0.3s;
      cursor: pointer;
      transform: scale(1.2);
      border-radius: 5px;
    }
  }

  .buttons {
    width: 10rem;
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      font-family: "Raleway", sans-serif;
      cursor: pointer;
      background: linear-gradient(90deg, #ef9d23 -0.77%, #f05959 97.68%);
      border-radius: 4px;
      border: transparent;
      padding: 10px;
      color: white;
      transition: 0.5s ease;
      box-sizing: border-box;

      :hover {
        transition: 0.5s ease;
        padding: 5px;
        box-shadow: 10px 10px 10px 2px rgba(239, 157, 35, 0.42);
      }
    }
    .amazon {
      cursor: pointer;
      background: linear-gradient(90deg, #f05959 -0.77%, #ef9d23 97.68%);
      border-radius: 4px;
      border: transparent;
      padding: 10px;
      color: white;
      transition: 0.5s ease;

      :hover {
        transition: 0.5s ease;
        box-shadow: 10px 10px 10px 2px rgba(239, 157, 35, 0.42);
      }
    }
  }
`;
