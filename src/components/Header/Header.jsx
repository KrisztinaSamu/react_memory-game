import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
`;

const GameName = styled.div`
  width: 30%;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin: 0.2rem;
  }

  @media (max-width: 576px) {
    font-size: 0.6rem;
  }
`;

const GameDate = styled.div`
  width: 30%;
  display: inline-block;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const GameTimer = styled.div`
  border-right: 3px solid #3f51b5;
  border-left: 3px solid #3f51b5;
  padding: 0 4rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0.2rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 0 0.25rem;
  }
`;

export default function Header(props) {
  return (
    <>
      <HeaderWrapper>
        <GameName>
          <h1>{props.title}</h1>
        </GameName>
        <GameTimer>{props.time}</GameTimer>
        <GameDate>{props.date}</GameDate>
      </HeaderWrapper>
    </>
  );
}
