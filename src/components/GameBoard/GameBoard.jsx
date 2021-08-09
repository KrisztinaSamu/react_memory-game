import React from "react";
import Card from "../Card/Card";
import styled from "styled-components";

const Gameboard = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: 70vh;
`;

export default function GameBoard({
  cards,
  openCard,
  matched,
  handleFlip,
  isActive,
}) {
  return (
    <Gameboard>
      {cards.map(({ img, id }, index) => {
        //kártyalap megfordítása css-sel
        let flipCard;
        flipCard = false;
        if (isActive) {
          if (openCard.includes(index)) {
            flipCard = true;
          } else if (matched.includes(id)) {
            flipCard = true;
          }
        }

        return (
          <Card
            key={index}
            id={id}
            img={img}
            className={`memo-card ${flipCard ? "flipped" : ""}`}
            isActive={isActive}
            onClick={() => handleFlip(index)}
          />
        );
      })}
    </Gameboard>
  );
}
