import React from "react";
import book1 from "../../assets/book2.jpg";
import Book from "./Book";
import styled from "styled-components";

const books = () => {
  return (
    <Container>
      <BooksContainer>
        <Book img={book1} title="Maqsad" auth="Shaha Dolimov" />
        <Book img={book1} title="Maqsad" auth="Shaha Dolimov" />
        <Book img={book1} title="Maqsad" auth="Shaha Dolimov" />
        <Book img={book1} title="Maqsad" auth="Shaha Dolimov" />
        <Book img={book1} title="Maqsad" auth="Shaha Dolimov" />
         
         
         
         
      </BooksContainer>
    </Container>
  );
};

export default books;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BooksContainer = styled.div`
  width: 80%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
