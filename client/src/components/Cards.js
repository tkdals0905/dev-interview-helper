import React from 'react';

import Card from './Card';
import CardsContainner from '../styles/CardsStyle';

function Cards({ cardsInfo, handlePostCard }) {
  return (
    <CardsContainner>
      <button
        onClick={() => handlePostCard(true)}
        className="studyBtn"
        type="button"
      >
        문제 추가하기
      </button>
      {cardsInfo.map((cardInfo) => (
        <Card key={cardInfo.id} cardInfo={cardInfo} />
      ))}
    </CardsContainner>
  );
}

export default Cards;
