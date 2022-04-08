import React from 'react';
import Card from './Card';
import CardsContainner from '../styles/CardsStyle';

function ShareCards({ cardsInfo }) {
  return (
    <CardsContainner>
      <button className="studyBtn" type="button">
        학습하러 가기
      </button>
      {cardsInfo.map((cardInfo) => (
        <Card key={cardInfo.id} cardInfo={cardInfo} />
      ))}
    </CardsContainner>
  );
}

export default ShareCards;
