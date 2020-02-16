import React from "react";
import styled from "styled-components";

const navigation = () => {
  return (
    <NAVIGATION>
      <BUTTON>Blog</BUTTON>
      <BUTTON>About</BUTTON>
    </NAVIGATION>
  );
};

export default navigation;

const NAVIGATION = styled.div`
  position: absolute;
  padding: 10px;
  display: flex;
`;

const BUTTON = styled.div`
  margin-left: 5px;
  padding: 10px;
  border: 1px solidrgb(255, 255, 255);
  background: #ffd662;
  font-size: 13px;
  cursor: pointer;
  color: #a02828;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: 0.3s ease;

  :hover {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    color: white;
    transition: 0.3s ease;
  }
`;
