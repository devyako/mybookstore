import React from "react";
import styled from "styled-components";

const book = props => {
  return (
    <Container id="books" className="book">
      <img src={props.img} />
      <div className="book-title">{props.title}</div>
      <div className="book-auth">{props.auth}</div>
    </Container>
  );
};

export default book;

const Container = styled.div`
  cursor: pointer;
  width: 180px;
  background-color: #f7f7f7;
  border: 2px solid #c5c5c5; 

  img {
    width: 100%;
    object-fit: cover;
  }

  img:hover {
    opacity: 0.7;
    transition: 0.3s ease;
  }

  .book-title {
    text-align: center;
    font-size: 17px;
  }

  .book-auth {
    text-align: center;
  }
`;
